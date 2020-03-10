import React from "react";
import AppointmentRowComponent from "./AppointmentRowComponent";

class AppointmentComponent extends React.Component {

    render() {
        return (<div className='Appointment-component'> Appointment COMPONENT
            {this.props.coreData.map(patientData =>
                patientData.Appointments.map(appointment =>
                    <AppointmentRowComponent key={patientData.ID+appointment.AptNum}patData={patientData} apntData={appointment}/>)
            )}

        </div>);
    }
}

export default AppointmentComponent;