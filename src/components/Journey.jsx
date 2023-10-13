import '../css/journey.css'
import { useRef } from "react";
import { useInView } from 'framer-motion';
import { slideAnim } from './animations/Animations';

const Journey = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="journey-page" id='journey'>
            <h1 ref={ref}
                style={slideAnim(isInView, 2)} >JOURNEY</h1>
        </div>
    )
}

export default Journey;