import React from 'react'
import {makeStyles} from "@material-ui/core"
import axios from 'axios';
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
}));
const Carousel = () => {
    const classes = useStyles();

    const [trending, setTrending] = useState([]);
    const { currency} = CryptoState();

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
    
        
        setTrending(data);
      };
      console.log(trending);

      useEffect(() => {
        fetchTrendingCoins();
      }, [currency]);
    
      const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };

  return (
    <div className={classes.carousel}>

<AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />

    </div>
  )
}

export default Carousel

