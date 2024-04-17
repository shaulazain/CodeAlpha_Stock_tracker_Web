import React, { useState } from 'react'
import Header from '../components/Common/Header';
import TabsComponents from '../components/Dashboard/Tabs/Index';
import { useEffect } from 'react';
import Search from '../components/Dashboard/Search';
import PaginationControlled from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import TopButton from '../components/Common/TopButton';
import { get100Coins } from '../functions/get100Coins';
import Footer from '../components/Common/Footer';

const Dashboard = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setLoading] = useState(true);




  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value)
  }

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  

  useEffect(()=>{
   getData();
  },[])


  const getData = async () =>{
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0 , 10));
      setLoading(false);

    }
  }


  const handlePageChange = (event, value) => {
    setPage(value);
    // Value = new page number
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };
  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Search search={search} handleChange={handleChange} />
          <TabsComponents
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationControlled
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
      <TopButton />
      <Footer/>
    </>
  );
}

export default Dashboard