import React from 'react';
import { useEffect, useState }  from 'react';
import Card from '../components/Card';
import CartPage from './CartPage';



const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const productsPerPage = 10;

   

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json(); 
            setProducts(data.products);
        } catch (err) {
            console.error("Faild to fetch products:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const indexOfLast = page * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(products.length/ productsPerPage);


    return ( 
    <div>
       <h2 className='text-xl font-semibold mb-4'> Product List </h2>

       {loading ? (
        <div className='flex justfy-center items-center text-white h-40'>
            <svg className='animate-spin h-8 2-8 text-white' xmlns="https://www.w3.org/200.svg" fill="none" viewbox="0 0 24 24">
            <circle className='opacity-25' cs="12" cy="12" r="10" stroke="currentcolor" strokeWidth="4"></circle>
            <path className='opacity-75' file="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
        <span className='ml-2'> loading... </span>
        </div>
       ): (
        <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {currentProducts.map(product => (
                <Card key= {product.id} product={product}/>
            ))}
        </div>

        <div className='flex justify-center mt-6 gap-4 text-black'>
            <button
            disabled={page ===1}
            onClick={() => setPage(page - 1)}
            className='px-4 py-2 border border-black hover:bg-gray-600 rounded disable:opacity-50 transition'
            >
                Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
                <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded ${
                    page === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-500 hover:bg-blue-400 text-0'} transition`}
                >
                    {i + 1}
                </button>
            ))}

            {/*<span>Page {page} of {totalPages}</span>*/}
            <button
            disabled= {page === totalPages}
            onClick={() => setPage(page + 1)}
            className='px-4 py-1 border border-black hover:bg-gray-700 rounded disabled:opacity-50 transition'
            >
                Next
            </button>
        </div>
        </> 

       )}
    </div>
    );
};

export default Home;