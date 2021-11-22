import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import Language from '../../languages/Language';
import './Menu.css';
import Logo from './../../img/db1-logo.png';
export default function Menu(props){
    const lang = props.lang;
    const history = useHistory();
    const [language,setLanguage] = useState(true)
    useEffect(()=>{
        if(JSON.stringify(Language)!==JSON.stringify(lang)){
            console.log("mudou");
            if(language){
                setLanguage(false);
            }else{
                setLanguage(true);
            }
        }
    },[language]);
    
    return (
        <div className="menu" id="menu">
            <img className="logo" src={Logo} alt="logo"/>
                {props.options.map((option,index)=>(
                    option.routeText!==''?
                        <MenuItem option={option} key={index} lang={lang}/>
                    :
                        <MenuItem returnPage={true} key={index} lang={lang} />
                ))}
        </div>
    );
}
