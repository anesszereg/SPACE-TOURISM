import React, {useState} from 'react'
import './Crew.css'
import styled from 'styled-components'
import {crew} from '../../data.js'
// import bg from '../../assets/crew/background-crew-desktop.jpg'


const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.slideindex * -100}vw);
  height: 545px;
  position: relative;
`;

function Crew() {

    const [slideindex, setSlideIndex] = useState(0)

    const plusSlides = (n) => {
        if (n === "1") {
            setSlideIndex(slideindex < 0 ? slideindex + 1 : 0)

        } else {
            if (n === "2") {
                setSlideIndex(slideindex < 0 ? slidendex + 1 : 1)
            } else {
                if (n === "3") {
                    setSlideIndex(slideindex < 1 ? slideindex + 2 : 2)
                } else {
                    if (n === "4") {
                        setSlideIndex(slideindex < 0 ? slideindex + 1 : 3)
                    }
                }
            }
        }
    }


    return (
        <div className='Container-crew'>
            {/* <div className="background">
                <img src={bg} alt="" />
            </div> */}
            
                <Wrapper
                    slideindex={slideindex}>
                    {
                    crew.map((item, index) => (


                        <div className="slider"
                            key={index}>
                            <div className="crew-info">
                                <div className="crew-title">
                                    <h3>
                                        <b>02  </b>
                                        MEET YOUR CREW
                                    </h3>
                                </div>
                                <div className="crew-content">
                                    <div className="crew-role">
                                        {
                                        item.role.toUpperCase()
                                    }</div>
                                    <div className="crew-name">
                                        {
                                        item.name.toUpperCase()
                                    } </div>

                                </div>
                                <div className="crewBioContainer">
                                    <div className="crewBio">
                                        {
                                        item.bio
                                    } </div>
                                </div>
                            </div>
                            <div className="crew-image">
                                <img src={
                                        item.image
                                    }
                                    alt="" id='img'/>
                            </div>


                        </div>
                    ))
                } </Wrapper>
            

            <div className="slider-dot">
            <span
            style={
                 slideindex === 0
                ? { background: "#fff" }
                : { background: "rgba(225, 225, 225, 0.5)" }
            
             
            }
            onClick={() => {
              plusSlides("1");
            }}
          ></span>
          <span
            style={
              slideindex === 1
                ? { background: "#fff" }
                : { background: "rgba(225, 225, 225, 0.5)" }
            }
            onClick={() => {
              plusSlides("2");
            }}
          ></span>
          <span
            style={
              slideindex === 2
                ? { background: "#fff" }
                : { background: "rgba(225, 225, 225, 0.5)" }
            }
            onClick={() => {
              plusSlides("3");
            }}
          ></span>
          <span
            style={
              slideindex === 3
                ? { background: "#fff" }
                : { background: "rgba(225, 225, 225, 0.5)" }
            }
            onClick={() => {
              plusSlides("4");
            }}
          ></span>
            </div> </div>
    )
}

export default Crew
