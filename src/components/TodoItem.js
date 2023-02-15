import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'


export default function TodoItem({ todos, deletHandler, editHandler }) {
    const { id, title, info } = todos




    return (
        <>
            <tr className='col-12'>
                <th className='col'>{title}</th>
                <th className='col-9'>{info}</th>
                <th className='col'>
                    <button className='bg-transparent border-0'
                        onClick={() => editHandler(id)}>
                        <MdEdit className=' text-light' />
                    </button>
                </th>
                <th className='col'>
                    <button className='bg-transparent border-0'
                        onClick={() => deletHandler(id)}>
                        <MdDelete className=' text-light' />
                    </button>
                </th>
            </tr>
        </>
    )
}
