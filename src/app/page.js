"use client"
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {OnView , Typing} from "./Aanimate.js"

export default function Home() {

  const words =[{title:"Direct Payments"}]

  React.useEffect(()=>{
    // animate("#hero",{opacity:0.5})
  },[])

  return (
    <div class="sz-14">        
      <div class="vh-md-100 background ">
      <section id="hero" class="container-fluid d-flex py-1 my-md-0 vh-md-100 justify-content-md-center align-items-md-center flex-column vh-100 justify-content-center" animate={{scale:1}} style={{backgroundColor:"rgba(33,16,50,0.95)"}}>
      <OnView animation='animate__animated animate__fadeIn ' initial='invisible'>
        <div class="row">
          <div class="col-md col-sm-12 color-white sz-30  sz-md-48 center">
            <div class="row borde p-3 px-md-5 mx-md-5">
              <div class="col-12" >
                 <b class="font-montserrat-bold sz-xd sz-48 sz-md-48 " style={{fontSize:"43px"}}>
                 Unlock Your <br class="d-block d-md-none display-md-none"/> Web3 Career 
 </b>             <hr class="d-block d-md-none display-md-none" />
              </div>
              <div class="sz-18 sz-md-30 col-12 pt-3">
                Connecting talent with opportunity through blockchain transparency, fair payment, and direct engagement
              </div>
              <div class="col-12 pt-4 color-black">
                <div class="row">
                <div class="col">
                <a class="color-bg-s color-black rounded-5 sz-16 sz-md-18 color-bg-t-hover color-white-hover no-decoration my-3 p-3 p-md-4 col-md-3 col-8 inline-block" href="/account/signup">
                  Get Started
                </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        
        <div class="row color-white justify-content-center center mt-4">
        <div class="col">
        <p class="sz-18 color-s pb-3">-- Get whitelist for early access --</p>
          <input type="input" placeholder="Enter Email"  class="sz-18 border p-3 rounded-5 no-border col-md-8 col-12 color-bg-white color-black" />
          <button class="position-absolute color-bg-p color-white rounded-5 no-border p-3 col-md-2 early-button">Early Access </button>
          <div> </div>
        </div>
        </div>
        </div>
        </OnView>
      </section>
      </div>
<br />

<section class="container-fluid  color-bg-white vh-md-100 p-3 ">
<OnView animation="animate__animated animate__slideInUp aniate__delay-1s" initial="invisible">
<div class="row align-items-center  justify-content-center vh-md-100">
<div class="col-md-5 col-sm center p-3 order-last order-md-first">
<img src="/photo.jpg" class="img-fluid rounded-3" />

</div>
<div class="col center">
<div class="row align-items-cente justify-content-center">
          <div class="col-lg-8 col-md-12 col-sm-12 offet-lg-2">
              <h4
                class="sz-md-30 my-3 mb-5 color-p font-montserrat-bold sz-28"
              >
                Meet our solution for you
              </h4>
              <p
                class=" sz-18 color-black"
              >
                CONNEXUS is transforming the hiring landscape by leveraging
                blockchain technology to create a transparent, secure, and
                efficient job marketplace. Say goodbye to high fees, delayed
                payments, and geographic limitations. our decentralized platform
                empowers employers and job seekers to connect directly, with
                payments secured by smart contracts. Designed for tech,
                creative, and blockchain professionals, CONNEXUS ensures fair,
                instant transactions and a global talent pool, backed by a
                community-driven governance model that puts trust and
                transparency first.
              </p>
            </div>
          </div>

</div>
</div>
</OnView>
</section>
<br />
<section id="service" class="colo-bg-s vh-md-100 p-3 pt-5">
      <div class="container">
        <div class="row gy-3">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <OnView animation='animate__animated animate__fadeIn ' initial='invisible'className="box_wrap  rounded-3 color-bg-s p-3 py-md-4">
            <i class="fas fa-money-bill sz-36 p-3 color-p py-4"></i>
              <h4 class="sz-md-20 pb-2 bold sz-20">Direct Payments</h4>
              <p>
                CONNEXUS leverages smart contracts to guarantee freelancers
                receive payments instantly once work is completed successfully,
                eliminating delays and ensuring reliable compensation.
              </p>
            </OnView>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
          <OnView animation='animate__animated animate__fadeIn ' initial='invisible'className="box_wrap  rounded-3 color-bg-s p-3 py-md-4">
              <i class="fas fa-eye sz-36 p-3 color-p py-4"></i>
              <h4 class="sz-md-20 pb-2 bold sz-20">Transparent Hiring</h4>
              <p>
                Transparent Hiring: Every interaction is securely recorded on
                the blockchain, ensuring full transparency and reducing disputes
                over job deliverables, making the hiring process fairer for
                everyone.
              </p>
            </OnView>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="box_wrap  rounded-3 color-bg-s p-3 py-md-4"
            >
             <i class="fas fa-percent sz-36 p-3 color-p py-4"></i>
            <h4 class="sz-md-20 pb-2 bold sz-20">Low Fees</h4>
              <p>
                By eliminating intermediaries, CONNEXUS lowers transaction fees
                for employers and freelancers, enabling collaboration that saves
                employers money and helps freelancers keep more earnings,
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 mt-md-4">
            <div
              class="box_wrap  rounded-3 color-bg-s p-3 py-md-4"
            >
             <i class="fas fa-bolt sz-36 p-3 color-p py-4"></i>
            <h4 class="sz-md-20 pb-2 bold sz-20">Global Accessibility</h4>
              <p>
                With cryptocurrency-powered transactions, CONNEXUS breaks down
                geographical barriers, allowing businesses to easily hire talent
                worldwide without payment restrictions.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 mt-md-4">
            <div
              class="box_wrap  rounded-3 color-bg-s p-3 py-md-4"
            >
             <i class="fas fa-bolt sz-36 p-3 color-p py-4"></i>
            <h4 class="sz-md-20 pb-2 bold sz-20">Fast Payments</h4>
              <p>
                With CONNEXUS’s streamlined blockchain transactions, freelancers
                enjoy immediate payment upon task completion, eliminating delays
                and ensuring efficient compensation.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 mt-md-4">
            <div
              class="box_wrap  rounded-3 color-bg-s p-3 py-md-4"
            >
             <i class="fas fa-hands-helping sz-36 p-3 color-p py-4"></i>
            <h4 class="sz-md-20 pb-2 bold sz-20">Community-Driven</h4>
              <p>
                At CONNEXUS, we believe in community. Our decentralized
                governance model empowers users to participate in
                decision-making, fostering collaboration where everyone’s voice
                is valued.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>   

    <section class="container-fluid d-flex justify-content-center align-items-center p-4 p-md-5 color-white vh-md-100 vh-100 flex-column color-bg-p">
         <div class="row">
         <div class="col-12 col-md"><img src="/hero.jpeg" class="img-fluid" /> </div>

         <div class="col order-md-first">
          <div class="row my-4">
            <div class="col sz-30 color-s sz-md-36 center font-montserrat-bold"> <span class="border-5"> Why Join us Now? </span> </div>
          </div>

          <div class="row sz-16 sz-md-18 mb-5">
          <div class="col center">
            <p>Joining Our community today gives you exclusive access to premium features designed to elevate your freelancing experience. be the first to explore tools and resources that will help you stand out and succed once we launch</p>
            <p> Don't miss out on these valuable benefits. Sign up now with your email to secure your spot and gain early access to our premium features </p>
          </div>
          </div>
          </div>
          </div>

        </section>

    </div>
   
  );
}
