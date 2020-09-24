import React from 'react';


function Todo() {

    const [items, setItems] = React.useState( ['ye','lol'] );
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

     function duplicateItem(e){

        var array = items;

        for (var i = 0; i < array.length; i++){
            if(e !== array[i]){
                items.push(e);
                setItems( array );
            }
        }
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
                    <button onClick={ event => duplicateItem(input)}> Confirm </button>

                    {/*
                    <button onClick={ event => setItems( items.duplicateItem(input) ) }> Confirm </button>
                    */}
                
                    <button disabled={!setItems} > Disabled </button>
                
            
           
        </div>
    )
};

export default Todo;