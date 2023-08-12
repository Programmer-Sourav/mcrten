import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import { useParams } from "react-router"

export default function ProductDetails(){

     const { data } = useContext(AppContext)
     const { id } = useParams()

     function findDescription(){
      return data.find((dataItem)=>(dataItem.id.toString()===id))
      
     }
     const filteredList = findDescription()

    return(
        <div>
           {
            <ul>
            <h1>{filteredList.name}</h1>
            <p><img src={filteredList.imageUrl} width="128" height="128" alt="productimgf"/> </p>
            <p> <span>Price: {filteredList.price}</span></p>
            <p><span>Department: {filteredList.department}</span></p>
            <p><span>Description: {filteredList.description}</span></p>
            <p><span>Stock: {filteredList.stock}</span></p>
            <p><span>SKU: {filteredList.sku}</span></p>
            </ul>
           }
        </div>
    )
}