import React, { Component }  from 'react';
import { Row, Col, Container } from 'react-grid-system';
import { Link } from 'react-router-dom'

import DivMessage from 'components/utils/templates/DivMessage'

import styles from './Login.module.css';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitForm = event => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  render() {

    let message = ""

    if(this.props.msg.length > 0){
      message = <DivMessage msg={this.props.msg} />
    }
    
    return (
      <Container className={styles.container}>
        { message }
        <Row>
          <Col xs={12} sm={6} offset={{ sm: 3 }} >
            <div className={styles.box}>
              <div className={styles.header}>
                <span className={styles.headerText}> { process.env.REACT_APP_NAME_APP }  </span>
              </div> 
              <div className={styles.form}>
                <div className={styles.field}>
                  <input placeholder="Email:" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className={styles.field}>
                  <input placeholder="Password:" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>    
                <div className={styles.buttonBox}>
                  <button onClick={this.submitForm}>LOG IN</button>
                </div>  
                <div className={styles.forgotBox}>
                  <Link to="/" className={styles.forgot}> Forgot your password? </Link>
                </div>                                              
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;