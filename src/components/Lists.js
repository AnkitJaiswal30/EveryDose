import React, { useState } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { UpDownArrowButton } from "./UpDownArrow/UpDownArrowButton";
import CloseIcon from '@mui/icons-material/Close';
import { Switch } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import './Lists.css'

const Lists = (props) => {
  const { list, setList } = props
  const [showDeleted, setShowDeleted] = useState(false)
  const [deletedList, setDeletedList] = useState([])
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [errorOnName, setErrorOnName] = useState('')


  const handleQuantityChange = (e)=> {
    if(e.target.value > 0){
      setQuantity(e.target.value)
    }
  }

  const handleAddItem = (e) => {
    const newItem = [{'itemId': itemName, 'itemName': itemName, 'quantity': quantity }]
    setList([...list, ...newItem])
    setItemName('')
    setQuantity('1')
  }
  const handleDeleteItem = (id) => {
    const updatedItem = list.filter((ele)=> ele.itemId !== id)
    const deletedItem = list.filter((ele)=> ele.itemId === id)
    setList(updatedItem)
    setDeletedList([...deletedList , ...deletedItem])
  }
  const handleRestoreItem = (id) => {
    const restoringItem = deletedList.filter((ele)=> ele.itemId === id)
    const updatedDeletedList = deletedList.filter((ele) => ele.itemId !== id)
    setDeletedList(updatedDeletedList)
    setList([...list, ...restoringItem])
  }
  const handleClearAll = () => {
    setDeletedList([...deletedList, ...list])
    setList([])
  }
  const handleItemNameChange = (e)=> {
    const {value} = e.target
    const alreadyExist = list.findIndex((ele) => ele?.itemName.toLowerCase() === value.toLowerCase())
    console.log(alreadyExist)
    if(alreadyExist !== -1){
      setErrorOnName('Name Already Exists')
    }else{
      setErrorOnName('')

    }
    setItemName(value)
    
  }
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader>
            Edit List
          </CardHeader>
          <CardBody>
          <div class="form-group mx-sm-2 mb-2 d-flex w-100">   
            <div className="itemNameInputWrapper">
              <div class= 'd-flex'>Item Name *</div>
              <input class="form-control" className="inputBoxFit" value={itemName} onChange={handleItemNameChange}/>
              {errorOnName ? <div className="error">{errorOnName}</div> :null}
            </div>
            <div style={{width: '40%'}}>
              <div class= 'd-flex'>Quantity *</div>
              <div class= 'd-flex'>
                <input class="form-control" className="inputBoxFit" value={quantity} onChange={handleQuantityChange}/>
                <button type="submit" onClick={handleAddItem} disabled={!itemName || errorOnName} class="btn btn-primary mb-2">ADD</button>
              </div>
            </div>  
          </div>
          <Table striped className="">
              <thead>
                <tr>
                  <th>Inventory List</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => {
                return (
                  <tr>
                    {/* <th scope="row">{index+1}</th> */}
                    <td>{item.itemName}</td>
                    <td>{<UpDownArrowButton id={item.itemId} quantity={item.quantity} list= {list} setList={setList}/>}</td>
                    <td>
                      <div onClick={() => {handleDeleteItem(item.itemId)}}>
                        <CloseIcon color="error" />
                      </div> 
             
                    </td>
                  </tr>
                )
                })}
              </tbody>
          </Table>
          {
            showDeleted ?           
              <Table striped className="">
                <thead>
                  <tr>
                    <th>Deleted Inventory List</th>
                  </tr>
                </thead>
                <tbody>
                  {deletedList.length>0 ? deletedList.map((item, index) => {
                  return (
                    <tr>
                      {/* <th scope="row">{index+1}</th> */}
                      <td>{item.itemName}</td>
                      <td>{<UpDownArrowButton id={item.itemId} quantity={item.quantity} list= {deletedList} setList={setDeletedList}/>}</td>
                      <td>
                        <div onClick={() => {handleRestoreItem(item.itemId)}}>
                          <RestoreIcon color="primary" />
                        </div> 
                      </td>
                    </tr>
                  )
                  }): <div>There is No Deleted Item</div>}
                </tbody>
              </Table> 
            : null
          }
          <div className="footerWrapper">
            <div className="showDeleted">
              <Switch
                checked={showDeleted}
                onChange={()=>{ setShowDeleted(!showDeleted) }}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <div>View Deleted</div>
            </div>
            <div>
              <button type="button" class="btn btn-light" onClick={handleClearAll}>Clear All</button>
            </div>
          </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };
