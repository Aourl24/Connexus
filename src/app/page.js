"use client"
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {

  React.useEffect(()=>{
    // animate("#hero",{opacity:0.5})
  },[])

  return (
    <div class="sz-14">        
      <section id="hero" class="container-fluid mmd-2 rounded-4 color-bg-p d-flex py-1 my-md-0 vh-100 justify-content-md-center align-items-md-center flex-column" animate={{scale:1}}>
        <div class="row pt-4 pt-md-0 ">
          <div class="col-md col-sm-12 color-white sz-30  sz-md-48">
            <div class="row borde p-3 px-md-5 mx-md-5">
              <div class="col-12" >
                 <b class="font-montserrat-bold sz-xd sz-36 sz-md-48 "> Unlock Your web3 career
 </b>
              </div>
              <div class="sz-16 sz-md-20 col-12 pt-3">
                Connecting talent with opportunity through blockchain transparency, fair payment, and direct engagement
              </div>
              <div class="col-12 pt-4 color-white">
                <div class="row">
                <Link class="button color-bg-s color-white rounded-4 mx-2 mx-md-2 col col-md-5 my-3 p-3 p-md-4  sz-16 sz-md-18 color-bg-t-hover color-hover no-decoration center" ef="https://chat.whatsapp.com/BiQWwZnBTgwFaAbLmhiF43" href="/account/signup">
                  Get Started
                </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md col-sm-12 center display-sm-noe d-none d-md-block center" style={{marginTop:'-50px'}}>
            <div class="row">
              <div class="col">
                <img id="logo" class="img-fluid cover col-10" src="/hero.png"  style={{height:'450px',width:'auto'}} ></img>
              </div> 
            </div>
          </div>
          <div class="col-md col-sm-12 center display-md-none d-md-none mt-3">
            <div class="row" >
              <div class="col p-2" >
                <img class="img-fluid cover p-2" src="/hero.png"  style={{height:'350px',width:'auto'}} ></img>
              </div> 
            </div>
          </div>
        </div>
      </section>
<br />
<section id="service" class="small_pb small_pt">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation sz-24"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet our solution for you
              </h4>
              <p
                class="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                CONNEXUS is transforming the hiring landscape by leveraging
                blockchain technology to create a transparent, secure, and
                efficient job marketplace. Say goodbye to high fees, delayed
                payments, and geographic limitations. our decentralized platform
                empowers employers and job seekers to connect directly, with
                payments secured by smart contracts. Designed for tech,
                creative, and blockchain professionals, GETHIRED ensures fair,
                instant transactions and a global talent pool, backed by a
                community-driven governance model that puts trust and
                transparency first.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="box_wrap text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.6s"
            >
              <i class="fas fa-user sz-24"></i>
              <h4>Direct Payments</h4>
              <p>
                GETHIRED leverages smart contracts to guarantee freelancers
                receive payments instantly once work is completed successfully,
                eliminating delays and ensuring reliable compensation.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="box_wrap text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.8s"
            >
              <i class="fas fa-user sz-24"></i>
              <h4>Transparent Hiring</h4>
              <p>
                Transparent Hiring: Every interaction is securely recorded on
                the blockchain, ensuring full transparency and reducing disputes
                over job deliverables, making the hiring process fairer for
                everyone.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="box_wrap text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="1s"
            >
             <i class="fas fa-user sz-24"></i>
            <h4>Low Fees</h4>
              <p>
                By eliminating intermediaries, GETHIRED lowers transaction fees
                for employers and freelancers, enabling collaboration that saves
                employers money and helps freelancers keep more earnings
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="box_wrap text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="1s"
            >
              <i class="fas fa-user sz-24"></i>
              <h4>Global Accessibility</h4>
              <p>
                With cryptocurrency-powered transactions, GETHIRED breaks down
                geographical barriers, allowing businesses to easily hire talent
                worldwide without payment restrictions.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="box_wrap text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="1s"
            >
              <i class="fas fa-user sz-24"></i>
                <h4>Fast Payments</h4>
              <p>
                With GETHIRED’s streamlined blockchain transactions, freelancers
                enjoy immediate payment upon task completion, eliminating delays
                and ensuring efficient compensation.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="box_wrap text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="1s"
            >
              <i class="fas fa-user sz-24"></i>
              <h4>Community-Driven</h4>
              <p>
                At GETHIRED, we believe in community. Our decentralized
                governance model empowers users to participate in
                decision-making, fostering collaboration where everyone’s voice
                is valued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>        

        <section class="container-fluid d-flex align-items-center p-4 p-md-5 color-black vh-md-100 flex-column">
          <div class="row my-4">
            <div class="col sz-30 color-p sz-md-36 center font-montserrat-bold"> <span class="border-5"> About Our Community </span> </div>
          </div>

          <div class="row sz-16 sz-md-18 mb-5">
          <div class="col center">
            <p>Our Python community is a vibrant group of developers and enthusiasts  dedicated to exploring the latest in Python programming language Whether you are an expert or a newbie, you will find a supportive environment to grow and collaborate</p>
            <p> Our Vision is to empower Python developers to connect , grow and make a meaningful impact in tech </p>
            <p> 
              <div> Our Core Values are ;  Collaboration: together we solve problems and create Opportunies .
               Inclusivity : A welcoming space for all skill levels ,
               Innovation : Pushing boundaries with Python ,
               Growth : Supporting personal and professional development </div>
            </p>
          </div>
          </div>
          
          <div class="row justify-content-center m-2 mb-3">
            <div class="col-md-3 col-sm-12 rounded center p-4 sz-18 m-2 color-bg-p color-white"> Web Development </div>
            <div class="col-md-3  col-sm-12 rounded center p-4 sz-18 m-2 color-bg-p color-white"> Data Science & Analysis </div>
            <div class="col-md-3  col-sm-12 rounded center p-4 sz-18 m-2 color-bg-p color-white"> Machine Learning </div>
            <div class="col-md-3  col-sm-2 rounded center p-4 sz-18 m-2 color-bg-p color-white"> Job Updates </div>
            <div class="col-md-3  col-sm-12 rounded center p-4 sz-18 m-2 color-bg-p color-white"> Learning </div>
          </div>

        </section>

        

        <section class='container-fluid d-flex justify-content-center align-items-center vh-100 flex-column background color-white'>
        
        
        <div class="row mb-4">
            <img src="/logo.svg" class="img-fluid rounded color-bg-white p-3" />
        </div>

        <div class="row">
          <div class="col-12 center sz-24 sz-md-36 color-white">
           Join us on various platforms
          </div>
        </div>


          <div class="row center sz-18">
            <div class="col-12 p-3">  Whatsapp <i class="fab fa-whatsapp p-2 color-p"></i> </div>
            <div class="col-12 p-3">   Telegram <i class="fab fa-telegram p-2 color-p"></i> </div>
            <div class="col-12 p-3">  Discord <i class="fab fa-discord p-2 color-p"></i> </div>
          </div>

          <div class="row mt-4 ">
            <div class="col hide">
              <Link class="button color-bg-p color-white rounded-4 mx-2 mx-md-2 col col-md-5 my-3 p-3 p-md-4  sz-16 sz-md-18 color-bg-t-hover color-hover no-decoration" href="https://chat.whatsapp.com/BiQWwZnBTgwFaAbLmhiF43">
                  Join the Community
                </Link>
            </div>
          </div>
        </section>

    </div>
   
  );
}
