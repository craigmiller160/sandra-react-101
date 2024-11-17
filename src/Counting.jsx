import {useState} from 'react';

export const Counting = () => {
    console.log('Counting is rendering');

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const decrement = () => {
        setCounter((prevCounter) => prevCounter - 1 )
    }

    return (
        <div>
            <h2>Counting</h2>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <div>
                <p>Count: {counter}</p>
            </div>
        </div>
    );
}