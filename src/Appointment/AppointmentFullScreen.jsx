import React from "react";
import AppointmentRowComponent from "./AppointmentRowComponent";

class AppointmentFullScreen extends React.Component {

    render() {
        return (<div className='Appointment-full-screen'> Appointment FUll Screen COMPONENT
            {this.props.coreData.map(patientData =>
                patientData.Appointments.map(appointment =>
                    <AppointmentRowComponent patData={patientData} apntData={appointment}/>)
            )}

        </div>);
    }
}

export default AppointmentFullScreen;