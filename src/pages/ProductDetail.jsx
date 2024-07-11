import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Products - My AdminLTE</title>
      </Helmet>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Data Products</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h5>{product.title}</h5>
                  </div>
                  <div className="card-body">
                    <img src={product.thumbnail} alt={product.title} />
                    <p>{product.description}</p>
                    <p>
                      <strong>Price:</strong> ${product.price}
                    </p>
                    <p>
                      <strong>Brand:</strong> {product.brand}
                    </p>
                    <p>
                      <strong>Category:</strong> {product.category}
                    </p>

                    <Link
                      to={`/dashboard/products`}
                      className="btn btn-secondary"
                    >
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
