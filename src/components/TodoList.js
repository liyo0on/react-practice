import React from 'react'
import TodoItem from './TodoItem'
import Table from 'react-bootstrap/Table';
import { MdEdit, MdDelete } from 'react-icons/md'

export default function Todolist({ todos, clearAlltodolist, deletHandler, editHandler }) {

    // console.log(todos.length);


    return (
        <div >
            <Table striped bordered hover variant="dark" >
                <thead >
                    <tr className='col-12'>
                        <th className='col'>title</th>
                        <th className='col-9'>information</th>
                        <th className='col'><MdEdit /></th>
                        <th className='col' ><MdDelete /></th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todos) => {
                        return <TodoItem key={todos.id}
                            deletHandler={deletHandler}
                            editHandler={editHandler}
                            todos={todos} />
                    })}

                </tbody>
            </Table>
            {todos.length > 0 && <button className='col-2 offset-5' onClick={clearAlltodolist}>clear todo list</button>}


        </div>
    )
}
