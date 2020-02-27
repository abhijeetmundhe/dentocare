import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import AppointmentFullScreen from '../Appointment/AppointmentFullScreen';
import PatientDetailComponent from '../PatientDetail/PatientDetailComponent';
import Home from "../Home/HomeComponent";
import AppHistory from './AppHistory';

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={AppHistory}>
                <Switch>

                    <Route path="/" exact 
                     render={(props) => <Home {...props} coreData={this.props.data} />} />

                    <Route path="/Appointments" 
                    render={(props) => <AppointmentFullScreen {...props} coreData={this.props.data} />} />

                    <Route path="/PatientDetail" component={PatientDetailComponent} />
                    
                </Switch>
            </Router>
        )
    }
}