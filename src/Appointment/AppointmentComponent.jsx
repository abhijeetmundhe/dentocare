import React from "react";
import AppointmentRowComponent from "./AppointmentRowComponent";

class AppointmentComponent extends React.Component {

    render() {
        return (<div className='Appointment-component'> Appointment COMPONENT
            <p> sample data = {this.props.coreData[0].Name}</p>
            {this.props.coreData.map(patientData =>
                patientData.Appointments.map(appointment =>
                    <AppointmentRowComponent patData={patientData} apntData={appointment}/>)
            )}

        </div>);
    }
}

export default AppointmentComponent;