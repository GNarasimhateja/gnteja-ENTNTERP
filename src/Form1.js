import { useState } from "react";

function OrderForm(props) {

    const [order, setOrder] = useState(props.data);
    const [sumitted, setSubmitted] = useState(false)

    let changeFormData = (event) => {
        const { name, value } = event.target;
        setOrder({ ...order, [name]: value })
    }
    return (
        <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>customerName:</label>
                    <input className="form-control mt-2" value={order.customername} type="text" name="name" placeholder="Enter CustomerName"
                        onChange={changeFormData} />
                    {
                        sumitted && order.customername.length < 5 && <span className="text-danger">order name must be 5 charecters</span>
                    }

                </div>
                <div className="form-group">
                    <label>OrderDate</label>
                    <input className="form-control mt-2"

                        value={order.orderdate}
                        onChange={changeFormData}

                        type="number" name="price" placeholder="Enter Price" />
                    {
                        sumitted && order.orderdate === "" && <span className="text-danger">Product Price required</span>
                    }
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select className="form-control mt-2" name="Status"

                        value={order.status}

                        onChange={changeFormData}

                    >

                        <option value='-1'></option>
                        <option value={'Booking'}>Booking</option>
                        <option value={'Pending'}>Pending</option>
                        <option value={'Delivered'}>Delivered</option>

                    </select>

                    {
                        sumitted && order.status === "" && <span className="text-danger">Product category required</span>
                    }

                </div>

                <button className="btn btn-primary float-end"

                    onClick={(e) => {
                        setSubmitted(true)
                        e.preventDefault();
                        if (!!order.customername && !!order.orderdate && !!order.status ) {
                            props.add(order)
                        }



                    }}

                >Send</button>
                <button className="btn btn-danger float-end"
                    onClick={(e) => {
                        e.preventDefault();
                        props.close()


                    }}
                >Cancel</button>

            </form>

        </div>
    )
}


export default OrderForm;
