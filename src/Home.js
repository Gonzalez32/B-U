const Home = () => {

    const handleClick = () => {
        console.log('Hello, User! {maybe user name will print here???}');
    }

    return ( 
        <div className="home">
            <h2>HOMEPAGE</h2>
            <button onClick={handleClick}>Click Here</button>
        </div>
     );
}
 
export default Home;