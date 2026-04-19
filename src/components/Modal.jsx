import { createPortal } from "react-dom"
import { useImperativeHandle, useRef } from "react"

export default function Modal({ ref, children }){
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className="rounded-lg sm:w-[70%] w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {children}
        </dialog>,
   
        document.getElementById("modal"),
)
}