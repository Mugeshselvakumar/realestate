import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css'; 

export default function Home() {
  const [localStorageItem, setLocalStorageItem] = useState('');

  useEffect(() => {
    console.log('useEffect is running');

    const itemFromLocalStorage = localStorage.getItem('username');

    console.log('Item from local storage:', itemFromLocalStorage);

    if (itemFromLocalStorage) {
      setLocalStorageItem(itemFromLocalStorage);
    }
  }, []); 

  console.log('localStorageItem state:', localStorageItem);
  return (
    <>
      <Navbar />
      <div className="homecontainer" style={{ backgroundImage: `url("https://img.pikbest.com/backgrounds/20190718/real-estate-black-background-minimalist-style-poster-banner_1899077.jpg!sw800")` }}>
        <p>
          <br>
          </br>
          <br></br>
          <br></br>
          <br></br>
          <center>Hello {localStorageItem},<br></br> <br></br>welcome to 'RealEstate Company'<br></br><br></br> where your
          dream home meets reality. Your journey to finding the perfect home
          starts here!</center>
        </p>
      </div>
    
      <Footer />
    </>
  );
}
