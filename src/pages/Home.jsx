import React from 'react';
import { useEffect, useState }  from 'react';
import Card from '../components/Card';
import Filter from '../components/Filter';
import Pagination from '../components/pagination';
import Loading from '../components/Loading';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const productsPerPage = 10;

useEffect(() => {
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json(); 
            setProducts(data.products);

            const uniqueCategories = [...new Set(data.products.map(p => p.category))];
            setCategories(uniqueCategories);
        } catch (err) {
            console.error("Faild to fetch products:", err);
        } finally {
            setLoading(false);
        }
    };
        fetchProducts();
    }, []);

    //toggle selected category
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
        prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
    setPage(1);
  } 

    //filter products bt selected categories
    const filteredProducts = products.filter((p) => 
        selectedCategories.length > 0 ? selectedCategories.includes(p.category): true
    )
    .filter((p) => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );   

// page related
    const indexOfLast = page * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(products.length/ productsPerPage);

    const handleResetFilters = () => {
        setSelectedCategories([]);
        setSearchTerm('');
        setPage(1);
    }    

    return ( 
    <div> 
       <div className='flex gap-6'>
        {/*filter left*/}
        <div className='w-1/4'>

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

       <div className='w-5/4'>
               <h3 className='text-2xl font-bold mb-8'> Product List </h3>
       {loading ? <Loading/> : (
        <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {currentProducts.map(product => (
                <Card key= {product.id} product={product}/>
            ))}
        </div>

        <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        />
        </> 
       )}
       </div>
    </div>
    </div>
    );
};

export default Home;