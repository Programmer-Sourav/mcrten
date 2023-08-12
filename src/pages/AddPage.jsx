import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"

export default function AddPage(){

 const { data, addNewItemDetails } = useContext(AppContext)

 const [selectedDept, setSelectedDept] = useState("")
 const [selectedName, setSelectedName] = useState("")
 const [description, setDescription] = useState("")
 const [price, setPrice] = useState("")
 const [stock, setStock] = useState(0)
 const [sku, setSku] = useState("")
 const [supplier, setSupplier] = useState("")
 const [imageUrl, setImageUrl] = useState("")
 const [delivered, setDelivered] = useState(0)

  const onSelectDepartment = (e) =>{
      setSelectedDept(e.target.value)
  }

  const onNameChange = (e) =>{
      setSelectedName(e.target.value)
  }

  const onDescriptionChange = (e) =>{
      setDescription(e.target.value)
  }

  const onPriceChange = (e) =>{
      setPrice(e.target.value)
  }

  const onStockChange = (e) =>{
      setStock(e.target.value)
  }

  const onSKUChange = (e) => {
     setSku(e.target.value)
  }

  const onSupplierChange = (e) =>{
      setSupplier(e.target.value)
  }

  const onImageURLChange = (e) =>{
      setImageUrl(e.target.value)
  }

    return(
        <div> 
            <h1>Add New Product</h1>
            <p>
            <label>
                Department
                <select value={selectedDept} onChange={(e)=>{onSelectDepartment(e)}}>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                </select>
            </label>
            </p>
            <p>
            <label>
                Name:
                <input type="text" value ={selectedName} onChange={(e)=>{onNameChange(e)}}/>
            </label>
            </p>
            <p>
            <label>
                Description: 
                <textarea cols="50" rows="6" value ={description} onChange={(e)=>{onDescriptionChange(e)}}/>
            </label>
            </p>
            <p>
            <label>
                Price:
                <input type="number" value ={price} onChange={(e)=>{onPriceChange(e)}}/>
            </label>
            </p>
            <p>
            <label>
                Stock:
                <input type="text" value ={stock} onChange={(e)=>{onStockChange(e)}}/>
            </label>
            </p>
            <p>
            <label>
                SKU:
                <input type="text" value ={sku} onChange={(e)=>{onSKUChange(e)}}/>
            </label>
            </p>
            <p>
            <label>
                Supplier:
                <input type="text" value ={supplier} onChange={(e)=>{onSupplierChange(e)}}/>
            </label>
            </p>
            <p>
            <label>
                Delivered:
                <input type="text" value ={delivered}/>
            </label>
            </p>
            <p>
            <label>
                Image URL:
                <input type="text" value ={imageUrl} onChange={(e)=>{onImageURLChange(e)}}/>
            </label>
            </p>
            
            <button onClick={()=>{addNewItemDetails( {
                 
                 id: data.length+1,
                 department: selectedDept,
                 name: selectedName,
                 description:
                   description,
                 price: price,
                 stock: parseInt(stock),
                 sku: sku,
                 supplier: supplier,
                 delivered: delivered,
                 imageUrl:
                   imageUrl,
               
          })}}>Add Product</button>
        </div>
    )
}