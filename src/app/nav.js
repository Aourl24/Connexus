"use client"
import React from "react";
import { useRouter ,useSearchParams,usePathname } from 'next/navigation'
import Link from "next/link"
import {OnScroll} from "./Aanimate.js"

export default function Nav(){
	const path = usePathname()
	const excludedPath= ["/account/signup"]
	const [dropdown , showDrop] = React.useState(false)

	if(excludedPath.includes(path)){
		return(<></>)
	}

	return(
		<OnScroll id="nav" className="container-fluid container-fluid sz-14 fixed-top p-4 py-3 py-md-3 ease" initial="color-bg-white color-black" animation="color-bg-p color-white shadow-sm" y={500} >
        <div class="row align-items-center ">
          <div class="col col-md-4 p-2 sz-16 bold">
          <div class="row align-items-center">
          <div class="col-1 col-md-1  p-0">
            <img src="/photo.JPG" class="img-fluid" style={{height:'25px',width:'auto'}}/> </div>
            <div class="col p-1">Connexus</div>
          </div>
          </div>
          <div class="col font-poppins p-4 right display-sm-none bold"> 
            <Link href="/membership" class="no-decoration"> Home </Link> 
          </div>
          <div class="col font-poppins p-4 right display-sm-none bold">
            <Link href="/job" class="no-decoration">Service</Link>
          </div>
          <div class="col font-poppins p-4 right display-sm-none bold">
            About
          </div>
          <div class="col font-poppins p-4 right display-sm-none bold">
            FAQ
          </div>
          <div class="col col-md-4 font-poppins p-4 right display-sm-none color-black ">
            <Link class="color-bg-s no-decoration p-3 px-md-4 rounded-5" href="/"> SignUp </Link>
          </div>
          <div class="col-2 d-md-none right sz-20">
          	{!dropdown && <span onClick={()=>showDrop(true)}> <i class="fas fa-bars"></i></span>}
          </div>
        </div>
        {dropdown && <Dropdown close={()=>showDrop(false)} /> }
        </OnScroll>
		)
}


function Dropdown ({close}){
	return(
		<div class="container-fluid  border-top sz-18 vh-100 display-fixed ease">
		<br />
    <div class="py-3"><a class="dropdown-item" href="/membership">Membership</a></div>
    <div class="py-3"><a class="dropdown-item" href="#">Jobs</a></div>
    <div class="py-3"><a class="dropdown-item" href="#">Forums</a></div>
    <div class="py-3"><a class="dropdown-item" href="#">Resorces</a></div>

    <div class="my-2 mt-4"><button class="btn btn-danger w-100" onClick={()=>close()}> Close </button></div>
		</div>
	)
}