import OrderList from "./OrderList";
import OrderForm from "./Form1.js";
import { useEffect, useState } from "react"
import{getData,deleteData,postData,putData} from "./api"

function OrderManagement(){
    const [orders, setOrders] = useState([]);
    const [edit, setEdit] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [initialForm, setForm] = useState({ customername: '', orderdate: '' , status:''})
    useEffect(() => {
        getAllOrders();
    }, [])

    async function getAllOrders() {
        const response = await getData();
        setOrders(response.data);
    }
    async function addOrder(order) {
        let data = {
            customername: order.customername,
            orderdate: order.orderdate,
            status: order.status,
        }
        if (edit)
            await putData(order.id, data);
        else
            await postData(data);
        getAllOrders();
        setOpenForm(false);


    }
    async function deleteOrder(id) {
        await deleteData(id);
        getAllOrders();
    }

    function editOrder(value) {
        setEdit(true);
        setOpenForm(true);
        setForm(value)

    }
    function closeForm() {
        setOpenForm(false)
    }
    function showForm() {
        setForm({ customername: '', orderdate: '', status: '' })
        setOpenForm(true);
        setEdit(false);

    }

    return(
        <center>

        <div className="wrapper m-5 w-50">
            <h2 className="text-primary text-center">order Management</h2>
            <button className="btn btn-primary float-end" onClick={() => { showForm() }}>Add new</button>
            <OrderList products={orders} deleteProduct={deleteOrder} editProduct={editOrder}></OrderList>
            {openForm && <OrderForm add={addOrder} data={initialForm} close={closeForm}></OrderForm>}
        </div>
        </center>
    )
}

export default OrderManagement;
