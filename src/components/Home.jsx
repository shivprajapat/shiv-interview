import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadUsers,deleteUser } from '../Redux/action'

const Home = () => {
    let dispatch = useDispatch();

    const { users } = useSelector(state => state.data);

    useEffect(() => {
        dispatch(loadUsers())
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handChange=(id)=>{
        if(window.confirm("Are you sure")){
            dispatch(deleteUser(id))
        }
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={10} md={10} className='mx-auto mt-5'>

                        <div className='mb-4'>
                            <Link to='/add-user'>
                                <Button variant="primary">Add User</Button>
                            </Link>
                        </div>

                        <Card className='shadow p-4'>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>City </th>
                                        <th>Zip Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.data && users.data.map((item, index) => {
                                            const {id, name, email, phone, city, zip } = item;
                                            return (
                                                <tr key={item}>
                                                    <td>{index + 1}</td>
                                                    <td>{name}</td>
                                                    <td>{email}</td>
                                                    <td>{phone}</td>
                                                    <td>{city}</td>
                                                    <td>{zip}</td>
                                                    <td> <Button variant="danger" onClick={()=> handChange(id)}>Delete</Button></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home