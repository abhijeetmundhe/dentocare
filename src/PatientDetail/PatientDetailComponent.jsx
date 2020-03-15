import React from "react";
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import Collapsible from 'react-collapsible';
import MenuItem from '@material-ui/core/MenuItem';
import PatientApptRow from './PatientApptRow';
import * as CONST from '../Constants';

class PatientDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMedicalExpanded: true,
            isAppointmentExpanded: true,
            patientData: {
                id: "",
                Name: "",
                Age: 0,
                Sex: "Male",
                Phone: "",
                TotalPayableAmount: 0,
                Medical: {
                    MedicalHistory: "",
                    CO: "",
                    OE: "",
                    OEGrandTotalEstimate: 0
                },
                Appointments: [
                    {
                        AptNum: 1,
                        AptDate: "26-02-2020",
                        AptTime: "19:00",
                        WorkDone: "",
                        PaymentReceived: 2000,
                        NextAptDate: "23-02-2020",
                        NextAptTime: "18:30",
                        NextWorkToBeDone: ""
                    }
                    // '2020-03-15T21:30:00'
                ]
            }
        }
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleMedicalTriggerClick = this.handleMedicalTriggerClick.bind(this);
        this.handleAppointmentTriggerClick = this.handleAppointmentTriggerClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handlePatientDataChange = this.handlePatientDataChange.bind(this);
    }
    render() {
        return (<div className='patients-detail-parent'>
            <form onSubmit={this.handleSaveClick}>
                <div style={{ margin: '15px' }}>
                    <TextField id="Name" label="Name" variant="outlined" required
                        onChange={this.handlePatientDataChange}
                        style={{ marginLeft: '10px', marginRight: '10px', width: '280px' }} />
                    <TextField id="Phone" label="Phone" variant="outlined" type="number" required
                        onChange={this.handlePatientDataChange}
                        style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <TextField id="Sex" select label="Gender" variant="outlined" value={this.state.patientData.Sex}
                        style={{ marginLeft: '10px', marginRight: '10px', width: '105px' }}
                        onChange={this.handleGenderChange} >
                        {CONST.genderProvider.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="Age" label="Age" variant="outlined" type="number" required
                        onChange={this.handlePatientDataChange}
                        style={{ marginLeft: '10px', marginRight: '40px', width: '90px' }} />
                    <TextField id="TotalPayableAmount" label="Total Payable Amount" variant="outlined" type="number" required
                        onChange={this.handlePatientDataChange}
                        style={{ marginLeft: '10px', marginRight: '10px', width: '210px' }} />
                    <TextField id="OutstandingAmount" label="Outstanding Amount" variant="outlined" type="number" disabled
                        style={{ marginLeft: '10px', marginRight: '10px', width: '190px' }} />
                </div>
                <Collapsible trigger="Medical History" open={this.state.isMedicalExpanded}
                    handleTriggerClick={this.handleMedicalTriggerClick}>
                    <div style={{ height: this.state.isAppointmentExpanded ? '100px' : '400px', overflow: 'auto' }}>
                        <TextField id="CO" label="CO" multiline variant="outlined"
                            style={{ margin: '10px', width: '27%' }}
                        />
                        <TextField id="OE" label="OE" multiline variant="outlined"
                            style={{ margin: '10px', width: '25%' }}
                        />
                        <TextField id="MedicalHistory" multiline label="Medical History" variant="outlined"
                            style={{ margin: '10px', width: '27%' }}
                        />
                        <TextField id="OEGrandTotalEstimate" label="OE Total Estimate" variant="outlined" type="number"
                            style={{ margin: '10px', width: '155px' }}
                        />
                    </div>
                </Collapsible>
                <Collapsible trigger="Appointments" open={this.state.isAppointmentExpanded}
                    handleTriggerClick={this.handleAppointmentTriggerClick}>
                    <div style={{ height: this.state.isMedicalExpanded ? '300px' : '400px', overflow: 'auto' }}>
                        {/* {this.props.coreData.map(patientData =>
                            patientData.Appointments.map(appointment =>
                                <PatientApptRow key={patientData.ID + appointment.AptNum} patData={patientData} apntData={appointment} />)
                        )} */}
                        <PatientApptRow apptData={{ apptNum: 1 }} />
                        <PatientApptRow apptData={{ apptNum: 2 }} />
                    </div>
                </Collapsible>
                <div style={{ display: 'block', background: 'floralwhite', height: '45px' }}>
                    <button
                        style={{ margin: '4px', height: '85%', width: '30%', fontSize: '20px', background: 'lightseagreen' }}>
                        Save</button>
                </div>
            </form>
        </div>);
    }

    handleMedicalTriggerClick = () => {
        this.setState({ isMedicalExpanded: !this.state.isMedicalExpanded });
    };

    handleAppointmentTriggerClick = () => {
        this.setState({ isAppointmentExpanded: !this.state.isAppointmentExpanded });
    };

    handleGenderChange = event => {
        this.setState({ patientData: { ...this.state.patientData, Sex: event.target.value } });
    };

    handleSaveClick = event => {
        event.preventDefault();
        this.postSavePatientData();
    };

    testData = {
        id: "4",
        Name: "Pat4",
        Age: 32,
        Sex: "Female",
        Phone: "9028614461",
        TotalPayableAmount: 5000,
        Medical: {
            MedicalHistory: "Temp2 Medical History",
            CO: "Temp2 compliant of",
            OE: "Temp2 On examination",
            OEGrandTotalEstimate: 15000
        },
        Appointments: [
            {
                AptNum: 1,
                AptDate: "26-02-2020",
                AptTime: "19:00",
                WorkDone: "work2 done today",
                PaymentReceived: 2000,
                NextAptDate: "23-02-2020",
                NextAptTime: "18:30",
                NextWorkToBeDone: "work2 to be done In next appt"
            }
        ]
    };
    postSavePatientData = () => {
        console.log('**** posting save');
        fetch(CONST.PROXY_URL + CONST.ADD_UPDATE_PATIENT_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.testData)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('**** result = ', result);
                    // this.setState({
                    //     data: result.Items
                    // });
                },
                (error) => {
                    console.log('**** err = ', error);
                    // this.setState({
                    //     error
                    // });
                }
            )
    }

    handlePatientDataChange = event => {
        switch (event.target.id) {
            case 'Name':
                this.setState({ patientData: { ...this.state.patientData, Name: event.target.value } });
                break;
            case 'Phone':
                this.setState({ patientData: { ...this.state.patientData, Phone: event.target.value } });
                break;
            case 'Age':
                this.setState({ patientData: { ...this.state.patientData, Age: event.target.value } });
                break;
            case 'TotalPayableAmount':
                this.setState({ patientData: { ...this.state.patientData, TotalPayableAmount: Number(event.target.value) } });
                break;
            default:
                break;
        }
    };
}

export default PatientDetailComponent;