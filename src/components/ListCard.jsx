export default function ListCard({data}){

    return(
        <div>
            {
                <ul>
                <img src={data.imageUrl} height="128" width="72" alt="productitem"/>
                <span className="spanstyle">{data.name}</span>
                <span className="spanstyle">{data.description}</span>
                <span className="spanstyle">{data.price}</span>
                <span className="spanstyle">{data.stock}</span>
                <span className="spanstyle">{data.supplier}</span>
                </ul>
            }
        </div>
    )
}