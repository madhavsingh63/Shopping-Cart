import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true)
    try {
      let res = await fetch(API_URL);
      let data = await res.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log("Error in Api Call")
    }
    setLoading(false)
  }


  useEffect(() => {
    fetchProductData();
  },[])

  return (
    <div className="  max-w-6xl  flex items-center justify-center  p-2 mx-auto">
      {
        loading ? <Spinner/> :
        posts.length > 0 ? 
        ( <div className=" min-h-[80vh] max-w-6xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-10  mx-auto space-x-5 ">
          {
            posts.map( (post) => (
              <Product key={post.id} post={post}/>
            ))
          }
        </div>) :
        (
          <div className=" min-h-[70vh] flex justify-center items-center text-green-600 font-semibold text-2xl ">
            No Product Available
          </div>
        )
      }
    </div>
  );
};

export default Home;
