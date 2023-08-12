import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import ListCard from "../components/ListCard"
import { useNavigate, useParams } from "react-router"

export default function DepartmentProducts(){

     const navigate = useNavigate()
     const { data, onSelectionChange, selectedDepartmentState, isLow, setIsLow, onCheckBoxChangeListener, selectedSortState, setSelectedDepartmentState, onSortSelectionListener } = useContext(AppContext)
     const { department } = useParams()
     

     useEffect(() => {
       if (department) {
          setSelectedDepartmentState(department);
        }
      }, [department]);
 
     let filteredList = selectedDepartmentState==="All" ? data : data.filter((dataItem)=>(dataItem.department===selectedDepartmentState))

     if(isLow){
        filteredList = filteredList.filter((eachItem)=>(eachItem.stock<=10))
     }
     let sortedList = [...filteredList]
     if(selectedSortState==="Name")
     sortedList = sortedList.sort((d1, d2)=>(d1.name>d2.name) ? 1 : -1)
     if(selectedSortState==="Price")
     sortedList = sortedList.sort((d1, d2)=>(d1.price-d2.price))
     if(selectedSortState==="Stock")
     sortedList = sortedList.sort((d1, d2)=>(d1.stock>d2.stock) ? 1 : -1)


     const openNewAddPage = () =>{
        navigate(`/add`)
     }

    return(
        <div> 
          <select value = {selectedDepartmentState} onChange={(e)=>{onSelectionChange(e)}}>
            <option value="All">All Departments</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
            </select>  
            <label>
            <input type="checkbox" checked ={isLow} onChange={(e)=>{onCheckBoxChangeListener(e)}}/> Low Stock Items
            </label>
            <label>
                Sort By: 
            <select value = {selectedSortState} onChange={(e)=>{onSortSelectionListener(e)}}>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Stock">Stock</option>
            </select>  
            </label>
            <button onClick={()=>{openNewAddPage()}}>New</button>
          {sortedList.map((dataItem)=>(
            <ListCard data = {dataItem} />
          ))}
        </div>
    )
}