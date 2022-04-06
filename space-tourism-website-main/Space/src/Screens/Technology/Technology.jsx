import React, {useState} from 'react'
import './Technology.css'
import styled from 'styled-components'
import {technology} from '../../data.js'


const Technologys = styled.div `
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height:100vh;

  transition: all 0.5s ease-in-out;
  transform: translateY(${
    (props) => props.Slider * -100
}vh);

  ` 
  const Span = styled.span `
  display: flex;
  flex-direction: column;
 align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #fff



  ` 
  function Technology() {
    const [Slider, setSlider] = useState(0)
    const plusSlide = (num) => {
        if (num === "1") {
            setSlider(Slider < 0 ? Slider + 1 : 0)
        } else {
            if (num === "2") {
                setSlider(Slider < 1 ? Slider + 1 : 1)
            } else {
                if (num === "3") {
                    setSlider(Slider < 0 ? Slider + 1 : 2)
                }
            }
        }
    }
    return (
        <div className='Technology'>
            <Technologys Slider={Slider}> {
                technology.map((item, index) => (
                    <div className="technology-container"
                        key={index}>
                        <div className="technology-left">
                            <div className="technology-title">
                                <h3>
                                    <b>03  </b>  SPACE LAUNCH 101</h3>
                            </div>
                            <div className="technology-content">
                                <div className="technology-slides">
                                    <Span onClick={()=>plusSlide("1")}
                                        style={
                                            Slider ===0 ? {

                                                background: "#fff",
                                                color: "#000"
                                            } : {
                                                background: "transparent",
                                                color: '#fff'

                                            }
                                    }>
                                        1
                                    </Span>
                                    <Span onClick={()=>plusSlide("2")}
                                        style={
                                            Slider === 1 ? {

                                                background: "#fff",
                                                color: "#000"
                                            } : {
                                                background: "transparent",
                                                color: '#fff'

                                            }
                                    }>
                                        2
                                    </Span>
                                    <Span onClick={()=>plusSlide("3")}
                                        style={
                                            Slider === 2 ? {

                                                background: "#fff",
                                                color: "#000"
                                            } : {
                                                background: "transparent",
                                                color: '#fff'

                                            }
                                    }>
                                        3
                                    </Span>
                                </div>
                                <div className="technology-info">
                                    <div className="title">
                                        THE TERMINOLOGY ...
                                    </div>
                                    <div className="technology-name">
                                        {
                                        item.name.toUpperCase()
                                    } </div>
                                    <div className="technology-description">
                                        {
                                        item.description
                                    } </div>


                                </div>
                            </div>
                        </div>
                        <div className="technology-right">
                            <div className="technology-image">
                                <img src={
                                        item.image
                                    }
                                    alt=""
                                    id='imageTech'/>
                            </div>
                        </div>
                    </div>


                ))
            } </Technologys>
        </div>
    )
}
export default Technology
