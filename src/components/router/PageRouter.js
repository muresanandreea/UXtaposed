import React, {memo} from 'react';
import {Switch, Route, Link} from "react-router-dom";
import {Homepage} from "../../Homepage/Homepage";
import {About} from "../../AboutUs/AboutUs";
import {Portfolio} from "../../Portfolio/Portfolio";

export const PageRouter = memo(props => {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/portfolio">
                <Portfolio/>
            </Route>
        </Switch>
    )
})