import React from 'react'
import { useState } from 'react';

function Selectbox() {
    const countries = [
        {
            "name": "India", "value": "IN", "state": [
                {
                    "name": "Haryana", "cities": [
                        "Faridabad",
                        "Gurgaon",
                        "Hisar",
                        "Rohtak",
                        "Panipat"
                    ]
                },
                {
                    "name": "Tamil Nadu", "cities": [
                        "Chennai",
                        "Coimbatore",
                        "Madurai",
                        "Tiruchirappalli",
                        "Salem"
                    ]
                }]
        },
        {
            "name": "Pakistan",
            "value": "PK",
            "state": [
                {
                    "name": "Karachi",
                    "cities": [
                        "Caranjee",
                        "Crochey",
                        "Krotchey",
                        "Currachee",
                        "Kurrachee"
                    ]
                },
                {
                    "name": "Lahore",
                    "cities": [
                        "Aziz Bhatti Town",
                        "Data Gang Baksh Town",
                        "Iqbal Town",
                        "Nishtar Town",
                        "Ravi Town"
                    ]
                }
            ]
        }

    ];


    const [country, setCountry] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const handleCountry = (e) => {
        setCountry(e.target.value);
        setStates(countries.find(item => item.name === e.target.value).state);
        setCities([])
    }
    const handleState = (e) => {
        debugger
        //setStates(e.target.value);
        setCities(states.find(st => st.name === e.target.value).cities)
    }
    return (
        <>
            <select

                onChange={handleCountry}
            >
                {countries.map((item, index) => <option value={item.name} key={index}>{item.name}</option>)};
            </select >
            {/* State */}
            <select onChange={handleState} >
                {states.length > 0 && states.map((item, index) => <option value={item.name} key={index} >{item.name}</option>)};
            </select>
            {/* cities */}

            <select>
                {cities.length > 0 && cities.map((item, index) => <option value={item} key={index} >{item}</option>)};
            </select>
        </>
    )
}

export default Selectbox