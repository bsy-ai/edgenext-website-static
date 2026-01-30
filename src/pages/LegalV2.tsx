import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileText, Shield, Lock, CreditCard, Eye, Users, Database, Server, Globe, Scale } from 'lucide-react';

const LegalV2: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cdn-sla');

  const legalDocuments = {
    'cdn-sla': {
      title: window.t("Intro"),
      icon: <Globe size={20} />,
      content: `
    <h2 class="text-2xl font-medium mb-4">Introduction</h2>
    <p class="mb-3 text-sm text-gray-600">Last Updated: Jan 27, 2026</p>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">1. Introduction</h3>
    <p class="mb-4">
      This Privacy Policy apply to access and use the EdgeNext International Website (www.edgenext.com, "Website"), and the use by registered users of the EdgeNext International Website of EdgeNext products and Services provided by the EdgeNext entity listed in Clause 2 of the EdgeNext International Website Terms of Use ("EdgeNext", "we", "us" or "our").
    </p>
    <p class="mb-4">
      EdgeNext respects privacy of our users and we are committed to protecting it through our compliance with this privacy policy. This privacy Policy describes how we collect, use, keep, protect and disclose your personal information in relation to our website, services, products, events and experiences that reference this Privacy Policy (collectively, "Services").
    </p>
    <p class="mb-4">
      This Privacy Policy applies to the data collected by us, or those working on our behalf, through information you enter or from the imported data from authorized and approved sources. It does not apply to data collected through other sites, products, services or content that are offered by third parties or have their own privacy policy.
    </p>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">International Data Transfer and Storage</h3>
    <p class="mb-4">
      Please be aware that the personal information we collect from you will be stored and processed on our secure servers in Malaysia. By using our Website or Services, you acknowledge and expressly consent to the transfer, storage, and processing of your personal information from Singapore (and other countries where you may be located) to Malaysia.
    </p>
    <p class="mb-4">
      We have implemented appropriate safeguards, including standard contractual clauses and robust security measures, to protect your data during such transfers and ensure its security in Malaysia, in compliance with the Singapore Personal Data Protection Act (PDPA) and other applicable laws.
    </p>

    <p class="mb-4">
      By using or accessing our Website or the Services in any manner, you acknowledge that you accept the practices and policies described in this Privacy Policy, and you hereby consent that we may collect, use, and share your information as described herein. If you do not agree with our policies and practices, your choice is not to use our Website or our Services.
    </p>

    <p class="mb-0">
      If you do not provide us with the necessary personal information, we will not be able to deliver all the features of our Services and/or Website to you as intended. Any capitalized terms we use in this Privacy Policy without defining them have the definitions given to them in the EdgeNext International Website Terms and Conditions of Use ("International Website Terms").
    </p>
  `
    },

    '1. Personal Information We Collect': {
      title: window.t("src__pages__Legal.c4d0d334"),
      icon: <Shield size={20} />,
      content: `
    <h2 class="text-2xl font-medium mb-4">Personal Information We Collect</h2>
    <p class="mb-3 text-sm text-gray-600">Last Updated: Jan 27, 2026</p>

    <p class="mb-4">We collect your information when you using the Services. We may collect the following types of personal information from you:</p>

    <ul class="list-disc pl-6 mb-4">
      <li>Your name, email address, physical address, phone number and other similar contact information</li>
      <li>Payment information, including credit card and bank account information</li>
      <li>Information about your job and (or) organization, such as job title, colleagues or contacts</li>
      <li>User names, roles, and other authentication and security credential information</li>
      <li>Text of feedback, inquiries, support advice and chat, conversations and emails with or to us</li>
      <li>Other unique identifiers (including your device's internet protocol (IP) address), and other our advertising and applications on third-party websites and services (including links to this Privacy Policy)</li>
    </ul>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">We collect the following information:</h3>

    <p class="mb-3"><strong>Directly from you:</strong> We collect any information you provide in relation to the Services. Such as search for, subscribe to, or purchase our Services; create and perfect your account, communicate with us by phone, email or otherwise; configure your settings, etc.</p>
    <p class="mb-3"><strong>Automatic information:</strong> Information collected automatically when you visit, interact with use the Services, download something from us, communicate with us, etc. The automatic information may include usage details, IP addresses and information collected through cookies, web beacons and so on.</p>
    <p class="mb-4"><strong>Information from third parties or other sources:</strong> It may be our business partners, service providers and publicly sources, etc.</p>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">Personal Information does not include:</h3>
    <p class="mb-4">
      Your personally identifiable information that has been de-identified, pseudonymized, anonymized, aggregated and/or otherwise processed so as to be unidentifiable:
    </p>
    <ol class="list-decimal pl-6 mb-4">
      <li>in such a way that the data can no longer be attributed to a specific individual, or</li>
      <li>in such a way that the data can no longer be attributed to a specific individual (by reasonable means) without the use of additional information, and where such additional information is kept separate and under adequate security to prevent unauthorized re-identification of a specific individual such that one could not, using reasonable efforts, link such information back to a specific individual</li>
    </ol>
    <p class="mb-0">(the foregoing being referred to as "De-Identified Personal Information").</p>
  `
    },

    '2. How We Use Your Information': {
      title: window.t("src__pages__Legal.4a7c7fd8"),
      icon: <Lock size={20} />,
      content: `
    <h2 class="text-2xl font-medium mb-4">How We Use Your Information</h2>
    <p class="mb-3 text-sm text-gray-600">Last Updated: Jan 27, 2026</p>

    <p class="mb-4">We use information that we collect about you, including any Personal Information:</p>

    <ul class="list-disc pl-6 mb-4">
      <li>To present our Website and its contents to you.</li>
      <li>To provide you with information, products or services that you request from us.</li>
      <li>For analyzing how the Service is used, diagnosing service or technical problems, maintaining security, and personalizing content.</li>
      <li>To fulfill any other purpose for which you provide it.</li>
      <li>To provide you with notices about your account, including expiration and renewal notices.</li>
      <li>To operate, maintain, and provide to you the features and functionality of the Service.</li>
      <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
      <li>To notify you about changes to our Website, our policies, terms or any products or services we offer or provide though it.</li>
      <li>To allow you to participate in interactive features on our Website.</li>
      <li>In any other way we may describe when you provide the information.</li>
    </ul>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">We use cookies, clear gifs, and log file information to:</h3>
    
    <ul class="list-disc pl-6 mb-4">
      <li>Remember information so that you will not have to re-enter it during your visit or the next time you visit the site</li>
      <li>Provide custom, personalized content and information</li>
      <li>Monitor the effectiveness of our Service</li>
      <li>Monitor aggregate metrics such as total number of visitors, traffic, and demographic patterns</li>
      <li>Diagnose or fix technology problems reported by our users or engineers that are associated with certain IP addresses</li>
      <li>Help you efficiently access your information after you sign in</li>
      <li>Track users to the extent necessary to comply with the Digital Millennium Copyright Act</li>
      <li>Enhance our Website security</li>
    </ul>

    <p class="mb-0">
      Subject to obtaining your specific consent, We may use your information to contact you about our own and third-parties' goods and services that may be of interest to you. If you do not want us to use your information in this way, please adjust your user preferences in your account profile.
    </p>
  `
    },
    '3. Individuals under the Age of 18': {
      title: window.t("src__pages__Legal.6584c832"),
      icon: <Users size={20} />,
      content: `
    <h2 class="text-2xl font-medium mb-4">Individuals under the Age of 18</h2>
    <p class="mb-3 text-sm text-gray-600">Last Updated: November 15, 2022</p>

    <p class="mb-3">
      We do not provide Services for purchase by children. So, we do not knowingly collect or maintain Personal Information from anyone under the age of 18 or knowingly allow such persons to register for our Services.
    </p>

    <p class="mb-3">
      If you’re under 18, you may use our Services only with the permission of your parent or guardian.
      If you are under 18, please do not send any Personal Information about yourself (such as your name, address, telephone number, or email address) to us.
    </p>

    <p class="mb-6">
      In the event that we learn that we have collected Personal Information from a child under age 18 without verification of parental consent, we will use commercially reasonable efforts to delete that information from our database.
      Please contact us at +65 68718812 if you have any concerns.
    </p>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">Cookies</h3>
    <p class="mb-3">
      We use cookies to recognize your browser or device and to provide our Services.
    </p>
    <p class="mb-6">
      For more detailed information about it, please
      <a class="text-[#0EB623] hover:underline" href="/contact_us">click here</a>.
    </p>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">How Long Do We Keep Your Personal Information?</h3>
    <p class="mb-3">
      We will keep your personal information as long as it is necessary for the purpose for which we obtained it, unless you ask us to delete it at an earlier time.
    </p>
    <p class="mb-3">
      Our retention periods are based on business needs and legal requirements, and your information that is no longer needed is either irreversibly anonymised or destroyed securely.
    </p>
    <p class="mb-3">
      If you ask us to delete your personal information at an earlier time, we will delete all information we hold on you within 30 days, save for information which is reasonable for us to retain in order to operate our Website or information we are required to retain by law.
    </p>
    <p class="mb-0">
      Following termination or deactivation of your account, we may retain your profile information and all information posted to public areas of the Service.
    </p>
  `
    },
    '4. How We Share Your Information': {
      title: window.t("src__pages__Legal.775613a4"),
      icon: <Eye size={20} />,
      content: `
    <h2 class="text-2xl font-medium mb-6">How We Share Your Information</h2>
    <p class="mb-4 text-sm text-gray-600">Last Updated: November 15, 2022</p>

    <p class="mb-6">
      We will never rent or sell our customers’ Personal Information to others. We share personal information only as noted below with third parties for the purpose of providing or improving the Service to you. If we do this, such third parties’ use of your Personal Information will be bound by obligations of confidentiality. We may store Personal Information in locations outside our direct control (for instance, on servers or databases located or co-located with hosting providers). Any Personal Information or content that you voluntarily disclose for posting to the Service becomes available to the public, as controlled by any applicable privacy or website customization settings. To change your privacy settings on the Service, you may visit our account settings page. If you remove information that you posted to the Service, copies may remain viewable in cached and archived pages of the Service, or if other users have copied or saved that information.
    </p>

    <p class="mb-4">
      <strong>Within Our Corporate Group and Service Providers:</strong>
      To deliver our Services efficiently, we share your personal information with our affiliated entity in Malaysia and with third-party service providers (e.g., for communications, payments, hosting) who are also located in Malaysia or other countries outside of Singapore. When we do this, we ensure that such recipients are contractually bound by obligations of confidentiality and data protection standards that are at least as stringent as those required by the Singapore PDPA.
    </p>

    <p class="mb-4">
      <strong>International Data Transfers:</strong>
      Your acceptance of this Privacy Policy constitutes your consent (deemed consent under the PDPA) to the transfer of your personal information to Malaysia. We take all reasonable steps to ensure that your data is treated securely and in accordance with this Privacy Policy after such transfer.
    </p>

    <p class="mb-4">
      <strong>Legal and Regulatory Requirements:</strong>
      We may disclose your information if required to do so by law, court order, legal process, or subpoena, including to respond to any government or regulatory request, whether in Singapore, Malaysia, or other jurisdictions.
    </p>

    <p class="mb-4">
      <strong>Business Transfers:</strong>
      In the event of a merger, acquisition, or sale of all or a portion of our assets, your Personal Information may be transferred to the successor entity. The data will remain subject to the promises made in this Privacy Policy unless you consent otherwise.
    </p>
  `
    },
    '5. De-Identified Personal Information': {
      title: window.t("src__pages__Legal.d842f09f"),
      icon: <Users size={20} />,
      content: `
    <h2 class="text-2xl font-medium mb-4">De-Identified Personal Information</h2>
    <p class="mb-3 text-sm text-gray-600">Last Updated: Jan 27, 2026</p>

    <p class="mb-4">
      We may share De-Identified Personal Information (such as anonymous usage data, referring/exit pages and URLs, platform types, number of clicks, etc.) with interested third parties to help understand the usage patterns for certain Services.
    </p>

    <p class="mb-4">
      <strong>Business Merger And Acquisition:</strong>
      We may buy businesses or services to a potential buyer or other successor for the purpose of considering a merger, divestiture, restructuring, reorganization, dissolution, or sell or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which Personal Information held by us about our Website users is among the assets transferred. But remains subject to the promises made in any pre-existing Privacy Policy (unless, of course, the individual consents otherwise). Also, in the unlikely event, your information will of course be one of the transferred assets.
    </p>

    <p class="mb-0">
      <strong>By Your Choices:</strong>
      Others above, you will receive notice when personal information about you might be shared with third parties, and you can choose not to share the information.
    </p>
  `
    },

    '6. Security measures': {
      title: window.t("src__pages__Legal.929267dc"),
      icon: <Lock size={20} />,
      content: `
    <h2 class="text-2xl font-medium mb-4">Security measures</h2>
    <p class="mb-3 text-sm text-gray-600">Last Updated: Jan 27, 2026</p>

    <p class="mb-4">
      We have implemented measures designed to secure your Personal Information from accidental loss and from unauthorized access, use, alteration and disclosure. All personal information you provide to us is stored on our secure servers (or those of our service providers) behind firewalls. We may store, retrieve, access, and transmit your personal information in the US or in other countries.
    </p>

    <p class="mb-4">
      The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of the Website or Services, you are responsible for keeping this password confidential. You should not share your password with anyone. You must prevent unauthorized access to your account and Personal Information by selecting and protecting your password appropriately and limiting access to your computer or device and browser by signing off after you have finished accessing your account. The information you share in public areas may be viewed by other users.
    </p>

    <p class="mb-0">
      Unfortunately, the transmission of information via the internet is not completely secure. Although we do try to protect your Personal Information, we cannot guarantee the security of your Personal Information transmitted to us or which we obtain. Any transmission of Personal Information is at your own risk. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of user information at any time.
    </p>
  `
    },

    '7. User Data Protection': {
      title: window.t("src__pages__Legal.2e500b77"),
      icon: <Database size={20} />,
      content: `
    <h2 class="text-2xl font-medium mb-4">User Data Protection</h2>
    <p class="mb-3 text-sm text-gray-600">Last Updated: Jan 27, 2026</p>

    <p class="mb-4">
      User data refers to the data processed, stored, uploaded, downloaded, distributed and otherwise processed by you through the Services provided by EdgeNext. You have full ownership of your user data. As a cloud service provider, EdgeNext will strictly follow your instructions to process your user data, and will not make any unauthorized use or disclosure of your user data except in accordance with the agreement reached with you or the implementation of specific legal and regulatory requirements.
    </p>

    <p class="mb-4">
      You shall be responsible for the source and content of your user data. EdgeNext prompts you to carefully judge the legality of the data source and content. All the results and responsibilities caused by your data contents violating laws and regulations, departmental rules or national policies shall be borne by you.
    </p>

    <p class="mb-4">
      We value the opportunity to provide you with assistance in the data processing. For more details about customer data processing, please refer to the EdgeNext’s Customer Data Protection Policy and the specific provisions in the Service Agreement.
    </p>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">What You Can Access</h3>
    <p class="mb-3">
      Through your account settings, you may access, and, in some cases, edit or delete the following information you’ve provided to us:
    </p>

    <ul class="list-disc pl-6 mb-4">
      <li>name and password</li>
      <li>email address</li>
      <li>location</li>
      <li>user profile information, including any content you have uploaded to the Services</li>
    </ul>

    <p class="mb-0">
      The information that you can view, update, and delete may change as the Services change. If you have any questions about viewing or updating information we have on file about you, please contact us at info@edgenext.com
    </p>
  `
    },

    '8. Your Rights/Information': {
      title: window.t("src__pages__Legal.fde11b76"),
      icon: <Shield size={20} />,
      content: `
    <h2 class="text-2xl font-medium mb-4">Your Rights/Information</h2>
    <p class="mb-3 text-sm text-gray-600">Last Updated: Jan 27, 2026</p>

    <p class="mb-4">
      You have the following rights regarding your information: To exercise any of these rights, please contact us using the details in Section 9.
    </p>

    <p class="mb-3"><strong>Access and Correction:</strong> You have the right to access and correct your personal data in our possession or under our control.</p>
    <p class="mb-3"><strong>Withdrawal of Consent:</strong> You may withdraw your consent for the collection, use, or disclosure of your personal data by giving us reasonable notice. Please note that upon withdrawal of consent, we may not be able to continue providing you with some or all of our Services.</p>
    <p class="mb-3"><strong>Data portability:</strong> Where applicable, upon your request, we shall provide you or a successor organization you authorize with your data in a commonly used machine-readable format.</p>
    <p class="mb-3"><strong>Deletion:</strong> You may request the deletion of your personal data, and we will act on such requests unless we are required to retain the data by law or have a legitimate business interest to retain it (e.g., for legal compliance, dispute resolution).</p>

    <p class="mb-4">
      We will respond to your request within the timeframe set by applicable law. If you are not satisfied with our response, you have the right to contact the Personal Data Protection Commission (PDPC) of Singapore.
    </p>

    <p class="mb-3">
      <strong>The right to restrict processing:</strong> You have rights to “block” or suppress further use of your information. When processing is restricted, we can still store your information, but may not use it further. We keep lists of people who have asked for further use of their information to be “blocked” to make sure the restriction is respected in future.
    </p>

    <p class="mb-3">
      <strong>The right to data portability:</strong> You have rights to obtain and reuse your personal data for your own purposes across different services. For example, if you decide to switch to a new provider, this enables you to move, copy or transfer your information easily between our IT systems and theirs safely and securely, without affecting its usability.
    </p>

    <p class="mb-4">
      <strong>The right to object:</strong> You have the right to object to certain types of processing, including processing for direct marketing (which we do only with your consent). For more information or to object, see Objecting to processing.
    </p>

    <p class="mb-0">
      To ask questions or comment about this Privacy Policy and our privacy practices, contact us at: info@edgenext.com
    </p>
  `
    },
    '9. Changes to Our Privacy Policy': {
      title: window.t("src__pages__Legal.750f43c9"),
      icon: <FileText size={20} />, // 假设使用了一个文件图标，您可以根据需要更换
      content: `
    <h2 class="text-2xl font-medium mb-4">Changes to Our Privacy Policy</h2>
    <p class="mb-3 text-sm text-gray-600">Last Updated: Jan 27, 2026</p>

    <p class="mb-4">
      We’re constantly working to improve our Services, so we may need to change this Privacy Policy from time to time as well, but we will alert you to changes by placing a notice on our Website or as part of the Services, by sending you an email, and/or by some other means.
    </p>
    <p class="mb-4">
      Please note that if you’ve opted not to receive legal notice emails from us (or you haven’t provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is collected.
    </p>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">Additional Information for Customers Located in California</h3>
    <p class="mb-4">
      Under the California Consumer Privacy Act of 2018 (CCPA), California residents have certain rights related to their personal information. We has long recognized the importance of its customers’ privacy rights and for that reason, most of the CCPA requirements have been part of our approach to data privacy since well before passage of the CCPA. Although the rights are described in more detail in the main body of our Privacy Policy, we outline them here for ease of reference.
    </p>
    <p class="mb-4">
      First, EdgeNext does not exchange your personal information for money.
    </p>
    <p class="mb-4">
      Second, you may submit a verifiable request for the following information; a) categories of your personal information collected by us; b) purposes for which we collect your personal information; c) categories of sources from which we collect your personal information; and d) the specific personal information we have collected about you in the prior 12 months.
    </p>
    <p class="mb-4">
      Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to ask us annually for a notice identifying the categories of Personal Information which we share with our affiliates and/or third parties for marketing purposes, and to being provided contact information for such affiliates and/or third parties. If you are a California resident and would like a copy of this notice, please submit a written request to us.
    </p>
    <p class="mb-4">
      Third, subject to certain exceptions outlined in the CCPA, you may ask us to delete the personal information we have collected from you. We will retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
    </p>
    <p class="mb-4">
      Fourth, we will not discriminate against you on either a pricing or service basis, for exercising your CCPA privacy rights.
    </p>
    <p class="mb-4">
      Finally, you may exercise your rights under CCPA by: a) deactivating and purging your account in your control panel settings or b) by sending an email to <a href="mailto:info_apac@edgenext.com" class="text-blue-600 hover:underline">info_apac@edgenext.com</a> to request access or deletion. If you have any questions about your CCPA rights as they relate to EdgeNext, you may call us or send emails.
    </p>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">Additional Information for International Users (Including Singapore)</h3>
    <p class="mb-4">
      <strong>Data Storage and Processing Location:</strong> Your personal data is primarily stored and processed on servers located in Malaysia. By using our Services, you consent to the transfer of your data from your country of residence (including Singapore) to Malaysia. Malaysia's data protection laws may differ from those in your jurisdiction. We handle all data in accordance with this policy and have implemented safeguards to protect your information.
    </p>
    <p class="mb-4">
      <strong>Singapore-Specific Notice:</strong> For users in Singapore, our data protection practices are designed to comply with the Singapore Personal Data Protection Act (PDPA). Our basis for collecting, using, and disclosing your personal data is often your consent, which is deemed to be given when you voluntarily provide your data for the purposes you have been notified of, or when you continue using our Website after being informed of this Policy.
    </p>

    <h3 class="text-xl font-medium mt-6 mb-3 text-gray-900">Additional Information for Users Located in the European Economic Area (“EEA”)</h3>
    <p class="mb-4">
      <strong>IMPORTANT NOTICE:</strong> This Privacy Policy originates and is hosted on a Website located in Singapore, which has different data protection laws from those of other nations, and particularly member nations in the European Union. Due to differing laws and legal practice, be aware that law enforcement agencies in Singapore may have access to your Personal Information.
    </p>
    <p class="mb-4">
      If you are a resident of a country other than Singapore, you acknowledge and consent to our collecting, transmitting, and storing your Personal Information out of the country in which you reside.
    </p>
    <p class="mb-4">
      <strong>Transfer of data outside of the EEA</strong><br/>
      We may transfer some or all of your personal information outside of the EEA. The privacy laws of the receiving country may be different from those in the EEA and may not have adequate data protection standards. We will always have appropriate safeguards in place when transferring your personal information outside of the EEA, and you may ask us for a copy of these safeguards. In addition, we will offer EU and Swiss individuals whose personal information has been transferred to us the opportunity to choose whether the personal information we have received is to be used for a purpose other than the purpose for which it was originally collected or subsequently authorized by the individual. An individual may opt-out of such uses of their personal information by emailing us at <a href="mailto:info_apac@edgenext.com" class="text-blue-600 hover:underline">info@edgenext.com</a>.
    </p>
  `
    }
  };

  const tabKeys = Object.keys(legalDocuments);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[56px] font-medium mb-6 leading-[1.1] tracking-tight text-gray-900">{window.t("src__pages__Legal.fa2ead69")}

              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">{window.t("src__pages__Legal.9a0bd96a")}

              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-3">
                <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
                  <h2 className="text-lg font-medium mb-6 text-gray-900">{window.t("src__pages__Legal.25c9b3d4")}</h2>
                  <nav className="space-y-2">
                    {tabKeys.map((key) => {
                      const doc = legalDocuments[key];
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveTab(key)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 ${
                          activeTab === key ?
                          'bg-[#0EB623] text-white shadow-lg' :
                          'text-gray-600 hover:bg-white hover:text-[#0EB623] hover:shadow-sm'}`
                          }>

                          <div className={`transition-colors duration-300 ${
                          activeTab === key ? 'text-white' : 'text-[#0EB623]'}`
                          }>
                            {doc.icon}
                          </div>
                          <span className="font-medium text-sm leading-tight">{doc.title}</span>
                        </button>);

                    })}
                  </nav>
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-9">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: legalDocuments[activeTab].content
                    }}
                    style={{
                      '--tw-prose-headings': '#111827',
                      '--tw-prose-body': '#374151',
                      '--tw-prose-links': '#0EB623'
                    }} />

                  
            
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-medium mb-6 text-gray-900">{window.t("src__pages__Legal.50fbb769")}

              </h2>
              <p className="text-lg text-gray-600 mb-8">{window.t("src__pages__Legal.bcf68a09")}

              </p>
              <a
                href="/contact_us"
                className="inline-flex items-center px-8 py-4 bg-[#0EB623] text-white rounded-xl font-medium hover:bg-[#0EA620] transition-all duration-300">{window.t("src__pages__Legal.14e3c4fd")}


              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default LegalV2;