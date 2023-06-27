
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"

const CountUpCards = ({title, end}) => {
    const [count, setCount] = useState(null)

    const ref = useRef(0)

    const counting = end / 200

    const updateCount = () => {
        if(ref.current < end ) {
            const result = Math.ceil(ref.current + counting)
            if(result > end) return setCount(end)
            setCount(result)
            ref.current = result
        }
        setTimeout(updateCount, 50)
    }

    useEffect( () => {
        let isCounted = true
        if(isCounted) {
            updateCount()
        }
        return () => {
            isCounted = false
        }
    }, [end])

    return ( <div>
        <h1>{count}</h1>
        <p>{title}</p>
    </div> );
}
CountUpCards.propTypes = {
    title: PropTypes.string.isRequired,
    end: PropTypes.number.isRequired,
}
export default CountUpCards;
