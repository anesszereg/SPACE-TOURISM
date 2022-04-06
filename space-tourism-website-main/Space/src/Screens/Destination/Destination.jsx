import React, {useState} from 'react'
import './Destination.css'
import {destination} from '../../data.js'
import styled from 'styled-components'

const DestinationSlide = styled.div`
display: flex;
transition: all 0.5s ease-in-out;
transform: translateX(${(props) => props.NextStation * -100}vw);
position: relative;
margin-top: 100px; 
gap:100px
height: 545px;
`

function Destination() {

    const [NextStation, setNextStation] = useState(0)


    const nextSlides = (planet) => {
        if (planet === "moon") {
            setNextStation(NextStation < 0 ? NextStation + 1 : 0)
        } else {
            if (planet === "mars") {
                setNextStation(NextStation < 1 ? NextStation + 1 : 1)
            } else {
                if (planet === "europa") {
                    setNextStation(NextStation < 1 ? NextStation + 2 : 2)
                } else {
                    if (planet === "titan") {
                        setNextStation(NextStation < 0 ? NextStation + 1 : 3)
                    }
                }
            }
        }
    }


    return (
        <div className='destination-container'>

            <DestinationSlide NextStation={NextStation} >
                {
                destination.map((item, index) => (
                    <div className="destination-content" key={index}>
                        <div className="destination-left">

                            <div className="destination-title">
                                <h3>
                                    <b>01 </b>
                                    PICK YOUR DESTINATION</h3>
                            </div>
                            <div className="destination-image">
                                <img src={
                                        item.image
                                    }
                                    alt=""/>
                            </div>
                        </div>
                        <div className="destination-right">
                            <div className="station">
                                <span style={
                                        NextStation === 0 ? {
                                            color: '#fff',

                                        } : {
                                            color:'#8891a9'
                                        }
                                    }
                                    onClick={
                                        () => {
                                            nextSlides('moon')
                                        }
                                }>MOON</span>
                                <span style={
                                        NextStation === 1 ? {
                                            color:'#fff'
                                            
                                        } : {
                                            color:'#8891a9'
                                        }
                                    }
                                    onClick={
                                        () => {
                                            nextSlides('mars')
                                        }
                                }>MARS</span>
                                <span style={
                                        NextStation === 2 ? {
                                            color:'#fff'
                                           
                                        } : {
                                            color:'#8891a9',
                                        }
                                    }
                                    onClick={
                                        () => {
                                            nextSlides('europa')
                                        }
                                }>EUROPA</span>
                                <span style={
                                        NextStation === 3 ? {
                                            color:'#fff'
                                            
                                        } : {
                                            color:'#8891a9'
                                        }
                                    }
                                    onClick={
                                        () => {
                                            nextSlides('titan')
                                        }
                                }>TITAN</span>
                            </div>
                            <div className="destination-info">
                              <div className="destination-name">{
                                item.name
                              }</div>
                              <div className="destination-description">{
                                item.description
                              }</div>

                            </div>
                            <div className="line"></div>
                            <div className="destination-infoUnderLine">
                                <div className="distance-container">
                                    <h3> AVG. DISTANCE</h3>
                              <div className="distance">
                                {
                                  item.distance.toUpperCase()
                                }
                              </div>
                                </div>
                                <div className="duration-container">
                                    <h3> EST. TRAVEL TIME</h3>
                              <div className="duration">
                                {
                                  item.travel.toUpperCase()}
                                  </div>
                                </div>
                                  </div>
                            


                        </div>
                    </div>
                ))
            } </DestinationSlide>


        </div>


    )
}


export default Destination
