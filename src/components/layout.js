import React from 'react';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';

class Layout extends React.Component {
    render(){
        return(
            <div className="container">
                <Header />
                <Content />
                <Sidebar />
            </div>
        )
    }
}

export default Layout;