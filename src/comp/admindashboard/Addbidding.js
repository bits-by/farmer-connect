import React from 'react'

const Addbidding = () => {
  return (
      <>
    <div className="container">
        
        <div className="card " style={{width:400}}>
            <div className="card-body">
                <form>
                    <h2>Bidding Info</h2>
                <div class="form-group">
                    <label for="exampleInputEmail1">Place</label>
                    <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="" />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div class="form-group">
                    <label for="quantity">Date</label>
                    <input type="date" class="form-control" id="" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Time</label>
                    <input type="time" class="form-control" id="" placeholder="" />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
        
    </div>
    <div className="card shadow  mt-5 p-4">
          <p className="text-center text-info fw-bold h2 mb-5">Bidding Info</p>
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
    </>
  )
}

export default Addbidding