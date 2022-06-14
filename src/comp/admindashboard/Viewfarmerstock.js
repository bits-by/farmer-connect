import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Viewfarmerstock = () => {

  const [crops,setCrops] = useState([]);

  return (
      <>
     
     <div className="card shadow  mt-5 p-4">
          <p className="text-center text-info fw-bold h2 mb-5">Farmer Stock</p>
          <table className="table table-hover align-middle ">
            <thead>
              <th>Crop Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </thead>
            <tbody>
                    {crops.length > 0 ? (
                        crops.map((crop, i) => (
                            <tr key={crop.id}>
                                <td>{crop.name}</td>
                                <td>{crop.quantity}</td>
                                <td>{crop.price}</td>
                                <td>{crop.action}</td>         
                                
                                
                                <td className="text-left">
                                    < Button
                                        variant='danger'
                                        // onClick={() => handleDelete(crop.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No crops</td>
                        </tr>
                    )}
                </tbody>
          </table>
        </div>

   
    </>
  )
}

export default Viewfarmerstock