import './footer.css'

export default function Footer() {
    return (
        <footer className="col-12 d-flex flex-wrap fott">
            <Foot />
        </footer>
    )
}


function Foot() {
    return (
        <section className="col-12 d-flex flex-wrap justify-content-center pt-5">
            <div className="col-12 col-lg-10 d-flex flex-wrap justify-content-start justify-content-lg-evenly mt-3 icon">
                <ul className='col-12 col-lg-2'>
                    <li className='fw-bolder text-light'>Hamlet.</li>
                    <li className='mt-4'><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></li>
                    <li className='d-flex col-5 col-md-3 col-lg-12'>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-facebook mx-3"></i>
                        <i class="bi bi-instagram"></i>
                    </li>
                </ul>
                <ul className='col-12 col-lg-2'>
                    <li className='fw-bolder text-light'>Company</li>
                    <li className='mt-4'><i class="bi bi-arrow-right pe-1"></i>Home</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>About</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Services</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>FAQ</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Reviews</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Stories</li>
                </ul>
                <ul className='col-12 col-lg-2'>
                    <li className='fw-bolder text-light'>Explore</li>
                    <li className='mt-4'><i class="bi bi-arrow-right pe-1"></i>Privacy</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Policy</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Terms</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Review</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Features</li>
                </ul>
                <ul className='col-12 col-lg-2'>
                    <li className='fw-bolder text-light'>Get Started</li>
                    <li className='mt-4'><i class="bi bi-arrow-right pe-1"></i>Buy</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Rent</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Payment</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Mortgage</li>
                    <li><i class="bi bi-arrow-right pe-1"></i>Loan</li>
                </ul>
                <ul className='col-11 col-lg-2 but'>
                    <li className='fw-bolder text-light'>Newsletter</li>
                    <li className='mt-4'><p>Far far away, behind the word mountains, far from the countries.</p></li>
                    <li><input className='col-12 p-3 mb-2' type="email" placeholder='Enter email address' /></li>
                    <li><button className='col-12 p-3'>Subscribe</button></li>
                </ul>
            </div>
            <span className='col-10 mt-5 mb-5'>Copyright ©2023 All rights reserved | This template is made with  by <a className='text-decoration-none' href="https://github.com/AliNikseresht">Nikseresht</a></span>
        </section>
    )
}
