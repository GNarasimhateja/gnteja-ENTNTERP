import ProductList from "./ProductList";
import ProductForm from "./Form";
import { useEffect, useState } from "react"
import{getData,deleteData,postData,putData} from "./api"

function ProductManagement(){
    const [products, setProducts] = useState([]);
    const [edit, setEdit] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [initialForm, setForm] = useState({ name: '', price: '', category: '' , stockquantity:''})
    useEffect(() => {
        getAllProducts();
    }, [])

    async function getAllProducts() {
        const response = await getData();
        setProducts(response.data);
    }
    async function addProduct(product) {
        let data = {
            name: product.name,
            price: product.price,
            category: product.category,
            stockquantity:product.stockquantity
        }
        if (edit)
            await putData(product.id, data);
        else
            await postData(data);
        getAllProducts();
        setOpenForm(false);


    }
    async function deleteProduct(id) {
        await deleteData(id);
        getAllProducts();
    }

    function editProduct(value) {
        setEdit(true);
        setOpenForm(true);
        setForm(value)

    }
    function closeForm() {
        setOpenForm(false)
    }
    function showForm() {
        setForm({ name: '', price: '', category: '' ,stockquantity:'' })
        setOpenForm(true);
        setEdit(false);

    }

    return (
        <center>

        <div className="wrapper m-5 w-50">
            <h2 className="text-primary text-center">Product Management</h2>
            <button className="btn btn-primary float-end" onClick={() => { showForm() }}>Add new</button>
            <ProductList products={products} deleteProduct={deleteProduct} editProduct={editProduct}></ProductList>
            {openForm && <ProductForm add={addProduct} data={initialForm} close={closeForm}></ProductForm>}
        </div>
        </center>

    )

}
export default ProductManagement;

