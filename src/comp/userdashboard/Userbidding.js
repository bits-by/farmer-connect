import React from 'react'

const Userbidding = () => {
  return (
    <div className="card shadow  mt-5 p-4">
    <p className="text-center text-info fw-bold h2 mb-5">Bidding</p>
    <table className="table table-hover align-middle ">
      <thead>
        <th>Place</th>
        <th>Date</th>
        <th>Time</th>
        <th>Action</th>
      </thead>
      <tbody className="">
        <tr >
          <td>Pune</td>
          <td>12 June</td>
          <td>10:00 AM</td>
          <td>
              <button className="btn btn-primary" onClick="edit(product.id)">Edit</button>
              <button className="btn btn-danger ms-3" onClick="delete(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Userbidding