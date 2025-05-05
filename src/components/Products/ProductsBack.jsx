import { Link } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";

function ProductsBack () {
    return (
        <Link to={PRODUCTS} class="btn bg-danger">Назад</Link>
    );
}

export default ProductsBack;