import { layout } from '../components/Layouts/layoutTemplate';
import { PersonPlusFill } from "react-bootstrap-icons";
import useAuth from '../Auth/UseAuth';

const userCredentials = {}; 

const RegisterPage = () => {

    const { login } = useAuth(); 

    return (
        <div class={layout.mainClass}>
            <div class={layout.mainRow}>
                <div class={layout.mainCol}>
                    <div class={layout.cardTitleMain}>
                        <div class={layout.cardTitleBody}>
                            <h4 class={layout.cardTitleText}> <PersonPlusFill color="#172c45" size="30"/> Sign Up</h4>
                        </div>
                    </div>
                    <div class={layout.cardContentMain}>
                        <div class={layout.cardContentBody}>         

                            <form >
                                <div class="mb-4">
                                    <img className="" src="img/hellobuild-logo.png" alt="Avatar" class="avatar"/>
                                    <br/>
                                </div>
                                <div class="form">                                    
                                    <label className="mb-2 " for="uname"><b>Username</b></label>
                                    <br/>                                                                        
                                    <input className="mb-2 rounded ps-2" type="text" placeholder="Enter Username" name="uname" required/>
                                    <br/>
                                    <label className="mb-2 " for="psw"><b>Password</b></label>
                                    <br/>
                                    <input className="mb-2 rounded ps-2" type="password" placeholder="Enter Password" name="psw" required/>
                                    <br/>
                                    <label className="mb-2 " for="psw"><b>Confirm Password</b></label>
                                    <br/>
                                    <input className="mb-2 rounded ps-2" type="password" placeholder="Confirm Password" name="psw" required/>
                                    <br/>
                                    <button 
                                        class={layout.cardContentButton}
                                        onClick={() =>{
                                            login(userCredentials);
                                        }}>Register 
                                    </button>
                                </div>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    )
};

export default RegisterPage;