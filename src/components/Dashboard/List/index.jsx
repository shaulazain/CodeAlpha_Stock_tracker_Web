import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from "@mui/material";
import { convertNumber } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';



const List = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
        <Tooltip title="coin logo">
        <td className="td-img">
            <img src={coin.image} alt="" className='coin-logo' />
            </td>
            </Tooltip>
            <td  className='td-info'>
            <div className='name-col'>
                <p className='coin-symbol td-p'>{coin.symbol}</p>
                <p className="coin-name td-p">{coin.name}</p>
            </div>
        </td>
        <Tooltip title=" Price Change In 24 hours">

          {coin.price_change_percentage_24h >  0 ? (
        <td >
          <div className="chip-flex">

            <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className='chip-icon td-chip-icon'>
                <TrendingUpRoundedIcon/>
            </div>
          </div>
        </td>
        ): (
              <td >
                <div className="chip-flex">
              <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
              <div className='chip-icon red td-chip-icon'>
                <TrendingDownRoundedIcon/>
              </div>
              </div>
          </td>
        )}
        </Tooltip>
        <Tooltip title="Curent price">
            <td >
            <h3 className='coin-price td-center-align' style={{color: coin.price_change_percentage_24h < 0 ? "#f94141" : "#61c96f"}}>${coin.current_price.toLocaleString()}</h3>

            </td>
            </Tooltip>

            <Tooltip title="Total volume">
              
              <td>

        <p className='total_volume td-totalVolume'>{coin.total_volume.toLocaleString()}</p>
              </td>
              </Tooltip>

            <Tooltip title="Market Cap">
              <td className='desktop-td-mkt'>  
                <p className='total_volume'>{coin.market_cap.toLocaleString()}</p>
              </td>
            </Tooltip>


              <Tooltip title="Market Cap">
              <td className='mobile-td-mkt'>        
                  <p className='total_volume'>
                    {convertNumber(coin.market_cap)}
                    </p>
              </td>
              </Tooltip>

    </tr>
    </Link>
  )
}

export default List