import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Settings = () => {

    const [Settings,setSettings] = useState(
        {
            '--background-color':'#fff',
            '--background-light':'#fff',
            '--shadow-color':'rgba(0,0,0,0.2)',
            '--primary-color':'rgba(255,0,86)',
            '--text-color':'#0A0A0A',
            '--text-light':'#575757',
            '--font-size':'16px',
            '--animation-speed':'1'
    }
    )

    useEffect(()=>{
        const root = document.documentElement;
        for (let key in Settings){
            root.style.setProperty(key,Settings[key])
        }
    },[Settings])

    const [theme, setTheme] = useState("light");

    const themes = [
        {
            '--background-color':'#fff',
            '--background-light':'#fff',
            '--shadow-color':'rgba(0,0,0,0.2)',
            '--text-color':'#0A0A0A',
            '--text-light':'#575757',
        },
        {
            '--background-color':'rgb(29,29,29)',
            '--background-light':'rgb(77,77,77)',
            '--shadow-color':'rgba(0,0,0,0.2)',
            '--text-color':'#ffffff',
            '--text-light':'#eceaea',
        }
    ]

    const changeTheme = (i)=>{
        const _theme ={...themes[i]};
        setTheme(i === 0 ? "light" : "dark");

        //update Settings
        let _settings ={...Settings}
        for(let key in _theme){
            // console.log(key , _theme[key])
            _settings[key] = _theme[key]
            // console.log(_settings[key])
            setSettings(_settings)
        }
    }

    const ChangePrimaryColor = (i)=>{
        const _color = primaryColors[i];
        let _settings ={...Settings};
        _settings["--primary-color"] = _color;
        setprimarycolor(i);
        setSettings(_settings)
    }

    const ChangeFontSize = (i)=>{
        const _size = fontSizes[i];
        let _settings ={...Settings};
        _settings["--font-size"] = _size.value;
        setFontSize(i);
        setSettings(_settings)
    }

    const ChangeAnimationSpeed = (i)=>{
        const _speed = AnimartionSpeeds[i];
        let _settings ={...Settings};
        _settings["--animation-speed"] = _speed.value;
        setAnimationSpeed(i);
        setSettings(_settings)
    }

    const primaryColors = [
        "rgba(255,0,86)",
        "rgba(33,150,243)",
        "rgba(255,193,7)",
        "rgba(0,200,83)",
        "rgba(156,39,176)",
    ]
    const [primarycolor, setprimarycolor] = useState(0);


    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ]
    const [fontSize, setFontSize] = useState(1);

    const AnimartionSpeeds =[
        {
            title: "Slow",
            value: 2
        },
        {
            title: "Medium",
            value: 1
        },
        {
            title: "Fast",
            value: 0.5
        }
    ]
    const [AnimationSpeed,setAnimationSpeed] = useState(1)
    return (
        <div>
            <div className="section d-block">
                <h2>Primary theme </h2>
                <div className="options-container">
                    <div className="option light" onClick={()=>{changeTheme(0)}}>
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={()=>{changeTheme(1)}}>
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Preferd Color</h2>
                <div className="options-container">
                    {
                        primaryColors.map((color, index) => {
                            return (
                                <div key={index} className="option light" style={{ backgroundColor: color }} onClick={()=>{ChangePrimaryColor(index)}}>
                                    {primarycolor === index && (
                                        <div className="check">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                    )}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">
                    {
                        fontSizes.map((Speed, index) => {
                            return (
                                <button key={index} className='btn' onClick={()=>{ChangeFontSize(index)}}>
                                        {Speed.title}
                                    {
                                        fontSize === index && (
                                           <span>
                                               <FontAwesomeIcon icon={faCheck} />
                                           </span> 
                                        )
                                    }
                                </button>
                            )
                        })
                    }

                </div>
            </div>
            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">
                    {
                        AnimartionSpeeds.map((size, index) => {
                            return (
                                <button key={index} className='btn' onClick={()=>{ChangeAnimationSpeed(index)}}>
                                        {size.title}
                                    {
                                        AnimationSpeed === index && (
                                           <span>
                                               <FontAwesomeIcon icon={faCheck} />
                                           </span> 
                                        )
                                    }
                                </button>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Settings
