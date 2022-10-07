import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        const { text, textcolor, dotcolor, width, justify } = this.props
        let textClass = `dot-text-${textcolor || "default"}`
        let dotClass = `dot-${dotcolor || "default"} dot-width-${width || 2}`
        let jc = (() => {
            switch (justify) {
                case 'center':
                    return "jcc"
                case 'start':
                    return "jcs"
                case 'end':
                    return "jce"
                default:
                    return "jcc"
            }
        })()
        return (
            <div className={`flex aic ${jc}`}>
                {
                    !!text ?
                        <span className={textClass}>{text}</span>
                        : null
                }
                <div className="loading">
                    <span className={dotClass} style={{ '--i': 1 }}></span>
                    <span className={dotClass} style={{ '--i': 2 }}></span>
                    <span className={dotClass} style={{ '--i': 3 }}></span>
                </div>
            </div>
        )
    }
}
