import { useEffect, useState } from 'react';
import './scrollUp.css'

const ScrollUp = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
let className = 'button '
   if (showTopBtn) {
   className += 'show'
   } 

   const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};



    return (
      

            <button onClick={goToTop} id="button" className={className}>
            <span class="icon is-small">
            <i class="fa-solid fa-angles-up"></i>
            </span>
                </button>



                
        
    );
};

export default ScrollUp;