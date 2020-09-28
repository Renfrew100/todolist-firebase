import React from 'react';

function SignIn() {


    function onSubmit (event ) {

    
    };

    return (
        <div>
            <h1> SignIn </h1>
            <form onSubmit={ onSubmit() } >

                <input type="text" placeholder="email"  />
                <input type="text" placeholder="password" />

                <button type = "submit" > Confirm </button>
             </form>

            
        </div>
    )
};
export default SignIn;