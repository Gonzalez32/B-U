import { useState } from "react";

const Home = () => {

    // name function will go here
    const [name, setName] = useState("bobby");

    const handleClick = () => {
        setName('Jimmy');
    }

    return ( 
        <div className="home">
            <h2>HOMEPAGE</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click Here</button>
        </div>
     );
}
 
export default Home;