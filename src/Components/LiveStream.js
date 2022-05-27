import background from './imagee.jpg';
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
const LiveStream = () => {
    const [info, setInfo] = useState({});
    const url = `https://ftapp.lfcww.org/api/Dashboard/togglelivestreamstate`;
    const getInfo = async()=>{
      try {
        const response = await fetch(url);
         const data = await response.json()
         setInfo(data);
      } catch (error) {
          console.error(error);
      } 
    }

    useEffect(()=> {
      getInfo();
    }, []);

    return (
       
       <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Navigation />
       <Container fluid className="height center ">
            <ReactPlayer url={info.LiveStreamUrl} className='border' width='70%' height= '80%'/>
            </Container>
            <p className='information'>Service Title: <span className='span'>{info.LiveStreamTitle}</span></p>
            <p className='information'> Online Worshippers Count: <span className='span'>{info.OnlineUsersCount}</span></p>
        
        <Footer />
       </div>
        
     );
}
 
export default LiveStream;