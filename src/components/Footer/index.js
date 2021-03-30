import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialIconLink,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights,SocialIcons} from './FooterElements'
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram} from 'react-icons/fa'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">The Protean Hoofers</FooterLink>
                                <FooterLink to="/">The Philanthropy Hand</FooterLink>
                                <FooterLink to="/">The Phil Harmonic</FooterLink>
                                <FooterLink to="/">The Panache Hub</FooterLink>
                                <FooterLink to="/">The Phonetic House</FooterLink>
                                <FooterLink to="/">Tamasha Pehchan Humari</FooterLink>
                                <FooterLink to="/">The Productive Horde</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">The Protean Hoofers</FooterLink>
                                <FooterLink to="/">The Philanthropy Hand</FooterLink>
                                <FooterLink to="/">The Phil Harmonic</FooterLink>
                                <FooterLink to="/">The Panache Hub</FooterLink>
                                <FooterLink to="/">The Phonetic House</FooterLink>
                                <FooterLink to="/">Tamasha Pehchan Humari</FooterLink>
                                <FooterLink to="/">The Productive Horde</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">The Protean Hoofers</FooterLink>
                                <FooterLink to="/">The Philanthropy Hand</FooterLink>
                                <FooterLink to="/">The Phil Harmonic</FooterLink>
                                <FooterLink to="/">The Panache Hub</FooterLink>
                                <FooterLink to="/">The Phonetic House</FooterLink>
                                <FooterLink to="/">Tamasha Pehchan Humari</FooterLink>
                                <FooterLink to="/">The Productive Horde</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">The Protean Hoofers</FooterLink>
                                <FooterLink to="/">The Philanthropy Hand</FooterLink>
                                <FooterLink to="/">The Phil Harmonic</FooterLink>
                                <FooterLink to="/">The Panache Hub</FooterLink>
                                <FooterLink to="/">The Phonetic House</FooterLink>
                                <FooterLink to="/">Tamasha Pehchan Humari</FooterLink>
                                <FooterLink to="/">The Productive Horde</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            TPH
                        </SocialLogo>
                        <WebsiteRights>TPH © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>            
        </FooterContainer>
    )
}

export default Footer;
