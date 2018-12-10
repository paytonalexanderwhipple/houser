import React from 'react';
import './House.css';

function House(props) {
    return (
    <div className='House'>
        <img src={props.house.img} className='House-img'/>
        <div className='House-text'>
            <p className='House-item'> PROPERTY NAME:
            {props.house.property_name}
            </p>
            <p className='House-item'> ADDRESS:
            {props.house.address}
            </p>
            <p className='House-item'> CITY:
            {props.house.city}
            </p>
            <p className='House-item'> STATE:
            {props.house.state}
            </p>
            <p className='House-item'> ZIP:
            {props.house.zip}
            </p>
            <p className="House-item"> MONTHLY MORTGAGE:
            {props.house.monthly_mortgage}
            </p>
            <p className="House-item"> DESIRED RENT:
            {props.house.desired_rent}
            </p>
        </div>
        <button className='button House-button' onClick={() => props.deleteHouse(props.house.house_id)}>X</button>
    </div>
    )
}

export default House;