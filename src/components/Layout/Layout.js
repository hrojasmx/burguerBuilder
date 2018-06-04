// import React from 'react';
import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

/*
const layout = ( props ) => (
    <Aux>
        {/* <div>Toolbar, SideDrawer, Backdrop</div>  * / }
        <Toolbar />

        <SideDrawer />

        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);
*/

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    };

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    };


    render() {
        return (
            <Aux>
                {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
                {/* <Toolbar/> */}
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />

                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;