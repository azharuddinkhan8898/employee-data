import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../../App';
import EmployeeRow from '../../component/EmployeeRow';

const Home = () => {
  const context = useContext(EmployeeContext)
  // const history = useHistory()
  return (
    <div className="home-wrapper">
      <h3>Employee List</h3>
      {
        context.contextData.length ? <table className='table table-bordered'>
        <thead>
        <tr>
          <th>First name</th>
          <th>Last Name </th>
          <th>DOB</th>
          <th>Designation</th>
          <th>Profile Photo</th>
          <th>Experience </th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {
          context.contextData.map(employee => (
            <EmployeeRow key={employee.id} employee={employee}/>
          ))
        }
        </tbody>
      </table> : <p>No employee data present.</p>
      }
      
      <Link to="/add-employee" type="button" className='btn btn-primary'>Add Employee</Link>
    </div>
  )
}

export default Home;