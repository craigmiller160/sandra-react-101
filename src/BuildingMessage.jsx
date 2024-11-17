import {useState} from 'react';

export const BuildingMessage = () => {
    console.log('Rendering building message');

    const [partOne, setPartOne] = useState('');
    const [partTwo, setPartTwo] = useState('');

    let rawPart1 = '';
    let rawPart2 = '';


    const updatePartOne = (text) => {
        setPartOne((previousPartOne) => text);
        // rawPart1 = text;
    }

    const updatePartTwo = (text) => {
        setPartTwo((previousPartTwo) => text);
        // rawPart2 = text;
    }

    const fullMessage = partOne + partTwo;

    return (
        <div>
            <h2>Building a Message</h2>
            <div>
                <label htmlFor="partOne">Part One: </label>
                <input
                    onChange={(e) => updatePartOne(e.target.value)}
                    value={partOne}
                    id="partOne" type="text" name="partOne"/>
            </div>
            <div>
                <label htmlFor="partTwo">Part Two: </label>
                <input
                    onChange={(e) => updatePartTwo(e.target.value)}
                    value={partTwo}
                    id="partTwo" type="text" name="partTwo"/>
            </div>
            <div>
                <p>Full Message: {fullMessage}</p>
            </div>
        </div>
    )
}