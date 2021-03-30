import React, {useState} from 'react'
import Sidebar from '../components/Slidebar/index'
import Navbar from '../components/Navbar/index'
import HeroSection from '../components/HeroSection/index'
import InfoSection from '../components/InfoSection/index'
import {homeObjOne,homeObjTwo,homeObjThree} from '../components/InfoSection/Data'
import Footer from '../components/Footer/index'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
