import React from 'react';
import AppHistory from '../App/AppHistory';
import { dateFormatOption, timeFormatOption } from '../Constants';

class AppointmentRowComponent extends React.Component {

    render() {
        return (<div className='Appointment-row'>
            <div className='Apt-row-Date'>
                <div> {new Date(this.props.apntData.AptDateTime).toLocaleDateString('en-US', dateFormatOption)}</div>
                <div> {new Date(this.props.apntData.AptDateTime).toLocaleTimeString('en-US', timeFormatOption)}</div>
            </div>
            <div className='Apt-row-Name'>
                <div> {this.props.patData.Name} </div>
                <div> {this.props.patData.Phone} </div>
            </div>
            <div className='Apt-row-Work'> {this.props.apntData.NextWorkToBeDone}</div>
            <button className='Apt-row-Open'
                onClick={
                    () =>
                        AppHistory.push({
                            pathname: '/PatientDetail',
                            state: { selectedPatData: this.props.patData }
                        })}> Open
                     </button>
        </div>);
    }
}
export default AppointmentRowComponent;