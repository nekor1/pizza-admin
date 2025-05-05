import { Link } from "react-router-dom";
import ProductList from "../components/Products/ProductList";
import { CREATE_PRODUCT } from "../utils/consts";

function Products () {
    return (
        <section class="block">
            <div class="container">
                <div class="block-header">
                    <h1 class="title">Товары</h1>
                    <Link to={CREATE_PRODUCT} class="btn bg-primary">Создать</Link>
                </div>
                <ProductList />
            </div>
        </section>
    );
}

export default Products;