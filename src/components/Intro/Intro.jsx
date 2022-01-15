import React from 'react';
import bgImg from '../../assets/img-bgs/bg-1.jpg'
import {LogoIcon} from '../Icons'
import Button from "../Button/Button";

const Intro = () => {
    return (
        <div className={'intro-wrapper'}>
            <div style={{backgroundImage: `url(${bgImg})`}} className={'intro-bg-img'}>
                <LogoIcon/>
                <h1>Find the <span className={'intro-highlight'}>best place</span><br/>
                    <span className={'intro-highlight'}>to rest</span> while traveling</h1>
                <Button text={'Registration'} style={'btn-registration'}/>

            </div>

        </div>
    );
};

export default Intro;