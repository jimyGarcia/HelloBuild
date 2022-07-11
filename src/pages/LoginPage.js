import { useLocation } from "react-router-dom";
import useAuth from "../Auth/UseAuth";
import { layout } from '../components/Layouts/layoutTemplate';
import {FilePersonFill } from "react-bootstrap-icons";

const userCredentials = {};

const LoginPage = () => {
    
    const { login } = useAuth(); 
   
    return (
        <div className={layout.mainClass}>
            <div className={layout.mainRow}>
                <div className={layout.mainCol}>
                    <div className={layout.cardTitleMain}>
                        <div className={layout.cardTitleBody}>
                            <h4 className={layout.cardTitleText}>  <FilePersonFill color="#172c45" size="30"/> Login </h4>
                        </div>
                    </div>
                    <div className={layout.cardContentMain}>
                        <div className={layout.cardContentBody}>
                            <form>
                                <div className="mb-4">
                                    <img className="" src="img/hellobuild-logo.png" alt="Avatar"/>
                                    <br/>
                                </div>
                                <div className="form">                                    
                                    <label className="mb-2" for="uname"><b>Username</b></label>
                                    <br/>                                                                        
                                    <input className="mb-2 rounded ps-2" type="text" placeholder="Enter Username" name="uname" required/>
                                    <br/>
                                    <label className="mb-2" for="psw"><b>Password</b></label>
                                    <br/>
                                    <input className="mb-2 rounded ps-2" type="password" placeholder="Enter Password" name="psw" required/>
                                    <br/>
                                    <button 
                                        className={layout.cardContentButton}
                                        onClick={() =>login(userCredentials)}>Login 
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

export default LoginPage;