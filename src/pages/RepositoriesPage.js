import { layout } from '../components/Layouts/layoutTemplate';
import {useState,  } from "react";
import {Star, StarFill, Github } from "react-bootstrap-icons";
import { reposGit } from '../Helpers/repos';


const RepositoriesPage = () => {

    const [content, setContent] = useState(false);
    const [repos, setRepos] = useState(reposGit);
    const [favoriteChange, setFavoriteChange] = useState(false);
    const [toastMsg, setToastMsg] = useState({
        name: null,
        complement: null
    });

    const showToast = () => {

        var x = document.getElementById("snackbar");

        x.className = "show";

        setTimeout(
            ()=>{ 
                x.className = x.className.replace("show", ""); 
            }, 3000
        );
    }

    const favoriteHandler = (index) => {
        Object(repos)[index].favorite ? 
            Object(repos)[index].favorite = false : 
            Object(repos)[index].favorite = true;
        setFavoriteChange(favoriteChange? false : true);
        let name = Object(repos)[index].name
        let complement = Object(repos)[index].favorite ?
           ' has been successfully selected as a favorite.' : 
           ' has been successfully removed from favorites.' ;
        setToastMsg({
            name: name,
            complement: complement
        });
        showToast();
    }
    return (      
        <div class={layout.mainClass}>
            <div id="snackbar">{'The repository '+toastMsg.name+toastMsg.complement}</div>
            <div class={layout.mainRow}>
                <div class={layout.mainCol}>
                    <div class={layout.cardTitleMain}>
                        <div class={layout.cardTitleBody}>
                            <h4 class={layout.cardTitleText}> <Github color="#172c45" size="30" /> My Repositories </h4>
                        </div>
                    </div>
                    <div class={layout.cardContentMain}>
                        <div class={layout.cardContentBody}>
                                <div className="mb-4">
                                    <img className="logo-rep" src="img/github.png" alt="Avatar" alt="avatar"/>
                                    <br/> 
                                </div>                         
                                <a 
                                    href="#" 
                                    class={layout.cardContentButton}
                                    onClick={()=> {
                                        setContent(false);
                                        setTimeout(
                                            () => {
                                               setContent(true);
                                            }, 
                                            1500
                                        );
                                    }}
                                >
                                    {!content ? 'Get my Repositories' : 'Refresh list'}
                                </a>  
                                <div className={layout.cardContentRow}>
                                    { !content ?  
                                        <label className="p-1 label-repo" >Repositories have not been loaded. </label> :  
                                        repos.map( (repo, index) =>
                                            <div key={index} class={layout.cardContentInter}>                          
                                                <h5>{Object(repo)['name']}</h5>
                                                <h5>{Object(repo)['description']}</h5>
                                                <h5>{Object(repo)['language']}</h5>                                            
                                                <a 
                                                    class={layout.cardContentButtonFav}
                                                    onClick={()=> {
                                                        favoriteHandler(index);
                                                        console.log('Handler index: ', index)
                                                     }}
                                                >
                                                    { Object(repos)[index].favorite ? 
                                                        <StarFill color="#ffc107" size={20} /> : 
                                                        <Star color="" size={20} />
                                                    }
                                                    {console.log('Favorite of index: ', index , 'Object favorite:  ',Object(repos)[index].favorite)}
                                                </a>                                         
                                            </div>                                           
                                        )
                                    }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RepositoriesPage;