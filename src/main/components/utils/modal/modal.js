import React from 'react';
import {Modal} from 'react-bootstrap'

const modal = (props) =>{
    

    return(

        <Modal show={props.shows} onHide={props.handle}>
        <Modal.Header closeButton>
        <Modal.Title><h1 className={props.class}>{props.message}</h1></Modal.Title>
        </Modal.Header>
        
      </Modal>
    )
}

export default modal;
