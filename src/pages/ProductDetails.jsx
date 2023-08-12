import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import { useParams } from "react-router"

export default function ProductDetails(){

     const { data } = useContext(AppContext)
     const { id } = useParams()

     function findDescription(){
      const result = data.find((dataItem)=>(dataItem.id===id))
     }
     const filteredList = findDescription()

    return(
        <div>

        </div>
    )
}