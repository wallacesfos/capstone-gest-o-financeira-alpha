import React from "react"
import {Header} from "../../Components/Header"
import Footer from "../../Components/Footer"
import { Container, DevContainer, DevImg, GeneralContainer, GitHub, LinkedIn } from "./styles"

const AboutUs = () => {

    return (
        <>
        <GeneralContainer>
            <Header />

            <Container>
                <DevContainer>
                    <DevImg src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/p206x206/81450812_2508363366076500_2972721181104275456_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeFExL7BZs4My24eph0M-jOEVfi5xDkgoilV-LnEOSCiKUb91WZ0FsnCWazAKpsOrSyKvy2tk5OQJY6r7Kgldka-&_nc_ohc=u9Nea0ExrCoAX9_ZXwc&_nc_ht=scontent-gru2-2.xx&oh=5ac7dd82894250f47f6ac9972283a1d4&oe=61BAFAA0" />
                    <div>
                        <a href="https://www.linkedin.com/in/aldenivan-j-a58a20113/">
                            <LinkedIn src="https://t.ctcdn.com.br/o6YUYZNxhn1ob0FEjQo-a7KapYU=/400x400/smart/i490027.jpeg"/>
                        </a>
                        
                        <a href="https://github.com/aldenivan">
                            <GitHub src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg"/>
                        </a>

                    </div>
                </DevContainer>
                <DevContainer>
                    <DevImg src="https://ca.slack-edge.com/TQZR39SET-U021U4L14CX-6a1269a29ccb-512" />
                    <div>
                        <a href="https://www.linkedin.com/in/naftalyjunior/">
                            <LinkedIn src="https://t.ctcdn.com.br/o6YUYZNxhn1ob0FEjQo-a7KapYU=/400x400/smart/i490027.jpeg"/>
                        </a>
                        
                        <a href="https://github.com/nafly09">
                            <GitHub src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg"/>
                        </a>
                    </div>
                </DevContainer>
                <DevContainer>
                    <DevImg src="https://ca.slack-edge.com/TQZR39SET-U01UVB6CR4P-d0e68272d400-512" />
                    <div>
                        <a href="https://www.linkedin.com/in/wallace-oliveira-702497209/">
                            <LinkedIn src="https://t.ctcdn.com.br/o6YUYZNxhn1ob0FEjQo-a7KapYU=/400x400/smart/i490027.jpeg"/>
                        </a>
                        
                        <a href="https://github.com/wallacesfos">
                            <GitHub src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg"/>
                        </a>
                    </div>
                </DevContainer>
                <DevContainer>
                    <DevImg src="https://ca.slack-edge.com/TQZR39SET-U01SH3SNV6Y-2b44cb362d44-512" />
                    <div>
                        <a href="https://www.linkedin.com/in/brunodelaval">
                            <LinkedIn src="https://t.ctcdn.com.br/o6YUYZNxhn1ob0FEjQo-a7KapYU=/400x400/smart/i490027.jpeg"/>
                        </a>
                        
                        <a href="https://github.com/brndvl">
                            <GitHub src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg"/>
                        </a>
                    </div>
                </DevContainer>
            </Container>

            <Footer />
        </GeneralContainer>
            
        </>
    )
}
export default AboutUs;