import React, { useEffect, useState } from 'react';

export default function FunctionComponent(props) {
    const [date, setDate] = useState(new Date());
    useEffect(() => { // 相当于class组件的componentDidMount
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer); // 相当于class组件的componentWillUnMount
    }, []); // 执行useEffect的依赖项，[]相当于class组件的componentDidUpdate
 return (
     <div>
         <h1>{props.name}</h1>
         <h1>{date.toLocaleTimeString()}</h1>
     </div>
 );
}