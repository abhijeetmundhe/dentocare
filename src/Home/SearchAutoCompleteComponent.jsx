import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';

class SearchAutoCompleteComponent extends React.Component {

    render() {
        const top100Films = [
            { title: 'The Shawshank Redemption', year: 1994 },
            { title: 'The Godfather', year: 1972 },
            { title: 'The Godfather: Part II', year: 1974 },
            { title: 'The Dark Knight', year: 2008 },
            { title: '12 Angry Men', year: 1957 },
            { title: 'Schindlers List', year: 1993 },
            { title: 'Pulp Fiction', year: 1994 },
            { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
            { title: 'The Good, the Bad and the Ugly', year: 1966 },
            { title: 'Fight Club', year: 1999 }];
        return (
            <Autocomplete
                id='combo-box-demo'
                options={top100Films}
                getOptionLabel={option => option.title}
                style={{ width: 280, marginLeft: 20 }}
                renderInput={params => (
                    <TextField {...params} label='Search Patient' variant='outlined' fullWidth />
                )}
            />
        );
    }
}
export default SearchAutoCompleteComponent;