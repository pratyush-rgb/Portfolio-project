import React from 'react'
import './Services.css'
import Services_Data from '../../assets/serviceData';
import arrow from '../../assets/arrow.png'
const Services = () => {
  return (
    <div id="services" className="Service">
      <div className="ser-title">
        <h1>My Services</h1>
      </div>
      <div className="ser-container">
        {Services_Data.map((s, i) => {
          return (
            <div key={i} className="Ser-format">
              <h3>{s.s_no}</h3>
              <h2>{s.s_name}</h2>
              <p>{s.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
  
}

export default Services;