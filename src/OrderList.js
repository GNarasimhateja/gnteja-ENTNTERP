function OrderList({ orders, deleteOrder, editOrder}) {
    return (
        <table className='table m-3 '>
            <thead>
                <tr>
                    <th>id</th>
                    <th>CustomerName</th>
                    <th>orderdate</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((data) => (
                        <tr key={data.id} >
                            <td>{data.id}</td>
                            <td>{data.customername}</td>
                            <td>{data.orderdate}</td>
                            <td>{data.status}</td>
                            <td>
                                <button className='btn btn-primary m-1' onClick={() => editOrder(data)}>Edit</button>
                                <button className="btn btn-danger m-1" onClick={() => deleteOrder(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )



};

export default OrderList;
