import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Hokeki', author: 'bob', id:1 },
        {title: 'my life is up and down', body: 'Hokeki', author: 'juan', id:2 },
        {title: 'life is short', body: 'Hokeki', author: 'bob', id:3 },
    ])

    return ( 
        <div className="home">
            {/* {blogs.map((x) => (
                // each key must be unique
                <div className="blog-preview" key={x.id}>
                    <h2>{ x.title}</h2>
                    <p>Written by: { x.author }</p>
                </div>
            ))} */}
            <BlogList blogs={blogs} title="All Blogs" /><br /><br />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'bob')} title="Bob Blogs" />
        </div>
     );
}
 
export default Home;