import {useState} from 'react';


export const CombiningLists = () => {

    const [listOne, setListOne] = useState([]);
    const [newInputOne, setNewInputOne] = useState("");
    const addToList = (text) => {

        setListOne((previousListOne) => {
            setListOne(previousListOne.push(text));

        })
    }
    return (
        <div>
            <h2>Combining Lists</h2>
            <div>
                <label htmlFor="addToListOne">Add to List One: </label>
                <input id="addToListOne" type="text" name="addToListOne" value={newInputOne} onChange={(e) => setNewInputOne(e.target.value)} />
                <button onClick={(e) => addToList(newInputOne)}>Add</button>
            </div>
            <div>
                <label htmlFor="addToListTwo">Add to List Two: </label>
                <input id="addToListTwo" type="text" name="addToListTwo"/>
                <button>Add</button>
            </div>
            <div>
                <h3>List One</h3>
                {listOne && listOne.map((item) => (
                    <div key={item}> {item}</div>
                ))}
            </div>
            <div>
                <h3>List Two</h3>
            </div>
            <div>
                <h3>Combined Lists</h3>
            </div>
        </div>
    );
}