import React from 'react';

function SignUp() {

    return (
        <div>
            <h1> SignUp </h1>
            <form>
                <input type="text" placeholder="email"/> 
                <input type="text" placeholder="password" /> 
                <input type="text" placeholder="confirm password" /> 
                
            </form>
            
            <form>
                <button type = "submit" > Confirm </button>
             </form>
             
        </div>
    )
};

export default SignUp;