import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Viewfarmerinfo = () => {

  const [users,setUsers] = useState([]);

  return (
      <>
     
     <div className="card shadow  mt-5 p-4">
          <p className="text-center text-info fw-bold h2 mb-5">Farmer Info</p>
          <table className="table table-hover align-middle ">
            <thead>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>State</th>
              <th>District</th>
            </thead>
            <tbody>
                    {users.length > 0 ? (
                        users.map((user, i) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.quantity}</td>
                                <td>{user.price}</td>
                                <td>{user.action}</td>         
                                
                                
                                <td className="text-left">
                                    < Button
                                        variant='danger'
                                        // onClick={() => handleDelete(user.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No users</td>
                        </tr>
                    )}
                </tbody>
          </table>
        </div>

   
    </>
  )
}

export default Viewfarmerinfo