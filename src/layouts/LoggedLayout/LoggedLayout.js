import React from 'react';
import { TopBar } from "../../components/Layout"
import "./LoggedLayout.scss";

export function LoggedLayout(props) {
    const { children } = props
    return (
        <div className='logged-layout'>
            <div className='logged-layout__content'>

                <div className='logged-layout__children-content'>
                    <div className='logged-layout__top-bar'>
                        <TopBar />
                    </div>

                    <div>
                        {children}
                    </div>
                </div>


            </div>

        </div>
    )
}
