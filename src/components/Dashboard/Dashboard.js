import React, { Component }  from 'react';
import { Redirect  } from 'react-router-dom'

import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    text: '',
  }

  static getDerivedStateFromProps(nextProps){
    return {
      text: nextProps.newValue
    }
  }
  
  render() {
    if ( this.props.isAuthenticated === false ) return <Redirect to="/" />

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <button onClick={() => { this.props.logout() }}>
          Logout
        </button>
        <button onClick={() => { this.props.getProtected() }}>
          Get Protected
        </button>        
        <h1 className={styles.text}>{this.state.text}</h1>
      </div>
    );
  }
}

export default Dashboard;