import React from "react";
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

class PatientApptRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date('2020-03-15T21:30:00'),
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    render() {
        return (<div style={{ marginTop: '15px', marginBottom: '10px' }}>
            <TextField id="AptNum" label="Appt Num" variant="outlined" defaultValue={this.props.apptData.apptNum}
                style={{ width: '55px', marginRight: '15px', marginLeft: '15px' }} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="appt-date-picker"
                    label="Appt Date"
                    format="dd/MM/yyyy"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    style={{ marginTop: '5px', marginBottom: '5px', width: '135px', marginRight: '15px' }}
                />
                <KeyboardTimePicker
                    margin="normal"
                    id="appt-time-picker"
                    label="Appt Time"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    style={{ marginTop: '5px', marginBottom: '5px', width: '135px', marginRight: '15px' }}
                />
            </MuiPickersUtilsProvider>
            <TextField id="WorkDone" label="Work Done" multiline rowsMax="5" variant="outlined"
                style={{ width: '35%', marginRight: '15px' }} />
            <TextField id="NextWorkToBeDone" label="Next Work To Be Done" multiline rowsMax="5" variant="outlined"
                style={{ width: '23%', marginRight: '15px' }} />
            <TextField id="PaymentReceived" label="Payment Rcvd" variant="outlined" type="number"
                style={{ width: '130px', marginRight: '15px' }} />
        </div>);
    }

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };
}
export default PatientApptRow