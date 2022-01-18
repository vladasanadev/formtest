import React from 'react';
import {LogoIcon, SectionOne, SectionThree, SectionTwo} from "../Icons";
import Button from "../Button/Button";
import img from '../../assets/img-bgs/bg-1.jpg'
import {Col, Container, Row} from "react-bootstrap";
import bg1 from '../../assets/bg-forms/section_1-svg_1.svg'
import bg2 from '../../assets/bg-forms/section_1-svg_2.svg'
import bg3 from '../../assets/bg-forms/section_1-svg_3.svg'


const Intro = () => {
    return (
        <div className={"intro-wrapper"}>
            <div className={'intro-svg-container'}>
                <img src={bg1} className={'section-one-bg'}/>
                <img src={bg2} className={'section-two-bg'}/>
                <img src={bg3} className={'section-three-bg'}/>
            </div>
            <div style={{backgroundImage: `url(${img})`}} className={'intro-bg-img'}>
                <Container>
                    <Row className={'justify-content-center'}
                         style={{border: "1px solid blue"}}>
                        <Col xs={12} lg={6} style={{border: "1px solid red", maxWidth: '649px', width: "100%"}}>
                            <div className={"main-typography"}>
                                <LogoIcon classname={"main-logo"}/>
                                <h1 className={"intro-header"}>Find the <span
                                    className={'intro-highlight'}>best place</span><br/>
                                    <span className={'intro-highlight'}>to rest</span> while traveling</h1>
                                <Button text={'Registration'} style={'btn-registration'}/>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};


export default Intro;