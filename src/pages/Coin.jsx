import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import { useParams } from 'react-router-dom';
import Loader from '../components/Common/Loader';
import { settingCoinObject } from '../functions/settingCoinObject';
import List from '../components/Dashboard/List';
import Info from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getPrices } from '../functions/getPrices';
import LineChart from '../components/Coin/LineChart';
import { gettingDate } from '../functions/getDate';
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import ToggleComponents from '../components/Coin/ToggleComponent';


const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({
    id: '',
    name: '',
    symbol: '',
    image: '',
    desc: '',
    price_change_percentage_24h: 0,
    total_volume: 0,
    current_price: 0,
    market_cap: 0,
  });

  useEffect(() => {
    if (id) {
      getData()
    }
  }, [id]);


  async function  getData (){
    let coinData = await getCoinData(id);
    if(coinData){
      settingCoinObject(setCoin , coinData);
      const prices = await getPrices(id, days, priceType);
      if (prices.length > 0) {
     settingChartData(setChartData , prices) 
        setLoading(false)
        
      }
    }
    
    
  }



  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType);
      if (prices.length > 0) {
       settingChartData(setChartData , prices)
        setLoading(false)
        
      }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };


  return (
    <div>
      <Header />
      {loading ? <Loader /> : 
      <>
      <div className='grey-wrapper'>
      <List coin={coin} delay={0.5} />
      </div>
      <div className="grey-wrapper">
        <SelectDays days={days} handleDaysChange={handleDaysChange}/>
        <ToggleComponents priceType={priceType} handlePriceTypeChange={handlePriceTypeChange }/>
        <LineChart chartData={chartData} priceType={priceType}/>
      </div>
      <Info title={coin.name} desc={coin.desc} />
      </>
      
  }
      </div>

  );
};

export default CoinPage;
