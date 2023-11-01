import '../css/journey.css'
import { useRef } from "react";
import { useInView } from 'framer-motion';
import { slideAnim } from './animations/Animations';
import {
    journeyTitles,
} from './infos/JourneyInfo';

const Journey = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="journey-page" id='journey'>
            <div className='journey-left'>
                <h2 ref={ref}
                    style={slideAnim(isInView, 1)} >My Journey</h2>
            </div>
            <div className='journey-right'>
                <div className='journey-right-inner'>
                    <div className='journey-right-inner-details'>
                        {journeyTitles.map((title, index) => (
                            <div key={index} className='journey-right-inner-detail'>
                                <span className='dot'></span>
                                <div className='journey-right-inner-detail-texts'
                                style={ slideAnim(isInView, index * 10)}>
                                    <h3>{title.title} - {title.date}</h3>
                                    <h4>{title.company}</h4>
                                    <h5>{title.address}</h5>

                                    {title.details.map((detail, index) => (
                                        <div key={index}>
                                            <p>- {detail.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey;