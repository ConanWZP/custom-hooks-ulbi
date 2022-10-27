import React, {useRef} from 'react';
import {useHover} from "../hooks/useHover";

/*
const Hover = () => {

    const ref = useRef()
    const isHovering = useHover(ref)
    console.log(isHovering)

    return (
        <div ref={ref} style={{width: '200px', height: '300px', background: isHovering ? 'red' : 'green'}}>
            <button onClick={() => {
                console.log(ref.current)}}>Click</button>
            
        </div>
    );
};

export default Hover;*/




const Hover = () => {

    const divka = useRef();

    const isHovering = useHover(divka);

    return (
        <div ref={divka} style={{width: 200, height: 200, background: isHovering ? 'green' : 'red'}}>

        </div>
    );
};

export default Hover;