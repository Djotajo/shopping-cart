import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeImageContainer"></div>
        {/* <img src="https://images.unsplash.com/photo-1517042244917-7498ac155a51?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
        <div className="homeTextContainer">
          <div className="homeText">
            <h1>You want it, we have it</h1>
            <h2>Why go out and be bothered by the elements?</h2>
            <h2>Shop from the comfort of your home!</h2>

            <button className="shopNow">
              <Link to="/shop">Shop Now!</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

// Photo by <a href="https://unsplash.com/@jason_king_york?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason King</a> on <a href="https://unsplash.com/photos/group-of-people-walking-near-the-building-y7Vrg7fb4qo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
