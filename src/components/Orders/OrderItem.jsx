import { Link } from "react-router-dom";
import { DELETE_ORDER, DETAIL_ORDER } from "../../utils/consts";

function OrderItem ({order}) {

    function formatDateTime(isoString) {
        if (!isoString) return'';
        const options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        }

        return new Date(isoString).toLocaleString('kk-KZ', options)
    }
    return(
        <tr>
            <td>{order.id}</td>
            <td>{order.customer.name} {order.customer.phone}</td>
            <td>{formatDateTime(order.orderTimeStamp)}</td>
            <td colSpan="3" class="actions-category" style={{border: "none "}}>
                <Link to={DETAIL_ORDER.substring(0, DETAIL_ORDER.length - 3) + order.id} class="btn bg-success">Смотреть</Link>
                <Link to={DELETE_ORDER.substring(0, DELETE_ORDER.length - 3) + order.id} class="btn bg-danger">Удалить</Link>
            </td>
        </tr>
    );
}

export default OrderItem;