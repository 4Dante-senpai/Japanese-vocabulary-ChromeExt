import React, { ReactNode } from 'react'
import "../styles/layout.css"

type Props = {
    children: ReactNode;
};

const Layout = ( {children}:Props ) => {
    return (
        <div className='Layout'>
            {children}
        </div>
    )
}

export default Layout;