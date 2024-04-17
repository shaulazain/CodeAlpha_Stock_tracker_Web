import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid';
import './styles.css'
import List from '../List';

export default function TabsComponents({coins}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "white",
    "& .Mui-selected": {
      color: "#3a80e9 !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };
  
  


  return (
    <div>
      <TabContext value={value}>
        <div >
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="1"  sx={style} />
            <Tab label="List" value="2"  sx={style} />
          </TabList>
        </div>
        <TabPanel value="1">
            <div className='grid-flex'>
               {coins.map((coin , i) =>{
                return <Grid coin={coin} key={i}/>
               
               })}
            </div>
        </TabPanel>
        <TabPanel value="2">
        <table className='list-table'>
               {coins.map((item , i) =>{
                return  <List coin={item} key={i}/>
            
               })}
            </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}