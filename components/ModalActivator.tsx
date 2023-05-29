import React, { useState } from "react"
import BaseModal from "./BaseModal"

interface ActivatorProps {
    Activator: (props: any) => JSX.Element,
    Content: () => JSX.Element
}

export default function ModalActivator ({Activator, Content}: ActivatorProps) {
    const [contentActive, setContentActive] = useState(false)

    return (
        <div>
            <Activator onClick={() => setContentActive(!contentActive)} />
            {contentActive && <BaseModal handleClose={() => setContentActive(false)} open={contentActive}><Content /></BaseModal>}
        </div>
    )
}