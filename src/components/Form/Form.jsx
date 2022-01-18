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
import {validEmail, validPassword} from "../../utils/Regex";


const Form = ({data}) => {
    const [country, setCountry] = useState(data.countries[0].name);
    const [phoneNum, setPhoneNum] = useState('');


    const [hasError, setHasError] = useState(false);
    const [secNameHasError, setSecNameHasError] = useState(false);
    const [selectedValueHasError, setSelectedValueHasError] = useState(false);
    const [countryHasError, setCountryHasError] = useState(false);
    const [phHasError, setPhHasError] = useState(false);
    const [pswHasError, setPswHasError] = useState(false);
    const [confPswHasError, setConfPswHasError] = useState(false);
    const [emailHasError, setEmailHasError] = useState(false);
    const [checkBoxHasError, setCheckBoxHasError] = useState(false);


    const [checked, setChecked] = useState(false);
    const [nameInputValue, setNameInputValue] = useState('');
    const [secNameInputValue, setSecNameInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [pswValue, setPswValue] = useState('');
    const [confPswValue, setConfPswValue] = useState('');
    const [emailValue, setEmailValue] = useState('');


    return (
        <div className={"intro-wrapper"}>
            <div className={'introform-svg-container'}>
                <img src={bg1} className={'form-one-bg'}/>
                <img src={bg2} className={'form-two-bg'}/>
                <img src={bg3} className={'form-three-bg'}/>
            </div>
            <div style={{backgroundImage: `url(${bg})`}} className={'intro-form-img '}>
                <Container>
                    <Row xs={12} lg={6} style={{border: "1px solid red"}} className={'justify-content-center'}>
                        <Col xs={12} lg={6} style={{border: "1px solid brown"}}
                             className={"my-col"}
                        >
                            <p className={'form-title'}><span className={'intro-highlight'}>Sign Up</span> and find the
                                best place to rest while traveling</p>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={3}
                             className={"my-col p-3"}
                        >
                            <Input
                                error={"The name must be more than 2 characters"}
                                hasError={hasError}
                                onChange={(e) => {
                                    setNameInputValue(e.target.value)
                                    if (e.target.value.length > 2 || e.target.value.length === 0) {
                                        setHasError(false);
                                    } else {
                                        setHasError(true);
                                    }
                                }
                                }
                                value={nameInputValue}
                                labelFor={'forName'}
                                labelClass={nameInputValue ? "inputNotEmpty label" : "label"}
                                placeholder='First Name' onClick={(e) => {
                            }} svg={nameSvg} type={'text'}/>
                        </Col>
                        <Col xs={12} lg={3} className={"my-col p-3"}>
                            <Input
                                error={"Second name must be more than 2 characters"}
                                hasError={secNameHasError}
                                onChange={(e) => {
                                    setSecNameInputValue(e.target.value)
                                    if (e.target.value.length > 2 || e.target.value.length === 0) {
                                        setSecNameHasError(false);
                                    } else {
                                        setSecNameHasError(true);
                                    }
                                }
                                }
                                value={secNameInputValue}
                                labelClass={secNameInputValue ? "inputNotEmpty label" : "label"}
                                labelFor={'forSecName'}
                                placeholder='Second Name'
                                svg={secNameSvg} type={'text'}/>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={3} className={"my-col p-3"}>
                            <Select
                                onChange={(e) => {
                                    setSelectedValue(e.target.value)
                                    selectedValue ? setSelectedValueHasError(false) : setSelectedValueHasError(true)
                                }}
                                error={"Fill in the field"}
                                hasError={selectedValueHasError}
                                svg={countrySvg}
                                data={data?.countries}
                                onChange={(e) => {
                                    setCountry(e.target.value)
                                    setPhoneNum(data?.countries.find(el => el.name === country).code + " ")

                                }}/>

                        </Col>
                        <Col xs={12} lg={3} className={"my-col p-3"}>
                            <Input
                                // required={required}
                                value={phoneNum}
                                hasError={hasError}
                                onChange={(e) => {
                                    setPhoneNum(e.target.value)
                                    if (e.target.value.length !== 0) {
                                        setPhHasError(false);
                                    } else {
                                        setPhHasError(true);
                                    }
                                }
                                }

                                labelClass={phoneNum ? "inputNotEmpty label" : "label"}
                                error={"Fill in the field"}
                                labelFor={'forPhone'}
                                placeholder={"Phone"}
                                svg={phoneSvg}
                                value={phoneNum}

                            />
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={3} className={"my-col p-3"}>
                            <Input
                                hasError={pswHasError}
                                onChange={(e) => {
                                    setPswValue(e.target.value)
                                    if (!validPassword.test(e.target.value)) {
                                        setPswHasError(true)
                                    } else {
                                        setPswHasError(false);
                                    }

                              console.log(validPassword.test(e.target.value.toString()), e.target.value)
                                }
                                }
                                value={pswValue}
                                labelClass={pswValue ? "inputNotEmpty label" : "label"}
                                error={"Password must have 1 letter, 1 number and one symbol"}
                                labelFor={'forPsw'}
                                placeholder='Password'
                                svg={paswdSvg} type={'password'}/>

                        </Col>
                        <Col xs={12} lg={3} className={"my-col p-3"}>

                            <Input
                                hasError={confPswHasError}
                                onChange={(e) => {
                                    setConfPswValue(e.target.value)
                                    if (e.target.value === pswValue) {
                                        setConfPswHasError(false)
                                    } else {
                                        setConfPswHasError(true);
                                    }
                                    console.log(e.target.value, pswValue,e.target.value === pswValue )
                                }
                                }
                                value={confPswValue}
                                labelClass={confPswValue ? "inputNotEmpty label" : "label"}
                                error={"Password does not match"}
                                labelFor={'forConfPsw'}
                                placeholder='Confirm Password'
                                svg={confirmPaswSvg} type={'password'}/>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={3} className={"my-col p-3"}>
                            <Input
                                hasError={emailHasError}
                                onChange={(e) => {
                                    setEmailValue(e.target.value)
                                    if (!validEmail.test(emailValue)) {
                                        setEmailHasError(true)
                                    } else {
                                        setEmailHasError(false);
                                    }
                                }
                                }
                                value={emailValue}
                                labelClass={emailValue ? "inputNotEmpty label" : "label"}
                                error={"Email is not correct"}
                                labelFor={'forEmail'}
                                placeholder='Email' svg={emailSvg} type={'email'}/>
                        </Col>
                        <Col xs={12} md={12} sm={12} lg={3} className={"my-col p-3 form-checkbox-wrap"}>
                            <label className="form-checkbox-text">
                                <input
                                    onChange={() => {
                                        setChecked(prev => !prev)
                                    }}
                                    checked={checked}
                                    // style={{backgroundImage: `url(${stroke})`}}
                                    type={"checkbox"} className="form-checkbox"/>

                                <p className={"form-paragraph"}><span className={'form-span'}> I agree to the</span>
                                    <span className={'form-highlight'}> Terms & Conditions</span></p>
                            </label>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center'}>
                        <Col xs={12} lg={6} className={"my-col p-3"}>
                            <Button style={"form-btn"} text={"Sign Up"}/>

                        </Col>
                    </Row>
                </Container>
                <footer>
                    <p className={"footer-text"}>
                        If you have an account, <span className={'form-highlight'}><a href={"#"}>Log In</a></span>
                    </p>
                </footer>


            </div>

        </div>
    );
};

export default Form;