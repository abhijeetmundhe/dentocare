import React from 'react';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import Collapsible from 'react-collapsible';
import MenuItem from '@material-ui/core/MenuItem';
import PatientApptRow from './PatientApptRow';
import * as CONST from '../Constants';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import LoadingOverlay from 'react-loading-overlay';

class PatientDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMedicalExpanded: true,
            isAppointmentExpanded: true,
            loading: false,
            isSaveSuccess: false,
            isSaveError: false,
            patientData: props.location.state && props.location.state.selectedPatData ?
                props.location.state.selectedPatData : {
                    id: '',
                    Name: '',
                    Age: '30',
                    Sex: 'Male',
                    Phone: '',
                    TotalPayableAmount: '',
                    OutstandingAmount: 0,
                    Medical: {
                        MedicalHistory: ' ',
                        CO: ' ',
                        OE: ' ',
                        OEGrandTotalEstimate: 0
                    },
                    Appointments: [
                        {
                            AptNum: 1,
                            WorkDone: ' ',
                            PaymentReceived: '0',
                            NextWorkToBeDone: ' ',
                            AptDateTime: new Date().toISOString()
                        }
                    ]
                }
        }
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleMedicalTriggerClick = this.handleMedicalTriggerClick.bind(this);
        this.handleAppointmentTriggerClick = this.handleAppointmentTriggerClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handlePatientDataChange = this.handlePatientDataChange.bind(this);
        this.handleAppointmentRowChange = this.handleAppointmentRowChange.bind(this);
        this.addAppointmentRow = this.addAppointmentRow.bind(this);
        this.calculateOutstandingAmount = this.calculateOutstandingAmount.bind(this);
    }
    render() {
        return (<div className='patients-detail-parent'>
            <LoadingOverlay
                active={this.state.loading}
                spinner
                text='Saving...'>
                <Snackbar open={this.state.isSaveSuccess} autoHideDuration={3000} onClose={this.handleAlertClose}>
                    <Alert severity="success">
                        Data saved successfully!
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.isSaveError} onClose={this.handleAlertClose}>
                    <Alert severity="error">
                        Error while saving data!
                    </Alert>
                </Snackbar>
                <form onSubmit={this.handleSaveClick}>
                    <div style={{ margin: '15px' }}>
                        <TextField id='Name' label='Name' variant='outlined' required
                            value={this.state.patientData.Name}
                            onChange={this.handlePatientDataChange}
                            style={{ marginLeft: '10px', marginRight: '10px', width: '280px' }} />
                        <TextField id='Phone' label='Phone' variant='outlined' type='number' required
                            value={this.state.patientData.Phone}
                            onChange={this.handlePatientDataChange}
                            style={{ marginLeft: '10px', marginRight: '10px' }} />
                        <TextField id='Sex' select label='Gender' variant='outlined'
                            value={this.state.patientData.Sex}
                            style={{ marginLeft: '10px', marginRight: '10px', width: '105px' }}
                            onChange={this.handleGenderChange} >
                            {CONST.genderProvider.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id='Age' label='Age' variant='outlined' type='number' required
                            value={this.state.patientData.Age}
                            onChange={this.handlePatientDataChange}
                            style={{ marginLeft: '10px', marginRight: '40px', width: '90px' }} />
                        <TextField id='TotalPayableAmount' label='Total Payable Amount' variant='outlined'
                            value={this.state.patientData.TotalPayableAmount}
                            type='number' required
                            onChange={this.handlePatientDataChange}
                            style={{ marginLeft: '10px', marginRight: '10px', width: '210px' }} />
                        <TextField id='OutstandingAmount' label='Outstanding Amount' variant='outlined'
                            value={this.state.patientData.OutstandingAmount}
                            type='number' disabled
                            style={{ marginLeft: '10px', marginRight: '10px', width: '190px' }} />
                    </div>
                    <Collapsible trigger='Medical History' open={this.state.isMedicalExpanded}
                        handleTriggerClick={this.handleMedicalTriggerClick}>
                        <div style={{
                            height: this.state.isAppointmentExpanded ? '100px' : '400px',
                            overflow: 'auto'
                        }}>
                            <TextField id='CO' label='CO' multiline variant='outlined'
                                value={this.state.patientData.Medical.CO}
                                onChange={this.handlePatientDataChange}
                                style={{ margin: '10px', width: '27%' }}
                            />
                            <TextField id='OE' label='OE' multiline variant='outlined'
                                value={this.state.patientData.Medical.OE}
                                onChange={this.handlePatientDataChange}
                                style={{ margin: '10px', width: '25%' }}
                            />
                            <TextField id='MedicalHistory' multiline label='Medical History' variant='outlined'
                                value={this.state.patientData.Medical.MedicalHistory}
                                onChange={this.handlePatientDataChange}
                                style={{ margin: '10px', width: '27%' }}
                            />
                            <TextField id='OEGrandTotalEstimate' label='OE Total Estimate' variant='outlined'
                                value={this.state.patientData.Medical.OEGrandTotalEstimate}
                                type='number'
                                onChange={this.handlePatientDataChange}
                                style={{ margin: '10px', width: '155px' }}
                            />
                        </div>
                    </Collapsible>
                    <Collapsible trigger='Appointments' open={this.state.isAppointmentExpanded}
                        handleTriggerClick={this.handleAppointmentTriggerClick}>
                        <div style={{
                            height: this.state.isMedicalExpanded ? '300px' : '400px',
                            overflow: 'auto'
                        }}>
                            {this.state.patientData.Appointments.map(appointmentRow =>
                                <PatientApptRow key={appointmentRow.AptNum} apptData={appointmentRow}
                                    onChange={this.handleAppointmentRowChange} />
                            )}
                            <div style={{ height: '55px', float: 'left', marginLeft: '17px' }}>
                                <button type='button'
                                    style={{
                                        margin: '4px', height: '85%', width: '55px', fontSize: '30px',
                                        background: '#d8d8d5'
                                    }}
                                    onClick={this.addAppointmentRow}>
                                    +</button>
                            </div>
                        </div>
                    </Collapsible>
                    <div style={{ display: 'block', background: 'floralwhite', height: '45px' }}>
                        <button
                            style={{
                                margin: '4px', height: '85%', width: '30%', fontSize: '20px',
                                background: 'lightseagreen'
                            }}>
                            Save</button>
                    </div>
                </form>
            </LoadingOverlay>
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

    addAppointmentRow = event => {
        const apptState = this.state.patientData.Appointments;
        if (apptState[apptState.length - 1].WorkDone && apptState[apptState.length - 1].NextWorkToBeDone) {
            this.setState({
                patientData: {
                    ...this.state.patientData,
                    Appointments: [...this.state.patientData.Appointments, {
                        AptNum: apptState.length + 1,
                        WorkDone: ' ',
                        PaymentReceived: '0',
                        NextWorkToBeDone: ' ',
                        AptDateTime: apptState[apptState.length - 1].AptDateTime
                    }]
                }
            });
        } else {
            alert(CONST.ERR_MSG_ADD_APPT);
        }
    }

    postSavePatientData = () => {
        this.setState({ loading: true });
        fetch(CONST.PROXY_URL + CONST.ADD_UPDATE_PATIENT_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.patientData)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('**** result = ', result);
                    if (result.message.indexOf('Success') > -1) {
                        this.setState({ loading: false, isSaveSuccess: true });
                    } else {
                        this.setState({ loading: false, isSaveError: true });
                    }
                },
                (error) => {
                    console.log('**** err = ', error);
                    this.setState({ loading: false, isSaveError: true });
                }
            )
    }

    handlePatientDataChange = event => {
        switch (event.target.id) {
            case 'Name':
                this.setState({ patientData: { ...this.state.patientData, Name: event.target.value } });
                break;
            case 'Phone':
                this.setState({
                    patientData: {
                        ...this.state.patientData, Phone: event.target.value,
                        id: event.target.value
                    }
                });
                break;
            case 'Age':
                this.setState({ patientData: { ...this.state.patientData, Age: event.target.value } });
                break;
            case 'TotalPayableAmount':
                this.setState({
                    patientData: {
                        ...this.state.patientData, TotalPayableAmount: Number(event.target.value)
                    }
                }, this.calculateOutstandingAmount);
                break;
            case 'CO':
                this.setState({
                    patientData: {
                        ...this.state.patientData,
                        Medical: { ...this.state.patientData.Medical, CO: event.target.value }
                    }
                });
                break;
            case 'OE':
                this.setState({
                    patientData: {
                        ...this.state.patientData,
                        Medical: { ...this.state.patientData.Medical, OE: event.target.value }
                    }
                });
                break;
            case 'MedicalHistory':
                this.setState({
                    patientData: {
                        ...this.state.patientData,
                        Medical: { ...this.state.patientData.Medical, MedicalHistory: event.target.value }
                    }
                });
                break;
            case 'OEGrandTotalEstimate':
                this.setState({
                    patientData: {
                        ...this.state.patientData,
                        Medical: {
                            ...this.state.patientData.Medical, OEGrandTotalEstimate:
                                Number(event.target.value)
                        }
                    }
                });
                break;
            default:
                break;
        }
    };

    handleAppointmentRowChange = (fieldId, value, AptNum) => {
        if (fieldId === 'PaymentReceived') {
            this.setState({
                patientData: {
                    ...this.state.patientData,
                    Appointments: this.state.patientData.Appointments.map(item => {
                        if (item.AptNum === AptNum) {
                            return {
                                ...item,
                                [fieldId]: value
                            }
                        } else {
                            return item;
                        }
                    })
                }
            }, this.calculateOutstandingAmount);
        } else {
            this.setState({
                patientData: {
                    ...this.state.patientData,
                    Appointments: this.state.patientData.Appointments.map(item => {
                        if (item.AptNum === AptNum) {
                            return {
                                ...item,
                                [fieldId]: value
                            }
                        } else {
                            return item;
                        }
                    })
                }
            });
        }
    }

    handleAlertClose = () => {
        this.setState({ isSaveSuccess: false, isSaveError: false });
    }

    calculateOutstandingAmount = () => {
        let outStandingAmount = this.state.patientData.TotalPayableAmount;
        const totalPaidAmount = this.state.patientData.Appointments.reduce(
            (acc, appt) => acc + Number(appt.PaymentReceived), 0);
        outStandingAmount = outStandingAmount - totalPaidAmount;
        this.setState({
            patientData: {
                ...this.state.patientData, OutstandingAmount: Number(outStandingAmount)
            }
        });
    }
}

export default PatientDetailComponent;