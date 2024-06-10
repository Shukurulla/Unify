import { useState } from 'react'
import { WaiterPreviewContext } from './WaiterPreviewContext'

const WaiterPreviewContextProvider = ({ children }) => {
    const [waiterCardPreview, setWaiterCardPreview] = useState(null)

    return (
        <WaiterPreviewContext.Provider value={{waiterCardPreview, setWaiterCardPreview}}>
            { children }
        </WaiterPreviewContext.Provider>
    )
}

export default WaiterPreviewContextProvider