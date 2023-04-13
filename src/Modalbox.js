// import React from 'react'
import React , { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../src/modalbox.css"
import {BsSearch} from '../node_modules/react-icons/bs'
import{AiOutlineFlag} from '../node_modules/react-icons/ai'


export default function Modalbox() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container text-center mt-5'>
        <div className='modals'>
        <Button variant="primary"  className='btn mt-5' onClick={handleShow}>
        Modal box example
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className='modal--head'>
          <Modal.Title>
            
            <AiOutlineFlag/> Add experience
          <p className='pera'>share where you have worked on your profile</p>
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <Form className='container'>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg. Designer"
                autoFocus
              />
            </Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Group
              className='sec--1'
              controlId="exampleForm.ControlTextarea1"

            >
              
              <Form.Control type="text"  />
              <Form.Control type="text"></Form.Control>

            </Form.Group>
            <Form.Control className='txt--1' type='text'></Form.Control> */}

            <div className='titlebox' >
              <p>Title</p>
              <input type='text' placeholder='Product Designer'></input>
            </div>

            <div className='box--2'>
              <div className='subbox--2'>
                <p>Company</p>
                <div className='inicons'>
                <BsSearch className='sicon'/> <input  type='text' placeholder='search for company'></input>
                </div>
                

                
              </div>
              <div className='subbox--3'>
                  <p>website</p>
                  
                  <div className='website'> <input className='container' type='text' placeholder='www.example.com'></input></div>
                 
                </div>
            </div>

            <div className='box--2'>
              <div className='subbox--2'>
                <p>Location</p>

                <div className='inicons'><BsSearch className='sicon'/> <input type='text' placeholder='search for city'></input></div>
              

                
              </div>
              <div className='subbox--3'>
                  <p>Employement</p>
                  <select  > <option>FullTime</option> </select>
                </div>
            </div>

            <p>Description</p>
            <textarea className='txtarea' placeholder='eg. - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis quidem commodi illo, soluta harum debitis possimus tenetur officiis quibusdam officia, molestias laborum enim saepe vitae exercitationem at nam non totam cupiditate cum! Voluptatum accusantium sapiente '></textarea>

            <div className='datebox'>
              <div className='dates--1'>
                <p>Start Date</p>
                <input className='conatiner alldates' type='date'></input>
              </div>

              <div className='dates--2'>
                <p>End Date</p>
                <input className='alldates'  type='date'></input>
              </div>
              <div className='tickbox'>
              <input type='checkbox' name='work' className='checkwork'></input>
              <label for="work"> I currently work here</label>
              </div>
              
              
            </div>



          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn1' variant="" onClick={handleClose}>
            Save as Draft
          </Button>
          <Button variant="info" onClick={handleClose}>
            Add experience
          </Button>
        </Modal.Footer>
      </Modal>



        </div>
    </div>
  )
}
