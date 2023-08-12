import { createContext, useContext, useState } from "react";
import { inventoryData } from "../data/api";

export const AppContext = createContext()


export function AppProvider({children}){

  const [data, setData ] = useState(inventoryData)
  const departments = [{id: 1, department: "Kitchen"},{id: 2, department: "Clothing"},{id: 1, department: "Toys"}]


  const onSelectionChange = () =>{

  }
    return(
        <AppContext.Provider value={{data, departments, onSelectionChange }}>{children}</AppContext.Provider>
    )
}