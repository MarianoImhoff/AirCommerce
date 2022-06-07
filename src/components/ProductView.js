import { useLocation } from "react-router";

const ProductView = (props) => {
    const path = useLocation().pathname
    console.log(path)
    return (
        <div>hola</div>
    )
}

export default ProductView;