import { Inter } from "next/font/google";
import "./css/acss/acss.css";
import "./css/bootstrap-5/css/bootstrap.css";
import "./css/fontawesome/css/all.min.css";
import "./css/animate.min.css";
import "./globals.css";
import Nav from "./nav.js"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connexus",
  description: "Crypto Job Hiring Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        <Nav />
      {children}
      <Footer />
      </body>
    </html>
  );
}


function Footer(){
  return(
     <footer class="text-center text-black container-fluid p-2" >
    <div class="container">
      <section class="mt-5">
        <div class="row text-center d-flex justify-content-center pt-5">
                    <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="no-decoration color-p">About us</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="no-decoration color-p">Resources</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="no-decoration color-p">Products</a>
            </h6>
          </div>
           <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="no-decoration color-p">Help</a>
            </h6>
          </div>
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="no-decoration color-p">Contact</a>
            </h6>
          </div>

        <div class="col-md-2">
        <a href="" class=" me-4 color-p">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class=" me-4 color-p">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class=" me-4 color-p">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class=" me-4 color-p">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class=" me-4 color-p">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class=" me-4 color-p">
          <i class="fab fa-github"></i>
        </a>
        </div>
          
        </div>
        
      </section>
      
      
      </div>
    <div class="text-center py-4">
      © 2024 Copyright
      <a class="color-s no-decoration mx-2" href="">Connexus.com</a
        >
    </div>
  </footer>
    )
}