import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectioCard from '../homesectioCard/homeSEctionCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const responsive = {
    0: { items: 2 },
       700: { items: 3.5},
    1024: { items: 4.5 },
  };


const HomeSectionCarsel=({item})=>{
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const PrevButton = ({ onClick }) => (
        <button onClick={onClick} className="prev-button absolute" sx={{position:'absolute',top:'8rem',color:'red', right:'0rem'}} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>
          <ArrowBackIosIcon  className=' z-100       ' sx={{color:'white',transform:" translate(-50%) rotate(180deg)"}} />
        </button>
      );
    
      // Custom next button component
      const NextButton = ({ onClick }) => (
        
        <button onClick={onClick} className="prev-button next-button absolute" sx={{position:'absolute',top:'8rem',color:'red', right:'0rem'}} style={{ display: currentIndex === item?.length  ? 'none' : 'block' }}>
        <ArrowBackIosIcon  className=' z-100       ' sx={{color:'white',transform:" translate(-50%) rotate(0deg)"}} />
      </button>
      );
      const handleSlideChanged = (e) => {
        setCurrentIndex(e.item);
      };

    
        const items = item?.map((product)=><HomeSectioCard {...product}/> );
    return(
        <div className=' relative px-5  '>
          
     <div className="  px-5">
     
     <AliceCarousel
    
    mouseTracking
        items={items}
        
        
       
    
        responsive={responsive}
        
        disableDotsControls
        onSlideChange={handleSlideChanged}
        renderPrevButton={() => <PrevButton />}
        renderNextButton={() => <NextButton />}
      
       
    />
    
</div>
        </div>
   
    )
}
export default HomeSectionCarsel