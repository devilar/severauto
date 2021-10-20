import React from 'react';
import counter from "./store/counter";
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
    return (
        <div>
            {counter.count}
            <button className='btn' onClick={()=>counter.decrement()}>-</button>
            <button className='btn' onClick={()=>counter.increment()}>+</button>
        </div>
    );
});

export default Counter;