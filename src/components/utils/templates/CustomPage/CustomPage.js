import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom'

import styles from './CustomPage.module.css';

const CustomPage = (props) => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h1 className={styles.text}>{ props.text }</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={ props.buttonUrl } className={styles.button}> { props.buttonText } </Link>
        </Col>
      </Row>      
    </Container>
  )
};

export default CustomPage;