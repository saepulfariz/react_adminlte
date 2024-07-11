import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const fetchProducts = async (searchQuery = "") => {
    setLoading(true);
    try {
      // const response = await axios.get("https://dummyjson.com/products");
      // setProducts(response.data.products);
      // setLoading(false);

      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    // return <div>Loading...</div>;
    return "";
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(query);
  };

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
              <div className="col-md-3">
                <form onSubmit={handleSearch} className="mb-4">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="form-control"
                  />
                  <button type="submit" className="btn btn-primary mt-2">
                    Search
                  </button>
                </form>
              </div>
            </div>
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
