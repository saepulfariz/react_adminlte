import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await axios.get("https://dummyjson.com/products");
        // setProducts(response.data.products);
        // setLoading(false);

        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    // return <div>Loading...</div>;
    return "";
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
              {products.map((product) => (
                <div key={product.id} className="col-md-4">
                  <div className="card mb-4">
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">
                        <strong>${product.price}</strong>
                      </p>
                      <Link
                        to={`/dashboard/products/${product.id}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
