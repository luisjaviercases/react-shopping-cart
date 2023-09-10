import PropTypes from 'prop-types';

const Description = ({ product }) => {
  const renderCameraProperties = (cameraType, renderElement) => {
    return (
      <li>
        <span>{cameraType}:</span>
        <ul className='pl-4'>
          {Array.isArray(renderElement) ? (
            renderElement.map((element) => <li key={element}>{element}</li>)
          ) : (
            <li>{renderElement}</li>
          )}
        </ul>
      </li>
    );
  };

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
      {product?.primaryCamera && renderCameraProperties('Primary camera', product.primaryCamera)}
      {product?.secondaryCmera && renderCameraProperties('Secondary camera', product.secondaryCmera)}
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
