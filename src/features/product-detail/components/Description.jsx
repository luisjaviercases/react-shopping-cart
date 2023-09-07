import PropTypes from 'prop-types';

const Description = ({ product }) => {
  return (
    <ul className='list-disc pl-4'>
      <li>
        <span>Brand: {product?.brand}</span>
      </li>
      <li>
        <span>Model: {product?.model}</span>
      </li>
      <li>
        <span>Price: {product?.price}</span>
      </li>
      <li>
        <span>CPU: {product?.cpu}</span>
      </li>
      <li>
        <span>RAM: {product?.ram}</span>
      </li>
      <li>
        <span>OS: {product?.os}</span>
      </li>
      <li>
        <span>Display Resolution: {product?.displayResolution}</span>
      </li>
      <li>
        <span>Battery: {product?.battery}</span>
      </li>
      {/* Aquí vienen dos, mostrar en modo lista? <span>Camera: {product?.model}</span>*/}
      <li>
        <span>Dimensions: {product?.dimentions}</span>
      </li>
      <li>
        <span>Weight: {product?.weight}</span>
      </li>
    </ul>
  );
};

Description.propTypes = {
  product: PropTypes.object,
};

export default Description;
