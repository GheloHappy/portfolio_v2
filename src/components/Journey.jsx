import '../css/journey.css'
import { useRef } from "react";
import { useInView } from 'framer-motion';
import { slideAnim } from './animations/Animations';

const Journey = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="journey-page" id='journey'>
            <div className='journey-left'>
                <h2 ref={ref}
                    style={slideAnim(isInView, 2)} >My Journey</h2>
            </div>
            <div className='journey-right'>
                <div className='journey-right-inner'>
                    <div className='journey-right-inner-details'>
                        <span className='dot'></span>
                        <div className='journey-right-inner-details-texts'>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                        </div>
                        <span className='dot'></span>
                        <div className='journey-right-inner-details-texts'>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey;