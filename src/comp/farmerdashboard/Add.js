import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';


const Add = () => {
  const [crops,setCrops] = useState([]);


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <>
      <div className="container" id="add">
        {/* add crop form */}
        <div className="card shadow p-3">
          <div className="container add-crop">
            <p className="text-center h2 fw-bold">Add Crop</p>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group mb-3">
                  <label for="exampleInputEmail1">Crop Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""
                  {...register("crop name", {
                    required: "Required",
                    validate: (value) => value !== "admin" || "Nice try!",
                  })}
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="quantity">Quantity</label>
                  <input type="number" class="form-control" id="quantity" placeholder=""
                  {...register("quantity", {
                    required: "Required",
                    validate: (value) => value !== "admin" || "Nice try!",
                  })}
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Price</label>
                  <input type="number" class="form-control"  id="exampleInputPassword1" placeholder=""
                  {...register("price", {
                    required: "Required",
                    validate: (value) => value !== "admin" || "Nice try!",
                  })}
                  />
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
      </div>
    </>
  );
};

export default Add;
