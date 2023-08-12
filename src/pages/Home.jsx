import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import ItemCard from "../components/ItemCard"
import ViewItemCard from "../components/ViewItemCard"

export default function Home(){
   
    const { data } = useContext(AppContext)


    const totalStockCount = data.reduce((accumulated, currentItem)=>(accumulated + currentItem.stock), 0)
    

    const delivered = data.reduce((accumulated, currentItem)=>(accumulated + currentItem.delivered ), 0)
   


    const lowOnStock = data.filter((currentItem)=>(currentItem.stock<=10)).length
   
    const dataObject = [{id: 1, title: "Total Stock", count: totalStockCount, color: "green"}, {id:2, title: "Total Delivered", count: delivered, color: "orange"}, {id:3, title: "Low Stock Items", count: lowOnStock, color: "red"}]
    return(
        <div>
        {
            <ul>
            <ViewItemCard data = {dataObject} />
            </ul>
        }
        </div>
    )
}