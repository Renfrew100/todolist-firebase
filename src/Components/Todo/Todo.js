import React from 'react';


function Todo() {

    const [items, setItems] = React.useState( [] );
    const [input, setInput] = React.useState( '' );


    function handleChange(e) {
        const value = e.target.value;
        setInput(value);
    }

    function removeItem(e){

        var array = items;

        const index = array.indexOf(e);

        if (index > -1){
            array.splice(index, 1);
        }
        setItems( array );
        console.log(items);

        //Refresh items
    }

    return (
        <div>
            <h1> Todo </h1>

            { items.map (task => (
                <div
                    key={task}
                    value={task} >

                    <p> {task}  
                        <button onClick={e => removeItem(task) }> X </button>
                    </p>

                </div>

            ))}

            <input 
                className="ui input"
                type="text" 
                placeholder="Type your todo here" 
                onChange= { handleChange }
            />
            
            <button onClick={ event => setItems( items.concat(input) ) }> Confirm </button>

        </div>
    )
};

export default Todo;