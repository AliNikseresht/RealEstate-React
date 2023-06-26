import banner from './../../assets/img/bannerhead.jpg'
import imglogo1 from './../../assets/img/image_1.jpg'
import imglogo2 from './../../assets/img/image_2.jpg'
import imglogo3 from './../../assets/img/image_3.jpg'

import './content.css'


export default function Section() {
    return (
        <section className='col-12 d-flex flex-wrap'>
            <Text />
            <BackG />
            <FormHouse />
            <Search />
            <PressReleases />
            <Work />
        </section>
    )
}

function Text() {
    return (
        <div className='col-12 rose pt-4'>
            <div className='col-11 col-lg-6'>
                <h2 className='col-7 pb-4'>ROSE VILLA, USA</h2>
                <p className='col-10'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
            </div>

        </div>
    )

}



function BackG() {
    return (
        <figure className='col-12 back'>
            <img src={banner} alt="" />
        </figure>
    )
}



function FormHouse() {
    return (
        <section className='house d-none d-lg-flex'>
            <div className='col-12 pt-4 px-3'>
                <span className='col-10 my-3'>HOUSE</span>
                <h3 className='col-10 my-2'>Rose Villa, USA</h3>
                <h5 className='col-10 my-3 fs-6'><i class="bi bi-geo-alt pe-2"></i>Melbourne, Vic 3004, NC USA</h5>
                <span className='col-10 my-2'><i class="bi bi-dash-lg ps-1 pe-2"></i>Area: 250sqft</span>
                <span className='col-10 my-2'><i class="bi bi-dash-lg ps-1 pe-2"></i>Bedroom 3</span>
                <span className='col-10 my-2'><i class="bi bi-dash-lg ps-1 pe-2"></i>Bathroom: 3</span>
                <span className='col-10 my-2'><i class="bi bi-dash-lg ps-1 pe-2"></i>Garage: 1</span>
                <button className='col-10 my-3 p-3'>View Properties</button>
            </div>
        </section>
    )

}
function Search() {
    return (
        <section className='col-12 search d-flex flex-wrap justify-content-center'>
            <div className='d-flex p-4 flex-wrap bg-dark justify-content-center align-items-center'>
                <div className='col-lg-2 my-2 col-11 d-flex flex-wrap justify-content-start align-items-center'>
                    <label>Location</label>
                    <div className='d-flex'>
                        <i class="bi bi-search pt-1 ps-1 pe-1"></i>
                        <input type="search" placeholder='City/Locality Name' />
                    </div>
                </div>
                <div className='col-lg-2 my-2 col-11 d-flex flex-wrap justify-content-start align-items-center'>
                    <label className='col-12'>Property Type</label>
                    <select name="" id="">
                        <option value="Type">Type</option>
                        <option value="Cammericial">Cammericial</option>
                        <option value="-office">-office</option>
                        <option value="Residential">Residential</option>
                        <option value="Villa">Villa</option>
                        <option value="Condominium">Condominium</option>
                        <option value="Apartement">Apartement</option>
                    </select>
                </div>
                <div className='col-lg-2 my-2 col-11 d-flex flex-wrap justify-content-start align-items-center'>
                    <label className='col-12'>Property Status</label>
                    <select name="" id="">
                        <option value="Type">Type</option>
                        <option value="Rent">Rent</option>
                        <option value="Sale">Sale</option>
                    </select>
                </div>
                <div className='col-lg-2 my-2 col-11 d-flex flex-wrap justify-content-start align-items-center'>
                    <label className='col-12'>Price Limit</label>
                    <select name="" id="">
                        <option value="$5,000">$5,000</option>
                        <option value="$10,000">$10,000</option>
                        <option value="$50,000">$50,000</option>
                        <option value="$100,000">$100,000</option>
                        <option value="$200,000">$200,000</option>
                        <option value="$300,000">$300,000</option>
                        <option value="$400,000">$400,000</option>
                        <option value="$500,000">$500,000</option>
                        <option value="$600,000">$600,000</option>
                        <option value="$700,000">$700,000</option>
                        <option value="$800,000">$800,000</option>
                        <option value="$900,000">$900,000</option>
                        <option value="$1,000,000">$1,000,000</option>
                        <option value="$2,000,000">$2,000,000</option>
                    </select>
                </div>
                <button className='p-4 my-2 col-lg-2 col-11'>Search</button>
            </div>
        </section>
    )
}

function PressReleases() {
    return (
        <section className='col-12 d-flex flex-wrap justify-content-evenly press'>
            <div className='col-10 d-flex flex-wrap justify-content-evenly'>
                <div className='col-12 col-lg-3 d-flex flex-wrap justify-content-center pe-3'>
                    <h2 className='col-12 display-5 fw-bold'>Press Releases</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <button className='mb-5 col-7'>Read our blog<i class="bi bi-chevron-right"></i></button>
                </div>
                <figure className='col-12 col-lg-3 pe-3'>
                    <img src={imglogo1} alt="" />
                    <figcaption className='mt-3 text-black-50'>
                        <span className='me-2'>Jan.20.2019</span>
                        <span className='mx-2'>Admin</span>
                        <span className='mx-2'><i class="bi bi-chat-left-text-fill pe-1"></i>3</span>
                        <p className='pt-3'>Pointing has no control about the blind texts</p>
                    </figcaption>
                </figure>
                <figure className='col-12 col-lg-3 pe-3'>
                    <img src={imglogo2} alt="" />
                    <figcaption className='mt-3 text-black-50'>
                        <span className='me-2'>Jan.20.2019</span>
                        <span className='mx-2'>Admin</span>
                        <span className='mx-2'><i class="bi bi-chat-left-text-fill pe-1"></i>3</span>
                        <p className='pt-3'>Pointing has no control about the blind texts</p>
                    </figcaption>
                </figure>
                <figure className='col-12 col-lg-3 pe-3'>
                    <img src={imglogo3} alt="" />
                    <figcaption className='mt-3 text-black-50'>
                        <span className='me-2'>Jan.20.2019</span>
                        <span className='mx-2'>Admin</span>
                        <span className='mx-2'><i class="bi bi-chat-left-text-fill pe-1"></i>3</span>
                        <p className='pt-3'>Pointing has no control about the blind texts</p>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

function Work() {
    return (
        <section className='col-7 d-flex justify-content-start work'>
            <div className='col-12 d-flex justify-content-evenly'>
                <div className='col-2 d-flex flex-wrap justify-content-center align-items-center'>
                    <span className='col-8 text-center fw-bolder display-6'>1,000</span>
                    <span className='fw-medium'>Properties</span>
                </div>
                <div className='col-2 d-flex flex-wrap justify-content-center align-items-center'>
                    <span className='col-8 text-center fw-bolder display-6'>351</span>
                    <span className='fw-medium'>Happy Clients</span>
                </div>
                <div className='col-2 d-flex flex-wrap justify-content-center align-items-center'>
                    <span className='col-8 text-center fw-bolder display-6'>564</span>
                    <span className='fw-medium'>Finished Projects</span>
                </div>
                <div className='col-2 d-flex flex-wrap justify-content-center align-items-center'>
                    <span className='col-8 text-center fw-bolder display-6'>300</span>
                    <span className='fw-medium'>Working Days</span>
                </div>
            </div>
        </section>
    )
}