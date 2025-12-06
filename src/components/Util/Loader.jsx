import React from 'react'
import { Spinner } from 'react-bootstrap';
const Loader = () => {
  return (
    <center>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </center>
  );
}

export default Loader
