"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Common/Header";
import Sidebar from "@/components/Menu/SideBar";
import SideMenu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import Slider from "@/components/Slider";

function Page() {
  const [videoFinished, setVideoFinished] = useState(false);
  const introVideoRef = useRef(null);
  const rotationVideoRef = useRef(null);
  const [footer, setFooter] = useState(false); // State for Footer visibility
  const [showSidebar, setShowSidebar] = useState(false); // State for controlling sidebar visibility

  const [showContent, setShowContent] = useState(false); // State for controlling sidebar visibility

  // useEffect(() => {
  //     setTimeout(() => {
  //       setShowContent(true); // Show Sidebar with animation
  //     }, 4000); // Delay for smooth effect
  // });

  // Show Sidebar with smooth transition after Login
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Show Sidebar with animation
    }, 1000); // Delay for smooth effect

    setTimeout(() => {
      setShowSidebar(true); // Show Sidebar with animation
    }, 3000); // Delay for smooth effect
  });

  // Play rotation video after intro finishes
  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  const toggleFooter = () => {
    setFooter(!footer);
  };

  const terms = `
        <h3 className="text-wlOrange text-2xl font-semibold">PRIVACY POLICY</h3>
        <p class="text-xl text-wlOrange">Thank you for visiting Whistle.</p>
        <p>We at Whistle are committed to protecting the information that you share with us, and explaining how we collect, process, and share that information online. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and entrust to keep it secure.</p>
        <p>We provide you with insight into the privacy practices employed here at Whistle.</p>
        <p class="margin-btm-0">This Privacy Policy is meant to help you understand the following:</p>
        <ul class="list-disc">
            <li>What information we collect,</li>
            <li>How we collect,</li>
            <li>Why we collect it,</li>
            <li>How we keep it secure, and</li>
            <li>How you can update, manage, export, and delete your information.</li>
        </ul>
        <p class="text-xl text-wlOrange">Background</p>
        <p>This Policy provides an overview of how WValue Martech Private Limited, hereinafter referred to as “Whistle”, collects the information of “data subjects” (hereinafter referred to as “You or your”) personal data, how it handles it and how it protects your privacy. In this policy, “we”, “us” and “our” refer to Whistle or its subsidiaries or affiliates.</p>

        <p> <span class="text-xl text-wlOrange">End Users of Whistle’s Products and Services.</span>&nbsp; Whistle is a market leader in providing innovative Global Communication Services.&nbsp; In this capacity, Whistle may obtain and process on behalf of its customers (“Clients“) certain personal information about its Clients’ employees, representatives, consultants, contractors, agents, or other end users who are authorized to use its services (“End User Data“).&nbsp; If you are an employee or other end user of a Client, please contact your employer with any questions about how your End User Data is collected and processed, or to seek clarification or exercise any rights you may be offered under data protection laws in your jurisdiction.</p>
        <p>Whistle, with regard to personal data, might act both as a data controller as well as a data processor or agent that processes End User Data on behalf of its Client, which is the controller or owner of such data under applicable data protection laws.</p>
        <p>As such, in the latter, Whistle assists its Clients to address data protection inquiries from end users to the extent applicable to its services, but typically does not respond directly to such inquiries from end users.</p>
        <p>Whistle is also a data controller in certain cases where there is an express agreement between Whistle and the client or may be a controller in certain circumstances where there is a written consent from the client based on business necessities and exigencies. Further, Whistle is also a data controller to the extent of its customers data which it obtains and processes directly, through lead-generation platforms where the customer would have given their express consent, social media platforms where the customer could have contacted or email referrals from existing clients, tradeshows where customer would have visited and shared their contact information with Whistle.</p>
        <p>As we serve you, we want you to understand the types of information we collect</p>
        <p>We build a range of services that you would find it in our website, and in order to achieve this we collect personal data from you in a number of ways including:</p>
        <ul class="list-disc">
            <li>Applications</li>
            <li>Web Forms</li>
            <li>Off-site services</li>
            <li>Others</li>
            <li>Contractual Commitments</li>
        </ul>

        <p class="text-xl text-wlOrange">i. Personal Data</p>
        <p class="text-xl text-wlOrange">a) What “Personal Data” do we collect from you?</p>
        <p>In the process of rendering our services, we collect the PII, which is the information that can be used to identify you such as:</p>
        <p>Examples of sensitive PII elements include, but are not limited to:</p>
        <ul class="list-disc">
            <li>Name</li>
            <li>Social Security number, full and truncated; (National Identification Number) such as Passport etc.</li>
            <li>Citizenship, legal status;</li>
            <li>Birth date, place of birth;</li>
            <li>Home and personal cell telephone numbers;</li>
            <li>Personal email address, mailing and home address;</li>
            <li>Security clearance;</li>
            <li>Financial information to the extent required;</li>
            <li>Law enforcement information, employment information, educational information; and Examples of non-sensitive PII elements include, but are not limited to:</li>
            <li>Office location;</li>
            <li>Business telephone number;</li>
            <li>Business email address;</li>
            <li>Badge number;</li>
            <li>Other information that is releasable to the public.</li>
        </ul>

        <p class="text-xl text-wlOrange">ii Processing of Personal Data</p>
        <p class="text-xl text-wlOrange">b) How do we process your personal data?</p>
        <p>We may process data about your use of our website and services (“usage data”). The usage data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use. The source of the usage data is our analytics tracking system and other tools used for web tracking/lead generation purpose. This usage data may be processed for the purposes of analysing the use of the website and services. The legal basis for this processing is our legitimate interests, namely monitoring and improving our website, services and improvise the user’s experience.</p>
        <p>We may also process your data (“account data”), which may include your name and email address, contact details, your qualifications, employment and past experiences and such other related information. The source of the account data is from third-party sites, job portals, leads / connects from social media platforms like LinkedIn, Twitter, Facebook, YouTube, Instagram, Pinterest etc., where you have given your consent to store and transmit your individual data for prospective employers and companies. The account data may be processed for the purposes of operating our website, providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you. The legal basis for this processing is our legitimate interests, namely the proper administration of our website and business, by performance of a contract between you and us.</p>
        <p>We may also store your personal data (“profile data” ), such as your name, address, telephone number, email address, gender, date of birth, and employment details in our database, so as to contact you directly in the event of an contracting opportunity or sharing a new product portfolio or a service based on your requirements and the opportunities we intend share with you. The legal basis of processing is the express CONSENT, provided by you, and the performance of a contract between you and us and/or taking steps, at you request, to enter into such a contract.</p>
   
        <p class="text-xl text-wlOrange">c) When can we process your personal data?</p>
        <ul class="list-disc">
            <li>We&nbsp;can process&nbsp;your personal data if:</li>
            <li>You are a client or vendor of Whistle (or are interested in becoming one);</li>
            <li>You use products and/or services that have been developed by us;</li>
            <li>You work for our client and/or vendor, or someone who uses services and/or products that have been developed by us;</li>
            <li>You are a client (or work for a client), who we want to tell about and offer our services and/or products;</li>
            <li>You are our employee, subcontractor, or are interested in working with us.</li>
            <br>
            <li>We do&nbsp;not process&nbsp;if:</li>
            <li>The personal data pertains to children under 13 years of age and do not offer them our services. If we discover that a person under the age of 13 has given us their personal data without parental approval, we will take all necessary measures to delete this information.</li>
            <li>If you believe that we may have been given personal information from a person who hasn’t yet reached the age of consent in your jurisdiction without the necessary approval, please tell us, and we will take all necessary measures.</li>
        </ul>

        <p class="text-xl text-wlOrange">d) Why do we process your personal information</p>
        <ul class="list-disc">
            <li>We process your “non-sensitive” personal information for the following reasons:</li>
            <li>Advertising and sales activities while we would be presenting information about our services and products;</li>
            <li>Creating and executing contracts and agreements with you or your employer to:</li>
            <ul class="list-disc">
                <li>Provide services to clients and other users of these services;</li>
                <li>Receive goods and services from vendors;</li>
                <li>Control our relationship with clients, vendors, and other parties who use our services or products;</li>
            </ul>
            <li>Administering our website as per the agreement and for internal processing, including fixes of defects, data analysis, testing, investigating, and collecting statistics and surveys;</li>
            <li>Improving our website to provide content in the most efficient &amp; effective way.</li>
            <li>Provide you with specific products and services covered under the terms of a contract with one or more of our corporate customers, including processing transactions, authenticating authorized users, and marketing our products and services;</li>
            <li>Perform certain benefit administration or other transactions initiated by you;</li>
            <li>Respond to your questions, complaints, or reviews of our product or services;</li>
            <li>Send you communications about online transactions, product information, ads and promotions, electronic newsletters, or other notices you requested or offers tailored to you;</li>
            <li>Comply with applicable law, obey judicial orders, cooperate with law enforcement authorities, or prevent any suspected illegal activities;</li>
            <li>Help us run our business; or</li>
            <li>For any other everyday business purposes, such as product development and website administration.</li>
        </ul>
        <p> <span class="text-xl text-wlOrange">Other Disclosures.</span> We may otherwise disclose Personal Information as permitted or required by law, when we believe in good faith it is necessary for safety purposes, required for legal reporting, or to protect our legal rights or enforce our Terms of Use or any applicable rules, or to protect the rights of others.&nbsp; We may also disclose Personal Information to our auditors, legal advisors, or to respond to a&nbsp;subpoena.&nbsp; We may also aggregate information that we gather about you (e.g., online sales, traffic patterns) and provide these statistics to others in aggregate form.</p>
        <p>However, it is to be noted that we may not be able to withdraw the consent by virtue of contractual commitments where there was an express consent you gave for storing your information for a period mentioned in the contract, or by the law of Land under which we operate.</p>

        <p class="text-xl text-wlOrange">iV Providing your personal data to others</p>
        <p>We may disclose your profile data, usage data, account data, (collectively “your personal data”) to any member of our group of companies (this means our subsidiaries, our ultimate holding company and all its subsidiaries) insofar as reasonably necessary for the purposes, and on the legal bases, set out in this policy. Information about our group of companies can be found at www.Whistle.com/companies/</p>
        <p>We may disclose your personal data to our insurers and/or professional advisers insofar as reasonably necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, obtaining professional advice, or the establishment, exercise or legal claims, whether in court proceedings or in an administrative or out-of-court procedure.</p>
        <p>We may also disclose your personal data to our suppliers or subcontractors or our clients, financial institutions for processing the claims and payments, identified insofar as reasonably necessary for achieving the business objectives.</p>

        <p class="text-xl text-wlOrange">V Access</p>
        <p class="text-xl text-wlOrange">Who has access to the data we collect?</p>
        <p>We process and access to the data we collect from you. However, we use third parties to assist us with processing your personal data including the following categories of recipients:</p>
        <ul class="list-disc">
            <li>Financial transaction processors (processing your payments)</li>
            <li>Customer service communication platform</li>
            <li>Email communication manager</li>
            <li>Website management services</li>
            <li>Website design and programming services</li>
            <li>Clients / Sub-Contractors / Contractors to the extent necessary for our business objectives.
            Preparation of Analytics and Dashboards</li>
        </ul>
        <p>These third parties have a contract with us, wherein, they are prohibited from utilizing, sharing or retaining your personal data for any purpose other than we dictate.</p>

        <p class="text-xl text-wlOrange">vi Your rights over data</p>
        <p class="text-xl text-wlOrange"> What are your rights over your PII </p>
        <p>&nbsp;You have the right to control your personal data. Specifically, you have the following rights:</p>
        <dl>
            <dt> <b> Right to be informed: </b> </dt>
            <dd>We are informing you now with this policy.</dd>
            <dt> <b>  Right of access: </b> </dt>
            <dd>We’ll provide you with the data we have about you.</dd>
            <dt> <b>  Right to rectification: </b> </dt>
            <dd>Request we fix incorrect data about you.</dd>
            <dt> <b>  Right to erasure: </b> </dt>
            <dd>Request we erase certain data about you, subject to contractual rights and terms of use</dd>
            <dt> <b>  Right to restrict processing: </b> </dt>
            <dd>Ask us to restrict certain type of processing of your personal information.</dd>
            <dt> <b>  Right to data portability: </b> </dt>
            <dd>Ask us to provide your personal data we have for export where applicable.</dd>
            <dt>  <b> Right to object: </b> </dt>
            <dd>Object to how we use your data.</dd>
            <dt> <b>  Rights of automated decision making and profiling: </b> </dt>
            <dd>While we do your profiling, we also give you the right to opt-out/ not accept. To exercise any of these rights, please contact at <a href="mailto:info@whistle.mobi" style="color: #fff">info@whistle.mobi</a> with your request.</dd>
        </dl>
        <p class="text-xl text-wlOrange">Your Right to Withdraw Consent</p>
        <p>Although this is mentioned above, we want to emphasize that wherever we’ve asked for your consent to collect or process your personal data, you have the right to withdraw that consent. If you receive email messages from us, you can use the “unsubscribe” link in each message to withdraw consent and stop the mailings.</p>

        <p class="text-xl text-wlOrange">vii Cookies and Similar Technologies</p>
        <p>This site uses cookies and similar technologies to track particular aspects of you and other people who visit us. This tracking is done to provide us with information on how people move about the site, what is of interest to them and what is not, how our marketing is performing, and incidental items such as what percentage of users access the site from a personal computer versus a mobile phone. You may block most cookies by adjusting your browser settings.</p>
        
        <p class="text-xl text-wlOrange">In General, for all our valued stakeholders:</p>
        <p class="text-xl text-wlOrange"> What information do we collect? </p>
        <p>When ordering or registering on our site, as appropriate, you may be asked to enter your: name or e-mail address and banking information for payment purposes. You may, however, visit our site anonymously.</p>
        <p class="text-xl text-wlOrange">What do we use your information for?</p>
        <p>Any of the information we collect from you may be used in one of the following ways:</p>
        <dl>
            <dt> <b> To personalize your experience: </b> </dt>
            <dd>To better respond to your individual needs</dd>
            <dt> <b> To improve our website: </b> </dt>
            <dd>To improve our website offerings based on the information and feedback we receive from you</dd>
            <dt> <b> To improve customer service: </b> </dt>
            <dd>To more effectively respond to your customer service requests and support needs</dd>
            <dt> <b> To process transactions: </b> </dt>
            <dd>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of deliverable.</dd>
            <dt> <b> To administer a contest, promotion, survey or other site feature: </b> </dt>
            <dd>Thereby promoting the control over data</dd>
            <dt> <b> To send periodic emails: </b> </dt>
            <dd>To send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</dd>
        </dl>

        <p class="text-xl text-wlOrange"> How do we protect your information? </p>
        <p>We implement a variety of security measures such as maintaining a discrete database, providing access only in case of necessity, access on a need to know basis and such other globally acceptable security measures, to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. For further help and details, please write to us  at&nbsp;<a href="mailto:info@whistle.mobi" style="color: #fff">info@whistle.mobi</a>  </p>
        <p class="text-xl text-wlOrange"> Do we use cookies? </p>
        <p>Yes those cookies are transferred by a site or a service provider to your computer’s hard drive through your web browser, which enables to recognize your browser and capture and remember certain information.</p>
        <p class="text-xl text-wlOrange"> Do we disclose any information to outside parties? </p>
        <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
        <br>
        <p class="text-xl text-wlOrange"> GENERAL INFORMATION --&gt; </p>
        <p class="text-xl text-wlOrange">Third party links</p>
        <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
        <p class="text-xl text-wlOrange"> Usage of Outbound links </p>
        <p>Whistle websites might include links that lead to other websites, websites that are controlled by parties we are not related or connected to. After clicking an outbound link, we lose any control of collection, storage, or processing of your personal data that is transferred</p>
        <p>The behaviour of third-parties is also beyond the scope of our control, therefore&nbsp;is not responsible for the collection, storage, and processing of information you share with third-parties.</p>
        <p class="text-xl text-wlOrange">How long we process your personal data </p>
        <p>We process personal data as long as it takes to achieve the goal (goals) for which this data was originally collected. After this your data will be deleted or transferred to an archive, except for cases when it is necessary to continue the processing of your data to abide by our legal and contractual obligations that we have or other rightful and legal purposes.</p>
        <p class="text-xl text-wlOrange"> Business Transfers </p>
        <p>We do not intend to sell our business. However, in the unlikely event that we sell our business or get acquired or merged, we will ensure that the acquiring entity is legally bound to honor our commitments to you. We will notify you via email or through a prominent notice on our website of any change in ownership or in the uses of your personal information and service data. We will also notify you about any choices you may have regarding your personal information and service data.</p>
        <p class="text-xl text-wlOrange"> Your Consent </p>
        <p>By using our site, you consent to our&nbsp;Privacy Policy, Cookie Policy and Terms of Use.</p>
        <p class="text-xl text-wlOrange"> Changes to our Privacy Policy </p>
        <p>If we decide to make any changes in our privacy policy, we will post those changes on this page without prior notice. Hence we recommend you to keep coming back to this page regularly to beware of any changes in our privacy policy.</p>
        <br><br>
    </div>`;

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background Video (Intro) */}
      <video
        ref={introVideoRef}
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd} // Trigger when intro video finishes
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/webm" />
      </video>

      {/* Background Video (Rotation, Looping) */}
      <video
        ref={rotationVideoRef}
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        loop
        muted
        style={{ display: videoFinished ? "block" : "none" }} // Hide until intro finishes
      >
        <source src="/video/Earth_Side_Rotation.webm" type="video/mp4" />
      </video>

      <Header />

      {/* Content */}
      {/* Content */}
      {showContent && (
        <div className="absolute right-0 z-50 flex h-screen flex-col items-center justify-center space-y-4 text-white transition-all ease-in-out lg:w-8/12 lg:p-12">
          <div
            className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 h-[600px] w-full space-y-4 overflow-auto rounded-lg bg-black bg-opacity-50 p-4 text-white"
            dangerouslySetInnerHTML={{ __html: terms }}
          />{" "}
        </div>
      )}

      {showSidebar && (
        <Sidebar
          className="z-50 translate-x-0 transition-transform duration-1000"
          isHomepage={false}
          footer={footer}
        />
      )}
      {/* <SideMenu/> */}
      <Footer toggleFooter={toggleFooter} footer={footer} />
    </div>
  );
}
export default Page;
