import React from 'react'

const Viewfarmer = () => {
  return (
    <div className="card shadow  mt-5 p-4">
          <p className="text-center text-info fw-bold h2 mb-5">Farmer List</p>
          <table className="table table-hover align-middle ">
            <thead>
              <th>User Name</th>
              <th>Place</th>
              <th>Phone No.</th>
              <th>State</th>
            </thead>
            <tbody className="">
              <tr >
                <td>Pune</td>
                <td>12 June</td>
                <td>10:00 AM</td>
                <td>
                    <button className="btn btn-primary" onClick="edit(product.id)">View Details</button>
                    <button className="btn btn-danger ms-3" onClick="delete(product.id)">Delete User</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  )
}

export default Viewfarmer