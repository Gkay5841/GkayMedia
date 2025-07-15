import React from 'react';

const Home = () => {
  return (
    <>
      <div>
        <h1 className="Logo mx-30 relative top-215   font-bold text-4xl text-blue-300">Gkay</h1>
      </div>

      <div className='Navbar'>
        <div className="nav-cont mt-205">
          <ul className="nav-link flex justify-center items-center gap-50">
            <a href="#"><img src="/images/Home.png" width={"40px"} alt="" /></a>
            <a href="#"><img src="/images/Buyutec.png" width={"40px"} alt="" /></a>
            <a href="#"><img src="/images/Create.png" width={"40px"} alt="" /></a>
            <a href="#"><img src="/images/Chat.png" width={"40px"} alt="" /></a>
            <a href="#"><img src="/images/Profile.png" width={"40px"} alt="" /></a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;