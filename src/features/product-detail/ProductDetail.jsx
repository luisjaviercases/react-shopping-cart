import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <>
      <span>Product detail {id}</span>
    </>
  );
};

export default ProductDetail;
