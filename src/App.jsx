import {Counting} from './Counting.jsx';
import {BuildingMessage} from './BuildingMessage.jsx';
import {CombiningLists} from './CombiningLists.jsx';
import {useState} from 'react';

export const App = () => {
    const [count, setCount] = useState(0);
    console.log('App is rendering');
    const updateAppCount = () => setCount((c) => c + 1);
    return (
        <div>
            <h1>React 101</h1>
            <button onClick={updateAppCount}>Re-Render App</button>
            <hr />
            <Counting />
            <hr/>
            <BuildingMessage />
            <hr/>
            <CombiningLists />
        </div>
    )
};