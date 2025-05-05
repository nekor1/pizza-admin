import { Link, useNavigate, useParams } from "react-router-dom";
import ProductsBack from "./ProductsBack";
import { PRODUCTS } from "../../utils/consts";
import { useEffect, useState } from "react";

function DeleteProduct () {

    const {id} = useParams();
    const navigate = useNavigate

    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            try{
                const res = await a.get(`/products/${id}`);
                console.log(res.data)
                setProduct(res.data);
            }catch(error){
                console.error("Error: ", error)
            }           
        }
        fetchProduct();
    }, [id]);

    async function handleDelete() {
        try{
            await a.delete(`/products/${id}`);
            alert('Товар удален!');
            navigate(PRODUCTS)
        }catch (error) {
            console.error("Error:", error)
        }
    }


    return (
        <section class="block">
            <div class="container">
                <ProductsBack />
                <h1 class="title">Вы действительно хотите удалить товар "{product.name}"?</h1>
                <p class="mb-5">
                    Это действие приведет к потере всех данных, связанных с этими товарами. Пожалуйста, подтвердите свое решение.
                </p>
                <form class="actions-sm" onSubmit={handleDelete}>
                    <button  type="submit" class="btn bg-danger">
                        Да
                    </button>
                    <Link to={PRODUCTS} class="btn bg-primary">
                        Нет
                    </Link>
                </form>
            </div>
        </section>
    );
}

export default DeleteProduct;