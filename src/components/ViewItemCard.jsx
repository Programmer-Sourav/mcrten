
import "./item.css"

export default function ViewItemCard({data}){
  
  return(
        <div className="card">
      {
        data.map((currentItem)=>(
   <ul>    
    <li key = {currentItem.id}>  
  <div className="count" style={{color: currentItem.color}}>{currentItem.count}</div>
  <div className="prompt">{currentItem.title}</div>
  </li>  
  </ul> 
  ))}
</div>

    )
}