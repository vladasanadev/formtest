import React, {useState} from 'react';
import bg from '../../assets/img-bgs/bg-2.jpg'
import img from "../../assets/img-bgs/bg-1.jpg";
import bg1 from "../../assets/bg-forms/section_2-svg_1.svg";
import bg2 from "../../assets/bg-forms/section_2-svg_2.svg";
import bg3 from "../../assets/bg-forms/section_2-svg_3.svg";
import {Col, Container, Row} from "react-bootstrap";
import Button from "../Button/Button";
import Input from "../Input/Input";
import nameSvg from "../../assets/icons/first-name_icon.svg"
import secNameSvg from "../../assets/icons/second-name_icon.svg"
import countrySvg from "../../assets/icons/country_icon.svg"
import phoneSvg from "../../assets/icons/phone_icon.svg"
import paswdSvg from "../../assets/icons/password_icon.svg"
import confirmPaswSvg from "../../assets/icons/confirm-password_icon.svg"
import checkSvg from "../../assets/icons/check_icon.svg"
import emailSvg from "../../assets/icons/email_icon.svg"
import Select from "../Select/Select";

const Form = ({data}) => {
    const [country, setCountry] = useState(data.countries[0].name);
    const [phoneNum, setPhoneNum] = useState(data?.countries.find(el => el.name === country).code + "");
    return (
        <div className={"intro-wrapper"}>
            <div className={'introform-svg-container'}>
                <img src={bg1} className={'form-one-bg'}/>
                <img src={bg2} className={'form-two-bg'}/>
                <img src={bg3} className={'form-three-bg'}/>
            </div>
            <div style={{ backgroundImage:`url(${bg})`}} className={'intro-form-img '}>
                <Container>
                    <Row xs={12} lg={6} style={{border: "1px solid red"}} className={'justify-content-center'}>
                        <Col  xs={12} lg={6} style={{border: "1px solid brown"}}
                        className={"my-col"}
                        >
                            <p className={'form-title'}><span className={'intro-highlight'}>Sign Up</span> and find the best place to rest while traveling</p>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={3}
                             className={"my-col"}
                        >
                           <Input
                               labelFor={'forName'}
                               placeholder='First Name' inputHandler={()=> {console.log('add input logic error')}} svg={nameSvg} type={'text'}/>
                        </Col>
                        <Col xs={12} lg={3} className={"my-col"} >
                            <Input
                                labelFor={'forSecName'}
                                placeholder='Second Name' inputHandler={()=> {console.log('add input logic error')}} svg={secNameSvg} type={'text'}/>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={3} className={"my-col"}>
                            <Select
                                svg = {countrySvg}
                                data={data?.countries} onChange={(e)=> {setCountry(e.target.value)
                               setPhoneNum(data?.countries.find(el => el.name === country).code + " ")

                            }}  />

                        </Col>
                        <Col xs={12} lg={3} className={"my-col"}>
                            {console.log(country, data?.countries.find(el => el.name === country))}
                           <Input
                               labelFor={'forPhone'}
                               placeholder={"Phone"}
                               svg={phoneSvg}
                               value={phoneNum}
                               onChange={(e)=> {setPhoneNum(e.target.value)}}


                           />
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={3} className={"my-col"}>
                            <Input
                                labelFor={'forPsw'}
                                placeholder='Password' inputHandler={()=> {console.log('add input logic error')}} svg={paswdSvg} type={'password'}/>

                        </Col>
                        <Col xs={12} lg={3} className={"my-col"}>

                            <Input
                                labelFor={'forCPsw'}
                                placeholder='Confirm Password' inputHandler={()=> {console.log('add input logic error')}} svg={confirmPaswSvg} type={'password'}/>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={3} className={"my-col"}>
                            <Input
                                labelFor={'forEmail'}
                                placeholder='Email' inputHandler={()=> {console.log('add input logic error')}} svg={emailSvg} type={'email'}/>
                        </Col>
                        <Col xs={12} lg={3} className={"my-col"}>
                            <input type={"checkbox"}/>
                            <p>I agree to the Terms & Conditions</p>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={6} className={"my-col"}>
                            <Button style={""} text={"Sign Up"}/>

                        </Col>
                    </Row>
                </Container>


            </div>
            
        </div>
    );
};

export default Form;