import './Item.css'
const Item = (props) => {
  return (

    <div className="d-flex flex-column bd-highlight row" >
      <div className="p-2 bd-highlight">
          <div className="d-flex justify-content-between p-2 bg-light border" >
          <div><h6>{props.item.text}</h6></div>
          <div>
            <span >
              <i role="button" className="fa-solid fa-pen p-2" onClick={()=>props.setEditItem(props.item)} ></i>
            </span>
            <span >
              <i role="button" className="fa-solid fa-trash p-2" onClick={()=>props.deleteItem(props.item.id)}></i>
            </span>
          </div>

        </div>
      </div>
      {props.editedItem && props.editedItem.id==props.item.id ? 
                          <div className="px-2 bd-highlight input-group ">
                          <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" defaultValue={props.editedItem.text}  onChange={ev => props.seteditedText(ev.target.value)} aria-describedby="button-addon1"/>
                          <button className="btn btn-outline-success" type="button" id="button-addon1" onClick={()=>props.editItem()}>Save</button>
                          <button className="btn btn-outline-danger" type="button" id="button-addon2" onClick={()=>props.setEditItem(null)}>Cancel</button>
                      </div> :''}

    </div>

  )
}

export default Item