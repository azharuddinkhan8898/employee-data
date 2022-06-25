import React, { useContext, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { EmployeeContext } from '../../App';
import { v4 as uuidv4 } from 'uuid';

export default function Employee() {
  const [employeeData, setEmployeeData] = useState({})
  const context = useContext(EmployeeContext)
  const history = useHistory()
  const {id: paramId} = useParams()

  useState(() => {
    if(paramId){
      const empData = context.contextData.find((emp) => {
        return emp.id === paramId
      })

      if(empData) {
        setEmployeeData(empData)
      } else {
        history.push("/")
      }
    }
  }, [])

  const handleOnChange = (e) => {
    let data = {...employeeData};
    data[e.target.id] = e.target.value;
    setEmployeeData(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let contextData = context.contextData
    if(paramId){
      let data = contextData.filter(emp => emp.id !== paramId)
      console.log(data)
      context.setContextData([...data, {...employeeData, id: uuidv4()}])
      history.push("/")
    } else {
      context.setContextData([...contextData, {...employeeData, id: uuidv4()}])
      history.push("/")
    }
    
  }

  return (
    <div className="employee-wrapper">
      <h3>Add Employee</h3>
      <form onChange={handleOnChange} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="firstName">First name:</label>
            <input type="text" defaultValue={employeeData.firstName} required className="form-control" id="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="dob">DOB:</label>
            <input type="date" defaultValue={employeeData.dob} required className="form-control" id="dob" />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <input type="text" defaultValue={employeeData.designation} required  className="form-control" id="designation" />
          </div>
          <button type="submit" className="btn btn-primary">{paramId ? 'Edit Profile' : "Submit"}</button>
        </div>
        <div className="col-md-6">
        <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" defaultValue={employeeData.lastName} required  className="form-control" id="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience :</label>
            <input type="text" defaultValue={employeeData.experience} required  className="form-control" id="experience" />
          </div>
          <div className="form-group">
            <label htmlFor="profileLink">Profile Photo Link:</label>
            <input type="text" defaultValue={employeeData.profileLink}  required className="form-control" id="profileLink" />
          </div>
          <div className="image-wrapper">
            <img src={employeeData.profileLink} alt="" />
          </div>
        </div>
      </div>
      
      </form>
    </div>
  )
}
