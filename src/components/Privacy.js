import React from "react";
import Modal from "./Modal"; // Import the Modal component

const Privacy = ({ showModal, handleCloseModal }) => {
  return (
    <div>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h1>TWI Coaching Ltd – Privacy Policy</h1>
        <br></br>
        <p>
          TWI Coaching Ltd (“us”, “we”, or “our”) operates the{" "}
          <a href="http://www.twicoaching.com/" target="_blank" rel="noopener noreferrer">
            http://www.twicoaching.com/
          </a>{" "}
          website (the “Service”).
        </p>
        <br></br>
        <p>
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you
          use our Service and the choices you have associated with that data.
        </p>
        <br></br>
        <h2>What Information We Collect, Use, and Why</h2>
        <br></br>
        <p>We collect or use the following information to provide fitness health services:</p>
        <br></br>
        <ul>
          <li>Name and contact details</li>
          <li>Gender</li>
          <li>Date of birth</li>
          <li>Photographs</li>
          <li>Health information (including medical conditions, allergies, medical requirements, and medical history)</li>
          <li>Information about care needs (including disabilities, home conditions, medication, dietary requirements, and general care provisions)</li>
          <li>Payment details (including card or bank information for transfers and direct debits)</li>
        </ul>
        <br></br>
        <p>We collect or use the following personal information for our online coaching platform:</p>
        <br></br>
        <ul>
          <li>Names and contact details</li>
          <li>Payment details</li>
          <li>Account information, including registration details</li>
          <li>Health information</li>
        </ul>
        <br></br>
        <h2>Usage Data</h2>
        <br></br>
                <p>
                    We may also collect information about how the Service is accessed and used (“Usage Data”). This Usage Data may
                    include:
                 </p>
                 <br></br>
                <ul>
                     <li>IP address</li>
                     <li>Browser type and version</li>
                     <li>Pages visited</li>
                     <li>Time and date of visit</li>
                     <li>Time spent on pages</li>
                     <li>Unique device identifiers</li>
                     <li>Other diagnostic data</li>
                 </ul>
                 <br></br>
                 <h2>Tracking & Cookies Data</h2>
                 <br></br>
                 <p>
                     We use cookies and similar tracking technologies to track the activity on our Service and hold certain
                     information.
                 </p>
                 <p>Examples of cookies we use include:</p>
                 <ul>
                     <li>Session Cookies: Used to operate our Service.</li>
                     <li>Preference Cookies: Used to remember preferences and settings.</li>
                    <li>Security Cookies: Used for security purposes.</li>
                 </ul>
                 <br></br>
                 <h2>Lawful Bases and Data Protection Rights</h2>
                 <br></br>
                 <p>
                     Under UK data protection law, we must have a “lawful basis” for collecting and using your personal information.
                     You have the following rights:
                 </p>
                 <br></br>
                 <ul>
                     <li>Your right of access - You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for. </li>
                     <br></br>
                     <li>Your right to rectification - You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete.</li>
                     <br></br>
                     <li>Your right to erasure - You have the right to ask us to delete your personal information.</li>
                     <br></br>
                     <li>Your right to restriction of processing - You have the right to ask us to limit how we can use your personal information.</li>
                     <br></br>
                     <li>Your right to object to processing - You have the right to object to the processing of your personal data.</li>                     
                     <br></br>
                     <li>Your right to data portability - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you.</li>
                     <br></br>
                     <li>Your right to withdraw consent - When we use consent as our lawful basis you have the right to withdraw your consent at any time.</li>
                 </ul>
                <br></br>
                <p>Our lawful bases for collecting or using personal information to provide fitness health, services are:</p>
                <br></br>
                <li>Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.</li>
                <br></br>
                <ul>
                    <li>Contract – we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.</li>
                    <br></br>
                    <p>Where we get personal information from:</p>
                    <br></br>
                    <li>Directly from you</li>
                </ul>
                 <br></br>
                 <h2>Retention of Data</h2>
                 <br></br>
                 <p>
                     We retain personal data only as long as necessary to fulfill purposes outlined in this policy, comply with legal
                     obligations, resolve disputes, or enforce agreements.
                 </p>
                 <br></br>
                 <h2>Who We Share Information With</h2>
                 <br></br>
                 <p>
                     <strong>Data processors:</strong> Kahunas manages and operates our online coaching application.
                 </p>
                 <p>
                     <strong>Sharing information outside the UK:</strong> Where necessary, data is transferred to the UAE, adhering
                     to UK GDPR safeguards.
                 </p>
                 <br></br>
                 <h2>How to Review or Complain</h2>
                 <br></br>
                 <p>
                     If you have concerns about our use of your personal data, please contact us. If unresolved, you can escalate
                     complaints to the ICO.
                 </p>
                 <address>
                     <strong>ICO Contact:</strong>
                     <br />
                     Information Commissioner’s Office
                     <br />
                     Wycliffe House, Water Lane
                     <br />
                     Wilmslow, Cheshire, SK9 5AF
                     <br />
                     Helpline: 0303 123 1113
                     <br />
                     Website: <a href="https://www.ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer">ICO Complaints</a>
                 </address>
                 <br></br>
                 <p><strong>Last updated:</strong> 26 November 2024</p>
      </Modal>
    </div>
  );
};

export default Privacy;

//<a href ="https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#roa">You can read more about this right here.</a>
//<a href = "https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rtr">You can read more about this right here.</a>
// <a href ="https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rte">You can read more about this right here.</a>
// <a href = "https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rtrop">You can read more about this right here.</a>
// <a href = "https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rto">You can read more about this right here.</a>
// <a href = "https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rtdp">You can read more about this right here.</a>
// <a href = "https://ico.org.uk/for-organisations/advice-for-small-organisations/create-your-own-privacy-notice/your-data-protection-rights/#rtwc">You can read more about this right here.</a>

