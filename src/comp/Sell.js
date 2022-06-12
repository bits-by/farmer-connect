import React from 'react'

const Sell = () => {
  return (
    <div className="container seller mt-4">
        <p className="seller-heading"> Selling Offer</p>
        <table className="table">
            <thead>
                <th>#</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Offer Price</th>

            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Wheat</td>
                    <td>260 kg</td>
                    <td>28 Rupee</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Sell