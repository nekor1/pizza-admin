import { Link } from "react-router-dom";
import CategoryList from "./ProductList";
import { CREATE_PRODUCT } from "../../utils/consts";

function Categories () {
    return(
        <section class="block">
            <div class="container">
                <div class="block-header">
                    <h1 class="title">Товары</h1>
                    <Link to={CREATE_PRODUCT} class="btn bg-primary">Создать</Link>
                </div>
                <CategoryList />
            </div>
        </section>

    );
}

export default Categories;