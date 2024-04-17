import React, { useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoins from '../components/ComparePage/SelectCoins'
import SelectDays from '../components/Coin/SelectDays'
import { settingCoinObject } from '../functions/settingCoinObject'
import { settingChartData } from '../functions/settingChartData'
import { getCoinData } from '../functions/getCoinData'
import { getPrices } from '../functions/getPrices'
import { useEffect } from 'react'
import List from '../components/Dashboard/List'
import Info from '../components/Coin/CoinInfo'

const Compare = () => {
  
  const [crypto1 , setCrypto1] = useState("bitcoin")
  const [crypto2 , setCrypto2] = useState("ethereum");
  const [crypto1Data , setCrypto1Data] = useState({});
  const [crypto2Data , setCrypto2Data] = useState({});
  const [loading, setLoading] = useState(false);
  const [priceType, setPriceType] = useState("Prices")


  const [days,setDays] = useState(30);
  function handleDaysChange (event){
    setDays(event.target.value)
  }


  useEffect(()=>{
    getData();
  },[]);

  async function getData() {
    setLoading(true);
    let coinData1 = await getCoinData(crypto1);
    let coinData2 = await getCoinData(crypto2);

    if(coinData1){
      settingCoinObject(setCrypto1Data , coinData1);
     
    }

    if(coinData2){
      settingCoinObject(setCrypto1Data , coinData1);
    
    }

    if(coinData1 && coinData2){
      const prices1 = await getPrices(crypto1, days, priceType);
      const prices2 = await getPrices(crypto2, days, priceType);

      if (prices1.length > 0 && prices2.length > 0) {
    //  settingChartData(setChartData , prices) 

    console.log("BOTH PRICES FETCHED", prices1,prices2)
        setLoading(false)
        
      }
    }


  }


  const handleCoinChange = async (e,isCoin2) => {
    setLoading(true)
    if(isCoin2){
      setCrypto2(e.target.value);
      let coinData = await getCoinData(e.target.value);
  
      settingCoinObject(setCrypto2Data , coinData);  
    }else{
     setCrypto1(e.target.value);
     let coinData = await getCoinData(e.target.value);
       settingCoinObject(setCrypto1Data , coinData);
    }

    const prices1 = await getPrices(crypto1, days, priceType);

    const prices2 = await getPrices(crypto2, days, priceType);
    
    if (prices1.length > 0 && prices2.length > 0) {
      //  settingChartData(setChartData , prices) 
  
      console.log("BOTH PRICES FETCHED", prices1,prices2)
          setLoading(false)
          
        }
    
  }

  

      

  return (
    <div>
      <Header/>
      <div className='coin-days-flex'>
      <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange}/>

      <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true}/>

      </div> 

       
      <div className='grey-wrapper'>
      <List coin={crypto1Data}  />
      </div>

       
      <div className='grey-wrapper'>
      <List coin={crypto1Data}  />
      </div>


      <Info title={crypto1Data.name} desc={crypto1Data.desc} />
      <Info title={crypto2Data.name} desc={crypto2Data.desc} />



    </div>
  )
}

export default Compare