export const GET_ALL_PATIENTS_URL = 'https://hyqpqh7av5.execute-api.us-east-2.amazonaws.com/live/getallpatients';
export const ADD_UPDATE_PATIENT_URL = 'https://hyqpqh7av5.execute-api.us-east-2.amazonaws.com/live/addupdatepatient';
export const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
// export const PROXY_URL = '';
export const TEST_URL = 'https://api.github.com/users/hadley/orgs';
export const genderProvider = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    }];
export const dateFormatOption = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
export const timeFormatOption = { hour: '2-digit', minute: '2-digit' };
export const ERR_MSG_ADD_APPT = 'Work done or Next work to be done of last Appointment can not be empty!';