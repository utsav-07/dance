import React, {useState} from 'react'
import Video from '../../video/dance.mp4'
import {Button} from '../ButtonElement'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome</HeroH1>
                <HeroP>
                    Sign up now to get the latest updates and receive notifications.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/signin' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} spy={true} exact='true' offset={-80}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
