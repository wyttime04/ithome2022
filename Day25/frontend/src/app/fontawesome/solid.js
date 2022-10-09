import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faTrash,
    faTimes,
} from '@fortawesome/free-solid-svg-icons'

export default function solid() {
    library.add(
        faTrash,
        faTimes,
    )
}