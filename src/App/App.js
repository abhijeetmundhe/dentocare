import React from 'react';
import '../App.css';
import AppRouter from './AppRouter';
import AppNavigation from './AppNavbar';
import * as CONST from '../Constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []    
    };
  }

  componentDidMount() {
    fetch(CONST.PROXY_URL + CONST.GET_ALL_PATIENTS_URL)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('**** result = ', result);
          this.setState({
            data: result.Items
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <AppNavigation />
          <AppRouter data={this.state.data} />
        </header>
      </div>
    );
  }
}

export default App;
