import React from 'react'


const AddItem = (props) => {
 
  return (
    <div className="pb-2">
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-row align-items-center">
          <input type="text" className="form-control form-control-lg" id="inputNew" onChange={ev => props.setnewItem(ev.target.value)}  placeholder="Add new"/>
          <div>
            <button type="button"  className="btn btn-primary" onClick={()=>props.addNewItem()}>Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddItem