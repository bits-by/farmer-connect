import React from 'react'

const View = () => {
  return (
      <>
     
     <div className="card shadow  mt-5 p-4">
          <p className="text-center text-info fw-bold h2 mb-5">View Requirement</p>
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

   
    </>
  )
}

export default View