import pt from './Pt';
import en from './En';
let language = {};
function verifyLaguage(){
    if(document.cookie.includes("Language")){
        const defaultLanguage = document.cookie.slice(9);
        if(defaultLanguage === "pt-BR"){
            language = pt;
        }else{
            language = en;
        }
    }else{
        document.cookie = "Language=english-US";
        verifyLaguage();
    }
}
verifyLaguage();
export default language;

