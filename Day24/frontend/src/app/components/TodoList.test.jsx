import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { expect, jest, test } from '@jest/globals';
import TodoList, { Content, AddListItem, ListBoard } from './TodoList'
import InitFontawesome from '../fontawesome'
InitFontawesome()

describe('測試 TodoList', () => {
    test('輸入 Item Name 及新增按鈕', () => {
        const AddItem = jest.fn()
        const utils = render(<AddListItem AddItem={AddItem} />)

        const itemInput = utils.getByLabelText('Item-Name')
        const text = "Item-Text-1"
        fireEvent.change(itemInput, { target: { value: text } })
        expect(itemInput.value).toEqual(text)

        const itemButton = utils.getByText('新增')
        fireEvent.click(itemButton)
        expect(AddItem).toHaveBeenCalledWith(text)
        expect(itemInput.value).toBe("")
    })

    test('測試顯示 Item 數量', () => {
        const counts = 10
        const Todos = Array.from(Array(counts), (v, i) => `Item-Text-${i}`)
        const utils = render(<ListBoard Todos={Todos} DeleteItem={() => { }} />)

        expect(utils.getAllByText(/Item-Text-/i)).toHaveLength(counts)
        expect(utils.getAllByTitle('刪除')).toHaveLength(counts)
    })

    test('刪除 Item 按鈕', () => {
        const counts = 10, deleted = 2

        const Todos = Array.from(Array(counts), (v, i) => `Item-Text-${i}`)
        const DeleteItem = jest.fn()
        const utils = render(<ListBoard DeleteItem={DeleteItem} Todos={Todos} />)

        const deleteButton = utils.getAllByTitle('刪除')
        expect(deleteButton).toHaveLength(counts)

        fireEvent.click(deleteButton[deleted])
        expect(DeleteItem).toHaveBeenCalledTimes(1)
        expect(DeleteItem).toHaveBeenCalledWith(deleted)
    })

    test('整合測試新增及刪除', () => {
        const utils = render(<TodoList get_todolist={() => { }} />)

        const itemInput = utils.getByLabelText('Item-Name')
        const text = "Item-Text-1"
        fireEvent.change(itemInput, { target: { value: text } })

        const itemButton = utils.getByText('新增')
        fireEvent.click(itemButton)

        expect(screen.getByText(text)).toBeInTheDocument()

        const item = utils.getByText(text).closest('li')
        const deleteButton = item.querySelector('button[title="刪除"]')

        fireEvent.click(deleteButton)
        expect(item).not.toBeInTheDocument()
    })

    test('送出 Todo List 按鈕', () => {
        const counts = 10
        const Todos = Array.from(Array(counts), (v, i) => `Item-Text-${i}`),
            onSubmit = jest.fn()
        const utils = render(<Content Todos={Todos} AddItem={() => { }} DeleteItem={() => { }} onSubmit={onSubmit} />)

        const submitButton = utils.getByText('送出')
        fireEvent.click(submitButton)
        expect(onSubmit).toHaveBeenCalledWith(Todos)
    })
})