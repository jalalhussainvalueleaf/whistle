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
        <h3 class="text-wlOrange text-xl font-semibold">TERMS AND CONDITIONS :</h3>
       <p>The term “you,” “your,” and “yours” refer to the customer. WValue Martech Private Limited incorporated under the provisions of the Companies Act, 1956, hereinafter referred as “Whistle”, “Company”, “we,” “us,” and “our.” These General Terms and Conditions are governed by our Terms of Service. Our Terms of Service take precedence over any conflicting General Terms and Conditions provision.  By using whistle’s services and whistle website, you consent to the terms and conditions of these general terms and conditions. If you do not agree to these general terms and conditions please do not use the website and/or services.</p>
       <p class="text-wlOrange text-xl font-semibold"> Credit requests &amp; cancellation </p>
       <p>Credit cancellation policy shall be authorized only till the process request is incomplete. Once the process request is approved from our end, credit requests cannot be cancelled. The payments for the raised credit requests shall be paid and borne in 7 days upon raising the request. Any delays in payment shall lead to discontinuation and deactivation of the services.</p>
       <p class="text-wlOrange text-xl font-semibold"> Account ethics and confidentiality </p>
       <p>You are entitled to withhold all the account confidentiality standards and shall not engage in partial or complete disclosure of “Accounts” information to any third-party resources. You are entitled to keep all the information regarding invoices, recent transactions, payments, application fields and other panel details confidential.</p>
       <p class="text-wlOrange text-xl font-semibold"> Accuracy and Completeness of Information </p>
       <p>While Whistle strives to ensure that the information contained on this Website is accurate and reliable, Whistle makes no warranties as to the accuracy, correctness or completeness of any such information and assumes no liability or responsibility for any omissions or errors in the content of this Website. Whistle reserves the right to revise the information contained on this Website at any time, in its sole discretion without any obligation to notify past, current or prospective visitors.</p>
       <p class="text-wlOrange text-xl font-semibold"> Your Use of This Website </p>
       <p>You may download certain content that appears on this Website for your personal use, provided you do not remove or modify any copyright, trademark or other proprietary notices. You expressly agree that no right, title or interest in any downloaded materials is transferred to you as a result of such downloading or copying. There are inherent dangers in downloading materials and information from the Internet, and Whistle cautions you to make sure that you completely understand the potential risks before downloading any such content. You are solely responsible for adequate protection and backup of the data and equipment used in connection with any information downloaded from this Website, and Whistle will not be liable for any damages that you may suffer as a result of such download.</p>
       <p class="text-wlOrange text-xl font-semibold"> Changes To The General Terms and Conditions </p>
       <p>We reserve the right to change these General Terms and Conditions from time to time without notice by posting the changes to Whistle’s website.</p>
       <p class="text-wlOrange text-xl font-semibold"> Privacy Policy </p>
       <p>Whistle’s use of any personally identifiable information you submit to the Website is governed by the Website’s Privacy Policy.</p>
       <p class="text-wlOrange text-xl font-semibold"> Registration </p>
       <p>The user has to get registered with us as per the service acceptance contract by providing relevant details including your contact number, mailing address, office address etc. The user should provide the current and true information as per requirement of the registration form without fail. If in any scenario the information provided by the user stands untrue or incomplete, Whistle holds the right to deny, suspend or terminate the services at any instance without giving any prior notice.</p>
       <p class="text-wlOrange text-xl font-semibold"> Services Activation Delay </p>
       <p>We are set to activate user account within 7 days of payment confirmation with positive effect. However, the time period may vary based on certain set of limitations:</p>
       <ul class="li-block">
           <li>The setting up of account period may vary based on the changes in customer requirement.</li>
           <li>Holidays or Non-working days are not considered as a part of the timeline for account activation period.</li>
       </ul>
       <p class="text-wlOrange text-xl font-semibold"> Resolution </p>
       <p>We are committed to provide resolution for any type of service delay.</p>
       <p class="text-wlOrange text-xl font-semibold"> Communication </p>
       <p>The user shall give their consent to receive communications from Whistle by means of e-mails, calls and SMS with respect to the services and transactions on our portal. The users are entitled to register their valid e-mail ids and contact numbers for the same. The user shall also be entitled to receive promotions, service updates and such other sorts of communications from our end.</p>
       <p class="text-wlOrange text-xl font-semibold"> Contact </p>
       <p> In case you have any queries or suggestions in reference with this Terms of Use Policy, please reach out to us at&nbsp;<a href="mailto:info@whistle.mobi" >info@whistle.mobi</a> </p>
       <p class="text-wlOrange text-xl font-semibold"> Termination </p>
       <p>The user may as per his best interests deactivate his account at any point of time. Whistle reserves the right to suspend or terminate access to our services without giving any prior notice without specifying any reason and also in case of any possible violation of the terms of use. Whistle shall not be held liable for any instances of termination of services on the account of non-renewal or non- payment of dues on time.</p>
       <p class="text-wlOrange text-xl font-semibold"> Privacy guidelines </p>
       <p>As per the user registration guidelines, you shall be liable to provide true information while creating the account and choose a strong password. Whistle reserves the right to have full access to customer specific information and use it to an extent as permissible by the regulations of Government of India to provide top notch services to the users. We store your critical information and are liable to keep it secure as per the Information Security Act – 2000.</p>
       <p class="text-wlOrange text-xl font-semibold">Use of Content</p>
       <p>There is a diversity of content available on the website which can be used by the user solely for non-commercial purposes or for the purpose of the services offered by Whistle. The use is not entitled for the ownership of any type of content available on the website and is strictly not allowed to copy or reproduce the content for any purpose except as per the guidelines of this Terms of Use. Whistle grants a temporary permit to the users to view the content available on the website provided there is no violation of copyright and trademarks rules mentioned with the content. The content should not be used for hereby any other purpose without a prior written permission from the concerned authorities of Whistle. We hold the rights to modify, alter, renew or change the content of the website at any point of instance without providing any prior notice to user.</p>
       <p class="text-wlOrange text-xl font-semibold">Fair Usage Policy</p>
       <p class="text-wlOrange text-xl font-semibold">What is it?</p>
       <p>We strive to provide the best in class services to our customers with relentless dedication. There are some scenarios wherein the credits added in the user accounts are not utilised for a very long time or the account is not used for a very long time. This creates an imbalance for the other users as in operational accounts have to be handled on the backend equally consuming time and work constraints. As there are very minimal validity impositions on SMS services, we intend to build a fair usage scheme to ensure adequate utilisation of credits within a fair time frame (6 months- 1 year) Thus to ensure that the services remain oiled for all our customers, we are introducing a Fair Usage Policy with an intention of service betterment.</p>
       <p class="text-wlOrange text-xl font-semibold">FUPs: SMS &amp; Voice</p>
       <p>The credits in user account shall no longer remain valid followed by account deactivation and approved sender id &amp; template de listings if the criteria fall in any of the following scenarios.</p>
       <ul class="li-block">
           <li>If there is no account usage for six consecutive months and the user has not logged into his account for the last three months.</li>
           <li>If there has been account usage in the last six months but user has not logged into the account for the past 3 months, the account will be kept on hold for deactivation as per the policy (ref. a).</li>
           <li>If there has been no usage of the accounts in the past six months but user has logged into his account in the last three months, then the account will be kept on hold for deactivation as per the policy (ref. a).</li>
           <li>Under no circumstances there shall be refund for credits used against respective telecom regulations. The user is expected to maintain regulations compliant usage of SMS credits throughout the account tenure.</li>
           <li>The user is expected to have a minimum of 10 % usage of credits within the first month from the date of credit addition to the user account.</li>
           <li>The user is expected to have a minimum of 50 % usage of credits within the first two months from the date of credit addition to the user account.</li>
           <li>The effective credit balance on the voice platform shall be forfeited in case the account validity of the user has been lapsed. The users are expected to utilize their balance within the validity period or to get their validity extended the same.</li>
       </ul>
       <p class="text-wlOrange text-xl font-semibold">Scope</p>
       <p>The user is entitled to use the services in context with cloud communications for business purposes providing Inbound and outbound solutions in context with IT support solutions.</p>
       <p class="text-wlOrange text-xl font-semibold">Payment</p>
       <p>The user shall be in agreeable terms with any form of electronic payment modes available with Whistle for service payments against the services offered. We therefore in full terms are authorized to process any type of payment electronically by the user against the services. The invoice for the charged services shall be generated and shared with user at fixed periodic intervals. The user is responsible to cross check and verify the invoice and if any discrepancies are to be found, the same shall be notified to Whistle within 7 days of the date of invoice generation. Invoice reminders shall be sent to user at regular intervals.</p>
       <p class="text-wlOrange text-xl font-semibold">Regulatory Guidelines</p>
       <p>Whistle works under the regulations formulated by Department of Telecommunications, Government of India (DOT) and Telecom Regulatory Authority of India (TRAI). Whistle reserves the right for modification, alteration or removal of specific features or offerings based on the law and regulations without any prior notice. Whistle holds no abiding policy to fulfil any type of service request demanded by the user. The provision of service request fulfilment shall be on the sole discretion of Whistle depending on priority parameters.</p>
       <p class="text-wlOrange text-xl font-semibold">Support</p>
       <ul class="li-block">
           <li>Whistle extends service support 24*7 over mail on <a href="mailto:info@whistle.mobi" >info@whistle.mobi</a></li>
           <li>The general response time for any query or issue reported is 24 hours and may extend depending on the severity of the issue reported.</li>
           <li>Whistle strives to resolve and type of issue reported in minimum time possible in reference with service provided but holds no guarantee that the issue will be resolved.</li>
       </ul>
       <p class="text-wlOrange text-xl font-semibold"> Governing Law &amp; Jurisdiction </p>
       <p>The services agreement of Whistle falls strictly under the Laws of Republic of India and any disputes, disagreements (including questionable parameters regarding services) shall be bound to be taken at the relevant court at Bangalore Urban district. This agreement stands firm, in compliance with The Telecom Resources undertaking, The DND undertaking and the privacy policy in correspondence with the terms of usage of services and is above any other agreement or understanding between user and Whistle.</p>
       <p>If you have any concerns or queries with the agreement, please feel free to contact us at <a href="mailto:info@whistle.mobi" >info@whistle.mobi</a> </p>
       <p class="text-wlOrange text-xl font-semibold"> Disclaimers </p>
       <p>The information on this site is provided “as is” without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. No advice or information, whether oral or written, obtained by a user from whistle, shall create any warranty not expressly made herein. If you download or copy any material from this website, you do so at your sole discretion and risk and consequently you will be responsible for any damage to your computer system or loss of data that results from the download or copying of any material or software. Some of whistle’s services require the use of third-party services, products, or networks. Whistle will make commercially reasonable efforts to communicate any policies, requirements, or guidelines of those third parties to you. You agree to follow those policies, requirements, or guidelines. Any actual or alleged violation of a third-party policy, requirement, or guideline by you is your responsibility. Whistle makes no warranty or representation that its website or services will be uninterrupted, timely, secure, or error-free if any violation of a third-party policy, requirement, or guideline by you is alleged by a third party.</p>
       <p class="text-wlOrange text-xl font-semibold"> Products and Services </p>
       <p>All products (including software) and services of Whistle may only be accessed and used pursuant to a separate product or service agreement. If you have accessed such products or services prior to entering into a separate product or service agreement, such access is in violation of Whistle’s General Terms and Conditions, and you shall immediately cease using such services or delete any such products from your computer or server until such time as you become an authorized user of such products or services.</p>
       <p class="text-wlOrange text-xl font-semibold"> Limitation of Liability </p>
       <p>In no event will whistle be liable for any direct, indirect, punitive, special, incidental or consequential damages however they may arise, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the: (I) use of the information contained on this website; (ii) use of software downloaded or linked to from this website; or (iii) for the failure to provide services or information available from this website, even if whistle has been previously advised of the possibility of such damages. In the event you have any dispute with one or more third parties as a result of your use of the website, content or services, or are in any way damaged as a result of any third party in connection therewith, you hereby release and covenant not to sue or otherwise make a claim, demand or file any legal action or institute any legal or regulatory proceedings against whistle, its affiliates, officers, directors, employees, agents, representatives and suppliers from, for any claims, actions, demands or damages (whether direct, indirect, special, incidental or consequential), of whatever kind or nature, known or unknown, suspected or unsuspected, whether foreseeable or not, disclosed or undisclosed.</p>
       <p class="text-wlOrange text-xl font-semibold">Indemnification</p>
       <p>You agree to defend, indemnify and hold Whistle harmless from and against any and all third party claims, damages, costs and expenses, including reasonable attorney’s fees, arising from or related to your use of this website.</p>
       <p class="text-wlOrange text-xl font-semibold">Links to Third Party Websites</p>
       <p>Any links to third party sites is provided as a convenience to you, and such sites are neither owned nor operated by Whistle. Whistle has no control over these linked sites, is not responsible for the contents of these sites, makes no representations or warranties with respect to these linked sites, and shall not be liable for any damages or injury arising from the content of these linked sites. Your viewing and use of any third-party sites is at your sole discretion and risk.</p>
       <p class="text-wlOrange text-xl font-semibold">Copyright Notice</p>
       <p>Unless otherwise noted, the graphic images, buttons and text contained in this website are the exclusive property of Whistle and are Copyright protected. All rights reserved. Except for your personal use as permitted herein, these items may not be copied, displayed, transmitted or reproduced in any form without the express written permission of Whistle.</p>
       <p class="text-wlOrange text-xl font-semibold">Submissions, Suggestions &amp; Community Participation</p>
       <p>In the event you elect to communicate to us suggestions for improvements to the Website or any of Whistle’s services or properties (collectively, “Feedback”), we shall own all right, title, and interest in and to the same, even if you have designated the Feedback as confidential, and we shall be entitled to use the Feedback without restriction. Furthermore, any other content or information you post or provide to Whistle via comments, forums, emails and the like (collectively, “Communications”) shall be considered the property of Whistle. You hereby irrevocably assign all right, title and interest in and to the Feedback and Communications to us and agree to provide us such assistance as we may require to document, perfect, and maintain our rights to the Feedback and Communications.</p>
       <p class="text-wlOrange text-xl font-semibold">Trademark Notice</p>
       <ul class="li-block">
           <li>Whistle logo is trademark of WValue Martech Private Limited</li>
       </ul>
       <p class="text-wlOrange text-xl font-semibold">Our Partners in Excellence:</p>
       <ul class="list-disc">
           <li>Our clients are at the heart of everything we achieve together.</li>
       </ul>
       <p class="text-wlOrange text-xl font-semibold">Powering Progress:</p>
       <ul class="list-disc">
           <li>Our clients' represent diverse sectors, unified by a shared commitment to excellence and transformation.</li>
       </ul>
       <p class="text-wlOrange text-xl font-semibold">Partners in Growth:</p>
       <ul class="list-disc">
           <li>The success of our clients is the truest measure of our impact, and we are proud to support their journeys.</li>
       </ul>
       <h2 class="text-wlOrange text-xl font-semibold">Our Clients:</h2>
       <ul >
       <img src="/images/muthoot-fincorp.png" alt="Muthoot Fincorp" width="150px" height="150px"/> 
       </ul>`;

  return (
    <div class="relative h-screen overflow-hidden bg-black">
      {/* Background Video (Intro) */}
      <video
        ref={introVideoRef}
        class="absolute left-0 top-0 size-full object-cover"
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
        class="absolute left-0 top-0 size-full object-cover"
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
        <div className="absolute right-0 z-50 flex h-screen w-8/12 flex-col items-center justify-center space-y-4 p-12 transition-all ease-in-out">
          <div
            className="scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 h-[600px] w-full space-y-4 overflow-auto rounded-lg bg-black/50 p-4 text-white"
            dangerouslySetInnerHTML={{ __html: terms }}
          />
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
