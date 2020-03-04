import React from "react";
import AppointmentComponent from "../Appointment/AppointmentComponent";
import SearchAutoCompleteComponent from "./SearchAutoCompleteComponent";
import AppHistory from '../App/AppHistory';

class HomeComponent extends React.Component {

    render() {
        return (<div className='Home-component'>
            <header className="app-title">
                Welcome to DENTOCARE App with Dhrumil..
            </header>
            <AppointmentComponent {...this.props} />
            <div className='Home-right-section'>
                <button className='Add-pat-btn'
                    onClick={() => AppHistory.push('/PatientDetail')}> Add New Patient </button>
                <SearchAutoCompleteComponent patData={this.props.coreData.map(patient => patient.Name)} />
                <button className='Open-pat-btn'
                    onClick={() => AppHistory.push('/PatientDetail')}> Open </button>
            </div>
        </div>);
    }
}
export default HomeComponent;