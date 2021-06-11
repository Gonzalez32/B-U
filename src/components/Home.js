import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // This is our DATA!
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Hokeki', author: 'bob', id:1 },
        {title: 'my life is up and down', body: 'Hokeki', author: 'juan', id:2 },
        {title: 'life is short', body: 'Hokeki', author: 'bob', id:3 },
    ])

    // This function will create an new array with our Data(id) above
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            {/* {blogs.map((x) => (
                // each key must be unique
                <div className="blog-preview" key={x.id}>
                    <h2>{ x.title}</h2>
                    <p>Written by: { x.author }</p>
                </div>
            ))} */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;