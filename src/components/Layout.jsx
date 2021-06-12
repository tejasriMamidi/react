import React from 'react';
import Nav from './Nav';

function Layout(props) {
    return (
        <div>
            <header>
            <Nav />
                
            </header>
            <main>
                { props.children}
            </main>
             
        </div>
    )
}

export default Layout
