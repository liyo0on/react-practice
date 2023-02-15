import React from 'react'
import { Button, Form } from 'react-bootstrap';


export default function TodoForm({ title, info, titleHandler, infoHandler, submitHandler, edit }) {
    return (
        <div>
            <Form className='text-center row'>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" value={title} onChange={titleHandler} />
                    <Form.Text className="text-muted" >
                        you need Enter a Title.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 col-6" controlId="information">
                    <Form.Label>information</Form.Label>
                    <Form.Control type="text" placeholder="Enter information" value={info} onChange={infoHandler} />
                    <Form.Text className="text-muted">
                        you need Enter your information.
                    </Form.Text>
                </Form.Group>
                <Button className='col-2 mb-2 offset-5' variant="primary" type="submit" onClick={submitHandler}>
                    {edit ? "edit" : "submit"}
                </Button >
            </Form>
        </div>
    )
}
