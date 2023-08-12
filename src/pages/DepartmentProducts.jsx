import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import ListCard from "../components/ListCard"
import { useParams } from "react-router"

export default function DepartmentProducts(){

     const { data} = useContext(AppContext)
     const { department } = useParams()
     const [selectedDepartmentState, setSelectedDepartmentState] = useState("All")

     const findfilteredList = () =>{
      const result = data.filter((dataItem)=>(dataItem.department===department))
      return result;
     }

     const filteredList = findfilteredList()
    return(
        <div> 
          <select value = {selectedDepartmentState} onChange={()=>{onSelectionChange()}}>
            
            </select>  
          {filteredList.map((dataItem)=>(
            <ListCard data = {dataItem} />
          ))}
        </div>
    )
}