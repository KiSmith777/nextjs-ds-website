import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";

const PrivacyPolicyArea = ({ className, space }) => (
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
                        <h2 style={{textAlign: 'center'}}>PRIVACY POLICY</h2>
                        <h4 style={{textAlign: 'center'}}>Last updated January 21, 2022</h4>
                        <ul>
                            <li>
                                Thank you for choosing to be part of our community at DeFi Skeptic (“Company,” “we,” “us,” or “our“). 
                                We are committed to protecting your personal information and your right to privacy. If you have any 
                                questions or concerns about this privacy notice or our practices with regard to your personal information, 
                                please contact us at contact@defiskeptic.com.
                            </li>
                            <li>
                                This privacy notice describes how we might use your information if you:
                            </li>
                            <ul style={{listStylePosition: 'inside'}}>
                                <li>Visit our website at <a href='https://defiskeptic.com'>https://defiskeptic.com</a></li>
                                <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
                            </ul>
                            <li>
                                In this privacy notice, if we refer to:
                            </li>
                            <ul style={{listStylePosition: 'inside'}}>
                               <li>“<b>Website</b>,” we are referring to any website of ours that references or links to this policy</li>
                               <li>“<b>Services</b>,” we are referring to our Website, and other related services, including any sales, marketing, or events</li>
                            </ul>
                            <li>
                                The purpose of this privacy notice is to explain to you in the clearest 
                                way possible what information we collect, how we use it, and what rights 
                                you have in relation to it. If there are any terms in this privacy notice 
                                that you do not agree with, please discontinue use of our Services immediately.
                            </li>
                            <li>
                                <b>Please read this privacy notice carefully, as it will help you 
                                understand what we do with the information that we collect.</b>
                            </li>
                        </ul>

                        <h4>TABLE OF CONTENTS</h4>
                        <ol>
                            <li>
                                <a href='/privacy-policy#what-information-do-we-collect'><b>WHAT INFORMATION DO WE COLLECT?</b></a>
                            </li>
                            <li>
                                <a href='/privacy-policy#how-do-we-use-your-information'><b>HOW DO WE USE YOUR INFORMATION?</b></a>
                            </li>
                            <li>
                                <a href='/privacy-policy#will-your-information-be-shared-with-anyone'><b>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</b></a>
                            </li>
                            <li>
                                <a href='/privacy-policy#do-we-use-cookies-and-other-tracking-technologies'><b>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</b></a>
                            </li>
                            <li>
                                <a href='/privacy-policy#what-is-our-stance-on-third-party-websites'><b>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</b></a>
                            </li>
                            <li>
                                <a href='/privacy-policy#how-long-do-we-keep-your-information'><b>HOW LONG DO WE KEEP YOUR INFORMATION?</b></a>  
                            </li>
                            <li>
                                <a href='/privacy-policy#how-do-we-keep-your-information-safe'><b>HOW DO WE KEEP YOUR INFORMATION SAFE?</b></a>    
                            </li>
                            <li>
                                <a href='/privacy-policy#do-we-collect-information-from-minors'><b>DO WE COLLECT INFORMATION FROM MINORS?</b></a>
                            </li>
                            <li>
                                <a href='/privacy-policy#what-are-your-privacy-rights'><b>WHAT ARE YOUR PRIVACY RIGHTS?</b></a> 
                            </li>
                            <li>
                                <a href='/privacy-policy#controls-for-do-not-track-features'><b>CONTROLS FOR DO-NOT-TRACK FEATURES</b></a>
                            </li>
                            <li>
                                <a href='/privacy-policy#do-california-residents-have-specific-privacy-rights'><b>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</b></a>  
                            </li>
                            <li>
                                <a href='/privacy-policy#do-we-make-updates-to-this-notice'><b>DO WE MAKE UPDATES TO THIS NOTICE?</b></a>    
                            </li>
                            <li>
                                <a href='/privacy-policy#how-can-you-contact-us-about-this-notice'><b>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</b></a>
                            </li>
                            <li>
                                <a href='/privacy-policy#how-can-you-review-update-or-delete-the-data-we-collect-from-you'><b>HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</b></a> 
                            </li>
                        </ol>
                        <section id='what-information-do-we-collect'>
                            <h4>1. WHAT INFORMATION DO WE COLLECT?</h4>
                        </section>
                        <b>Personal information you disclose to us</b>
                        <br/>
                        <br/>
                        <b><i>In Short:</i></b> <i>We collect personal information that you provide to us.</i>
                        <ul>
                            <li>
                                We collect personal information that you voluntarily provide
                                to us when you express an interest in obtaining 
                                information about us or our products and Services, when you 
                                participate in activities on the Website or otherwise 
                                when you contact us.
                            </li>
                            <li>
                                The personal information that we collect depends on the context of your 
                                interactions with us and the Website, the choices you make and the products 
                                and features you use. The personal information we collect may include the following:
                            </li>
                            <ul style={{listStylePosition: 'inside'}}>
                                <li>
                                    <b>Personal Information Provided by You.</b> 
                                    We collect email addresses; usernames; names; passwords;
                                    and other similar information.All personal information 
                                    that you provide to us must be true, complete and accurate, 
                                    and you must notify us of any changes to such personal information.
                                </li>
                                <li><b>Information automatically collected</b></li>
                            </ul>
                        </ul>
                        <b><i>In Short: </i></b><i>Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.</i>
                        <ul start='3'>
                            <li>
                            We automatically collect certain information when you visit, use or navigate the Website. 
                            This information does not reveal your specific identity (like your name or contact information) 
                            but may include device and usage information, such as your IP address, browser and device characteristics, 
                            operating system, language preferences, referring URLs, device name, country, location, information about 
                            how and when you use our Website and other technical information. This information is primarily needed to 
                            maintain the security and operation of our Website, and for our internal analytics and reporting purposes. 
                            Like many businesses, we also collect information through cookies and similar technologies. You can 
                            find out more about this in our <a href='/cookie-policy'>Cookie Policy.</a>
                            </li>
                            <li>
                                The information we collect includes:
                            </li>
                            <ul style={{listStylePosition: 'inside'}}>
                                <li>
                                    <b><i>Log and Usage Data.</i></b> Log and usage data is service-related, diagnostic, usage and performance information our servers 
                                    automatically collect when you access or use our Website and which we record in log files. Depending on how you interact 
                                    with us, this log data may include your IP address, device information, browser type and settings and information about 
                                    your activity in the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches 
                                    and other actions you take such as which features you use), device event information (such as system activity, error 
                                    reports (sometimes called ‘crash dumps’) and hardware settings).
                                </li>
                                <li>
                                    <b><i>Device Data.</i></b> We collect device data such as information about your computer, phone, tablet or other device 
                                    you use to access the Website. Depending on the device used, this device data may include information such as your IP address 
                                    (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service 
                                    provider and/or mobile carrier, operating system and system configuration information.
                                </li>
                                <li>
                                    <b><i>Location Data.</i></b> We collect location data such as information about your device’s location, which can be 
                                    either precise or imprecise. How much information we collect depends on the type and settings of the device you use 
                                    to access the Website. For example, we may use GPS and other technologies to collect geolocation data that tells us 
                                    your current location (based on your IP address). You can opt out of allowing us to collect this information either 
                                    by refusing access to the information or by disabling your Location setting on your device. Note however, if you 
                                    choose to opt out, you may not be able to use certain aspects of the Services.
                                </li>
                            </ul>
                        </ul>
                        
                        <section id='how-do-we-use-your-information'>
                            <h4>2. HOW DO WE USE YOUR INFORMATION?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</i>
                        <ul>
                            <li>
                                We use personal information collected via our Website for a variety of business purposes described below. 
                                We process your personal information for these purposes in reliance on our legitimate business interests, 
                                in order to enter into or perform a contract with you, with your consent, and/or for compliance with our 
                                legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
                            </li>
                            <li>
                                We use the information we collect or receive:
                            </li>
                            <ul>
                                <li><b>To facilitate account creation and logon process. </b> If you choose to link your account with us to a 
                                third-party account (such as your Google or Facebook account), we use the information you allowed us to collect 
                                from those third parties to facilitate account creation and logon process for the performance of the contract.
                                </li>
                                <li><b>To post testimonials. </b> We post testimonials on our Website that may contain personal information. 
                                Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. 
                                If you wish to update, or delete your testimonial, please contact us at <a href='mailto:contact@defiskeptic.com'>contact@defiskeptic.com</a> and be sure to 
                                include your name, testimonial location, and contact information.
                                </li>
                                <li><b>Request feedback. </b> We may use your information to request feedback and to contact you about your 
                                use of our Website.
                                </li>
                                <li><b>To enable user-to-user communications. </b> We may use your information in order to enable user-to-user 
                                communications with each user’s consent.
                                </li>
                                <li><b>To manage user accounts. </b> We may use your information for the purposes of managing our account and 
                                keeping it in working order.
                                </li>
                                <li><b>To send administrative information to you. </b> We may use your personal information to send you product, 
                                service and new feature information and/or information about changes to our terms, conditions, and policies.
                                </li>
                                <li><b>To protect our Services. </b> We may use your information as part of our efforts to keep our 
                                Website safe and secure (for example, for fraud monitoring and prevention).
                                </li>
                                <li><b>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory 
                                    requirements or in connection with our contract. </b>
                                </li>
                                <li><b>To respond to legal requests and prevent harm. </b> If we receive a subpoena or other legal request, 
                                we may need to inspect the data we hold to determine how to respond.
                                </li>
                                <li><b>Fulfill and manage your orders. </b> We may use your information to fulfill and manage your orders, 
                                payments, returns, and exchanges made through the Website.
                                </li>
                                <li><b>Administer prize draws and competitions. </b> We may use your information to administer prize draws 
                                and competitions when you elect to participate in our competitions.
                                </li>
                                <li><b>To deliver and facilitate delivery of services to the user. </b> We may use your information to provide 
                                you with the requested service.
                                </li>
                                <li><b>To respond to user inquiries/offer support to users. </b> We may use your information to respond to your 
                                inquiries and solve any potential issues you might have with the use of our Services.
                                </li>
                                <li><b>To send you marketing and promotional communications. </b> We and/or our third-party marketing partners 
                                may use the personal information you send to us for our marketing purposes, if this is in accordance with your
                                marketing preferences. For example, when expressing an interest in obtaining information about us or our Website, 
                                subscribing to marketing or otherwise contacting us, we will collect personal information from you. <br/><br/>You can 
                                opt-out of our marketing emails at any time (see the <a href='/privacy-policy#what-are-your-privacy-rights'>“WHAT ARE YOUR PRIVACY RIGHTS?”</a> below).
                                </li>
                                <li><b>Deliver targeted advertising to you. </b> We may use your information to develop and display personalized content 
                                and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness. For more information see our <a href='/cookie-policy'>Cookie Policy.</a>
                                </li>
                            </ul>
                        </ul>
                        
                        <section id='will-your-information-be-shared-with-anyone'>
                            <h4>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</i>
                        <ul>
                            <li>
                                We may process or share your data that we hold based on the following legal basis:
                            </li>
                            <ul style={{listStylePosition: 'inside'}}>
                                <li>
                                    <b>Consent. </b>We may process your data if you have given us specific consent to use your personal information for a specific purpose.
                                </li>
                                <li>
                                    <b>Legitimate Interests. </b>We may process your data when it is reasonably necessary to achieve our legitimate business interests.
                                </li>
                                <li>
                                    <b>Performance of a Contract. </b>Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
                                </li>
                                <li>
                                    <b>Legal Obligations. </b>We may disclose your information where we are legally required to do so in order to comply with applicable law, 
                                    governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena 
                                    (including in response to public authorities to meet national security or law enforcement requirements).
                                </li>
                                <li>
                                    <b>Vital Interests. </b>We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding 
                                    potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, 
                                    or as evidence in litigation in which we are involved.
                                </li>
                            </ul>
                            <li>
                                More specifically, we may need to process your data or share your personal information in the following situations:
                            </li>
                            <ol style={{listStylePosition: 'inside'}}>
                                <li>
                                    <b>Business Transfers. </b>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                </li>
                            </ol>
                        </ul>
                        
                        <section id='do-we-use-cookies-and-other-tracking-technologies'>
                            <h4>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>We may use cookies and other tracking technologies to collect and store your information.</i>
                        <ul>
                            <li>
                                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. 
                                Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <a href='/cookie-policy'>Cookie Policy</a>.
                            </li>
                        </ul>
                        
                        <section id='what-is-our-stance-on-third-party-websites'>
                            <h4>5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our Website.</i>
                        <ul>
                            <li>
                                The Website may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. 
                                We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. 
                                We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications 
                                that may be linked to or from the Website. You should review the policies of such third parties and contact them directly to respond to your questions.
                            </li>
                        </ul>

                        <section id='how-long-do-we-keep-your-information'>
                            <h4>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</i>
                        <ul>
                            <li>
                                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period 
                                is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal 
                                information for longer than 2 years.
                            </li>
                            <li>
                                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is 
                                not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and 
                                isolate it from any further processing until deletion is possible.
                            </li>
                        </ul>

                        <section id='how-do-we-keep-your-information-safe'>
                            <h4>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>We aim to protect your personal information through a system of organizational and technical security measures.</i>
                        <ul>
                            <li>
                                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information
                                we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or 
                                information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, 
                                or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your 
                                information.
                            </li>
                            <li>
                                Although we will do our best to protect your personal information, transmission of personal information to and from 
                                our Website is at your own risk. You should only access the Website within a secure environment.
                            </li>
                        </ul>

                        <section id='do-we-collect-information-from-minors'>
                            <h4>8. DO WE COLLECT INFORMATION FROM MINORS?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>We do not knowingly collect data from or market to children under 18 years of age.</i>
                        <ul>
                            <li>
                                We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, 
                                you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent 
                                to such minor dependent’s use of the Website.
                            </li>
                            <li>
                                If we learn that personal information from users less than 18 years of age has been collected, we will 
                                deactivate the account and take reasonable measures to promptly delete such data from our records. If you 
                                become aware of any data we may have collected from children under age 18, please contact us at <a href='mailto:contact@defiskeptic.com'>contact@defiskeptic.com.</a>
                            </li>
                        </ul>

                        <section id='what-are-your-privacy-rights'>
                            <h4>9. WHAT ARE YOUR PRIVACY RIGHTS?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights that allow you greater access to
                            and control over your personal information. You may review, change, or terminate your account at any time.</i>
                        <ul>
                            <li>
                                In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access 
                                and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; 
                                and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. 
                                To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
                            </li>
                            <li>
                                If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this 
                                will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on 
                                lawful processing grounds other than consent.
                            </li>
                            <li>
                                If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your 
                                local data protection supervisory authority. You can find their contact details here:<br/><a href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'>https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
                            </li>
                            <li>
                                If you are a resident in Switzerland, the contact details for the data protection authorities are available here: <br/><a href='https://www.edoeb.admin.ch/edoeb/en/home.html'>https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
                            </li>
                            <li>
                                Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies 
                                and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website.
                            </li>
                            To opt-out of interest-based advertising by advertisers on our Website visit <a href='http://www.aboutads.info/choices/'>http://www.aboutads.info/choices/</a>. 
                            <br/>For further information, please see our <a href='/cookie-policy'>Cookie Policy</a>.
                        </ul>
                        
                        <section id='controls-for-do-not-track-features'>
                            <h4>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h4>
                        </section>
                        <ul>
                            <li>
                            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can 
                            activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage 
                            no uniform technology standard for recognizing and implementing DNT signals has been finalized.</li>
                            
                            <li>As such, we do not currently respond to 
                            DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online 
                            tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                            </li>
                        </ul>

                        <section id='do-california-residents-have-specific-privacy-rights'>
                            <h4>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</i>
                        <ul>
                            <li>
                                <b><i>California Civil Code Section 1798.83</i></b>, also known as the “Shine The Light” law, permits our users who are California residents to request and 
                                obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for 
                                direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding 
                                calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact
                                information provided below.
                            </li>
                            <li>
                                If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of 
                                unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, 
                                and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly 
                                displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).
                            </li>
                        <ul/>
                        <b><h6>CCPA Privacy Notice</h6></b>
                       The California Code of Regulations defines a “resident” as:
                            <ul>
                                <li>
                                    Every individual who is in the State of California for other than a temporary or transitory purpose and
                                </li>
                                <li>
                                    Every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose
                                </li>
                            </ul>
                            <br/>All other individuals are defined as “non-residents.”<br/><br/>
                            If this definition of “resident” applies to you, we must adhere to certain rights and obligations regarding your personal information.<br/><br/>
                           <b><h6>What categories of personal information do we collect?</h6></b>
                          
                           We have collected the following categories of personal information in the past twelve (12) months:<br/><br/>
                           <table style={{textAlign: 'center', border: 'solid 2px', width: '100%'}}>
                               <colgroup>
                                    <col span='3' style={{textAlign: 'center'}}/>
                               </colgroup>
                               <tr style={{height: '48px'}}>
                                   <th>Category</th>
                                   <th>Examples</th>
                                   <th style={{width: '120px'}}>Collected</th>
                               </tr>
                               <tr>
                                    <td>A. Identifiers</td>
                                    <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online 
                                        identifier, Internet Protocol address, email address and account name</td>
                                    <td>NO</td>
                               </tr>

                               <tr>
                                    <td>B. Personal information categories listed in the California Customer Records statute</td>
                                    <td>Name, contact information, education, employment, employment history and financial information</td>
                                    <td>YES</td>
                               </tr>

                               <tr>
                                    <td>C. Protected classification characteristics under California or federal law</td>
                                    <td>Gender and date of birth</td>
                                    <td>NO</td>
                               </tr>

                               <tr>
                                    <td>D. Commercial information</td>
                                    <td>Transaction information, purchase history, financial details and payment information</td>
                                    <td>NO</td>
                               </tr>

                               <tr>
                                    <td>E. Biometric information</td>
                                    <td>Fingerprints and voiceprints</td>
                                    <td>NO</td>
                               </tr>

                               <tr>
                                    <td>F. Internet or other similar network activity</td>
                                    <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements</td>
                                    <td>YES</td>
                               </tr>

                               <tr>
                                    <td>G. Geolocation data</td>
                                    <td>Device location</td>
                                    <td>YES</td>
                               </tr>

                               <tr>
                                    <td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                                    <td>Images and audio, video or call recordings created in connection with our business activities</td>
                                    <td>NO</td>
                               </tr>

                               <tr>
                                    <td>I. Professional or employment-related information</td>
                                    <td>Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us</td>
                                    <td>NO</td>
                               </tr>
                               <tr>
                                    <td>J. Education Information</td>
                                    <td>Student records and directory information</td>
                                    <td>NO</td>
                               </tr>
                               <tr>
                                    <td>K. Inferences drawn from other personal information</td>
                                    <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                                    <td>NO</td>
                               </tr>
                           </table>
                            <br/>We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:
                            <ul>
                                <li>Receiving help through our customer support channels;</li>
                                <li>Participation in customer surveys or contests; and</li>
                                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                            </ul>
                           <br/><b><h6>How do we use and share your personal information?</h6></b>
                           <ul>
                                <li>More information about our data collection and sharing practices can be found in this privacy notice and our <a href='/cookie-policy'>Cookie Policy</a>. </li>
                            
                                <li>You may contact us by visiting our <a href='/contact'>Contact Us</a> page, or by referring to the contact details at the bottom of this document.</li>
                            
                                <li>If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</li>
                           </ul>
                           
                            <br/><b><h6>Will your information be shared with anyone else?</h6></b>
                            <ul>
                            <li>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</li>

                            <li>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be “selling” of your personal data.</li> 

                            <li>DeFi Skeptic has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months. DeFi Skeptic will not sell personal information in the future belonging to website visitors, users and other consumers.</li>
                            </ul>

                            <br/><b><h6>Your rights with respect to your personal data</h6></b>
                            <b><u>Right to request deletion of the data – Request to delete</u></b>
                            <ul>
                                <li>
                                    You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, 
                                    subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements 
                                    resulting from a legal obligation or any processing that may be required to protect against illegal activities.
                                </li>
                            </ul><br/>
                            <b><u>Right to be informed – Request to know</u></b><br/><br/>
                            Depending on the circumstances, you have a right to know:
                                <ul>
                                    <li>whether we collect and use your personal information;</li>
                                    <li>the categories of personal information that we collect;</li>
                                    <li>the purposes for which the collected personal information is used;</li>
                                    <li>whether we sell your personal information to third parties;</li>
                                    <li>the categories of personal information that we sold or disclosed for a business purpose;</li>
                                    <li>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
                                    <li>the business or commercial purpose for collecting or selling personal information.</li>
                                </ul><br/>
                            In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.<br/><br/>
                            <b><u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u></b><br/><br/>
                            We will not discriminate against you if you exercise your privacy rights.<br/><br/>       

                            <b><u>Verification process</u></b><br/>
                            <ul>
                                <li>
                                    Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. 
                                    These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us.
                                </li>
                                <li>For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide 
                                    with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided 
                                    to us. We may also use other verification methods as the circumstances dictate.
                                </li>
                                <li>
                                    We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid 
                                    requesting additional information from you for the purposes of verification. If, however, we cannot verify your identity from the information already maintained 
                                    by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. 
                                    We will delete such additionally provided information as soon as we finish verifying you.
                                </li>
                            </ul>
                            <b><u>Other privacy rights</u></b><br/>
                            <ul>
                                <li>You may object to the processing of your personal data.</li>
                                <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data.</li>
                                <li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
                                <li>You may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.</li>
                            </ul><br/>
                            To exercise these rights, you can contact us by visiting our <a href='/contact'>Contact Us</a> page, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you. 
                        </ul>   

                        <section id='do-we-make-updates-to-this-notice'>
                            <h4>12. DO WE MAKE UPDATES TO THIS NOTICE?</h4>
                        </section>
                        <b><i>In Short: </i></b><i>Yes, we will update this notice as necessary to stay compliant with relevant laws.</i>
                        <ul>
                            <li>
                            We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. 
                            If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to 
                            review this privacy notice frequently to be informed of how we are protecting your information.
                            </li>
                        </ul>

                        <section id='do-can-you-contact-us-about-this-notice'>
                            <h4>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h4>
                        </section>
                        <ul>
                            <li>If you have questions or comments about this notice, you may email us at <a href='mailto:contact@defiskeptic.com'>contact@defiskeptic.com</a>.</li>
                        </ul>

                        <section id='how-can-you-review-update-or-delete-the-data-we-collect-from-you'>
                            <h4>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h4>
                        </section>
                        <ul>
                            <li>
                                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, 
                                or delete it in some circumstances.
                            </li>
                            <li>
                                 To request to review, update, or delete your personal information, please visit our <a href='/contact'>Contact Us</a> page.
                            </li>
                        </ul>
                        

                    </div>
                </div>
            </div>
            
        </div>
    </div>
);

PrivacyPolicyArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
PrivacyPolicyArea.defaultProps = {
    space: 1,
};

export default PrivacyPolicyArea;
