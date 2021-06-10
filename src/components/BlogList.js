const BlogList = ({ blogs, title }) => {

    // Method #2 we can use props within the arguement above

    // Passing props down 
    // const blogs = props.blogs;
    // const title = props.title;

    // log out the data
    // console.log(props,blogs);
   
    
    
    return (
        <div className="blog-list">
            <h2>{ title }</h2><br />
            {blogs.map((x) => (
                // each key must be unique
                <div className="blog-preview" key={x.id}>
                    <h2>{ x.title}</h2>
                    <p>Written by: { x.author }</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;