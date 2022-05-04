import React from 'react';
import '../styles/components/productCard.css';
import PropTypes from 'prop-types';

function ProductCard({ prodData }) {
  const { id, name, price, urlImage } = prodData;
  console.log('\n\n\n EVERY INFO: ', prodData);
  console.log('URL IMAGE', urlImage);

  return (
    <div
      className="cardFrame"
    >
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { `R$${price.replace('.', ',')}` }
      </p>

      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />

      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </p>

      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        REMOVER
      </button>

      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
      />

      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        ADICIONAR
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  prodData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;

// URL IMG NOT WORKING

// ADD AND REMOVE HAVE NO FUCNTIONALITIES SO FAR
