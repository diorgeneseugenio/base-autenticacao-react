import React from 'react'
import { Row, Col } from 'react-grid-system';

import styles from './DivMessage.module.css';

const DivMessage = (props) => {
  return (
    <Row>
      <Col xs={12} sm={6} offset={{ sm: 3 }} >
        <div className={styles.message}>{ props.msg }
        </div>
      </Col>
    </Row>
  )
};

export default DivMessage;