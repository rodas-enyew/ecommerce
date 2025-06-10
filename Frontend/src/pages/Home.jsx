import React from "react";
import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Pagination from "../components/pagination";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const productsPerPage = 10; //keeps the pagination logic clear

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);

        const uniqueCategories = [
          ...new Set(data.products.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Faild to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []); //'[]' to run only once

  //manages the selection and deselection of product category filtering
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>  //'prev' a param used to compute new state
      prev.includes(category) //checks is this cat already selected or not
        ? prev.filter((cat) => cat !== category) //if yes, remove from the list
        : [...prev, category] //if no add it
    );
    setPage(1);
  };

  //filters products by selected categories
  const filteredProducts = products
    .filter((p) =>
      selectedCategories.length > 0  
        ? selectedCategories.includes(p.category) //if selectedCat is one or more include the products that match
        : true     //if not return all the products
    )
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // page related
  const indexOfLast = page * productsPerPage;  //calculates last index of the prod on the current page
  const indexOfFirst = indexOfLast - productsPerPage; //finds the first index
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast); //returns from first up to but not including last
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage); // prevents empty pages from showing
 
  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
    setPage(1);
  };

  return (
    <div>
      <div className="flex gap-5">
        {/*filter left*/}
        <div className="w-1/4">
          <Filter
            categories={categories}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleResetFilters={handleResetFilters}
          />
        </div>

        {/*producct to the right*/}

        <div className="w-4/4">
        <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-3xl px-2 py-2 border border-gray-200 rounded-xl focus:outline-2 focus:ring-2 focus:ring-green-500"
        />
      </div>
          <h3 className="text-2xl font-bold mb-6"> Product List </h3>
          {loading ? (
            <Loading />
          ) : (
            <>
              <ProductList products={currentProducts} />

              <Pagination
                currentPage={page}
                totalPages={totalPages} //num of pages based on filtered products
                onPageChange={setPage} //updates the page when the user clicks another pge
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
