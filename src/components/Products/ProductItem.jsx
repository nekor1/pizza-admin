import { Link } from "react-router-dom";
import { DELETE_PRODUCT, DETAIL_PRODUCT, PRODUCTS, UPDATE_PRODUCT } from "../../utils/consts";

function ProductItem ({product}) {
    return(
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td colSpan="3" class="actions-category" style={{border: "none "}}>
                <Link to={DETAIL_PRODUCT.substring(0, DETAIL_PRODUCT.length - 3) + product.id} class="btn bg-success">Смотреть</Link>
                <Link to={UPDATE_PRODUCT.substring(0, UPDATE_PRODUCT.length - 3) + product.id} class="btn bg-warning">Изменить</Link>
                <Link to={DELETE_PRODUCT.substring(0, DELETE_PRODUCT.length - 3) + product.id} class="btn bg-danger">Удалить</Link>
            </td>
        </tr>
    );
}

export default ProductItem;