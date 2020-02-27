import React from "react";
import AppHistory from '../App/AppHistory';

class AppointmentRowComponent extends React.Component {

    render() {
        return (<div className='Appointment-row'>
            <div className='Apt-row-Date'>
            <div> {this.props.apntData.NextAptDate}</div>
            <div> {this.props.apntData.NextAptTime} </div>
            </div>
            <div className='Apt-row-Name'>
                <div> {this.props.patData.Name} </div>  
                <div> {this.props.patData.Phone} </div>
            </div>
            <div className='Apt-row-Work'> {this.props.apntData.NextWorkToBeDone}</div>
            <button className='Apt-row-Open'
            onClick={() => AppHistory.push('/PatientDetail')}> Open </button>
        </div>);
    }
}
export default AppointmentRowComponent;