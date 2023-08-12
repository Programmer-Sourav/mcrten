import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import ViewItemCard from "../components/ViewItemCard"
import ViewDepartmentCard from "../components/ViewDepartmentCard"

export default function Departments(){

   const { departments } = useContext(AppContext)

    return(
        <div> 
            {
              departments.map((department)=>(
                <ViewDepartmentCard data = {department}/>
              ))
            }
        </div>
    )
}