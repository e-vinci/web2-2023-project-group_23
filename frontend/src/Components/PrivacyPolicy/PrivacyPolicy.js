const pivacyPolicyPage = () => {
  renderPrivacy();
}

function renderPrivacy() {
  const privacypolicy = `

  <div class="modal-dialog modal-xl">
  <div class="modal-content">
      <div class="modal-header">
        
      </div>
      <div class="modal-body">
          <style>
              h1, h2 {
                  color: #333; 
                  border-bottom: 2px solid #ddd; 
                  padding-bottom: 10px; 
              }

              ul {
                  list-style-type: disc; 
                  margin-left: 20px; 
              }

              p {
                  line-height: 1.6; 
                  font-size: 14px;
              }

              a {
                  color: #007BFF; 
                  text-decoration: underline; 
              }
              
          </style>

          <h1>Privacy Policy</h1>
          <p>This Privacy Policy describes how we collect, use, and protect the information you provide when using our website. We are committed to safeguarding your privacy and ensuring the security of your personal information.</p>

          <h2>Information We Collect</h2>
          <p>We collect and store the following information solely for the purpose of user authentication:</p>
          <ul>
              <li>Username</li>
              <li>Password (encrypted)</li>
          </ul>
              
                  <h2>How We Use Your Information</h2>
                  <p>We use the collected information exclusively for user authentication purposes. Your username and password are stored securely and are not used for any other purposes.</p>
              
                  <h2>User Preferences</h2>
                  <p>We may save user preferences, such as theme settings (dark or light mode), in the local storage of your browser to enhance your user experience. These preferences are not used for tracking purposes and are solely for customization based on your choices.</p>
              
                  <h2>Cookie Usage</h2>
                  <p>We do not use cookies or any tracking mechanisms to collect data about your browsing activities.</p>
              
                  <h2>Data Security</h2>
                  <p>We take data security seriously and have implemented measures to protect your information from unauthorized access, disclosure, alteration, or destruction. User passwords are securely hashed and stored using industry-standard encryption techniques.</p>
              
                  <h2>Third-Party Disclosure</h2>
                  <p>We do not sell, trade, or otherwise transfer your information to third parties.</p>
              
                  <h2>Updates to this Privacy Policy</h2>
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, and the date of the last update will be revised accordingly.</p>
              
                  <h2>Contact Us</h2>
                  <p>If you have any questions or concerns about this Privacy Policy, please contact us at ilovejs@always.com.</p>
              
                  <p>Effective Date: December 17 , 2023</p>
                  </div>
                 
              </div>
          </div>
     
      `;
 
  const main = document.querySelector('main');
  main.innerHTML = privacypolicy;

  
}


export default pivacyPolicyPage;