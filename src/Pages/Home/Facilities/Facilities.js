import React, { useEffect, useState } from 'react';

const Facilities = () => {


    const [facilities, setFacilities] = useState([]);
    useEffect(() => {
        fetch('./facilities.json')
            .then(res => res.json())
            .then(data => setFacilities(data));
    }, []);



    return (
        <div className='doctors-container container'>
            <h1>Our Facilities</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>

                {
                    facilities.map((facility) => (
                        <div className='col doctor-div'>
                            <div className='doctors-img'>
                                <img src={facility.img} alt="" />
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">{facility.name}</h5>
                                <p class="card-text">{facility.description.slice(0, 120)}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Facilities;