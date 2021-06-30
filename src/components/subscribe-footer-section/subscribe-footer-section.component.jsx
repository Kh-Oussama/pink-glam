import React, {useState} from 'react';
import {Link} from "react-router-dom";

const SubscribeFooterSection = () => {
    const [email, setEmail] = useState('');
    return (
        <div className="Sub-footer-container">
                <div className="subscribe-section">
                  <h1>Stay in touch</h1>
                  <p>Be the first to find out new products. <br/> upcoming stories, and our community</p>

            </div>
                <div className="formSub">
                    <input
                        type="email"
                        className="formSub__input"
                        placeholder="ENTER YOUR EMAIL"
                        required
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <button className="formSub__button">
                        Send
                    </button>
                    {/*{*/}
                    {/*    addLoading*/}
                    {/*        ? <div className='btn-loading'><Loader/></div>*/}
                    {/*        : <button className="formSub__button" onClick={addClientHandler}>*/}
                    {/*            Subscribe Now*/}
                    {/*        </button>*/}
                    {/*}*/}

                </div>
                <img src="/images/h1.jpg" alt="image" className="image"/>
                <div className="footer-section"></div>
                <div className="footer-links">
                <div className="link">
                        <Link to=''>
                            Delivery
                         </Link>
                </div>
                <div className="link">
                        <Link to=''>
                        About Us
                    </Link>
                </div>
                <div className="link">
                        <Link to=''>
                        Returns
                    </Link>
                </div>
                <div className="link">
                        <Link to=''>
                        Careers
                    </Link>
                </div>
                <div className="link">
                        <Link to=''>
                            Payment
                    </Link>
                </div>
                <div className="link">
                        <Link to=''>
                        Gift Card
                    </Link>
                </div>
            </div>
                <div className="footer-bottom">

                <div className="left">
                    &copy; Copyright 2021 by Khirat Oussama.
                </div>
                    <div className="right">
                        <div className="link">
                            <Link to=''>
                                privacy policy
                            </Link>
                        </div>
                        <div className="link">
                            <Link to=''>
                                Terms&Condition
                            </Link>
                        </div>

                    </div>
                </div>
        </div>
    )
};

export default SubscribeFooterSection;

