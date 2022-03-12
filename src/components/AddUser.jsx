import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../Redux/action'

const AddUser = () => {

  const navigate = useNavigate();
const dispatch =useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    zip: ""
  })

  const { name, email, phone, city, zip } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !city || !zip) {
      setState("fill the data");
      
    } else {
      dispatch(addUser(state))
       console.log(state);
      navigate('/')
      
    }
  }

  return (
    <div> <Container>
      <Row>
        <Col lg={6} md={6} className='mx-auto mt-5'>
          <div className='mb-4'>
              <Button variant="primary" onClick={()=>navigate('/')}>Back</Button>
          </div>
          <Card className='shadow p-4'>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name :</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" value={name} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email :</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" value={email} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone :</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone" name="phone" value={phone} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City :</Form.Label>
                <Form.Control type="text" placeholder="Enter City" name="city" value={city} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Zip Code :</Form.Label>
                <Form.Control type="number" placeholder="Enter Zip Code" name="zip" value={zip} onChange={handleChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default AddUser