import {
    DASHBOARD,
    PRODUCTS,
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    DETAIL_PRODUCT,
    DELETE_ORDER,
    DETAIL_ORDER,
    ORDERS,
    HELP
} from "./consts";

import Dashboard from "../pages/Dashboard";
import CreateProduct from "../components/Products/CreateProduct";
import DeleteProduct from "../components/Products/DeleteProduct";
import UpdateProduct from "../components/Products/UpdateProduct";
import Products from "../pages/Products";
import DetailProduct from "../components/Products/DetailProduct";
import Orders from "../pages/Orders";
import DetailOrder from "../components/Orders/DetailOrder";
import DeleteOrder from "../components/Orders/DeleteOrder";
import Help from "../pages/Help";

export const routes = [
    {
        path: DASHBOARD,
        element: Dashboard
    },
    {
        path: PRODUCTS,
        element: Products
    },
    {
        path: CREATE_PRODUCT,
        element: CreateProduct
    },
    {
        path: DELETE_PRODUCT,
        element: DeleteProduct
    },
    {
        path: UPDATE_PRODUCT,
        element: UpdateProduct
    },
    {
        path: DETAIL_PRODUCT,
        element: DetailProduct
    },
    {
        path: PRODUCTS,
        element: Products
    },
    {
        path: ORDERS,
        element: Orders
    },
    {
        path: DETAIL_ORDER,
        element: DetailOrder
    },
    {
        path: DELETE_ORDER,
        element: DeleteOrder
    },
    {
        path: HELP,
        element: Help
    }

    
]

