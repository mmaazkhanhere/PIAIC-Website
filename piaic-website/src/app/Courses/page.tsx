import React from 'react'
import AI from './AI/page'
import Network from './Network/page'
import Cloud from './Cloud/page'
import Web3 from './Blockchain/page'
import IoT from './IoT/page'


export default function Courses() {
    return (
        <div>
            <AI />
            <Web3 />
            <Network />
            <Cloud />
            <IoT />
        </div>
    )
}
