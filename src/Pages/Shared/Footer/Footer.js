import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className="pt-5 bg contain">
            <div className="pb-3 row">
                <div className="col-md-6 col-xl-3">
                    <div className="my-4 my-xl-0">
                        <h6 className="text-white font-weight-bold mb-3 text-uppercase">Services</h6>
                        <ul className="nav-transparent flex-column nav">
                            <li className="nav-item">
                                <a href="#/" className="px-0 py-1 text-white-50 nav-link">Products</a></li>
                            <li className="nav-item"><a href="#/" className="px-0 py-1 text-white-50 nav-link">Services</a></li>
                            <li className="nav-item"><a href="#/" className="px-0 py-1 text-white-50 nav-link">About us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="my-4 my-xl-0">
                        <h6 className="text-white font-weight-bold mb-3 text-uppercase">Support</h6>
                        <ul className="nav-transparent flex-column nav">
                            <li className="nav-item"><a href="#/" className="px-0 py-1 text-white-50 nav-link">Support center</a></li>
                            <li className="nav-item"><a href="#/" className="px-0 py-1 text-white-50 nav-link">Affiliates</a></li>
                            <li className="nav-item"><a href="#/" className="px-0 py-1 text-white-50 nav-link">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="my-4 my-xl-0">
                        <h6 className="text-white font-weight-bold mb-3 text-uppercase">Applications</h6>
                        <ul className="nav-transparent flex-column nav">
                            <li className="nav-item"><a href="#/" className="px-0 py-1 text-white-50 nav-link">Exchange</a></li>
                            <li className="nav-item"><a href="#/" className="px-0 py-1 text-white-50 nav-link">Generic</a></li>
                            <li className="nav-item"><a href="#/" className="px-0 py-1 text-white-50 nav-link">Helpdesk</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="my-4 my-xl-0">
                        <h6 className="text-white font-weight-bold mb-3 text-uppercase">Social Connections</h6>
                        <p className="text-white-50">Stay up to date with our latest updates and releases!</p>
                    </div></div><div className="divider mt-4 bg-white opacity-2"></div><div className="divider mb-4 bg-white opacity-2"></div><div className="py-3 d-block d-lg-flex align-items-center justify-content-between"><div className="text-center d-block mb-3 mb-md-0 text-white">Copyright © {year} - Woodtoy.com</div><ul className="nav-transparent justify-content-center nav"><li className="nav-item"><a href="#/" className="text-white-50 nav-link">Privacy Policy</a></li><li className="nav-item"><a href="#/" className="text-white-50 nav-link">Terms of Service</a></li></ul><ul className="nav-transparent justify-content-center nav"><li className="nav-item"><a href="/login" className="text-white-50 nav-link">My Account</a></li></ul></div></div></div>
    );
};

export default Footer;