import React from 'react'
import Nav from '../nav/nav'


export default function layout( {children} ) {
    return (
        <div>
            <Nav/>
            { children } 
        </div>
    )
}
