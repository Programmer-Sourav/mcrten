import { useNavigate } from "react-router"
import "./item.css"

export default function ViewDepartmentCard({data}){

    const navigate = useNavigate()
    const goToDepartment = (department) =>{
       navigate(`/listing/${department}`)
    }
  
  return(
        <div className="card">
      {
      
   <ul>    
    <li key = {data.id}>  
  <div className="prompt" onClick={()=>{goToDepartment(data.department)}}>{data.department}</div>
  </li>  
  </ul> 
  }
</div>

    )
}