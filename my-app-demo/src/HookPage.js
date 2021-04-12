import React, { useEffect, useState, useMemo, useCallback } from 'react';

export default function Clock() {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(new Date());
    useEffect(() => {
        console.log('effect');
        const timerId = setInterval(() => {
            setCounter(new Date());
        },1000);
        return () => clearInterval(timerId);
    }, []);
    function getValue() {
        let sum = 0;
        for(let i = 0; i < count; i++) {
            sum += i;
        }
        return sum;
    };
    const Memo = useMemo(() => getValue());

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(preCount => preCount + 1)}>count++</button>
            <div>{counter.toLocaleTimeString()}</div>
            <div>{ Memo }</div>
            <div onClick={() => getValue()}>测试</div>
        </div>
    );
}