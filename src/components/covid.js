import React, { useEffect, useState } from 'react';
import './covid.css';

function Covid() {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const apiData = await fetch('https://data.covid19india.org/data.json');
            const actualData = await apiData.json();
            // console.log(actualData.statewise);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>

            <section className='container'>
                <h1>🔴 LIVE</h1>
                <h2>Live Covid-19 Tracker</h2>

                <ul className='cards'>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner color-1">
                                <p className="card__name"><span> OUR </span>COUNTRY</p>
                                <p className="card__total card__small">INDIA</p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner color-5">
                                <p className="card__name"><span> TOTAL </span>ACTIVE</p>
                                <p className="card__total card__small">{data.active}</p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner color-4">
                                <p className="card__name"><span> TOTAL </span>DEATH</p>
                                <p className="card__total card__small">{data.deaths}</p>
                            </div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner color-2">
                                <p className="card__name"><span> TOTAL </span>RECOVERED</p>
                                <p className="card__total card__small">{data.recovered}</p>
                            </div>
                        </div>
                    </li>

                    {/* <li className="card">
                        <div className="card__main">
                            <div className="card__inner color-3">
                                <p className="card__name"><span> TOTAL </span>CONFIRMED</p>
                                <p className="card__total card__small">{data.confirmed}</p>
                            </div>
                        </div>
                    </li> */}

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner color-6 card__height">
                                <p className="card__name"><span> LAST </span>UPDATED</p>
                                <p className="card__total card__small">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>


                </ul>
            </section>

        </>
    )
}

export default Covid