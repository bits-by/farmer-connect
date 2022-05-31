import React from 'react'

const View = () => {
  return (
    <div className="container">
        <div className4="card " style={{width:400}}>
            <div className="card-body">
                <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Crop Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div class="form-group">
                    <label for="quantity">Quantity</label>
                    <input type="number" class="form-control" id="quantity" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Asking Price</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
        
    </div>
  )
}

export default View