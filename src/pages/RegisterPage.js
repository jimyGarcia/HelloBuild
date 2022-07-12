import { layout } from '../components/Layouts/layoutTemplate';
import { PersonPlusFill } from "react-bootstrap-icons";
import useAuth from '../Auth/UseAuth';
import { useEffect, useState } from 'react';

const userCredentials = {}; 

const initialUser = {
    user: '',
    password: '',
    confirmPassword: '',
}

const initialAlert = {type: null, message: null}

const AlertHandler = ({type, message})=> (
    type !== null ? 
    <div className={`alert alert-${type} center`} role="alert">
        {message}
    </div> : 
    null
) 


const RegisterPage = () => {
    const [alert, setAlert] = useState(initialAlert);
    const [user, setUser] = useState(initialUser);
    const [usersList, setUsersList] = useState([]);

    const onInputChange = (e) => {
        setAlert(initialAlert);
        const { name, value } = e.target || {};

        const valueFormated = name === 'user' ? value.toLowerCase() : value;

        setUser({
            ...user,
            [name]: valueFormated,
        });
    }

    const signUp = () =>{

        const uniqueUserValidator = (user) => {
            let userExist = false;

            if(usersList){
                usersList.forEach((existUser)=>{
                    if(existUser===user){ userExist = true};
                })
            } else {
                return false;
            }

            return userExist;
        }
        
        if(user.password && user.user && user.confirmPassword){
            if(user.password === user.confirmPassword){

                const userExist = uniqueUserValidator(user.user);

                if(!userExist){
                    usersList ? 
                    setUsersList(usersList =>[...usersList, user]) :
                    setUsersList([user]);

                    localStorage.setItem('users', JSON.stringify(usersList));

                    setAlert({type: 'success',message: 'The user has been registered correctly'})
                } else {
                    setAlert({type: 'error',message: 'The user already exist'})
                }
                
            } else {
                setAlert({type: 'danger',message: 'Passwords do not match'})
            }
        } else {
            setAlert({type: 'danger',message: 'All fields are required'})
        }

        // login(userCredentials);
    }

    const { login } = useAuth(); 

    useEffect(() => {
        alert.type !== null && 
            setTimeout(
                () => setAlert(initialAlert), 
                2500
            );

    }, [alert.type]);

    useEffect(() => {
        setUsersList(JSON.parse(localStorage.getItem('users')));
    }, []);

    return (
        <div className={layout.mainClass}>
            {console.log('Este es el value del form: ', user)}
            {console.log('Este es el userlist: ', usersList)}
            <div className={layout.mainRow}>
                <div className={layout.mainCol}>
                    <div className={layout.cardTitleMain}>
                        <div className={layout.cardTitleBody}>
                            <h4 className={layout.cardTitleText}> <PersonPlusFill color="#172c45" size="30"/> Sign Up</h4>
                        </div>
                    </div>
                    <div className={layout.cardContentMain}>
                        <div className={layout.cardContentBody}> 
                            <AlertHandler type={alert.type} message={alert.message} />
                            <form>
                                <div className="mb-4">
                                    <img src="img/hellobuild-logo.png" alt="Avatar" className="avatar" />
                                    <br/>
                                </div>
                                <div className="form">                                    
                                    <label className="mb-2 " htmlFor="uname"><b>Username</b></label>
                                    <br/>                                                                        
                                    <input className="mb-2 rounded ps-2" type="text" placeholder="Enter Username" name="user" value={user.user} onChange={onInputChange} required/>
                                    <br/>
                                    <label className="mb-2 " htmlFor="psw"><b>Password</b></label>
                                    <br/>
                                    <input className="mb-2 rounded ps-2" onChange={onInputChange} type="password" placeholder="Enter Password" name="password" value={user.password} required/>
                                    <br/>
                                    <label className="mb-2 " htmlFor="psw"><b>Confirm Password</b></label>
                                    <br/>
                                    <input className="mb-2 rounded ps-2" onChange={onInputChange} type="password" placeholder="Confirm Password" name="confirmPassword" value={user.confirmPassword} required/>
                                </div>
                            </form>
                            <button 
                                className={layout.cardContentButton}
                                onClick={signUp}>Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    )
};

export default RegisterPage;