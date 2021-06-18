import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import './FilterBar.css'

function FilterBar() {
     const [categories,setCategories]=useState([]);
     const endPoint='http://54.220.211.123:1335/categories?_locale=' + localStorage.getItem("locale")
    
    const [show,setShow]=useState(false);
    const showCategory =()=>{
        setShow(!show)
    }

    useEffect(()=>{
        axios.get(endPoint).then(res=>{
            setCategories(res.data);
            

        }).catch(err=>console.log(err))
    },[categories]);

    useEffect(()=>{
        document.addEventListener("mouseup",()=>{setShow(false)});
        
    })

    return (
        <div className="filterBar" >
            <div className="selectWrapper">
                <div className="selects">
                    <div className="btnContainer" >
                        <div className="button" onClick={showCategory} >
                            <span className="shadow"></span>
                            <div className="background">
                                <div className="hoverCircle"></div>
                            </div>
                            <button className="btnLink" >
                                <div className="text" >Categories</div>
                                <svg fill="none" viewBox="0 0 10 6" className="styles_arrow__2ystB"><path fill="#74E4A2" d="M5.06 5.783L.82.299h8.481l-4.24 5.484z"></path></svg>
                            </button>
                        </div>

                    </div>
                    {
                        show ? (
                            <div className="styles-list">
                        <div className="list-background"></div>
                        <ul className="options">
                            {
                            categories.map(cat=>(
                                <li className="item" role="option" tabIndex="0">
                                <span className="box" >
                                    <svg width="8" height="7" fill="#fff" className="styles_checkIcon">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.762 0L3 3.856l-1.763-1.67L0 3.423l3 2.91 5-5.096L6.762 0z"
                                            fill="#fff"
                                        ></path>
                                    </svg>
                                    
                                </span>
                               {cat.name}
                             </li>
                            ))
                            }
                           

                        </ul>


                    </div>
                        ):null
                    }
                  

                </div>

            </div>
            <div className="inputText">
                <input type="text" aria-label="search blog post" placeholder="Search" className="search" />
                <svg viewBox="0 0 14 14" fill="#1d1b84" className="styles_icon__2MJKl">
                    <path
                        clip-rule="evenodd"
                        d="M9.489 10.699a5.99 5.99 0 01-3.547 1.183C2.676 11.882 0 9.22 0 5.95S2.691 0 5.958 0c3.266 0 5.926 2.663 5.926 5.949a5.97 5.97 0 01-1.182 3.55L14 12.785 12.787 14l-3.298-3.301zm.669-4.766a4.211 4.211 0 00-4.216-4.22 4.248 4.248 0 00-4.23 4.236 4.225 4.225 0 004.23 4.22c2.334 0 4.216-1.9 4.216-4.236z"
                    ></path>
                </svg>



            </div>

        </div>
    )
}

export default FilterBar
