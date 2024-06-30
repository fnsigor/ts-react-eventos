import React from 'react'
import { Spin as AntSpin } from "antd";
import sytle from './component.module.scss' 

const Spin = () => {
    return (
        <AntSpin className={sytle.component}/>
    )
}

export default React.memo(Spin)
