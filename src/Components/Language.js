import React,{useState} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Switch from 'react-switch'
const switchText={
    display:"flex",
    justifyContent:" center",
    alignItems:"center" ,
    height: "100%",
    color:"#fff",
    fontSize:14,
    paddingRight:2,
    paddingTop:-4,
    backgroundColor: "#fff;"
   
   }

function Language() {

    const [checked,setChecked]=useState(false);
    const [locale, setLocale] = useState("en");
    

    const history = useHistory();
    const handleChange= ()=>{
       
       setChecked(!checked);
       setLocale(checked === true  ? "en" : "ar");
      
     

    }


    if( locale.length === 0)
    {
     
     localStorage.setItem("locale","en");
    //  history.push("/blog?_locale=" +"en" );
    }
    else{
     localStorage.setItem("locale",locale);
     //   setLocale(window.locales.value)
        // history.push("/blog?_locale=" + localStorage.getItem("locale") );
    }


//     console.log(localStorage.getItem("locale"))
// console.log({checked})
// console.log({locale})




    // function setLang() {
    //     setLocale(window.locales.value);
    //     history.push("/blog?_locale=" + window.locales.value);
    // }
    

    return (
        <div>
        <Switch
            
              checked={checked}
              onChange={handleChange}
              onColor={"#6514a0"}
              uncheckedIcon={
                <div style={switchText}>AR</div>
              }
              checkedIcon={
                <div style={switchText}>EN</div>
              }
              boxShadow="0px 1px 5px rgba(0,0,0,0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0,0,0,0.2)"
              handleDiameter={30}
              offHandleColor={"#6514a0"}
              offColor={"#8c4bff"}
              
              
              
              
            />
             {/* <select
                                name="locales"
                                id="locales"
                                onChange={setLang}
                                value={locale}
                            >
                                <option  value="en">English</option>
                                <option value="ar">Arabic</option>
                            </select> */}
            
        </div>
    )
}

export default Language
