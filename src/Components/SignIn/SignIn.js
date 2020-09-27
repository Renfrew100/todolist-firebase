import React from 'react';

function SignIn() {

    return (
        <div>
            <h1> SignIn </h1>
            <form>

                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />

            </form>

            <form>
                <button type = "submit" > Confirm </button>
             </form>
            
        </div>
    )
};
export default SignIn;