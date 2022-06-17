import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import AppComtext from '../context/AppContext';
import icon from "@icons/bt_add_to_cart.svg"

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppComtext)

	const handleClick = item => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={icon} alt="Agregar al carrito" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;