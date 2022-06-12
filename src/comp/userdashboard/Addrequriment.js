import React from "react";

const Addrequirement = () => {
  return (
    <>
      <div className="container" id="add">
        {/* add crop form */}
        <div className="card shadow p-3" >
          <div className="container add-crop">
            <p className="text-center h2 fw-bold">Add Requirement</p>
            <div className="card-body">
              <form>
                <div class="form-group mb-3">
                  <label for="exampleInputEmail1">Crop Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                  {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div class="form-group mb-3">
                  <label for="quantity">Quantity</label>
                  <input
                    type="number"
                    class="form-control"
                    id="quantity"
                    placeholder=""
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Price</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div>
                <div class="form-group form-check mb-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* crop list table  */}
        <div className="card shadow  mt-5 p-4">
          <p className="text-center text-info fw-bold h2 mb-5">Products List</p>
          <table className="table table-hover align-middle ">
            <thead>
              <th>Crop Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </thead>
            <tbody className="">
              <tr >
                <td>wheat</td>
                <td>900kg</td>
                <td>1000/kg</td>
                <td>
                    <button className="btn btn-primary" onClick="edit(product.id)">Edit</button>
                    <button className="btn btn-danger ms-3" onClick="delete(product.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Addrequirement;
