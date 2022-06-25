import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { EmployeeContext } from '../App'

export default function EmployeeRow({ employee }) {
  const history = useHistory()
  const context = useContext(EmployeeContext)
  const editHandler = (id) => {
    history.push(`/edit-employee/${id}`)
  }

  const deleteHandler = (id) => {
    const confirm = window.confirm();
    if (confirm) {
      let contextData = context.contextData
      let data = contextData.filter(emp => emp.id !== id)
      console.log(data)
      context.setContextData([...data])
    }

  }
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.dob}</td>
      <td>{employee.designation}</td>
      <td className='image-wrapper'><img src={employee.profileLink} alt="" /></td>
      <td>{employee.experience}</td>
      <td>
        <button type="button" className='btn btn-primary' onClick={() => editHandler(employee.id)}>Edit</button>
        <button type="button" className='btn btn-danger' style={{ marginLeft: 10 }} onClick={() => deleteHandler(employee.id)}>Delete</button>
      </td>
    </tr>
  )
}
