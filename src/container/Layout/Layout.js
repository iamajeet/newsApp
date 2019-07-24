import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import '../Toolbar/Toolbar';
import Toolbar from '../Toolbar/Toolbar';
import Footer from '../Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar {...this.props} />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        );
    }
}



export default Layout;