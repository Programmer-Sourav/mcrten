export default function AddPage(){


  const onSelectDepartment = () =>{

  }

  const onNameChange = () =>{

  }

  const onDescriptionChange = () =>{

  }

  const onPriceChange = () =>{

  }

  const onStockChange = () =>{

  }

  const onSKUChange = () => {

  }

  const onSupplierChange = () =>{

  }

  const onImageURLChange = () =>{

  }

    return(
        <div> 
            <h1>Add New Product</h1>
            <p>
            <label>
                Department
                <select value={{}} onChange={()=>{onSelectDepartment()}}></select>
            </label>
            </p>
            <p>
            <label>
                Name:
                <input type="text" value ={{}} onChange={()=>{onNameChange()}}/>
            </label>
            </p>
            <p>
            <label>
                Description: 
                <textarea cols="50" rows="6" value ={{}} onChange={()=>{onDescriptionChange()}}/>
            </label>
            </p>
            <p>
            <label>
                Price:
                <input type="text" value ={{}} onChange={()=>{onPriceChange()}}/>
            </label>
            </p>
            <p>
            <label>
                Stock:
                <input type="text" value ={{}} onChange={()=>{onStockChange()}}/>
            </label>
            </p>
            <p>
            <label>
                SKU:
                <input type="text" value ={{}} onChange={()=>{onSKUChange()}}/>
            </label>
            </p>
            <p>
            <label>
                Supplier:
                <input type="text" value ={{}} onChange={()=>{onSupplierChange()}}/>
            </label>
            </p>
            <p>
            <label>
                Delivered:
                <input type="text" value ={0}/>
            </label>
            </p>
            <p>
            <label>
                Image URL:
                <input type="text" value ={{}} onChange={()=>{onImageURLChange()}}/>
            </label>
            </p>
        </div>
    )
}