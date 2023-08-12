import { createContext, useContext, useState } from "react";
import { inventoryData } from "../data/api";

export const AppContext = createContext()


export function AppProvider({children}){

  const [data, setData ] = useState(inventoryData)
  const [selectedDepartmentState, setSelectedDepartmentState] = useState("All")
  const [selectedSortState, setSelectedSortState] = useState("Name")
  const [isLow, setIsLow] = useState(false)
  const departments = [{id: 1, department: "Kitchen"},{id: 2, department: "Clothing"},{id: 1, department: "Toys"}]


  const onSelectionChange = (e) =>{
   setSelectedDepartmentState(e.target.value)
  }

  const onCheckBoxChangeListener = (e) =>{
    setIsLow(e.target.checked)
  }

  const onSortSelectionListener = (e) =>{
    setSelectedSortState(e.target.value)
  }
    return(
        <AppContext.Provider value={{data, departments, onSelectionChange, isLow, setIsLow, onCheckBoxChangeListener, selectedSortState, selectedDepartmentState,  setSelectedSortState,onSortSelectionListener, setSelectedDepartmentState }}>{children}</AppContext.Provider>
    )
}