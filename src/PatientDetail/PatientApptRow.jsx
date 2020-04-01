import React from 'react';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

class PatientApptRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AptDateTimeState: new Date(this.props.apptData.AptDateTime),
            NextAptDateTimeState: new Date(this.props.apptData.NextAptDateTime)

        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handlePatientAptDataChange = this.handlePatientAptDataChange.bind(this);
    }

    render() {
        return (<div style={{ marginTop: '15px', marginBottom: '10px' }}>
            <TextField id='AptNum' label='Appt Num' variant='outlined'
                defaultValue={this.props.apptData.AptNum}
                style={{ width: '55px', marginRight: '15px', marginLeft: '15px' }} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin='normal'
                    id='AptDateTime'
                    label='Appt Date'
                    format='dd/MM/yyyy'
                    value={this.state.AptDateTimeState}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    style={{ marginTop: '5px', marginBottom: '5px', width: '135px', marginRight: '15px' }}
                />
                <KeyboardTimePicker
                    margin='normal'
                    id='AptDateTime'
                    label='Appt Time'
                    onChange={this.handleDateChange}
                    value={this.state.AptDateTimeState}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    style={{ marginTop: '5px', marginBottom: '5px', width: '135px', marginRight: '15px' }}
                />
            </MuiPickersUtilsProvider>
            <TextField id='WorkDone' label='Work Done' multiline rowsMax='5' variant='outlined'
                onChange={this.handlePatientAptDataChange} value={this.props.apptData.WorkDone}
                style={{ width: '35%', marginRight: '15px' }} />
            <TextField id='NextWorkToBeDone' label='Next Work To Be Done' multiline rowsMax='5'
                variant='outlined'
                onChange={this.handlePatientAptDataChange} value={this.props.apptData.NextWorkToBeDone}
                style={{ width: '23%', marginRight: '15px' }} />
            <TextField id='PaymentReceived' label='Payment Rcvd' variant='outlined' type='number'
                onChange={this.handlePatientAptDataChange} value={this.props.apptData.PaymentReceived}
                style={{ width: '130px', marginRight: '15px' }} />
        </div>);
    }

    handleDateChange = date => {
        if (date) {
            this.setState({ AptDateTimeState: date });
            this.props.onChange('AptDateTime', date.toISOString(), this.props.apptData.AptNum);
        }
    };

    handlePatientAptDataChange = event => {
        this.props.onChange(event.target.id, event.target.value, this.props.apptData.AptNum);
    };

}
export default PatientApptRow