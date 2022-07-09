import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from 'react-scroll';


const CookiePolicyArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-privacy-policy-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb_dec--50">
                <div className="offset-lg-2 col-lg-8 ">
                    <div className="privacy-wrapper">
                        <h2 style={{textAlign: 'center'}}>COOKIE POLICY</h2>
                        <h4 style={{textAlign: 'center'}}>Last updated January 21, 2022</h4>
                        <p>In this Cookie Policy we will provide you with detailed information on how DeFi Skeptic (hereinafter – the “we” or “our”), shall undertake to 
                        ensure the security of personal information and the protection of rights of the visitors and users of the websites 
                        (hereinafter – the “Visitors”, “You”) while you use our websites including but not limited to <a href='https://defiskeptic.com/'>https://defiskeptic.com/</a> 
                        (hereinafter – the “Site”) and the content on it. <br/><br/></p>
                        <h4>TABLE OF CONTENTS</h4>
                        <ol>
                            <li>
                                <Link
                                    href='/cookie-policy#what-is-a-cookie'
                                    to="what-is-a-cookie"
                                    spy
                                    smooth
                                    offset={-200}
                                    duration={1000}>WHAT IS A COOKIE?</Link>
                            </li>
                            <li>
                                <Link 
                                    href='/cookie-policy#why-do-we-use-cookies'
                                    to="why-do-we-use-cookies"
                                    spy
                                    smooth
                                    offset={-200}
                                    duration={1000}>WHY DO WE USE COOKIES?</Link>
                            </li>
                            <li>
                                <Link
                                    href='/cookie-policy#what-cookies-do-we-use'
                                    to="what-cookies-do-we-use"
                                    spy
                                    smooth
                                    offset={-200}
                                    duration={1000}>WHAT COOKIES DO WE USE?</Link>
                            </li>
                            <li>
                                <Link
                                    href='/cookie-policy#how-to-refuse-or-block-cookies'
                                    to="how-to-refuse-or-block-cookies"
                                    spy
                                    smooth
                                    offset={-200}
                                    duration={1000}>HOW TO REFUSE OR BLOCK COOKIES?</Link>
                            </li>
                            <li>
                                <Link
                                    href='/cookie-policy#do-we-update-cookie-policy'
                                    to="do-we-update-cookie-policy"
                                    spy
                                    smooth
                                    offset={-200}
                                    duration={1000}>DO WE UPDATE COOKIE POLICY??</Link>
                            </li>
                        </ol>
                        <section id='what-is-a-cookie'>
                            <h4>1. WHAT IS A COOKIE?</h4>
                        </section>
                        <ul>
                            <li>
                                A cookie is a small file placed onto your device that enables our Site features and functionality. 
                                For example, cookies can enable us to identify your device and secure your access to the Site. Cookies 
                                also allow the Site to remember information about your browsing on the Site for a while and to recognize 
                                you the next time you visit the Site. All this allows us to give you the opportunity to use the Site 
                                comfortably and to make the Site even more user-friendly.
                            </li>
                        </ul>

                        <section id='why-do-we-use-cookies'>
                            <h4>2. WHY DO WE USE COOKIES?</h4>
                        </section>
                        <ul>
                            <li>
                                We use cookies for the following main purposes:  
                            </li>
                            <ul>
                                <li>
                                    To ensure efficient and safe functioning of the Site. We use cookies to enable and support our 
                                    security features, and to help us detect malicious activity on our Site.
                                </li>
                                <li>
                                    To understand, improve, and research products, features, and services, including when you access 
                                    our Site from other websites or devices such as your computer or your mobile device.
                                </li>
                                <li>
                                    To recognize the returning visitors of the Site. Cookies help us show you the right information 
                                    and personalize your experience. Cookies also help avoiding re-registration or re-filling of the 
                                    information by you each time you visit the Site.
                                </li>
                                <li>
                                    To analyze your habits so that the functioning of the Site would be convenient, 
                                    efficient and would conform to your needs and expectations.
                                </li>
                                <li>
                                    To measure the flows of the information and data being sent to our Site. We use the cookies for 
                                    accumulation of statistical data about the number of users of the Site and their use of the Site.
                                </li>
                                <li>
                                    For targeting and advertising. By using the cookies we may collect information so that only relevant 
                                    content is displayed for the browser by creating different target groups. We may use cookies to 
                                    show you relevant advertising both on and off our Site.
                                </li>
                            </ul>
                        </ul>

                        <section id='what-cookies-do-we-use'>
                            <h4>3. WHAT COOKIES DO WE USE?</h4>
                        </section>
                        <ul>
                            <li>
                                Each time you visit our Site, the long-term (persistent) cookies may be created, which stay in your browser 
                                after you sign-up and will be read by us when you return to our Site and not deleted after you finish browsing 
                                our Site, and the short-term (session) cookies, which expire or are deleted after you finish browsing our Site 
                                (i.e. they usually last during the current visit to our Site or browsing session). 
                            </li>
                            <b><h6>Cookies Used by the Company:</h6></b>
                            <ul>
                                <li>
                                    Strictly required or necessary cookies. These cookies are required for the operation of our Site. They include, 
                                    for example, cookies that enable storage of information filled by you during the browsing session, enable you 
                                    to log into secure areas of our Site. Without these cookies operation of the Site would be impossible or its 
                                    functioning may be severely affected.
                                </li>
                                <li>
                                    Preferences cookies. These improve the functional performance of our Site and make it easier for you to use. 
                                    These cookies remember the settings selected by the Visitors (for example, the settings of language or currency). 
                                    With the use of these cookies, the Visitors may avoid the changes of settings during each visit of the Site. These 
                                    cookies also remember changes made by you in the Site (for example, in case you leave comment on the Site). These 
                                    cookies do not track your behavior in other websites. 
                                </li>
                                <li>
                                    Analytics and Statistics. These cookies show us if the Visitor has visited our Site before. The analytic 
                                    cookies allow us to recognize and count the number of users of our website and see how such users navigate 
                                    through our Site. We also use cookies to understand, improve, and research products, features, and services. 
                                    For instance, analytical cookies may show us, which websites are visited more frequently, help us to 
                                    record dysfunctionalities of the Site, etc. 
                                </li>
                                <li>
                                    Marketing and Retargeting. These cookies are usually set by our marketing and advertising partners. They may 
                                    be used by them to build a profile of your interest and later show you relevant ads. If you do not allow 
                                    these cookies you will not experience targeted ads for your interests. 
                                </li>
                            </ul>
                            <b><h6>Third-party Cookies:</h6></b>
                            <ul>
                                <li>
                                    We use Google Analytics, a web analysis service provided by Google, Inc (hereinafter referred to as “Google”). 
                                    The information collected by Google Analytics is transmitted to and stored with Google. Google may transmit 
                                    the information collected by Google Analytics to the third parties as required by the law or when those third 
                                    parties process the information in the name of Google. We recommend consulting the Google Privacy and 
                                    Cookies Policy on a separate and regular basis.
                                </li>
                            </ul>
                        </ul>

                        <section id='how-to-refuse-or-block-cookies'>
                            <h4>4. HOW TO REFUSE OR BLOCK COOKIES?</h4>
                        </section>
                        <ul>
                            <li>Many web browsers are set so that they would automatically accept all cookies.</li>
                            <li>You may refuse and make a preference which cookies you allow by choosing it in our Cookie Consent Banner. Also all the cookies will be set if you accept all by clicking “Accept All” on our Cookie Consent Banner.</li>
                            <li>The Visitors may, at their discretion, manage, block or delete cookies, if the settings of their browser or device enable them to do so. Nevertheless, if you refuse or block the cookies 
                                or other similar technologies, some functions of the Site may be inaccessible to you or they may operate not properly.</li>
                            <li>We draw your attention that necessary cookies are critical for functioning of our Site, and in case of your objections, some features of the Site may not work or may not work properly.</li>
                            <li>You may require that we delete all the data about you, as collected and processed with the help of the cookies, by emailing <a href='mailto:contact@defiskeptic.com'>contact@defiskeptic.com</a>.</li>
                            <li>You can opt out of Google Analytics without affecting how you visit our Site. For more information on opting out of being tracked by Google Analytics across all websites you use, 
                                visit this Google page: <a href='https://tools.google.com/dlpage/gaoptout'>https://tools.google.com/dlpage/gaoptout</a>.</li>
                            <li>You may find more information about how to delete cookies, as well as the other useful information related to the use of the cookies, on the website <a href='http://www.allaboutcookies.org/'>http://www.allaboutcookies.org/</a>.</li>
                        </ul>

                        <section id='do-we-update-cookie-policy'>
                            <h4>5. DO WE UPDATE COOKIE POLICY?</h4>
                        </section>
                        <ul>
                            <li>
                                This Cookie Policy may be updated by us from time to time. We will inform you about the updates, by providing the new version of the Cookie Policy. 
                                For this reason, we recommend you periodically visit our Site, where you will always find the latest version of this Cookie Policy.
                            </li>
                            <li>
                                This Cookie Policy shall be applied from the date of announcement of it on the Site.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
);

CookiePolicyArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
CookiePolicyArea.defaultProps = {
    space: 1,
};

export default CookiePolicyArea;
