import React, {useState} from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

function SignUpForm(props) {

    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    function onSubmit(e) {

        props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firestore database
                return this.props.firebase
                    //setting new user's info into database & creating a new doc for them
                    .db.collection('users').doc(authUser.user.uid).set({
                        email: email,
                        items: [],
                    })
            })
            .then(() => {
                this.setState({
                    email: '',
                    passwordOne: '',
                    passwordTwo: '',
                });
                this.props.history.push("/search");
            })
            .catch(error => {
                this.setState({ error });
            });
        e.preventDefault(); //Prevent reload   
    }

    return (
        <div>
            <h1> SignUp </h1>
            <form onSubmit={e => onSubmit(e)   }>

                <input 
                    type="text" 
                    placeholder="email" 
                    value={email}
                    onChange={ e=> setEmail(e.target.value) }  
                /> 
                <input 
                    type="password"
                    placeholder="Password" 
                    value={passwordOne}
                    onChange={ e => setPasswordOne(e.target.value)} 
                />

                <input 
                    type="new-password"
                    placeholder="Confirm Password" 
                    value={passwordTwo}
                    onChange={e => setPasswordTwo(e.target.value) } 
                /> 
                
                <button type = "submit" > Confirm </button>
             </form>
        </div>
    )
};

const SignUp = compose (
    withFirebase
)(SignUpForm);

export default SignUp;