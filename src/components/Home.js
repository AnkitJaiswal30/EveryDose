import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, Card, CardBody } from "reactstrap";

const Home = (props) => {
  const navigate =  useNavigate()
  const {list } = props
  const handleEditClick = () => {
    navigate('/lists')
  }
  return (
    <div>
      <h2 className="App-header mb-3">Inventory List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <Table striped className="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {list.length > 0 ? list.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.itemName}</td>
                    <td>{item.quantity}</td>
                  </tr>
                )
                }): <div>No Record Found</div>}
              </tbody>
            </Table>
            <button className="btn btn-primary" onClick={handleEditClick}>Edit List</button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export { Home };
