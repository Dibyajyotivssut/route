import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import "../design/homepage.css"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  async function fetchdata() {
    setloading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setposts(data);
    } catch (error) {
      console.log(error);
    }
    setloading(false);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  // const l = posts.length;

  return <div className="home">{loading?<Spinner/>:<div className="grid xsm: grid-cols-1sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh ] ">{posts.map((post)=>(<Product key={post.id} post={post} />))}</div>}</div>;
};

export default Home;
