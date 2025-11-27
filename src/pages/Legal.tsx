import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileText, Shield, Lock, CreditCard, Eye, Users, Database, Server, Globe, Scale } from 'lucide-react';

const Legal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cdn-sla');

  const legalDocuments = {
    'cdn-sla': {
      title: 'CDN Service Level Agreement',
      icon: <Globe size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">CDN Service Level Agreement</h2>
        
        <h3 class="text-xl font-medium mb-4">1. Introduction</h3>
        <p class="mb-4">This EdgeNext CDN Service Level Agreement ("SLA") applies to your purchase and use of the EdgeNext CDN Service ("Service") and your use of the Service is subjected to the terms and conditions of the EdgeNext International Website Product Terms of Service ("Product Terms") between the relevant EdgeNext entity described in the Product Terms ("EdgeNext", "us", or "we") and you. This SLA only applies to your purchase and use of the Services for a fee that is directly provided by EdgeNext, and shall not apply to any free Services or trial Services provided by us.</p>
        
        <h3 class="text-xl font-medium mb-4">2. Definitions</h3>
        <p class="mb-4"><strong>2.1</strong> "Content" means objects which are delivered from EdgeNext's cache server.</p>
        <p class="mb-4"><strong>2.2</strong> "Cache Server" mean the servers that EdgeNext owned and operated for delivering your Content which are located on EdgeNext's global content delivery network at EdgeNext's Points of Presence (POPs).</p>
        <p class="mb-4"><strong>2.3</strong> "Origin Server" means either EdgeNext's or your Internet web server where your Content is stored for retrieval by the Cache Servers.</p>
        <p class="mb-4"><strong>2.4</strong> "Service Downtime" means an instance in which a service covered by the uptime guarantee is completely unavailable for more than 15 consecutive minutes.</p>
        <p class="mb-4"><strong>2.5</strong> "Base Fee" consists solely of the base monthly fee paid by you for the CDN Services and excludes all other fees that might be paid by you, including, by way of example and not limitation, setup fees, charges for additional services, incremental bandwidth usage, professional services, and any other type of optional additional services.</p>
        
        <h3 class="text-xl font-medium mb-4">3. Guarantee Of Uptime</h3>
        <p class="mb-4">EdgeNext provides an uptime guarantee of 99.9% to you, covering the following items: (i) uptime of the EdgeNext network (i.e. the ability of your IP traffic to transfer to and from the Internet across EdgeNext's network infrastructure), and (ii) your Content uptime and availability. Subject to the terms, conditions and exceptions of this SLA, EdgeNext will issue a Payment Discount to you for EdgeNext's Service Downtimes in an amount equal to one day's worth of the Base Fee paid by you, multiplied by each 24-hour period in which you experiences an EdgeNext Service Downtime during a particular month.</p>
        
        <h3 class="text-xl font-medium mb-4">4. Measurement</h3>
        <p class="mb-4">All credits are calculated on the basis of a thirty (30) day month. EdgeNext will periodically (every fifteen (15) minutes or more often) measure Content availability by requesting representative Content from Cache Servers at selected EdgeNext's POPs using software and hardware components capable of measuring traffic and responses at the selected POPs. EdgeNext reserves the right to periodically change the measurement points and methodologies it uses without notice to you.</p>
        
        <h3 class="text-xl font-medium mb-4">5. Exceptions</h3>
        <p class="mb-4"><strong>5.1</strong> To be eligible for a credit, You must follow EdgeNext's published instructions for use of the Service. Improper use of EdgeNext's Service will result in ineligibility for a Service credit. Service credits shall not be available for you that are in breach of the EdgeNext Product Terms.</p>
        <p class="mb-4"><strong>5.2</strong> You shall not receive any credits under this SLA in connection with any EdgeNext Service Downtime caused by or associated with:</p>
        <p class="mb-2">(a) Force majeure.</p>
        <p class="mb-2">(b) DNS issues outside the direct control of EdgeNext.</p>
        <p class="mb-2">(c) Maintenance that has been scheduled and notified to you and does not last for more than 24 hours.</p>
        <p class="mb-2">(d) Actions by you or others authorized by you to use the Services or your equipment or software or local access facilities ordered directly by you.</p>
        <p class="mb-2">(e) Failure of power, facilities, equipment, systems or connections not provided by EdgeNext or its affiliates.</p>
        <p class="mb-2">(f) EdgeNext's or its affiliates' inability to access your premises</p>
        <p class="mb-2">(g) Acts or omissions of third Parties that are not affiliated with EdgeNext.</p>
        <p class="mb-2">(h) False SLA breaches reported as a result of Downtimes or errors of any EdgeNext's measurement system.</p>
        <p class="mb-2">(i) The origin server becoming unreachable by the EdgeNext platform.</p>
        <p class="mb-2">(j) Stream buffering occurring due to or associated with conditions outside of EdgeNext's network or immediate control.</p>
        <p class="mb-2">(k) Failure of a service that is not covered or guaranteed by this SLA, including, but not limited to, the EdgeNext's control center and the EdgeNext's reporting system.</p>
        <p class="mb-4">(l) SLA credits will only be issued to you who have paid in full for services covering the time period within which the credit has been requested.</p>
        
        <h3 class="text-xl font-medium mb-4">6. Credit Request And Payment Procedures</h3>
        <p class="mb-4">In order to receive a payment discount on Downtime under this SLA, you must make a request by submitting the request in writing via email to support@edgenext.com. All requests must include your contact name, email address, phone number, company name, the date(s) of the Service Downtime, and a description of the reason for the payment discount request. Each request in connection with a breach of this SLA in a particular calendar month must be received by EdgeNext within thirty (30) days after the Service Downtime in question has occurred, and the Service Downtime must be able to be confirmed by EdgeNext's measurement tools. Each valid payment discount will be applied to an invoice of you within two billing cycles after EdgeNext's initial receipt of your request. Payment discounts are exclusive of any taxes charged to you or collected by EdgeNext.</p>
        
        <h3 class="text-xl font-medium mb-4">7. Additional Terms</h3>
        <p class="mb-4"><strong>7.1</strong> In the event of any inconsistency between yours and our system records relating to your claim, unless the discrepancy is caused by any material error or malfunction of our system, our system record shall at all times prevail and be the final and conclusive reference for calculating the Service Credits to be provided to you.</p>
        <p class="mb-4"><strong>7.2</strong> Notwithstanding any provision otherwise in this SLA or the EdgeNext Product Terms, this SLA sets for your sole and exclusive remedy for Service Downtime or other service-related issue for a Service provided by us and we shall not be liable to you or any person claiming through you for any direct, indirect, consequential or incidental damages or losses or expenses whatsoever, including but not limited to, loss of profits or business and irrespective of whether the claim arises in contract, tort (including negligence), or otherwise. Notwithstanding anything in this SLA to the contrary, the total amount credited to you in connection with any calendar month will not exceed the Base Fee paid by you for such month.</p>
        <p class="mb-4"><strong>7.3</strong> We reserve the right to change the terms of this SLA anytime by posting an amended and restated version of this SLA on the EdgeNext International Website. Your continued use of the service after the publication of the amended SLA shall be deemed as your acceptance of the amended SLA.</p>
        <p class="mb-4"><strong>7.4</strong> This SLA shall constitute part of your agreement for your purchase and use of the Service.</p>
      `
    },
    'anti-ddos-sla': {
      title: 'EdgeNext Anti-D​DoS Service Level Agreement',
      icon: <Shield size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">EdgeNext Anti-DDoS Service Level Agreement</h2>
        <p class="mb-4 text-sm text-gray-600">Last Updated: November 15, 2022</p>
        <p class="mb-6">This EdgeNext Anti-DDoS Service Level Agreement ("SLA") sets forth the service availability metrics, and compensation plan for Anti-DDoS provided to you by EdgeNext, and your purchase and use of the service is governed by the EdgeNext International Website Product Terms of Service ("Product Terms") between EdgeNext and you. This SLA applies only to your purchase and use of services provided directly by EdgeNext for a fee and does not apply to any free services or trial services provided by EdgeNext.</p>
        
        <h3 class="text-xl font-medium mb-4">I. Business description</h3>
        <p class="mb-4"><strong>1.</strong> Anti-DDoS service refers to the DDoS traffic-based attack defence and service management system provided by EdgeNext. It is suitable for business scenarios that deal with targeted, persistent, large-scale DDoS governance and is an advanced DDoS protection product that provides locally-deployed, privatized data cleansing for data centres.</p>
        
        <h3 class="text-xl font-medium mb-4">II. Definitions</h3>
        <p class="mb-4"><strong>1. DDoS:</strong> Distributed Denial of Service, or distributed denial of service attack, is an attack in the cloud that prevents users from accessing their data, applications or websites in the cloud by impersonating a large number of regular service requests.</p>
        <p class="mb-4"><strong>2. Cleaning:</strong> This service monitors the data traffic entering the user in real-time to detect abnormal traffic, including DDoS attacks promptly. Without affecting regular business, the abnormal traffic is cleansed. That is: redirect suspicious traffic from the original network path to the cleaning product for malicious traffic identification and stripping, and legitimate traffic back to the actual network forwarded to the target system.</p>
        <p class="mb-4"><strong>3. Traffic Attack Cleaning Rate:</strong> refers to the DDoS traffic-based attack blocking ratio.</p>
        <p class="mb-4"><strong>4. DDoS Protection Services:</strong> DDoS attack protection services are provided to users based on traffic cleaning, black holes, etc. After the user has purchased and deployed a DDoS protection service package corresponding to the traffic peak, the user's source server can operate normally when DDoS attacks it, and the deployed traffic peak is not exceeded.</p>
        <p class="mb-4"><strong>5. Service Period:</strong> refers to each natural month included in the service term of your Anti-DDoS service purchase. Service availability is accounted for separately by wild month.</p>
        <p class="mb-4"><strong>6. Total minutes of Service Period = Total days in Service Period * 24 (hours) * 60 (minutes)</strong><br />
        Assuming a 30-day Service Period for the month, the total number of Service Period minutes = 30 (days) * 24 (hours) * 60 (minutes) = 43,200 minutes</p>
        <p class="mb-4"><strong>7. Service Unavailability:</strong> Unsuccessful protection against an attack of a supported protection type or failure of the Anti-DDoS system, resulting in a drop in user traffic of more than 20% for more than 10 minutes.</p>
        <p class="mb-4"><strong>8. Service Downtime = service unavailability resolution time – service unavailability start time.</strong><br />
        Downtime is calculated minute-by-minute, with less than 60 seconds counted as one minute. If the time for business failure to return to normal is less than 1 minute (i.e. Service Downtime for a duration of no more than 1 minute), it will not be counted as the Service Downtime.</p>
        
        <h3 class="text-xl font-medium mb-4">III. Service Availability</h3>
        <p class="mb-4"><strong>1. Service Availability = [(Total minutes of Service Period – Service Downtime) / Total minutes of Service Period] * 100%</strong></p>
        <p class="mb-4"><strong>2. Service Level Commitment</strong><br />
        Anti-DDoS Service Availability is no less than 99%, and the Traffic Attack Cleaning Rate is no less than 95%. Assuming a 30-day Service Period for the month, Service Availability time for the Service Period = 30 days × 24 hours × 60 minutes × 99% = 42768 minutes, i.e. allow 43200 – 42768 = 432 minutes of Service Unavailability.</p>
        <p class="mb-4"><strong>3.</strong> If the Anti-DDoS Service does not achieve the above Availability Commitment, you will be entitled to compensation following Clause 4 of this Agreement.</p>
        
        <h3 class="text-xl font-medium mb-4">4. Exclusion of liability</h3>
        <p class="mb-4">Please be aware that the service is unavailable for the following reasons and that the corresponding period of unavailability is NOT part of the calculation of the Service Unavailability and is NOT covered by EdgeNext's Service Level Commitment.</p>
        <p class="mb-4">Unavailability of the Service due to:</p>
        <p class="mb-2"><strong>4.1</strong> business shutdowns caused by an offence in your business;</p>
        <p class="mb-2"><strong>4.2</strong> your non-payment or arrears;</p>
        <p class="mb-2"><strong>4.3</strong> system maintenance at the server room where you deploy Anti-DDoS services, including cutovers, repairs, upgrades and simulated service interruptions caused by failure drills;</p>
        <p class="mb-2"><strong>4.4</strong> loss or leakage of data, passwords, passwords, etc., as a result of improper maintenance or confidentiality by you;</p>
        <p class="mb-2"><strong>4.5</strong> a severe fault generated by the network operator;</p>
        <p class="mb-2"><strong>4.6</strong> force majeure;</p>
        <p class="mb-4"><strong>4.7</strong> other non-EdgeNext reasons, including but not limited to network, device failure or policy configuration adjustments outside of the EdgeNext-owned device.</p>
        
        <h3 class="text-xl font-medium mb-4">IV. Compensation Programme</h3>
        <p class="mb-4"><strong>1. Credit Award</strong><br />
        The Credit Award will be calculated according to the following table, based on the percentage of Service Availability for Anti-DDoS under your EdgeNext account, and is only available as vouchers for the purchase of Anti-DDoS products, and the total amount of Credit Award shall not exceed 25% of the monthly service fee you pay for that month.</p>
        
        <div class="mb-6">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left">Service Availability</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Credit awarded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">95% ≤ Service availability < 99%</td>
                <td class="border border-gray-300 px-4 py-2">10% MRC of Affected Service</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Service availability < 95%</td>
                <td class="border border-gray-300 px-4 py-2">25% MRC of Affected Service</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="mb-4"><strong>2. Time limit for Outage Report</strong><br />
        You may submit the Outage Report after the fifth (5th) business day of each natural month for instances where the Service Level Commitment was not met in the previous month. Outage Report time is limited to two (2) months after the end of the month in which Anti-DDoS did not meet the Service Level Commitment. Outage Report made after the application time will not be accepted.</p>
        
        <h3 class="text-xl font-medium mb-4">V. Other</h3>
        <p class="mb-4">EdgeNext reserves the right to modify Terms and Conditions within this Agreement as appropriate or necessary in light of changes. The latest version of the Agreement can be reviewed on the EdgeNext Website. If you disagree with the changes made by EdgeNext to the Agreement, you have the right to stop using this EdgeNext service, and if you continue to use this EdgeNext service, you will be deemed to have accepted the modified Agreement.</p>
      `
    },
    'scdn-sla': {
      title: 'EdgeNext SCDN Service Level Agreement',
      icon: <Lock size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">EdgeNext SCDN Service Level Agreement</h2>
        <p class="mb-4 text-sm text-gray-600">Last Updated: November 15, 2022</p>
        <p class="mb-6">This EdgeNext SCDN Service Level Agreement ("SLA") sets forth the service availability metrics and compensation plan for the Security CDN ("SCDN") provided to you by EdgeNext, and your purchase and use of the Service is governed by the EdgeNext International Website Product Terms of Service ("Product Terms") between EdgeNext and you. This SLA applies only to your purchase and use of services provided directly by EdgeNext for a fee and does not apply to any free services or trial services provided by EdgeNext.</p>
        
        <h3 class="text-xl font-medium mb-4">I. Business Description</h3>
        <p class="mb-4"><strong>1.</strong> Security CDN is a security acceleration product that protects web services such as Websites/APPs/APIs from threats such as web attacks, exploits, system intrusions, tampering, backdoors and DDoS attacks. By directing traffic to the edge nodes for threat detection and disposal to ensure the security and availability of the source site.</p>
        
        <h3 class="text-xl font-medium mb-4">II. Definition of Services</h3>
        <p class="mb-4"><strong>1.</strong> The service period refers to each natural month included in the service term of your SCDN service purchase, and service availability is accounted for separately by natural month.</p>
        <p class="mb-4"><strong>2.</strong> Total minutes of Service Period = Total days in Service Period * 24 (hours) * 60 (minutes)</p>
        <p class="mb-4">Assuming a 30-day Service Period for the month, the total number of Service Period minutes is 30 (days) * 24 (hours) * 60 (minutes) = 43,200 minutes</p>
        <p class="mb-4"><strong>3.</strong> Service unavailability refers mainly to the following situations.</p>
        <p class="mb-4">Service requests cannot reach the service server due to the SCDN itself.</p>
        <p class="mb-4">The business server returns 4xx and 5xx status codes due to the SCDN itself.</p>
        <p class="mb-4"><strong>4.</strong> Service Downtime = Service unavailability resolution time – service unavailability start time.</p>
        <p class="mb-4">Downtime is calculated minute-by-minute, with less than 60 seconds counted as one minute. If the time for business failure to return to normal is less than 1 minute (i.e. Service Downtime for a duration of no more than 1 minute), the unavailability minutes will not be counted.</p>
        
        <h3 class="text-xl font-medium mb-4">III. Service Availability</h3>
        <p class="mb-4"><strong>1.</strong> Service Availability means whether the product services provided by EdgeNext are serviceable of the Service Period.</p>
        <p class="mb-4"><strong>2.</strong> Service Availability calculation formula</p>
        <p class="mb-4">Service Availability = [(Total minutes of Service Period – Service Downtime) / Total minutes of Service Period] * 100%</p>
        <p class="mb-4"><strong>3.</strong> Service Level Commitment: The availability of SCDN services shall be no less than 99.5%. If SCDN fails to meet the Service Level Commitment, you may receive compensation following Clause iv of this Agreement.</p>
        <p class="mb-4">Assuming a 30-day Service Period for the month, Service Availability time for the Service Period = 30 days × 24 hours × 60 minutes × 99.5% = 42984 minutes, i.e. allow 43200 – 42984 = 216 minutes of Service Unavailability.</p>
        <p class="mb-4"><strong>4.</strong> Exclusion of liability</p>
        <p class="mb-4">Please be aware that the Service is unavailable for the following reasons and that the corresponding period of unavailability is NOT part of the calculation of the service unavailability and is NOT covered by EdgeNext's Service Level Commitment.</p>
        <p class="mb-4">Unavailability of the Service due to:</p>
        <p class="mb-2"><strong>4.1</strong> business shutdowns caused by an offence in your business;</p>
        <p class="mb-2"><strong>4.2</strong> your non-payment or arrears;</p>
        <p class="mb-2"><strong>4.3</strong> system maintenance at the server room where you deploy Anti-DDoS services, including cutovers, repairs, upgrades and simulated service interruptions caused by failure drills;</p>
        <p class="mb-2"><strong>4.4</strong> a failure of your source site or a setting adjustment made by you;</p>
        <p class="mb-2"><strong>4.5</strong> commissioning as a result of configuring the policy as required if not configured correctly;</p>
        <p class="mb-2"><strong>4.6</strong> loss or leakage of data, passwords, passwords, etc. as a result of improper maintenance or confidentiality by you;</p>
        <p class="mb-2"><strong>4.7</strong> black holes in IPs as a result of traffic attacks exceeding the specifications of the DDoS high-security IP services purchased by us;</p>
        <p class="mb-2"><strong>4.8</strong> force majeure;</p>
        <p class="mb-2"><strong>4.9</strong> a severe fault generated by the network operator;</p>
        <p class="mb-4"><strong>4.10</strong> other unavailability not caused by EdgeNext, including but not limited to network, device failure or policy configuration adjustments outside of the EdgeNext-owned device.</p>
        
        <h3 class="text-xl font-medium mb-4">IV. Compensation Programme</h3>
        <p class="mb-4"><strong>1. Credit Award</strong></p>
        <p class="mb-4">The Credit Award will be calculated according to the following table, based on the percentage of Service Availability for SCDN under your EdgeNext account, and is only available as vouchers for the purchase of SCDN products only, and the total amount of Credit Award shall not exceed 25% of the monthly service fee paid by the customer for that month.</p>
        
        <div class="mb-6">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left">Service Availability</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Credit awarded</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">99% ≤ Service availability < 99.5%</td>
                <td class="border border-gray-300 px-4 py-2">10% MRC of Affected Service</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">Service availability < 99%</td>
                <td class="border border-gray-300 px-4 py-2">25% MRC of Affected Service</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="mb-4"><strong>2. Time limit for Outage Report</strong></p>
        <p class="mb-4">You may submit the Outage Report after the fifth (5th) business day of each natural month for instances where the Service Level Commitment was not met in the previous month. Outage Report time is limited to two (2) months after the end of the month in which Anti-DDoS did not meet the Service Level Commitment. Outage Report made after the application time will not be accepted.</p>
        
        <h3 class="text-xl font-medium mb-4">V. Other</h3>
        <p class="mb-4">EdgeNext reserves the right to modify the Terms and Conditions of this Agreement as appropriate or necessary in light of changes, which you can review in the latest version of the Agreement on the EdgeNext Website. If you disagree with the changes made by EdgeNext to the Agreement, you have the right to stop using this EdgeNext Service, and if you continue to use this EdgeNext Service, you will be deemed to have accepted the modified Agreement.</p>
      `
    },
    'cloud-hosting-sla': {
      title: 'EdgeNext Cloud Hosting Service Level Agreement',
      icon: <Server size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">Cloud Hosting Service Level Agreement</h2>
        <p class="mb-4 text-sm text-gray-600">Last Updated: September 30 2022</p>
        
        <h3 class="text-xl font-medium mb-4">1. Introduction</h3>
        <p class="mb-4">This EdgeNext Cloud Hosting Service Level Agreement ("SLA") applies to your purchase and use of the EdgeNext Cloud Hosting Service ("Service","ECS") and your use of the ECS is subjected to the terms and conditions of the EdgeNext International Website Product Terms of Service ("Product Terms") between the relevant EdgeNext entity described in the Product Terms ("EdgeNext", "us", or "we") and you. This SLA only applies to your purchase and use of the Services for a fee that is directly provided by EdgeNext, and shall not apply to any free Services or trial Services provided by us.</p>
        
        <h3 class="text-xl font-medium mb-4">2. Definitions</h3>
        <p class="mb-4"><strong>2.1</strong> Service period: a service period is one calendar month. A period shorter than a calendar month is also counted one service period.</p>
        <p class="mb-4"><strong>2.2</strong> Total number of minutes of single-instance service period: the total number of days of single-instance service period x 24 (hours) x 60 (minutes).</p>
        <p class="mb-4"><strong>2.3</strong> Instance unavailable: if an ECS instance for which exit and entrance permission rules have been set is unable to establish a both-way (exit/entrance) connection with any one IP address by using TCP or UDP protocol and this state lasts for over one minute, the ECS instance is deemed unavailable in that minute.</p>
        <p class="mb-4"><strong>2.4</strong> Down time of single-instance service: within a minute, if an ECS instance is unable to establish a network connection with any one IP address by the exit and entrance permission rules, the ECS instance service is deemed unavailable in that minute, and the 5 consecutive minutes or longer time during which the service provided by the ECS is unavailable is counted as down time. Down time excludes routine system maintenance time and any down time on account of the user, any third party or force majeure.</p>
        <p class="mb-4"><strong>2.5</strong> Single-region multi-AZ service unavailable: if the user's ECS instances are deployed in at least 2 availability zones (hereinafter referred to as single-region multi-AZ service) in one region, all ECS instances of the user are unavailable in any one availability zone in the region and the user's ECS instances in the other availability zones in the region are also unavailable (hereinafter referred to as: unavailable ECS instances in the other availability zones in one region), the ECS instances in the other availability zones in the region are deemed single-region multi-AZ service unavailable.</p>
        <p class="mb-4"><strong>2.6</strong> Minutes of single-instance single-region multi-AZ service unavailable: the sum of minutes of unavailable single-region multi-AZ service of single ECS instance in one service period.</p>
        <p class="mb-4"><strong>2.7</strong> Monthly service fee: the total amount of service fee paid by you for a single ECS instance in one service period (calendar month). If you pay the service fee for multiple months in one time, the monthly service fee will be calculated according to the paid amount and months.</p>
        
        <h3 class="text-xl font-medium mb-4">3. Service Availability</h3>
        <p class="mb-4"><strong>3.1</strong> Service availability calculation formula = (expected total service time of all instances at the node in the service period – down time of the node instances in the service period) / expected total service time of all instances at the node in the service period</p>
        <p class="mb-4"><strong>3.2</strong> Service availability commitment</p>
        <p class="mb-4"><strong>3.2.1.</strong> For the single-instance dimension, EdgeNext undertakes that the service availability of ECS in one service period is no less than 99.9%;</p>
        <p class="mb-4"><strong>3.2.2.</strong> For the single-region multi-AZ dimension, EdgeNext undertakes that the service availability of ECS in one service period is no less than 99.9%.</p>
        <p class="mb-4"><strong>3.3.</strong> If the ECS does not fulfil the availability promised, you are entitled to the compensation as stipulated in Article 4 herein. Such compensation does not cover the service unavailability arising from any of the following factors:</p>
        <p class="mb-2"><strong>3.3.1.</strong> any network or equipment failure or configuration adjustment other than the equipment of EdgeNext;</p>
        <p class="mb-2"><strong>3.3.2.</strong> hacker attack on any of your application;</p>
        <p class="mb-2"><strong>3.3.3.</strong> loss or leakage of data, password or PIN code caused by your improper maintenance or protection;</p>
        <p class="mb-2"><strong>3.3.4.</strong> your negligence or any action of your authorized;</p>
        <p class="mb-2"><strong>3.3.5.</strong> you fail to follow the product manual or recommendations of EdgeNext, e.g. unavailability happens because your conducts shutdown, reboot or cloud drive uninstallation of ECS instance by using the control methods such as control console, API or CLI;</p>
        <p class="mb-2"><strong>3.3.6.</strong> data is erased due to a crash of the local drive, and thus service is rendered unavailable due to dependence on a local drive or the data in the local drive;</p>
        <p class="mb-2"><strong>3.3.7.</strong> any error in your ECS instance resulting from any software you have installed or any third-party software or configuration not directly run by EdgeNext;</p>
        <p class="mb-2"><strong>3.3.8.</strong> service is suspended or terminated because you fail to comply with the EdgeNext Edge Cloud Hosting Service Agreement or its Supplementary Agreement, including the situation where the ECS instance is temporarily denied service or released due to non-payment of service fee;</p>
        <p class="mb-2"><strong>3.3.9.</strong> short-term service interruption caused by routine maintenance or upgrading of ECS conducted by EdgeNext in accordance with EdgeNext Edge Cloud Hosting Service Agreement and its Supplementary Agreement;</p>
        <p class="mb-4"><strong>3.3.10.</strong> force majeure.</p>
        
        <h3 class="text-xl font-medium mb-4">4. Compensation Scheme</h3>
        <p class="mb-4"><strong>4.1.</strong> For the service availability of the ECS service you are using, EdgeNext may choose to use any of the following compensation schemes, depending on actual business conditions.</p>
        <p class="mb-4"><strong>4.1.1</strong> Compensation with voucher</p>
        <p class="mb-4">The compensation amount is calculated by the criteria in the table below. Compensation is granted only through the voucher for purchase of ECS service, and the total amount of compensation is no more than the monthly service fee paid by you for the node month in which the expected service availability is not fulfilled (excluding the fee paid by the voucher).</p>
        
        <div class="mb-6">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left">Service availability</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Amount of compensation voucher</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 99.9%, ≥ 99%</td>
                <td class="border border-gray-300 px-4 py-2">10% of the service fee for the instance in the node month</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 99%, ≥ 95%</td>
                <td class="border border-gray-300 px-4 py-2">25% of the service fee for the instance in the node month</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 95%</td>
                <td class="border border-gray-300 px-4 py-2">50% of the service fee for the instance in the node month</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="mb-4"><strong>4.1.2</strong> Compensation for duration of failure</p>
        <p class="mb-4">Compensated duration is calculated by the criteria in the table below, and the total compensated duration is no more than the total service duration of all servers in the service cluster in the month. (Excluding the compensated duration in the month)</p>
        
        <div class="mb-6">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left">Service availability</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Compensated duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 99.9%, ≥ 99%</td>
                <td class="border border-gray-300 px-4 py-2">10% of the total service duration of the instance in the node month</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 99%, ≥ 95%</td>
                <td class="border border-gray-300 px-4 py-2">25% of the total service duration of the instance in the node month</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 95%</td>
                <td class="border border-gray-300 px-4 py-2">50% of the total service duration of the instance in the node month</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="mb-4"><strong>4.2.</strong> Deadline for a compensation request</p>
        <p class="mb-4">You may submit after the fifth (5th) working day of a month the request for compensation for the ECS service that did not achieve the expected availability in the previous month. The compensation request must be submitted within two (2) months after the month in which ECS service did not achieve the expected availability. Any compensation request submitted beyond such deadline will not be accepted.</p>
      `
    },
    'bms-sla': {
      title: 'EdgeNext BMS Service Level Agreement',
      icon: <Database size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">BMS Service Level Agreement</h2>
        <p class="mb-4 text-sm text-gray-600">Last Updated: September 30 2022</p>
        
        <h3 class="text-xl font-medium mb-4">1. Introduction</h3>
        <p class="mb-4">This EdgeNext BMS (Bare Metal Servers) Service Level Agreement ("SLA") applies to your purchase and use of the EdgeNext BMS Service ("Service","BMS") and your use of the BMS is subjected to the terms and conditions of the EdgeNext International Website Product Terms of Service ("Product Terms") between the relevant EdgeNext entity described in the Product Terms ("EdgeNext", "us", or "we") and you. This SLA only applies to your purchase and use of the Services for a fee that is directly provided by EdgeNext, and shall not apply to any free Services or trial Services provided by us.</p>
        
        <h3 class="text-xl font-medium mb-4">2. Service Definitions</h3>
        <p class="mb-4"><strong>2.1</strong> Service period: a service period is one calendar month. A period shorter than a calendar month is also counted as one service period.</p>
        <p class="mb-4"><strong>2.2</strong> Total number of minutes of the single-instance service period: the total number of days of the single-instance service period x 24 (hours) x 60 (minutes).</p>
        <p class="mb-4"><strong>2.3</strong> Instance unavailable: where a BMS instance for which exit and entrance permission rules have been set is unable to establish a both-way (exit/entrance) connection with any one IP address by using TCP or UDP protocol and this state lasts for over one minute, the BMSinstance is deemed unavailable in that minute.</p>
        <p class="mb-4"><strong>2.4</strong> Downtime of single-instance service: where a instance is unable to establish a network connection with any one IP address by the exit and entrance permission rules within a minute, the BMSinstance service is deemed unavailable in that minute, and the 5 consecutive minutes or longer time during which the service provided by BMS is unavailable is counted as down time. Down time excludes routine system maintenance time and any downtime on account of the user, any third party, or force majeure.</p>
        <p class="mb-4"><strong>2.5</strong> Single-region multi-AZ service unavailable: where the user's instances are deployed in at least 2 availability zones (hereinafter referred to as single-region multi-AZ service) in one region, all BMSinstances of the user are unavailable in any one availability zone in the region and the user's BMS instances in the other availability zones in the region are also unavailable (hereinafter referred to as unavailable BMS instances in the other availability zones in one region), the BMS instances in the other availability zones in the region are deemed single-region multi-AZ service unavailable.</p>
        <p class="mb-4"><strong>2.6</strong> Minutes of single-instance single-region multi-AZ service unavailable: the sum of minutes of unavailable single-region multi-AZ service of a single instance in one service period.</p>
        <p class="mb-4"><strong>2.7</strong> Monthly service fee: the total amount of service fee paid by you for a single instance in one service period (calendar month). Where you pay the service fee for multiple months in one time, the monthly service fee will be shared and calculated according to the paid amount and months.</p>
        
        <h3 class="text-xl font-medium mb-4">3. Service Availability</h3>
        <p class="mb-4"><strong>3.1</strong> Service availability calculation formula = (total due service time of all instances at the node in the service period – down time of the node instances in the service period) / total due service time of all instances at the node in the service period</p>
        <p class="mb-4"><strong>3.2</strong> Service Availability Commitment</p>
        <p class="mb-4"><strong>3.2.1.</strong> For the single-instance dimension, EdgeNext undertakes that the service availability of BMSin one service period is not less than 99.9%;</p>
        <p class="mb-4"><strong>3.2.2.</strong> For the single-region multi-AZ dimension, EdgeNext undertakes that the service availability of BMS in one service period is not less than 99.9%.</p>
        <p class="mb-4"><strong>3.3</strong> Where BMS does not fulfill the availability promise, you are entitled to obtaining the compensation as stipulated in Article 4 herein. Such compensation does not cover the service unavailability arising from any of the following factors:</p>
        <p class="mb-2"><strong>3.3.1.</strong> Any network or equipment fault or configuration adjustment other than the equipment of EdgeNext;</p>
        <p class="mb-2"><strong>3.3.2.</strong> Hacker attack on any of your application programs;</p>
        <p class="mb-2"><strong>3.3.3.</strong> Loss or leakage of data, password, or PIN code caused by improper maintenance or protection by you;</p>
        <p class="mb-2"><strong>3.3.4.</strong> Your negligence or any action authorized by you;</p>
        <p class="mb-2"><strong>3.3.5.</strong> You fail to follow the product manual or recommendations of EdgeNext, e.g. unavailability happens because you conduct shutdown, reboot, or cloud drive uninstallation of instance by using the control methods such as control console, API, or CLI;</p>
        <p class="mb-2"><strong>3.3.6.</strong> Data is erased due to crash of the local drive, and thus service is rendered unavailable due to dependence on the local drive or the data in the local drive;</p>
        <p class="mb-2"><strong>3.3.7.</strong> Any error in instance resulting from any software installed by you or any third-party software or configuration not directly run by EdgeNext;</p>
        <p class="mb-2"><strong>3.3.8.</strong> The service is suspended or terminated because you fail to comply with the EdgeNextBare Metal ServersService Contract or Supplementary Agreement thereto, including the situation where the BMS instance is temporarily denied service or released due to non-payment of service fee;</p>
        <p class="mb-2"><strong>3.3.9.</strong> Short-term service interruption caused by routine maintenance or upgrading of BMS conducted by EdgeNext in accordance with the EdgeNext Bare Metal Servers Service Contract or Supplementary Agreement thereto; and</p>
        <p class="mb-4"><strong>3.3.10.</strong> Force majeure.</p>
        
        <h3 class="text-xl font-medium mb-4">4. Compensation Scheme</h3>
        <p class="mb-4"><strong>4.1</strong> For the service availability of the BMSserviceused by you, EdgeNext may choose to use any of the following compensation schemes, depending on actual business conditions.</p>
        <p class="mb-4"><strong>4.1.1.</strong> Compensation with voucher</p>
        <p class="mb-4">The compensation amount is calculated by the criteria in the table below. Compensation is granted only through the voucher for purchase of BMS service, and the total amount of compensation is no more than the monthly service fee paid by you for the node month in which the expected service availability is not fulfilled (excluding the fee paid by the voucher).</p>
        
        <div class="mb-6">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left">Service Availability</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Amount of compensation voucher</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 99.9%, ≥ 99%</td>
                <td class="border border-gray-300 px-4 py-2">10% of the service fee for the instance in the node month</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 99%, ≥ 95%</td>
                <td class="border border-gray-300 px-4 py-2">25% of the service fee for the instance in the node month</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 95%</td>
                <td class="border border-gray-300 px-4 py-2">50% of the service fee for the instance in the node month</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="mb-4"><strong>4.1.2.</strong> Compensation for the duration of failure</p>
        <p class="mb-4">Compensated duration is calculated by the criteria in the table below, and the total compensated duration is no more than the total service duration of all servers in the service cluster in the current month. (Excluding the compensated duration in the current month)</p>
        
        <div class="mb-6">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left">Service Availability</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Compensated duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 99.9%, ≥ 99%</td>
                <td class="border border-gray-300 px-4 py-2">10% of the total service duration of the instance in the node month</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 99%, ≥ 95%</td>
                <td class="border border-gray-300 px-4 py-2">25% of the total service duration of the instance in the node month</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">< 95%</td>
                <td class="border border-gray-300 px-4 py-2">50% of the total service duration of the instance in the node month</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="mb-4"><strong>4.2.</strong> Deadline for a compensation request</p>
        <p class="mb-4">You may submit the compensation request after the fifth (5th) working day of each month for the BMS service that did not achieve the expected availability in the previous month. The compensation request must be submitted within two (2) months after the month in which BMS service did not achieve the expected availability. Any compensation request submitted beyond such deadline will not be accepted.</p>
      `
    },
    'terms-service': {
      title: 'EdgeNext International Website Product and Service Terms (v1.0)',
      icon: <FileText size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">EdgeNext International Website Product and Service Terms (v1.0)</h2>
        <p class="mb-4 text-sm text-gray-600">Last Updated: September 30, 2022</p>
        <p class="mb-4">Please read these terms carefully.</p>
        <p class="mb-4">These Terms of EdgeNext International Website Products and Services (hereinafter referred to as "Product Terms", "the Product Terms" or "the Terms") includes the terms and conditions governing your purchase and use of the products and services (hereinafter referred to as "Services") provided through EdgeNext International Website (hereinafter referred to as "EdgeNext International Website") currently located at www.edgenext.com. Unless otherwise specified in the Product Terms, capitalized terms used in the Terms shall have the same meanings as those defined in the Membership Agreement.</p>
        
        <h3 class="text-xl font-medium mb-4">1. Application and Acceptance of Product Terms</h3>
        <p class="mb-4"><strong>1.1</strong> The Product Terms are between you, as a service purchaser and (or) user of EdgeNext International Website and LEGEND DYNASTY PTE. LTD. (hereinafter referred to as "EdgeNext" or "We"). The Terms are effective when you click "OK" or tick the Terms. By purchasing and (or) using the "Services", you agree to accept and to be bound by the Product Terms.</p>
        <p class="mb-4"><strong>1.2</strong> You may need to sign a separate online or offline agreement with EdgeNext or its affiliates to: i) use EdgeNext International Website; or ii) purchase the service or any other service provided by EdgeNext ("Supplementary Agreement"). In the event of any conflict or inconsistency between the Product Terms and any supplementary agreements, the Terms of Service shall prevail over the Product Terms only to the extent of the conflict.</p>
        <p class="mb-4"><strong>1.3</strong> If you do not agree to accept all Product Terms and/or Supplementary Agreement (if applicable), please do not purchase and/or use services.</p>
        <p class="mb-4"><strong>1.4</strong> You acknowledge and agree that EdgeNext may update the Terms at any time by posting the relevant amended Product Terms on EdgeNext International Website. By continuing to use the services after the amended Product Terms are posted, you agree to be bound by the Terms and Conditions as amended.</p>
        <p class="mb-4"><strong>1.5</strong> You can purchase the required service online through EdgeNext International Website according to your own needs. Before you purchase the service, you need to open the service, and the product service content, service fee, service period, term of service, etc. of your purchase shall be subject to the order page you confirm and agree to. The specific payment is subject to the Payment Terms and other relevant instructions on the EdgeNext International Website.</p>
        <p class="mb-4"><strong>1.6</strong> You must register as a member of EdgeNext International Website to purchase and/or use products. Your registration and use of an account on EdgeNext International Website is bound by the EdgeNext International Website Membership Agreement. You shall ensure that any and all information you provide to us through EdgeNext International Website is true, accurate, correct and complete, but not deceptive, fraudulent or misleading.</p>
        
        <h3 class="text-xl font-medium mb-4">2. Your Responsibility</h3>
        <p class="mb-4"><strong>2.1</strong> You will ensure that your content and the use of your content or services by your end users do not violate any policy or any applicable law. You are fully responsible for the development, content, operation, maintenance and use of your content. You will ensure that all end users comply with your obligations thereunder and that the terms of your agreement with each end user are consistent with the Agreement. If you become aware that an end user has violated your obligations thereunder, you will immediately suspend the end user's access to your content and services. We will not provide any support or service to the end user unless we have entered into a separate agreement with you or the end user, which obligates us to provide such support or services.</p>
        <p class="mb-4"><strong>2.2</strong> You are responsible for properly configuring and using the service, and otherwise taking appropriate actions to safeguard, protect and back up your account and your content, so as to provide appropriate security and protection, possibly including using encryption technology to protect your content from unauthorized access, and regularly archiving your content.</p>
        <p class="mb-4"><strong>2.3</strong> As a condition of your purchase and/or use of the services, you agree that you will comply with all laws and regulations applicable to the use of the services (including but not limited to any applicable data protection, import, re-import, export, strategic goods control and re-export control laws, including any applicable license requirements, and international or country-specific sanctions plans). If EdgeNext has reason to believe that any of your acts violate the law, infringe or misappropriate the rights of any third party, or are deceptive, fraudulent or misleading, EdgeNext may notify you of its understanding of such circumstances at its own discretion, and may take any relevant enforcement action against you as it deems appropriate and necessary according to the circumstances at its own discretion, including but not limited to requiring you to delete any illegal content, disabling or suspending your right to use any service, restricting your access to EdgeNext International Website, and suspending or terminating your account. Notwithstanding the foregoing provisions, EdgeNext is entitled to directly delete any content on EdgeNext International Website that may be illegal, or content that may disrupt, threaten or damage the operation and functions of EdgeNext International Website or other users of EdgeNext International Website.</p>
        <p class="mb-4"><strong>2.4</strong> You agree to cooperate with EdgeNext to identify and solve service problems that EdgeNext has reason to believe are caused by you at the request of EdgeNext.</p>
        <p class="mb-4"><strong>2.5</strong> Some services require the processing of personal data of your end users or employees. You agree that it is entirely your responsibility to establish the legal basis for processing such data in accordance with local laws, including providing appropriate privacy notices and obtaining the consent of any necessary customers or employees. You represent and warrant to EdgeNext that you have a legal basis for processing such data in accordance with local laws, including obtaining any necessary notices and consents. You also represent that you will comply with any data protection laws and regulations, including but not limited to obtaining consent and rules related to cross-border transfers of personal data. These laws and regulations may apply to your use of these services and an appropriate data processing agreement may be separately signed as required by EdgeNext to ensure the security and compliance of personal information processing.</p>
        <p class="mb-4"><strong>2.6</strong> You must comply with the relevant technical documents that we release and update from time to time on EdgeNext International Website and are applicable to the products you purchase.</p>
        
        <h3 class="text-xl font-medium mb-4">3. General Product Terms</h3>
        <p class="mb-4">The following general Product Terms are applicable to the purchase and / or use of all services provided on EdgeNext International Website.</p>
        <p class="mb-4"><strong>3.1</strong> The benefits, features and functions you may obtain from any service may vary in different countries and regions. We do not warrant or represent that a particular feature or function or the same type and degree of features and functions will be available in all countries and regions or to all users. EdgeNext may, at its own discretion, restrict, deny or establish different levels of access and use of any service (or any function therein) for different users. Your use of EdgeNext products shall comply with the product specifications, restrictions and instructions in the relevant product description pages on EdgeNext International Website (hereinafter referred to as "Product Descriptive Terms"). In the event of any inconsistency between the Product Terms and the Product Descriptive Terms, the Product Terms shall prevail.</p>
        <p class="mb-4"><strong>3.2</strong> EdgeNext can launch, change, upgrade, impose conditions, suspend or stop providing any service (or any feature or function in the service), including login procedures and requirements, and access to any service (including any URL related thereto), without prior notice. EdgeNext can also decide to migrate, suspend or stop the operation of any computer room and data center at its own discretion after prior reasonable notice to you. In the event of the above migration, suspension or stop of operations, you may be required to change or update the configuration of any affected services, and you will be responsible for the failure to change or update your configuration within the time specified in the notice.</p>
        <p class="mb-4"><strong>3.3</strong> EdgeNext reserves the right to monitor your purchase or use of the Services at any time as needed to verify your compliance with the Product Terms and our privacy policy. You agree that you will not obstruct or interfere with our monitoring.</p>
        <p class="mb-4"><strong>3.4</strong> EdgeNext has the right to perform any upgrade or any service maintenance at any time if necessary. EdgeNext will make commercially reasonable efforts to notify you on the EdgeNext International Website or before any scheduled maintenance of the Services, and you should comply with any service maintenance requirements that we notify you of.</p>
        <p class="mb-4"><strong>3.5</strong> EdgeNext is entitled to transfer and/or change any part or all of the Terms (including any of our rights, titles, interests, obligations, and responsibilities in the Terms and the Agreement) to any individual or entity (including any affiliate of EdgeNext). EdgeNext can require the change of the Terms or any part thereof by sending you written notice and you hereby irrevocably agree with any of such change. Then EdgeNext will be exempted and released from all obligations thereof under the Terms and all claims, lawsuits, and demands arising from the Terms as of such change. You should not transfer all or any part of the Terms (including the Agreement) to any individual or entity.</p>
        <p class="mb-4"><strong>3.6</strong> The service guarantees and any related performance commitments ("Service Guarantees") specified in the EdgeNext Service Level Agreement ("SLA") are only applicable to the services that you purchase and use with pay and are not applicable to any free service or trial service provided by us. Such Service Guarantees are the only and exclusive remedial measures for the applicable services that you pay for and purchase.</p>
        <p class="mb-4"><strong>3.7</strong> EdgeNext guarantees that, within the duration of the Terms and the Agreement, EdgeNext will perform the product services with commercially reasonable care and skill in all material respects. If the product services provided to you are not performed according to the guarantee, you must timely give EdgeNext written notice stating the inadequacies of the product services (including the service application No. for notifying EdgeNext of the product service inadequacies, if applicable).</p>
        <p class="mb-4"><strong>3.8</strong> EdgeNext does not guarantee that the performance of the product services is free from any error or not interrupted, that EdgeNext will correct all product service errors, and that the product services will meet all of your requirements or expectations. EdgeNext will assume no responsibility for any problem concerning service performance, operation, or safety resulting from your content, the content of any third party, or any service provided by any third party.</p>
        <p class="mb-4"><strong>3.9</strong> To the extent not prohibited by law, the guarantees in 3.6/3.7/3.8 are exclusive and EdgeNext has no other express or implied guarantees or conditions, including guarantees for software, hardware, system, network or environment, or merchantability, satisfactory quality, and suitability for a particular purpose.</p>
        <p class="mb-4"><strong>3.10</strong> You confirm that: based on the significant impact of EdgeNext services on your business operation, if you seriously breach the contract but EdgeNext fails to cancel or terminate the cooperation in advance in view of the impact of stopping EdgeNext services on your business, it shall be neither deemed that EdgeNext waives the right to recover the service fees, liquidated damages, compensations, etc. that should be collected according to the Product Terms or other terms, nor shall it be deemed that EdgeNext maliciously enlarges the losses.</p>
        
        <h3 class="text-xl font-medium mb-4">4. Specific Terms of Services</h3>
        <p class="mb-4">Without limiting the generality of the Product Terms, you further agree and promise that the purchase and use of the Services identified herein must comply with the specific terms of services stated herein.</p>
        <p class="mb-4"><strong>4.1</strong> EdgeNext Content Delivery Network (CDN)</p>
        <p class="mb-4">(a) Your use of the EdgeNext CDN shall comply with the product specifications, restrictions and instructions in the relevant product description pages on EdgeNext International Website ("CDN Descriptive Terms"). In the event of any inconsistency between the Product Terms and the CDN Descriptive Terms, the Product Terms shall prevail.</p>
        <p class="mb-4">(b) You should ensure that your account has enough balance so that we can continue providing the CDN services.</p>
        <p class="mb-4">(c) If you intend to order the EdgeNext CDN resources located in the People's Republic of China ("PRC"), you should be responsible for the arrangement and completion of any and all related registrations stipulated by the laws of the PRC. Otherwise, EdgeNext reserves the right to refuse to provide or stop the use or order of the EdgeNext CDN services in due time without taking any responsibility for you. You should check your registration status before using or ordering the EdgeNext CDN service.</p>
        <p class="mb-4">(d) After EdgeNext has completed the CDN configuration for providing services to you, if you need to change the configuration concerning CDN in the CDN service provision process, you should give us at least five working days' notice to ensure that the CDN service is not interrupted accidentally.</p>
        <p class="mb-4">(e) For your change to the configuration of the source site in the CDN service provision process, you should have technical communication, preparation, and tests with EdgeNext in advance, and EdgeNext will assist you to avoid improper setup that can cause the CDN services to be unavailable; otherwise, EdgeNext will assume no responsibility for any loss caused by your failure to timely notify EdgeNext due to your reason.</p>
        <p class="mb-4">(f) If your website encounters an access traffic anomaly or is under a hacker attack such as a cyber attack from any third-party website, you should immediately notify EdgeNext to ensure the stability of the CDN service, but you still have to pay the resulting traffic or bandwidth costs.</p>
        <p class="mb-4">(g) Based on the instability of the Internet, the volatility and replicability of data, and the uncertainty of data value, EdgeNext adopts the CDN technology for automatic acquisition from your source site or the acceleration and storage contents actively pushed by you. You confirm that you have taken your own backup measures and that EdgeNext does not need to assume the responsibility for compensating for the loss or damage of data, if any.</p>
        <p class="mb-4">(h) You should neither have nor cause or allow others to have the following behaviors:</p>
        <p class="mb-2">i. Use the CDN service to harass anybody; Cause damage or harm to anybody or property; Publish any material that is false, defamatory, harassing, or obscene; Infringe upon the privacy right; Preach bigotry, racialism, hatred, or harm; Send unsolicited bulk e-mail, junk mail, spam, or chain letters; Infringe upon the property right; Or violate any applicable law, statute, or regulation in any other way;</p>
        <p class="mb-2">ii. Perform or disclose any benchmark test, availability, or performance test for the CDN service;</p>
        <p class="mb-2">iii. Perform or disclose the network discovery, port and service identification, vulnerability scanning, password cracking, remote access, or penetration test for the CDN service. In addition to other rights stipulated in the Product Terms and SLA, EdgeNext also has the right to take remedial measures, which may include deleting or prohibiting the access to materials in violation of policies;</p>
        <p class="mb-2">iv. Modify, make derivative works of, disassemble, decompile, implement reverse engineering of, replicate, republish or copy any part of the CDN service (including data structure or similar materials generated by the program);</p>
        <p class="mb-2">v. Directly or indirectly establish or support products or services competing with EdgeNext by accessing or using the CDN service;</p>
        <p class="mb-2">vi. License, sell, transfer, assign, outsource, permit time-sharing or partial use, commercial exploitation of, or provide any third party with the CDN service, unless otherwise agreed in the Product Terms or by both parties;</p>
        <p class="mb-4">vii. Unless otherwise agreed by both parties, you should not provide EdgeNext with access to any health, payment card, or similarly sensitive personal information. The specific data security obligations for processing such data are higher than the obligations specified in the Service Specification.</p>
        
        <p class="mb-4"><strong>4.2</strong> EdgeNext Cloud Hosting Services (ECS)</p>
        <p class="mb-4">(a) Your use of the EdgeNext Cloud Hosting Services shall comply with the product specifications, limitations and descriptions on the related product description pages of the EdgeNext platform ("ECS Descriptive Terms"). In the event of any inconsistency between the Product Terms and the ESC Descriptive Terms, the former shall prevail.</p>
        <p class="mb-4">(b) EdgeNext will take basic security protection measures for its systems, equipment, etc. according to statutory and regulatory requirements. If your requirements for security protection measures are higher than the foregoing basic security protection measures, you are entitled to purchase security protection services of higher configuration or separately configure other security protection software, systems, etc. according to your needs.</p>
        <p class="mb-4">(c) You shall take necessary and effective security protection measures for the computer information system, equipment, etc. you use, failing which, you shall take responsibility for any damage to your rights and interests caused thereby.</p>
        <p class="mb-4">(d) EdgeNext will ensure availability within the agreed service rules. Where your requirements for availability are higher than the service rules, you need to conduct high availability settings for your own system, and EdgeNext can give the necessary assistance. Where EdgeNext is required to cooperate in the design, the Parties shall negotiate and confirm it separately.</p>
        <p class="mb-4">(e) If the specific service you purchase has a storage function, upon the expiration or termination of the service, any information such as data you store in the service will be retained for seven days by EdgeNext according to the rules of the service. You shall bear the fees incurred (if any) during the retention period and shall settle the fees and complete the migration of all data on time. After the expiration of the retention period, your aforesaid information will be deleted.</p>
        <p class="mb-4">(f) If you choose to use EdgeNext Services outside the Chinese mainland, you shall ensure that your qualifications, capabilities and behavior of usage comply with the requirements of local laws, regulations, policies, etc.</p>
        <p class="mb-4">(g) If you are frequently attacked (including but not limited to DDoS attacks) due to the conduct of any business including but not limited to "DNS resolution", "security service", "domain brokerage", and "reverse proxy" and fail to timely correct your behavior or eliminate the ill effects as required by EdgeNext, thus affecting EdgeNext's service platform or other people, you shall be responsible for the compensation.</p>
        <p class="mb-4">(h) If you purchase this service in the form of an annual or monthly plan, the term of service shall last until the expiration of the term of subscription; if you purchase this service in the form of a resource pack (or a package), the term of service shall last until the term of service of the resource pack you subscribe to expires or the services in the resource pack are used up, whichever is earlier.</p>
        <p class="mb-4">(i) You shall use up the services in the resource pack within the term of service. Upon expiration of the term of service of the resource pack, any service you have subscribed to but not used will be null and void, and no substitute or supplement will be provided or no unused balance in your platform account will be refunded by EdgeNext.</p>
        <p class="mb-4">(j) Your use of this service will first consume the resource pack you subscribe to. Unless provided for by law or otherwise agreed on by the Parties, if the services in the resource pack are used up or the term of service expires, and you continue to use this service without continuing to subscribe to the resource pack, EdgeNext will regard it as your use of this service in the form of post-paid purchase (if any) and will continue the billing and deduct the service fee based on the billing results.</p>
        <p class="mb-4">(k) You understand and fully acknowledge that EdgeNext has established (and will continue to improve according to technology development) necessary technical measures to defend against matters or acts that endanger network security, including computer viruses and network intrusions, attacks and disruptions (including DDoS) (hereinafter collectively referred to as the Acts), however, in the light of the limitations and relativity of the network security technology and the unpredictability of the Acts, if your website suffers from the Acts, which brings harm to EdgeNext or EdgeNext's other networks or servers (including local, non-local and international networks and servers) or affects EdgeNext's smooth communication with the international Internet or specific networks, servers, and its interior, EdgeNext may decide to suspend or terminate this service. If this service is terminated, the service fee will be calculated according to the actual month of service provided (or days of service provided if less than one month) and the remaining amount (if any) will be refunded.</p>
        
        <p class="mb-4"><strong>4.3</strong> EdgeNext Bare Metal Servers (BMS)</p>
        <p class="mb-4">(a) EdgeNext Bare Metal Servers is a flexible, secure and stable computing service located in the edge cluster, which helps you reduce IT costs, improve operation and maintenance efficiency, and enable you to focus more on core business innovation.</p>
        <p class="mb-4">Your use of the EdgeNext BMS Service shall comply with the product specifications, limitations and descriptions on the related product description pages of the EdgeNext platform ("BMS Service Descriptive Terms"). In the event of any inconsistency between the Product Terms and the BMS Service Descriptive Terms, the former shall prevail.</p>
        <p class="mb-4">(b) You shall not provide traffic penetrating access for other operators and interconnected units through Internet bandwidth in any way (including but not limited to privately connecting optical fiber for transition and establishing VPN tunnels), and shall not use the equipment of EdgeNext as a proxy server.</p>
        <p class="mb-4">(c) You shall not unilaterally change the IP address assigned by EdgeNext, and shall not do anything that affects the network operation, including but not limited to modifying the routing table using the static ARP. Otherwise, EdgeNext may suspend or terminate the service to you, and you shall assume the responsibility arising therefrom.</p>
        <p class="mb-4">(d) You acknowledge that EdgeNext shall not assume any responsibility for the unavailability of the BMS Service or other impacts due to the following circumstances:</p>
        <p class="mb-2">i. Unavailability of the BMS Service due to the fault of your source site or your setting and adjustment of IDC resources;</p>
        <p class="mb-2">ii. Unavailability of the BMS Service due to improper configuration when debugging the configuration as required by you; and</p>
        <p class="mb-4">iii. Other circumstances that may cause the unavailability of this service as agreed in Article 3 hereof.</p>
        <p class="mb-4">(e) EdgeNext shall be entitled to take measures such as bandwidth traffic management for customers who purchase the bandwidth sharing service, so as to ensure their interests.</p>
        <p class="mb-4">(f) You acknowledge that since the server room resources under this service are provided by the basic telecom operator, if the basic telecom operator requires relocating the server room or no longer provides this service, EdgeNext shall notify you 15 days in advance and assist you in returning the equipment. The Parties shall settle the service fee according to the actual service time, and neither party shall be liable for breach of contract.</p>
        <p class="mb-4">(g) You shall compensate EdgeNext for all losses caused by damage to EdgeNext's equipment or failure of other users to normally use the equipment in EdgeNext's server room or EdgeNext's services due to your illegal writing, operation, or use of programs or software.</p>
        <p class="mb-4">(h) You shall be responsible for the normal operation of the software and hardware of your equipment. If the equipment operated and maintained by you has any problems affecting the stability of the Internet, including but not limited to that the equipment is attacked by hackers or computer viruses, sends massive spam, or becomes an attack source, which causes major network security issues and affects other users, EdgeNext will request you to correct them by phone or e-mail and shall be entitled to suspend your network connection until the problems are resolved, and such suspension shall not be deemed as EdgeNext's breach of contract. You shall compensate for the losses caused to EdgeNext or other customers of EdgeNext.</p>
        <p class="mb-4">(i) We reserve the right to restrict, delete or suspend any service that violates any of the above restrictions.</p>
        
        <p class="mb-4"><strong>4.4</strong> EdgeNext Security CDN Services</p>
        <p class="mb-4">(a) Your use of EdgeNext Security CDN shall comply with the product specifications, restrictions, and instructions ("Descriptive Terms of Security CDN") on the relevant product description page of EdgeNext International website. In case of any inconsistency between the Product Terms and the Descriptive Terms of Security CDN, the Product Terms shall prevail.</p>
        <p class="mb-4">(b) Security CDN refer to the Web application security acceleration service provided by EdgeNext for you, which combines security and acceleration and is based on DNS traffic takeover, hides the real server IP address, and provides security services such as intrusion defense against vulnerabilities, defense from DDoS attack and Bot behavior management for your Web applications by implementing a series of security strategies targeting HTTP/HTTPS. In addition, it adopts distributed edge nodes and various acceleration strategies to provide stable CDN acceleration capability for your Web applications.</p>
        <p class="mb-4">(c) Where the products and services you use exceed the purchased package standards (such as bandwidth usage, request times, etc.), you shall pay EdgeNext for some services exceeding the package standards.</p>
        <p class="mb-4">(d) You shall not use the internet resources provided by EdgeNext to operate various internet businesses for which it does not have qualifications, and shall not use the internet resources provided by EdgeNext to engage in illegal activities, and shall not use the internet bandwidth to provide penetration traffic access to other operators and interconnected units in any way (including but not limited to connecting optical fibers for switching, establishing VPN tunnels, etc. without permission).</p>
        <p class="mb-4">(e) In case of not purchasing EdgeNext anti-DDoS attack defense services, you shall ensure that your business platform will not affect the network security of EdgeNext and customers thereof. Where you suffer from DDoS attacks and have hidden dangers or situations that affect the network security of EdgeNext or customers thereof, EdgeNext shall be entitled to terminating all business under this payment after notifying you without refunding all paid service fees, and you shall bear the responsibilities and consequences arising from your failure to use the business normally.</p>
        <p class="mb-4">(f) EdgeNext reserves the right to suppress traffic in case that an attack on your business affects the infrastructure of EdgeNext Cleaning Center. Once the traffic is suppressed, it may have a certain impact on your business. For example, the business access traffic may be limited or even be blackholed, and EdgeNext will not bear the losses caused to your business.</p>
        <p class="mb-4">(g) Where the cyber attack on bandwidth exceeds the capability range of EdgeNext or the protection range agreed between you and us, affecting your business, EdgeNext will not assume any responsibility.</p>
        <p class="mb-4">(h) You shall be responsible for the data stored on EdgeNext's platform, as well as for the integrity and confidentiality of commands and passwords required for entering and managing various products and services on EdgeNext's platform. All losses and consequences caused by the loss or leakage of the above data, commands and passwords due to improper maintenance, confidentiality or operation by you shall be borne by yourself.</p>
        <p class="mb-4">(i) If EdgeNext finds that you violate the above terms, EdgeNext shall have the right to take corresponding measures, including but not limited to immediate termination of the services or suspension of the services. If you violate the above terms and cause losses to EdgeNext, you shall bear all legal responsibilities and compensate for the losses therefrom;</p>
        <p class="mb-4">(j) You learn that EdgeNext cannot guarantee the service it provides is perfect (for example, EdgeNext's security products cannot ensure that your hardware or software is absolutely secure), but EdgeNext undertakes to improve the service quality and service level continuously. Therefore, you agree that even if there are defects in the services provided by EdgeNext, such defects cannot be avoided by the technical level of the industry at that time, and it will not be deemed as breach of contract by EdgeNext. You also agree to eliminate the above defects through cooperation with EdgeNext.</p>
        
        <p class="mb-4"><strong>4.5</strong> EdgeNext DNS Security</p>
        <p class="mb-4">(a) Your use of the EdgeNext DNS Security shall comply with the product specifications, restrictions and instructions in the relevant product description pages on EdgeNext International Website ("DNS Security Descriptive Terms"). In the event of any inconsistency between this Product and Service Terms and the DNS Security Descriptive Terms, Product and Service Terms shall prevail.</p>
        <p class="mb-4">(b) DNS Security refers to a safe, fast, stable and extensible authoritative DNS service provided by EdgeNext for you, which converts domain names that are easy to manage and identify into digital IP addresses used by computers for interconnection communication, thus routing users' access to corresponding websites or application servers.</p>
        <p class="mb-4">(c) You shall be responsible for the data stored on EdgeNext's platform, as well as for the integrity and confidentiality of commands and passwords required for entering and managing various products and services on EdgeNext's platform. All losses and consequences caused by the loss or leakage of the above data, commands and passwords due to improper maintenance, confidentiality or operation by you shall be borne by yourself.</p>
        <p class="mb-4">(d) EdgeNext reserves the right to suppress traffic in case that an attack on your business affects the infrastructure of EdgeNext Cleaning Center. Once the traffic is suppressed, it may have a certain impact on your business. For example, the business access traffic may be limited or even be blackholed, and EdgeNext will not bear the losses caused to your business.</p>
        <p class="mb-4">(e) You understand and agree that EdgeNext currently provides you with DNS Security services for free within a certain period of time, that is, you do not need to pay EdgeNext fees for applying for opening or trying on DNS Security services in accordance with the provisions of this article within a certain period of time.</p>
        <p class="mb-4">(f) You understand and agree that EdgeNext will not make any commitment to the availability and reliability of any service for free services. EdgeNext also assumes no responsibility for the work or results of your use of the free services.</p>
        <p class="mb-4">(g) EdgeNext does not rule out the possibility of charging DNS Security in the future. At that time, EdgeNext will publish the charging policies and specifications 10 natural days in advance by publishing an announcement in the appropriate section of the EdgeNext website or sending a notice on the website.</p>
        <p class="mb-4">(h) After EdgeNext charging applies, if you still use the DNS Security service, you shall pay according to the effective charging policy at that time and comply with the effective service terms published by EdgeNext at that time. If you refuse to pay the service fee after charging starts, EdgeNext has the right to stop providing services to you and to stop retaining your business data.</p>
        <p class="mb-4">(i) You learn that EdgeNext cannot guarantee the service it provides is perfect (for example, EdgeNext's security products cannot ensure that your hardware or software is absolutely secure), but EdgeNext undertakes to improve the service quality and service level continuously. Therefore, you agree that even if there are defects in the services provided by EdgeNext, such defects cannot be avoided by the technical level of the industry at that time, and it will not be deemed as breach of contract by EdgeNext. You also agree to eliminate the above defects through cooperation with EdgeNext.</p>
        
        <p class="mb-4"><strong>4.6</strong> EdgeNext Anti-DDoS</p>
        <p class="mb-4">(a) Your use of the EdgeNext Anti-DDoS shall comply with the product specifications, restrictions and instructions in the relevant product description pages on EdgeNext International Website ("Anti-DDoS Descriptive Terms"). In the event of any inconsistency between the Product Terms and the Anti-DDoS Descriptive Terms, the Product Terms shall prevail.</p>
        <p class="mb-4">(b) Anti-DDoS Service means the DDoS traffic-based attack prevention and service management system provided by EdgeNext. The system, applicable to the business scenarios dealing with directed persistence and large-scale DDoS governance, is an advanced DDoS protection product that can provide data centers with locally deployed private data cleaning services.</p>
        <p class="mb-4">(c) Except as expressly permitted by EdgeNext, you shall neither modify, adapt, rent, sublicense, and transmit or transfer on the information network the software provided by EdgeNext, nor reverse, decompile or otherwise attempt to discover the source code of the software provided by EdgeNext.</p>
        <p class="mb-4">(d) You shall not use the services provided by EdgeNext to engage in acts that damage the legitimate rights and interests of EdgeNext, including but not limited to violating any service agreement/terms, management specifications, trading rules and other regulatory content published by EdgeNext, and destroy or attempt to undermine the fair trading environment or normal trading order of EdgeNext;</p>
        <p class="mb-4">(e) You shall not engage in any acts that destroy or attempt to destroy network security (including but not limited to phishing, hacking, cyber fraud, providing websites or spaces containing or suspected of spreading the following: viruses, Trojans, malicious codes, and suspected attacks on other websites and servers through virtual servers, such as scanning, sniffing, ARP spoofing and DDoS);</p>
        <p class="mb-4">(f) You shall be responsible for the data stored on EdgeNext's platform, as well as for the integrity and confidentiality of commands and passwords required for entering and managing various products and services on EdgeNext's platform. All losses and consequences caused by the loss or leakage of the above data, commands and passwords due to improper maintenance, confidentiality or operation by you shall be borne by yourself;</p>
        <p class="mb-4">(g) If EdgeNext finds that you violate the above terms, EdgeNext shall have the right to take corresponding measures, including but not limited to immediate termination of the services or suspension of the services. If you violate the above guarantee and cause losses to EdgeNext, you shall bear all legal responsibilities and compensate for the losses therefrom;</p>
        <p class="mb-4">(h) You learn that EdgeNext cannot guarantee the service it provides is perfect (for example, EdgeNext's security products cannot ensure that your hardware or software is absolutely secure), but EdgeNext undertakes to improve the service quality and service level continuously. Therefore, you agree that even if there are defects in the services provided by EdgeNext, such defects cannot be avoided by the technical level of the industry at that time, and it will not be deemed as breach of contract by EdgeNext. You also agree to eliminate the above defects through cooperation with EdgeNext.</p>
        
        <h3 class="text-xl font-medium mb-4">5. General Provisions</h3>
        <p class="mb-4"><strong>5.1</strong> The Product Terms and SLAs constitute and govern the entire agreement between you and EdgeNext concerning the use of EdgeNext Services, superseding any prior written or oral agreement relating to this subject.</p>
        <p class="mb-4"><strong>5.2</strong> You and EdgeNext are separate legal entities, and the Terms does not represent the establishment of any agency, partnership, joint venture, employee-employer or franchisee-franchisee relationship between both parties.</p>
        <p class="mb-4"><strong>5.3</strong> Where any provision hereof is ruled invalid or unenforceable by a court or tribunal with jurisdiction, the validity or enforceability of the remaining provisions hereof shall remain in full force and effect.</p>
        <p class="mb-4"><strong>5.4</strong> Unless a right or remedy of you or EdgeNext is expressed as an exclusive right or remedy, the exercise of such right or remedy by either party shall not affect other legal and/or equitable rights and remedy of either party.</p>
        <p class="mb-4"><strong>5.5</strong> You shall do and execute or cause others to do and execute all such further acts, covenants, things and documents as may be necessary to give effect to the terms hereof.</p>
        <p class="mb-4"><strong>5.6</strong> Except for EdgeNext and its affiliates, according to the Contract (Third Party Rights) Law (Rev Ed 2021), persons who are not parties to the Product Terms have no right to enforce any of these terms.</p>
        <p class="mb-4"><strong>5.7</strong> Unless otherwise stipulated in the terms and conditions of relevant EdgeNext Services, under no circumstances shall EdgeNext assume any responsibility for the delay, failure or interruption of the content or services provided through EdgeNext International Website (including EdgeNext Services) directly or indirectly caused by natural actions, forces or reasons beyond our reasonable control, including but not limited to Internet failures, computers, computer viruses, cyber attacks, telecommunications or any other equipment failures, power failures, epidemics, strikes, labor disputes, riots, rebellions, civil strife, labor or material shortages, fires, floods, storms, explosions, natural disasters, wars, government actions, orders of domestic and foreign courts or tribunals, or non-performance of obligations by third parties.</p>
        <p class="mb-4"><strong>5.8</strong> EdgeNext and you promise to enjoy intellectual property rights and other legal rights over the contents, materials, information and documents provided by them under the product agreement, and will not infringe upon any other party's legal rights.</p>
        <p class="mb-4">(a) The intellectual property rights (including but not limited to copyrights, trademark rights, patent rights, etc.) of all products, technologies, ideas, concepts, designs, etc. developed and provided by EdgeNext in its products and services shall be owned by EdgeNext. Where EdgeNext does not authorize you to enjoy them, you will not obtain any intellectual property rights and related rights of EdgeNext due to the consent of the product agreement.</p>
        <p class="mb-4">(b) You agree that EdgeNext may use your name, trade name, trademark, Logo and other business signs for external publicity and display.</p>
        <p class="mb-4">(c) The clauses of intellectual property rights shall not become invalid due to the invalidity, cancellation, early termination or inoperability of the agreement.</p>
        <p class="mb-4"><strong>5.9</strong> The Terms shall be governed by the laws of Singapore without regard to its conflicting clauses of laws. Any controversy, dispute or claim arising from or in connection with the Terms, including any question relating to its existence, validity or termination, shall be submitted to the Singapore International Arbitration Centre ("SIAC") for arbitration and final settlement in accordance with the Arbitration Rules of the Singapore International Arbitration Centre ("SIAC Rules") for the time being in force, which shall be deemed to be incorporated into a reference of this clause. The place of arbitration shall be the Republic of Singapore.</p>
      `
    },
    'terms-conditions': {
      title: 'EdgeNext International Website Terms and Conditions of Use (v1.0)',
      icon: <Scale size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">EdgeNext International Website Terms and Conditions of Use (v1.0)</h2>
         <p class="mb-4">Welcome to visit EdgeNext International Website!

These Terms and Conditions of Use of EdgeNext International Website (hereinafter referred to as “these Terms and Conditions”) apply to the terms and conditions of your access to and use of EdgeNext International Website (www.edgenext.com, hereinafter referred to as “EdgeNext International Website”). These Terms and Conditions is a legally binding agreement between you as a user of EdgeNext International Website (hereinafter referred to as “You”) and the entities listed in Article 2 of these Terms and Conditions (hereinafter referred to as “We”, “Our”, “Us”, or “EdgeNext”).</p>
        <h3 class="text-xl font-medium mb-4">1.  Application of These Terms and Conditions</h3>
        <p class="mb-4">1.1 Your use of the EdgeNext International Website and the affiliated products and services on this website (hereinafter collectively referred to as the “EdgeNext Services”) shall be bound by these Terms and Conditions and the following conditions:
<br/>
(a) Membership Agreement of EdgeNext International Website;
<br/>
(b) Product Terms and SLA of EdgeNext International Website;
<br/>
(c) Privacy Policy;
<br/>
(d) Customer Data Protection Policy; and
<br/>
(e) Any other instructions, rules and policies published from time to time on the EdgeNext International Website (collectively referred to as the “Terms”).
<br/>
1.2  By visiting EdgeNext International Website or using the EdgeNext Services, You agree to accept and be bound by these Terms and Conditions. And you acknowledge that We can update any Terms and Conditions at any time by posting the relevant changes to the Terms and Conditions on EdgeNext International Website. By continuing to use EdgeNext Services, You agree to be bound by the Terms and Conditions as amended.
<br/>
1.3  If You use or purchase a specific service on the EdgeNext International Website, You shall be liable to confirm the Terms of Service corresponding to the specific service; Please read carefully, fully understand, and choose to accept or not accept the Terms of Service. In the event of any conflict or inconsistency between these Terms and Conditions and the Terms of Service, the Terms of Service shall prevail over these Terms and Conditions to the extent of the conflict or inconsistency.
<br/>
1.4  EdgeNext shall be entitled to transfer and/or change, in whole or in part, any of these Terms and Conditions (including any of Our rights, ownership, interests, obligations and responsibilities under these Terms and Conditions) to any person or entity (including any of EdgeNext’s affiliates). EdgeNext may request changes to these Terms and Conditions or any other part by sending You a written notice (including in-site letter, mail, SMS, etc.), and You hereby irrevocably agree to any such changes or transfer.</p>
        
        <h3 class="text-xl font-medium mb-4">2. Provision of the Services</h3>
        <p class="mb-4">2.1  The legal subject of EdgeNext contracting with You is LEGEND DYNASTY PTE. LTD. You must register an account on the EdgeNext International Website to purchase and use products and services.
<br/>
2.2  If EdgeNext believes that You have violated these Terms and Conditions, EdgeNext shall be entitled to restrict, suspend or terminate Your access to or use of EdgeNext International Website or certain Services (including any functions in the Services).
<br/>
2.3  The Services (or any feature in any of the Services) may vary in different regions and countries. EdgeNext does not guarantee or represent that certain service or its features or functions or the same type and degree of service or its features and functions will be available in all countries and regions or to all users. EdgeNext may restrict, deny or establish different levels of access to and use of any Service (or any of its features) for different users at its own discretion.</p>
        
        <h3 class="text-xl font-medium mb-4">3. Website Services and Specifications</h3>
        <p class="mb-4">3.1  You shall be entitled to enjoy the Internet technical services and information services provided by EdgeNext through the EdgeNext International Website. And You shall also perform obligations such as timely payment in accordance with these Terms and Conditions, other relevant terms and agreements confirmed by You at the time of purchasing certain Services, and rules and specifications of the EdgeNext International Website.
<br/>
3.2  With regard to the contents provided through EdgeNext Services, You agree that you will not:
<br/>
(a)   post any information or content that violates the laws and regulations, political propaganda/advocacy or news of any applicable country/region;
<br/>
(b)  post any information that involves state secrets or security;
<br/>
(c)   post any information that involves obscenity, pornography, indecency, violence or information that has (may have) the effect of abetting, leading to the commission of a crime or affecting the lives of persons;
<br/>
(d)  post any information that violates national (regional) ethnic and religious policies;
<br/>
(e)   infringe the rights of any person, including but not limited to the rights of others to privacy, copyright, trade secret protection, patents or other intellectual property rights or similar laws or regulations;
<br/>
(g)  post other information or content that infringes on the legitimate rights and interests of others or is detrimental to social order, public order, public interest or morality, or violates the relevant rules of these Terms and Conditions/the EdgeNext International Website; and
<br/>
(f)   otherwise do any act or matter that EdgeNext may deem to constitute network abuse of any System.
<br/>
3.3  Electronic Commercial Information
<br/>
(a)You agree that You will not disseminate, send or assist in sending any unsolicited electronic commercial information, or engage in any form of spam, violate the laws and regulations of any relevant jurisdiction, or otherwise do any act or matter that EdgeNext believes constitutes an abuse of promotional and marketing information.
<br/>
(b)You agree that we may send you electronic commercial information via email about services, features or events that may be of interest to you. If you do not wish to receive such information, you may unsubscribe using the path provided in the email or by contacting us directly.
<br/>
3.4  You acknowledge and agree that by disclosing and/or submitting any information to Us, You warrant that You have full power, right and authority to disclose and/or submit such information and that the use of such information in accordance with these Terms and Conditions of Use will not expose Us to any claim, liability or prosecution.
<br/>
3.5  Except as set out in the Privacy Policy in relation to Personal Data, for any data or information (other than the Personal Data) that You provide to Us for processing, storage, hosting or in connection with Your purchase and use of our Services (hereinafter referred to as the “Information”), You agree that:
<br/>
(a)   the Information You provide to Us will be transferred to, stored and processed in the country/region where We, Our affiliates or Our subcontractors maintain facilities for the Services, except as otherwise provided below. This may differ from Your jurisdiction and, therefore, the Information may need to be transferred to overseas jurisdictions.
<br/>
(b)  You acknowledge and agree that any such overseas transfer or processing of the Information is necessary to process and administer Your customer account and provide the Services, and You agree to do so. You further agree and permit EdgeNext to handle the Information on Your behalf in accordance with these Terms and Conditions of Use and/or the Membership Agreement of EdgeNext International Website, and You designate Us to transfer the Information to any such country/region and store and process the Information for the provision of Our Services.
<br/>
(c)   You acknowledge and agree that information relating to Your payment instrument (such as a credit card), including information about Your payment instrument organization, the last digits of Your payment instrument number, the security code and the expiration date of Your payment instrument, will be transferred, stored and processed directly by Our third party payment service providers so that they can process Your payment transactions, and that We do not generally store any of the Information.
<br/>
(d)  with regard to any other information, You provide to Us or We collect, include information provided upon registration, information recorded by Us relating to Your activities and information provided voluntarily by You, which You acknowledge and agree that We may store and/or transfer to any of Our affiliates, including affiliates located in other countries/regions, in Our business judgment.
<br/>
(e)   We shall not disclose the Information outside of Ourselves, Our affiliates or Our third party service providers unless: i) You have asked us to do so; ii) Your end user has given us permission to do so; iii) it is permitted under these Terms and Conditions of Use or under any agreement between You and Us; or iv) it is legally required by applicable law, legal proceedings or governmental request, or in connection with any claim or potential claim against Us or Our shareholders, subsidiaries or affiliates.
<br/>
3.7  You agree and confirm that We have the right to specify the domain name or URL for Your access to the Services and/or the EdgeNext International Website at any time. It is Your responsibility, at your own expense, to implement any necessary changes in a timely manner so that Your system can interface with them.
<br/>
3.8  You agree not to:
<br/>
a. take any action that undermines the integrity of the computer or communications system, network, software application or network and computing device associated with the Services and/or any other user (each, a “System”), or to have unauthorized access to any System;
<br/>
b. monitor or scrape data or traffic on any System without Our permission;
<br/>
c. detect, test, or scan for vulnerabilities in any System or for violations of any security or authentication measures associated therewith;
<br/>
d. forgery of Your originals, including forgery of TCP-IP packet headers, e-mail headers, or any part of any message describing its origin or route; or
<br/>
e. otherwise conduct any act or matter that We believe may undermine the security of any System.
<br/>
3.9  You agree not to:
<br/>
a.engage in any Denial of Service (DoS) attack, Distributed Denial of Service (DDoS) attack or any other form of cyber-attack;
<br/>
b.engage in any activities that may interfere with the normal operation of any System; including mail/news bombardment, public opinion attack and any other related network interference technology;
<br/>
c.operate any network services, such as open proxy, open mail relay, open recursive domain name server, etc.; or
<br/>
d.otherwise commit any act or matter that We believe constitutes an abuse of the network of any System.</p>
        
        <h3 class="text-xl font-medium mb-4">4. User Violations</h3>
        <p class="mb-4">EdgeNext reserves the right to delete, modify or reject at its sole discretion any content submitted, posted or displayed by You on EdgeNext International Website that We believe is illegal, violates these Terms and Conditions or may make EdgeNext or Our affiliates liable. EdgeNext reserves the right to take such actions as it deems appropriate at its own discretion, including but not limited to sending You a written warning, deleting any user content You submit or post on the relevant features/functions of EdgeNext International Website or the Services, recovering losses or other monetary compensation from You, suspending or terminating Your account in EdgeNext, or suspending Your subscription to any Service. EdgeNext also reserves the right to restrict, refuse or prohibit You from using any other Services provided by EdgeNext in the future.</p>
        
        <h3 class="text-xl font-medium mb-4">5. Limitation of Liability</h3>
        <p class="mb-4">5.1  To the maximum extent permitted by applicable law, the Services is provided “as is”, “available” and “no guarantee of flawless goods”. EdgeNext hereby expressly disclaims any and all warranties, express or implied, including but not limited to any warranties of condition, quality, durability, performance, accuracy, reliability, merchantability or fitness for a particular purpose and non-infringement, or that the Services will be uninterrupted, error-free, free of harmful components, secure, or free from damage or loss of function or data. To the maximum extent permitted by applicable law, EdgeNext makes no representations or warranties as to the validity, accuracy, correctness, reliability, quality, stability, completeness or timeliness of any Information provided on or through the Services; EdgeNext makes no representations or warranties that the manufacture, import, export, distribution, offer, display, purchase, sale and/or use of products or services provided or displayed through the Services will not infringe upon the rights of any third party; and EdgeNext makes no representations or warranties of any kind with respect to any products or services provided or displayed through the Services. Any materials downloaded or otherwise obtained through the Services are at Your sole discretion and risk, and You are solely responsible for any damage to Your system or loss of data that may result from the download of any such materials. Any advice or information You receive from EdgeNext or through or from the Services, whether oral or written, does not give rise to any warranty not expressly stated herein. Save for any warranties, representations, conditions and undertakings expressly specified in these Terms and Conditions, EdgeNext hereby excludes all other warranties, representations, conditions and undertakings, express or implied, to the maximum extent permitted by applicable law.
<br/>
5.2  You understand and agree that You are liable for any third-party claims arising from Your use of the Services, breach of these Terms and Conditions or any action taken under Your account. If EdgeNext and any of its affiliate, employee, customer or partner is claimed by any third party, You shall be liable for handling and compensating EdgeNext and its affiliates for any and all losses and responsibilities incurred therefrom.
<br/>
5.3  To the extent permitted by applicable law, EdgeNext shall not be liable for any indirect, punitive, special or derivative losses related to or arising from this Service Agreement. EdgeNext hereby reminds us that You should abide by the applicable national or regional laws during the use of Our Services, and must not endanger network security, and must not use Our Services to engage in activities that infringe on the reputation, privacy, intellectual property rights and other legitimate rights and interests of others. EdgeNext shall not be liable for any illegal or breach of contract in Your use of EdgeNext Services. If you obtain products or services from other third parties by using EdgeNext Services. As We do not control such websites and resources, You acknowledge and agree that EdgeNext is not liable for the availability of such external websites or resources, and does not recognize or be responsible for any content, advertisements, products, materials or any content originating from such websites or resources. You further acknowledge and agree that EdgeNext shall not be liable for any direct or indirect losses caused by using or relying on any such content.
<br/>
5.4  The limitations and exclusions of Your liability set out in these Terms and Conditions shall apply to the maximum extent permitted by law and shall apply to whether EdgeNext was informed or should have known that any such loss may arise.</p>
        
        <h3 class="text-xl font-medium mb-4">6. Notification and Procedure for Filing Claims for Copyright Infringement</h3>
        <p class="mb-4">6.1  If You believe that Your work has been copied and which constitutes copyright infringement, You may give Us a written notice and provide all the details stipulated in PART 6 to the Singapore Copyright Act 2021, Clause 323, Our contact details are as follows:
</p>
1 PICKERING STREET #08 GREAT EASTERN CENTRE SINGAPORE (048659)
</p>
Tel: +65 68718812
</p>
6.2  We will only process Chinese/English notices that comply with the Singapore Copyright Act, other applicable laws and these Terms and Conditions of Use. Any notice that fails to comply with the above will be rejected.
</p>
6.3  Upon receipt of a compliant infringement notice, We will give due consideration to the relevant infringement notice in the above manner and may take further measures depending on the nature of the alleged infringement described in the notice, which may include matters applicable to the Internet Service Provider as described in the Singapore Copyright Act. You agree that You will not take any legal action or any legal remedy against Us with respect to any infringing materials without first notifying Us and giving Us sufficient opportunity to remove it and before We refuse or fail to remove the allegedly infringing materials within the reasonable time limit. If We remove any allegedly infringing material pursuant to Your notice of infringement, You agree not to exercise and hereby waive any rights of action You may have under applicable law against Us prior to Our removal of such content.</p>
        
        <h3 class="text-xl font-medium mb-4">7. Intellectual Property Rights {IPRs}</h3>
        <p class="mb-4">7.1  The IPRs on the LOGO of EdgeNext International Website, “EdgeNext” and other words, graphics and combinations thereof, as well as other logos and emblems of EdgeNext International Website, names of EdgeNext Services, technical documents, etc. shall be the property of EdgeNext and its affiliates.
<br/>
7.2  The IPRs on all products, services, technologies and all procedures (hereinafter collectively referred to as the “Technical Services”) of the EdgeNext website shall be the property of EdgeNext or its rights holders.
<br/>
7.3  We will not use, modify, reproduce, publicly distribute, alter, disseminate, distribute or publicly publish the results in which You own IPRs without your consent.
<br/>
7.4  “Intellectual Property Rights” refers to:
<br/>
(a)   all rights, ownership and interests in all intellectual property, including any and all copyrights, patents, trademarks, service trademarks, logos, images, trade names, Internet domain names, design rights, computer software rights, database rights, utility models and proprietary technology rights, etc., in each case, whether registrable or not, including any application for registration, and all rights or forms of protection with equal or similar effect anywhere in the world, on all platforms and media, whether now known or invented in the future;
<br/>
(b)  all rights under any license, consent, order, statute or other rights relating to any of the rights referred to in subparagraph (a) above;
<br/>
(c)   all rights of the same or similar effect or nature as sub-paragraphs (a) and (b) existing or likely to exist in the future;
<br/>
(d)  all rights in revenue, royalties, damages, claims and sums due or payable now or hereafter; and
<br/>
(e)   all rights to sue, either in law or in equity, for past or future violations of any of the foregoing rights.</p>

         <h3 class="text-xl font-medium mb-4">8. Miscellaneous</h3>
        <p class="mb-4">8.1  These Terms and Conditions constitute the complete agreement between You and EdgeNext regarding the use of the Services and govern the use of the Services, and supersede any prior written or oral agreements between the Parties with respect to the subject matter hereof.
<br/>
8.2  For the purposes of these Terms and Conditions, the headings are for convenience only and shall have no legal or contractual effect.
<br/>
8.3  You and EdgeNext are independent legal entities, and these Terms and Conditions are not intended to create any agency, partnership, joint venture, employee-employer or franchisee-franchisee relationship between You and EdgeNext.
<br/>
8.4  If any provision of these Terms and Conditions is held to be invalid, void or unenforceable, such provision shall be deemed severable from these Terms and Conditions and shall not affect the validity or enforceability of the remaining provisions of these Terms and Conditions.
<br/>
8.5  EdgeNext’s failure to act or exercise its rights with respect to a user’s violation of these Terms and Conditions does not constitute a waiver of EdgeNext’s right to exercise such rights with respect to the user or a waiver of EdgeNext’s right to act with respect to subsequent or similar violations by the user.
<br/>
8.6  You may not delegate, assign, sub-license or subcontract any rights and/or obligations under these Terms and Conditions to any third party without the prior written consent of EdgeNext.
<br/>
8.7  Unless a right or remedy of You or EdgeNext is expressly defined as an exclusive right or remedy, the exercise of that right or remedy by either Party shall not affect or impair other legal and/or equitable rights and remedy of either Party.
<br/>
8.8  You shall do and execute or cause to be done and executed all such further acts, covenants, matters and documents as may be necessary to give effect to the terms of this Agreement.
<br/>
8.9  Except for EdgeNext and its affiliates, no person who is not a party to this Agreement shall be entitled to execute any of the terms of this Agreement under the Contracts (Rights of Third Parties) Act (2021 Rev Ed).
<br/>
8.10 Unless otherwise agreed, for the sake of the professionalism of the services, EdgeNext may entrust its affiliates or other legal entities to provide You with one or more specific Services on the EdgeNext Website, and You may enter into relevant terms or conditions with such companies, please carefully read and fully understand the terms and conditions, and choose to accept or not accept such terms and conditions.
<br/>
8.11 Except as otherwise provided in the relevant terms of the EdgeNext Services, in no event shall EdgeNext be liable for damages for any delay, failure, interruption or inability to function properly of the Content or Services delivered through the EdgeNext International Website and/or the EdgeNext Services, as a result of natural acts, forces, causes or unexpected events beyond Our reasonable control, including but not limited to natural disasters, strikes, riots, wars, government actions, orders of domestic or foreign courts, and other factors; public service factors such as power supply failures, communication network failures, computer viruses, and network attacks; and EdgeNext System maintenance with advance announcement or notification.</p>

         <h3 class="text-xl font-medium mb-4">9. Jurisdictional Law and Dispute Settlement</h3>
        <p class="mb-4">These Terms and Conditions shall be governed by the laws of Singapore without regard to its conflict of law provisions. The Parties hereto accept that the dispute shall be submitted to and ultimately settled through arbitration by the Singapore International Arbitration Center (hereinafter referred to as the “SIAC”) in accordance with the Singapore International Arbitration Center Arbitration Rules (hereinafter referred to as the “SIAC Rules” then in force.</p>
      `
    },
    'payment-terms': {
      title: 'Payment Terms',
      icon: <CreditCard size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">Payment Terms</h2>
          <p class="mb-4">Last Updated: September 30, 2022
These Payment Terms (“Terms”) govern the payment in connection with your purchase of EdgeNext products and services and form an integral part of the EdgeNext International Website Membership Agreement (“Membership Agreement”). Unless otherwise specified herein, capitalized terms used in this Payment Terms shall have the same meaning as defined in the Membership Agreement.
</p>
        <h3 class="text-xl font-medium mb-4">1. Currency and payment methods</h3>
        <p class="mb-4">1.1 The prices of products listed on www.edgenext.com (EdgeNext International Website) are in US dollars. We accept payment by PayPal, VISA, and MasterCard. We accept payments in US dollars, Singapore dollars and Hong Kong dollars, with US dollars being the main payment currency. </p>

1.2 If you make a payment in a currency other than US dollars, the amount of the payment will be calculated at an exchange rate reasonably set by the payment institution based on the following dates as the base date: when the order is submitted successfully; for services paid for on a volume basis, when the volume reaches the billing amount set by us.</p><br/>

1.3 Each registered payment account can only be tied to one EdgeNext member account. Different EdgeNext member accounts cannot use the same credit card or the same Paypal account to make payments.

 </p><br/>
        
        <h3 class="text-xl font-medium mb-4">2. Purchase</h3>
        <p 2.1 According to your own needs, you can purchase the services you need online through the EdgeNext International Website. The content of the purchased products and services, service fees, service periods and billing times are subject to your confirmation and Agreement on the order page.</p>

2.2 Based on the special nature of the Internet and network services, you agree that the services provided by EdgeNext are billed on the basis of the statistics of the EdgeNext billing system.</p><br/>

2.3 EdgeNext will not begin providing services to you until you have paid for them. You will need to complete payment promptly after your order is submitted and if you do not pay immediately after placing your order, the order will be held for 30 days. If you do not pay within 30 days or if the service is sold out within 30 days, the order will expire and the Service Agreement between EdgeNext and you will expire. Some services may have time limits, stock limits or active quantity limits, and you may not be able to use the relevant services if you do not complete payment in a timely manner after your order has been submitted, or if the quantity is insufficient or has reached its limit during the payment period.</p><br/>

2.4 The EdgeNext Services are currently of the pre-paid type. In order to ensure the timely opening and continued availability of the services, you should comply with this Term and the Terms of Service of the Services you subscribe to and pay the fees in a timely manner.</p><br/>

2.5 You can pay online or top up your membership account at and should allow sufficient time to ensure continuity of service at .</p><br/>

2.6 If you exceed the number of services purchased, then you must immediately purchase and pay for the excess number. EdgeNext reserves the right not to provide you with the Services and/or technical support, or to terminate the Services and/or technical support, until you have paid in full as agreed.</p><br/>

2.7 If you intend to use the products and services for a long period of time, you can set up an Auto-Renewal subscription for the products and services.</p><br/>

2.7.1 Managing subscription: You can enable or disable the subscription feature in the billing systems- Auto-Renewal subscription management.</p><br/>

2.7.2 Turning on subscription: We will use PayPal, VISA, and MasterCard to renew your service when it is about to expire. We will notify you of the outcome of your subscription by email or by station mail. If the PayPal payment fails, we will generate a pending subscription type order for you and notify you by email or station mail to complete the payment. Please do not adjust your subscription method on the day of your instance subscription.</p><br/>

1) The instance subscription time for EdgeNext Security Acceleration Service is 7 days prior to expiry.</p><br/>

2) The instance subscription time for Cloud Hosting is 1 day prior to the expiry date.</p><br/>

2.7.3 Switching subscription: Instances with subscription set up, you can also click “Switch” to cancel subscription to manual subscription. For instances where subscription has been cancelled, normal expiry checks and reminders will be carried out.</p><br/>

2.7.4 Terminating subscription: If you click “Terminate” to terminate the subscription of a resource, you can still renew the instance manually.</p><br/>

2.8 You fully understand that all free services or special offers in the EdgeNext Pricing System are one-time special offers in addition to the normal service price and that free services or special offers cannot be discounted or offset against the service price.</p><br/>

2.9 EdgeNext may, for various reasons such as marketing activities and product promotions, offer “free for a limited time”, “limited time offer”, “limited offer” and free bonus (hereinafter collectively referred to as “Offers”). You understand and agree that these offers are temporary, periodic or limited in number or condition and that you are required to purchase and use the Services in accordance with the applicable rules. Unless otherwise stated in writing, the Offers may not be used in combination.</p>
        <br/>
        <h3 class="text-xl font-medium mb-4">3.Taxes</h3>
        <p class="mb-4">3.1 Subject to the requirements of applicable law, each party will be responsible for determining and paying all taxes and other governmental charges (and any penalties, interest and other surcharges) imposed on that party in connection with the transactions and payments under this clause.</p>

3.2 You are responsible for any and all taxes required by applicable law (including local laws or regulations) such as value-added tax, excise tax, sales tax, customs duty and communications tax (collectively, the “Taxes”) as a result of or in connection with the transactions with us.</p><br/>
      `
    },
    'privacy-policy': {
      title: 'Privacy Policy',
      icon: <Eye size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">Privacy Policy</h2>
        <p class="mb-4">This Privacy Policy apply to access and use the EdgeNext International Website (www.edgenext.com_, “Website”)，and the use by registered users of the EdgeNext International Website of EdgeNext products and Services provided by the  EdgeNext entity listed in Clause 2 of the EdgeNext International Website Terms of Use（“EdgeNext”, “we”, “us” or “our”). EdgeNext respects privacy of our users and we are committed to protecting it through our compliance with this privacy policy. This privacy Policy describes how we collect, use, keep, protect and disclose your personal information in relation to our website, services, products, events and experiences that reference this Privacy Policy (collectively, “Services”). This Privacy Policy applys to the data collected by us, or those working on our behalf, through information you enter or from the imported data from authorized and approved sources. It does not apply to data collected through other sites, products, services or content that are offered by third parties or have their own privacy policy.
<br><br>
International Data Transfer and Storage: Please be aware that the personal information we collect from you will be stored and processed on our secure servers in Malaysia. By using our Website or Services, you acknowledge and expressly consent to the transfer, storage, and processing of your personal information from Singapore (and other countries where you may be located) to Malaysia. We have implemented appropriate safeguards, including standard contractual clauses and robust security measures, to protect your data during such transfers and ensure its security in Malaysia, in compliance with the Singapore Personal Data Protection Act (PDPA) and other applicable laws.
<br><br>
By using or accessing our Website or the Services in any manner, you acknowledge that you accept the practices and policies described in this Privacy Policy, and you hereby consent that we may collect, use, and share your information as described herein. If you do not agree with our policies and practices, your choice is not to use our Website or our Services.
<br><br>
If you do not provide us with the necessary personal information, we will not be able to deliver all the features of our Services and/or Website to you as intended. Any capitalized terms we use in this Privacy Policy without defining them have the definitions given to them in the EdgeNext International Website Terms and Conditions of Use（”International Website Terms”</p>
        <h3 class="text-xl font-medium mb-4">1. Personal Information We Collect</h3>
        <p class="mb-4">We collect your information when you using the Services.We may collect the following types of personal information from you:
<br/>
Your name,email address,physical address,phone number and other similar contact information;
<br/>
payment information, including credit card and bank account information;
<br/>
Information about your job and (or) organization,such as job title,colleagues or contacts;
<br/>
User names,roles,and other authentication and security credential information;
<br/>
Text of feedback,inquiries,support advice and chat,conversations and emails with or to us;
<br/>
Other unique identifiers (including your device’s internet protocol (IP) address),and other our advertising and
<br/>
applications on third-party websites and services (including links to this Privacy Policy).
<br/>
We collect the following information:
<br/>
Directly from you. We collect any information you provide in relation to the Services. Such as search for, subscribe to, or purchase our Services; create and perfect your account, communicate with us by phone, email or otherwise; configure your settings, etc. Click here to see detailed and examples of information you give us.
<br/>
Automatic information. Information collected automatically when you visit, interact with use the Services, download something from us, communicate with us, etc. The automatic information may include usage details, IP addresses and information collected through cookies, web beacons and so on. Click here to see detailed and examples of information we collect automatically.
<br/>
Information from third parties or other sources. It may be our business partners, service providers and publicly sources, etc.
<br/>
 

Personal Information does not include your personally identifiable information that has been de-identified, pseudonymized, anonymized, aggregated and/or otherwise processed so as to be unidentifiable: (i) in such a way that the data can no longer be attributed to a specific individual, or (ii) in such a way that the data can no longer be attributed to a specific individual (by reasonable means) without the use of additional information, and where such additional information is kept separate and under adequate security to prevent unauthorized re-identification of a specific individual such that one could not, using reasonable efforts, link such information back to a specific individual (the foregoing being referred to as “De-Identified Personal Information”).
<br/>
</p>
        
        <h3 class="text-xl font-medium mb-4">2. How We Use Your Information
</h3>
        <p class="mb-4">We use information that we collect about you, including any Personal Information:
<br/>
To present our Website and its contents to you.<br/>
To provide you with information, products or services that you request from us.<br/>
For analyzing how the Service is used, diagnosing service or technical problems, maintaining security, and personalizing content.<br/>
To fulfill any other purpose for which you provide it.<br/>
To provide you with notices about your account, including expiration and renewal notices.<br/>
To operate, maintain, and provide to you the features and functionality of the Service.<br/>
To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.<br/>
To notify you about changes to our Website, our policies, terms or any products or services we offer or provide though it.<br/>
To allow you to participate in interactive features on our Website.<br/>
In any other way we may describe when you provide the information.<br/>
We use cookies, clear gifs, and log file information to: (a) remember information so that you will not have to re-enter it during your visit or the next time you visit the site; (b) provide custom, personalized content and information; (c) monitor the effectiveness of our Service; (d) monitor aggregate metrics such as total number of visitors, traffic, and demographic patterns; (e) diagnose or fix technology problems reported by our users or engineers that are associated with certain IP addresses; (f) help you efficiently access your information after you sign in; (h) track users to the extent necessary to comply with the Digital Millennium Copyright Act; and (i) enhance our Website security.
<br/>
Subject to obtaining your specific consent, We may use your information to contact you about our own and third-parties’ goods and services that may be of interest to you. If you do not want us to use your information in this way, please adjust your user preferences in your account profile.</p>
        
        <h3 class="text-xl font-medium mb-4">3. Individuals under the Age of 18
</h3>
        <p class="mb-4">We do not provide Services for purchase by children. So, we do not knowingly collect or maintain Personal Information from anyone under the age of 18 or knowingly allow such persons to register for our Services. If you’re under 18, you may use our Services only with the permission of your parent or guardian. If you are under 18, please do not send any Personal Information about yourself (such as your name, address, telephone number, or email address) to us. In the event that we learn that we have collected Personal Information from a child under age 18 without verification of parental consent, we will use commercially reasonable efforts to delete that information from our database. Please contact us at +65 68718812 if you have any concerns.
<br/>
Cookies
<br/>
We use cookies to recognize your browser or device and to provide our Services.For more detailed information about it, please click here.
<br/>
How Long Do We Keep Your Personal Information?
<br/>
We will keep your personal information as long as it is necessary for the purpose for which we obtained it, unless you ask us to delete it at an earlier time. Our retention periods are based on business needs and legal requirements, and your information that is no longer needed is either irreversibly anonymised or destroyed securely.
<br/>
If you ask us to delete your personal information at an earlier time, we will delete all information we hold on you within 30 days, save for information which is reasonable for us to retain in order to operate our Website or information we are required to retain by law.
<br/>
Following termination or deactivation of your account, we may retain your profile information and all information posted to public areas of the Service. 

</p>
        
        <h3 class="text-xl font-medium mb-4">4. How We Share Your Information

</h3>
        <p class="mb-4">We will never rent or sell our customers’ Personal Information to others. We share personal information only as noted below with third parties for the purpose of providing or improving the Service to you. If we do this, such third parties’ use of your Personal Information will be bound by obligations of confidentiality. We may store Personal Information in locations outside our direct control (for instance, on servers or databases located or co-located with hosting providers). Any Personal Information or content that you voluntarily disclose for posting to the Service becomes available to the public, as controlled by any applicable privacy or website customization settings. To change your privacy settings on the Service, you may visit our account settings page. If you remove information that you posted to the Service, copies may remain viewable in cached and archived pages of the Service, or if other users have copied or saved that information.</p>
        <ul class="list-disc pl-6 mb-4 space-y-2 text-gray-600">
          <li><strong>Within Our Corporate Group and Service Providers:</strong> To deliver our Services efficiently, we share your personal information with our affiliated entity in Malaysia and with third-party service providers (e.g., for communications, payments, hosting) who are also located in Malaysia or other countries outside of Singapore. When we do this, we ensure that such recipients are contractually bound by obligations of confidentiality and data protection standards that are at least as stringent as those required by the Singapore PDPA.</li>
          <li><strong>International Data Transfers:</strong> Your acceptance of this Privacy Policy constitutes your consent (deemed consent under the PDPA) to the transfer of your personal information to Malaysia. We take all reasonable steps to ensure that your data is treated securely and in accordance with this Privacy Policy after such transfer.</li>
          <li><strong>Legal and Regulatory Requirements:</strong> We may disclose your information if required to do so by law, court order, legal process, or subpoena, including to respond to any government or regulatory request, whether in Singapore, Malaysia, or other jurisdictions.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your Personal Information may be transferred to the successor entity. The data will remain subject to the promises made in this Privacy Policy unless you consent otherwise.</li>
        </ul>
        <br/>

        
        <h3 class="text-xl font-medium mb-4">5. De-Identified Personal Information</h3>
        <p class="mb-4">We may share De-Identified Personal Information (such as anonymous usage data, referring/exit pages and URLs, platform types, number of clicks, etc.) with interested third parties to help understand the usage patterns for certain Services.
<br/>
Business Merger And Acquisition: We may buy businesses or services to a potential buyer or other successor for the purpose of considering a merger, divestiture, restructuring, reorganization, dissolution, or sell or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which Personal Information held by us about our Website users is among the assets transferred. But remains subject to the promises made in any pre-existing Privacy Policy (unless, of course, the individual consents otherwise). Also, in the unlikely event, your information will of course be one of the transferred assets.<br/>

By Your Choices: Others above, you will receive notice when personal information about you might be shared with third parties, and you can choose not to share the information.</p>
        
        <h3 class="text-xl font-medium mb-4">6. Security measures

</h3>
        <p class="mb-4">We have implemented measures designed to secure your Personal Information from accidental loss and from unauthorized access, use, alteration and disclosure. All personal information you provide to us is stored on our secure servers (or those of our service providers) behind firewalls. We may store, retrieve, access, and transmit your personal information in the US or in other countries. The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of the Website or Services, you are responsible for keeping this password confidential. You should not share your password with anyone. You must prevent unauthorized access to your account and Personal Information by selecting and protecting your password appropriately and limiting access to your computer or device and browser by signing off after you have finished accessing your account. The information you share in public areas may be viewed by other users.
<br/>
Unfortunately, the transmission of information via the internet is not completely secure. Although we do try to protect your Personal Information, we cannot guarantee the security of your Personal Information transmitted to us or which we obtain. Any transmission of Personal Information is at your own risk. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of user information at any time. 

</p>
        
        <h3 class="text-xl font-medium mb-4">7. User Data Protection
</h3>
        <p class="mb-4">User data refers to the data processed, stored, uploaded, downloaded, distributed and otherwise processed by you through the Services provided by EdgeNext. You have full ownership of your user data. As a cloud service provider, EdgeNext will strictly follow your instructions to process your user data, and will not make any unauthorized use or disclosure of your user data except in accordance with the agreement reached with you or the implementation of specific legal and regulatory requirements.
<br/>
You shall be responsible for the source and content of your user data. EdgeNext prompts you to carefully judge the legality of the data source and content. All the results and responsibilities caused by your data contents violating laws and regulations, departmental rules or national policies shall be borne by you.
<br/>
We value the opportunity to provide you with assistance in the data processing. For more details about customer data processing, please refer to the EdgeNext’s Customer Data Protection Policy and the specific provisions in the Service Agreement.
<br/>
What You Can Access
<br/>
Through your account settings, you may access, and, in some cases, edit or delete the following information you’ve provided to us:
<br/>
name and password
<br/>
email address
<br/>
location
<br/>
user profile information, including any content you have uploaded to the Services
<br/>
The information that you can view, update, and delete may change as the Services change. If you have any questions about viewing or updating information we have on file about you, please contact us at info_apac@edgenext.com

</p>
        
        <h3 class="text-xl font-medium mb-4">8. Your Rights/Information

</h3>
        <p class="mb-4">You have the following rights regarding your information: To exercise any of these rights, please contact us using the details in Section 9.</p>
        <ul class="list-disc pl-6 mb-4 space-y-2 text-gray-600">
          <li><strong>Access and Correction:</strong> You have the right to access and correct your personal data in our possession or under our control.</li>
          <li><strong>Withdrawal of Consent:</strong> You may withdraw your consent for the collection, use, or disclosure of your personal data by giving us reasonable notice. Please note that upon withdrawal of consent, we may not be able to continue providing you with some or all of our Services.</li>
          <li><strong>Data portability:</strong> Where applicable, upon your request, we shall provide you or a successor organization you authorize with your data in a commonly used machine-readable format.</li>
          <li><strong>Deletion:</strong> You may request the deletion of your personal data, and we will act on such requests unless we are required to retain the data by law or have a legitimate business interest to retain it (e.g., for legal compliance, dispute resolution).</li>
        </ul>
        <p class="mb-4">We will respond to your request within the timeframe set by applicable law. If you are not satisfied with our response, you have the right to contact the Personal Data Protection Commission (PDPC) of Singapore.<br/>
        <p class="mb-4"><strong>The right to restrict processing:</strong> You have rights to “block” or suppress further use of your information. When processing is restricted, we can still store your information, but may not use it further. We keep lists of people who have asked for further use of their information to be “blocked” to make sure the restriction is respected in future.</p>
        <p class="mb-4"><strong>The right to data portability:</strong> You have rights to obtain and reuse your personal data for your own purposes across different services. For example, if you decide to switch to a new provider, this enables you to move, copy or transfer your information easily between our IT systems and theirs safely and securely, without affecting its usability.</p>
        <p class="mb-4"><strong>The right to object:</strong> You have the right to object to certain types of processing, including processing for direct marketing (which we do only with your consent). For more information or to object, see Objecting to processing.</p>
To ask questions or comment about this Privacy Policy and our privacy practices, contact us at: info_apac@edgenext.com       
60 PAYA LEBAR ROAD, #11-20, PAYA LEBAR SQUARE, SINGAPORE 409051<br/>
Tel：+65 68718812</p>
<br/>

   <h3 class="text-xl font-medium mb-4">9. Changes to Our Privacy Policy

</h3>
        <p class="mb-4">We’re constantly working to improve our Services, so we may need to change this Privacy Policy from time to time as well, but we will alert you to changes by placing a notice on our Website or as part of the Services, by sending you an email, and/or by some other means. Please note that if you’ve opted not to receive legal notice emails from us (or you haven’t provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is collected.

 
<br/>
Additional Information for Customers Located in California
<br/>
Under the California Consumer Privacy Act of 2018 (CCPA), California residents have certain rights related to their personal information. We has long recognized the importance of its customers’ privacy rights and for that reason, most of the CCPA requirements have been part of our approach to data privacy since well before passage of the CCPA. Although the rights are described in more detail in the main body of our Privacy Policy, we outline them here for ease of reference.

 
<br/>
First, EdgeNext does not exchange your personal information for money.

 
<br/>
Second, you may submit a verifiable request for the following information; a) categories of your personal information collected by us; b) purposes for which we collect your personal information; c) categories of sources from which we collect your personal information; and d) the specific personal information we have collected about you in the prior 12 months.

 <br/>
<br/>
Under California Civil Code Sections 1798.83-1798.84, California residents are entitled to ask us annually for a notice identifying the categories of Personal Information which we share with our affiliates and/or third parties for marketing purposes, and to being provided contact information for such affiliates and/or third parties. If you are a California resident and would like a copy of this notice, please submit a written request to us.
<br/>
 <br/>

Third, subject to certain exceptions outlined in the CCPA, you may ask us to delete the personal information we have collected from you. We will retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
<br/>
 
<br/>
Fourth, we will not discriminate against you on either a pricing or service basis, for exercising your CCPA privacy rights.

 <br/>

Finally, you may exercise your rights under CCPA by: a) deactivating and purging your account in your control panel settings or b) by sending an email to info_apac@edgenext.com to request access or deletion. If you have any questions about your CCPA rights as they relate to EdgeNext, you may call us or send emails.
<br/>
 <br/>
 
Additional Information for International Users (Including Singapore)
<br/>
<br/>
Data Storage and Processing Location: Your personal data is primarily stored and processed on servers located in Malaysia. By using our Services, you consent to the transfer of your data from your country of residence (including Singapore) to Malaysia. Malaysia's data protection laws may differ from those in your jurisdiction. We handle all data in accordance with this policy and have implemented safeguards to protect your information.
Singapore-Specific Notice: For users in Singapore, our data protection practices are designed to comply with the Singapore Personal Data Protection Act (PDPA). Our basis for collecting, using, and disclosing your personal data is often your consent, which is deemed to be given when you voluntarily provide your data for the purposes you have been notified of, or when you continue using our Website after being informed of this Policy.
<br/>
<br/>
Additional Information for Users Located in the European Economic Area (“EEA”)

 <br/>
<br/>
IMPORTANT NOTICE: This Privacy Policy originates and is hosted on a Website located in Singapore, which has different data protection laws from those of other nations, and particularly member nations in the European Union. Due to differing laws and legal practice, be aware that law enforcement agencies in Singapore may have access to your Personal Information.
<br/>
If you are a resident of a country other than Singapore, you acknowledge and consent to our collecting, transmitting, and storing your Personal Information out of the country in which you reside.

 <br/>
<br/>
Transfer of data outside of the EEA
<br/>
We may transfer some or all of your personal information outside of the EEA. The privacy laws of the receiving country may be different from those in the EEA and may not have adequate data protection standards. We will always have appropriate safeguards in place when transferring your personal information outside of the EEA, and you may ask us for a copy of these safeguards.  In addition, we will offer EU and Swiss individuals whose personal information has been transferred to us the opportunity to choose whether the personal information we have received is to be used for a purpose other than the purpose for which it was originally collected or subsequently authorized by the individual.  An individual may opt-out of such uses of their personal information by emailing us at [ info_apac@edgenext.com ].



</p>
      `
    },
    'membership-agreement': {
      title: 'EdgeNext International Website Membership Agreement (v1.0 version)',
      icon: <Users size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">EdgeNext International Website Membership Agreement (v1.0 version)</h2>
        <p class="mb-4">This EdgeNext International Website Membership Agreement (hereinafter referred to as “this Agreement” or “Membership Agreement”) sets forth the terms and conditions of Your access to, registration with, and use of EdgeNext Member Account (“Account”) on EdgeNext International Website (currently located at www.edgenext.com, hereinafter referred to as “EdgeNext International Website”) and Your use of EdgeNext Services (as defined in Article III of this Agreement).This Agreement is a legally binding agreement between You, as a registered member of EdgeNext International Website (hereinafter referred to as “You” or “Customer”) and LEGEND DYNASTY PTE. LTD. (hereinafter referred to as “EdgeNext” or “We”). Before You use the services of EdgeNext International Website or complete Your registration, please make sure You read and thoroughly understand this Agreement, and please choose to accept or not accept the terms of this Agreement after fully understanding; if You do not agree to this Agreement or any agreement therein, You should not proceed to the next step, stop the registration process, no longer visit or use this Service.
<br/>
(EdgeNext and Customer are referred to collectively herein as the “Parties” and each individually as a “Party”).</p>
        <h3 class="text-xl font-medium mb-4">1. Application and Acceptance of Terms and Conditions</h3>
        <p class="mb-4">1.1   By registering an account and/or using EdgeNext Services, You accept the terms and conditions set out in this Agreement. By clicking on the checkbox and completing the “Register” or otherwise beginning to use the EdgeNext Services, You agree to be bound by this Agreement and the following terms and conditions.<br/>

   a  Terms of use for EdgeNext International Website;<br/>

   b  Service Terms for EdgeNext Product;<br/>

   c  Privacy Policy;<br/>

   d Customer Data Protection Policy；and<br/>

   e  The rules, instructions and policies of any other website or service adopted and published from time to time on the EdgeNext International Website (collectively referred to as the “Terms”)<br/>

1.2   If You wish to become a member and use the service, You must read this agreement to indicate that You accepted it during the registration process. By accepting this Agreement, You represent that You have the capacity to be bound by it or, if You represent a company or entity, that You have sufficient authority and power to make that company or entity bound by it.<br/>

1.3   Without prejudice to the generality of the foregoing, We may, in Our sole discretion, refuse to register You for an account if any of the following apply:<br/>

   a  Your account has previously been terminated for breach of this Agreement; or<br/>

   b  You may be in breach of any representations and warranties made under Members Liability and Other Representations and Warranties.<br/>

1.4   If You use or purchase a specific service on the EdgeNext International Website, You shall be liable to confirm the terms of service corresponding to the specific service and activate that service before completing Your purchase; Please read carefully, fully understand, and choose to accept or not accept the Terms of Service.<br/>

1.5   EdgeNext shall be entitled to amend this Agreement from time to time. Any and all modifications to this Agreement will be announced or notified by means of web announcements, emails, intranet messages, SMS messages, etc. If You continue to use the EdgeNext Services after the content of this Service Agreement has been modified, it means that You have fully read, understood and accepted the modified content, and will also comply with the modified content of the terms and conditions.</p>
        
        <h3 class="text-xl font-medium mb-4">2. Intellectual Property Rights {IPRs}</h3>
        <p class="mb-4">2.1   The IPRs on the LOGO of EdgeNext International Website, “EdgeNext” and other words, graphics and combinations thereof, as well as other logos and emblems of EdgeNext International Website, names of EdgeNext Services, technical documents, etc., shall be the property of EdgeNext and its affiliates.<br/>

2.2   The intellectual property rights in all products, services, technologies and all programs on the EdgeNext International Website (hereinafter collectively referred to as the “Technical Services”) are owned by EdgeNext or its right holders.<br/>

2.3   We will not use, modify, reproduce, publicly distribute, alter, disseminate, distribute or publicly publish the results in which You own IPRs without Your consent.<br/>

2.4   If any natural person, legal person or other organization believes that the content of the web pages of the EdgeNext International Website (such as reproduced articles, etc.) may violate their legitimate rights and interests, they may submit a written notice of their rights to EdgeNext, and EdgeNext will deal with them as soon as possible after receiving a valid notice from the intellectual property rights holder in accordance with the law.</p><br/>
     
        <h3 class="text-xl font-medium mb-4">3. Use of EdgeNext Services</h3>
        <p class="mb-4">3.1   You may access, purchase, subscribe to or use any and all products or services provided by EdgeNext in accordance with these Terms and Conditions and any Service Level Agreement (“SLA”) specified by EdgeNext in respect of such products or services (“EdgeNext Services”) through Your account. The EdgeNext Services include the cloud computing products and services offered by EdgeNext, as well as the functions, features and contents of Your account and the EdgeNext International Website. The EdgeNext Services do not include any content or services provided to You by any third party on the EdgeNext International Website (including any third party content provided) or any content or services used in conjunction with the EdgeNext Services.
<br/>
3.2   Account Registration
<br/>
   3.2. 1.  Once You have filled in the information as prompted by the EdgeNext registration page, read and understood this Agreement and completed the checkbox and all registration procedures, You are a user of the EdgeNext International Website.
<br/>
   3.2. 2   To protect the security and independence of Your account, You should use the email address to which You have legal rights to register or log in, otherwise, You may not be able to log in and use the EdgeNext Services properly.
<br/>
   3.2. 3   The email address You have registered and the password You have set will become Your account after verification and successful registration.
<br/>
   3.2. 4   You shall provide true and accurate information about Your account and keep it up to date. If the information You provide is incorrect or incomplete, EdgeNext may send or push a notice of enquiry and/or a notice requesting correction to You, and You shall promptly cooperate with Us to provide or update the relevant information according to our requirements. You shall be responsible for all consequences (including but not limited to Your inability to use the services provided by Us, inability to open products/services, inability to use Your account, freezing or cancellation of Your account, etc.) and losses resulting from untrue or incomplete information or data provided by You.
<br/>
   3.2. 5   When You open certain products or services, We may ask You to provide additional identification data and information for further identity authentication or verification, and Your account will only be eligible for the corresponding products or services after You have passed such authentication and verification.
<br/>
3.3   Use of Related Services
<br/>
   3.3. 1 You can log in to the EdgeNext International Website via Your account information. EdgeNext may notify or prompt You by email, intranet messages, SMS messages or phone to take the next step. During the service process, You shall log in to Your EdgeNext account in a timely manner to check the progress of the service and perform transaction operations.
<br/>
   3.3. 2 One account can only correspond to a unique legal entity, You shall properly keep Your login user name, password and other information and take effective confidentiality and security protection measures (including but not limited to changing Your password regularly, setting a high-strength password, etc.), otherwise, You shall be responsible for the corresponding consequences. Furthermore, You shall be responsible for the actions under Your account and all operations under Your account are deemed to be carried out by You, and You shall be liable for all legal consequences.
<br/>
   3.3. 3 You shall not transfer, give or allow others to inherit Your EdgeNext account in any way, except with the prior consent of EdgeNext.
<br/>
   3.3. 4 You also need to ensure that You are not the subject of any trade restrictions, sanctions or other laws or regulations imposed by any country, international organization or territory, otherwise You may not be able to register and use the EdgeNext Services normally.
<br/>
3.4 Account Security
<br/>
   3.4. 1   Your account and password shall be set by You and kept by You. You shall be solely responsible for maintaining Your username and password, and shall acknowledge all activities conducted under Your username and password.
<br/>
   3.4. 2   If You become aware of any unauthorized use of Your account and password or any other unauthorized use, You should notify Us immediately and provide Us with relevant information (such as Your subject information, description of the situation, supporting documents and claims); once We have received a valid notice from You and verified Your identity, We will deal with it in accordance with the legal provisions and service rules. You shall be responsible for any liability and consequences arising from Our processing under this Article. You understand that it will take a reasonable time for EdgeNext to act on Your request and that EdgeNext will not be liable to You, Your users or any other third party for any consequences (including, but not limited to, any losses incurred by You) that have arisen prior to such action being taken and that have been caused by You.
<br/>
   3.4. 3   You shall be responsible for regulating the use and management of Your account. To protect Your rights and interests, the account number shall be for Your own use only. If You authorize Your employees or others to manage the account for reasons such as Your own business needs, You must control the account properly and complete the handover and account security protection (including but not limited to changing new passwords, etc.) in time in case of staff changes
<br/>
   3.4. 4   EdgeNext will take reasonable technical measures on the server side of the website to safeguard the account. EdgeNext may suspend or terminate all or part of the free EdgeNext Services at any time in its sole discretion, and We reserve the right to charge for any EdgeNext Service or any feature or function thereof at any time in Our sole discretion.
<br/>
3.5 Subject to any specific terms of service for the EdgeNext Services, EdgeNext reserves the right to change, upgrade, modify, limit or suspend the EdgeNext Services or any of its related functions or applications, temporarily or permanently, at any time, in accordance with the following terms and conditions.
<br/>
   a  For cloud computing products and services, EdgeNext reserves the right to introduce or remove features, functions and applications, etc. in existing or future versions of the products and services. Unless We state otherwise, all new features, functions, applications, conditions, modifications, upgrades and changes shall be subject to this Agreement and the relevant terms of service for the product or service. We will notify You of any material changes or termination of such products and services;
<br/>
   b  For the SLA, We may amend any terms of the SLA by posting a revised version on the EdgeNext International Website. EdgeNext will provide You with at least 7 days’ written notice of material amendments to the SLA. By continuing to use the relevant products or services after receiving written notice of such changes from Us, You agree to be bound by the amended SLA.
<br/>
3.6 You acknowledge that the EdgeNext Services are provided on an “as is”, “as available” and “without warranty that the goods are free from defects” basis. Subject to any specific terms of the EdgeNext Services, You hereby agree that, to the maximum extent permitted by applicable law, in no event will EdgeNext be liable to You or any third party for any inability to use the EdgeNext Services (whether due to interruption, change or termination of the EdgeNext Services or otherwise). Any delay, inaccuracy, error or omission in the whole or any part of any communication or transmission or delivery, or any damage (direct, indirect, consequential or otherwise) arising out of the use or inability to use the EdgeNext Services.
<br/>
3.7   EdgeNext shall be entitled to transfer and/or renew, in whole or in part, any of these Terms and Conditions (including any of Our rights, ownership, interests, obligations and responsibilities under these Terms and Conditions and this Agreement) to any person or entity (including any of EdgeNext’s affiliates). We may request such updates to these Terms and Conditions or any part thereof by giving You written notice (which may be in the form of an intranet messages, web announcement or email on the EdgeNext International Website) and You hereby irrevocably agree and consent to any such updates.<br/>

3.8   We reserve the right to investigate any breach of this Agreement by You or any end user.<br/>

3.9   EdgeNext shall be entitled to report any activity that We believe violates this Agreement or any statute or law of any jurisdiction to relevant law enforcement agencies, regulators, government agencies and any other qualified third parties, and EdgeNext shall be entitled to access, disclose and/or remove any content (including any Member Content) that You post or submit to EdgeNext on EdgeNext or the EdgeNext platform.

 </p>
        
        <h3 class="text-xl font-medium mb-4">4. Member Liabilities and Representations and Warranties.</h3>
        <p class="mb-4">4.1 You shall be entitled to enjoy the technical services and information services on the Internet that We provide through the EdgeNext International Website. And You shall also perform obligations such as timely payment and service management in accordance with this Agreement, other relevant terms and conditions confirmed by You at the time of purchasing certain services, and rules and specifications of the EdgeNext International Website.
<br/>
4.2 Your account may be blocked, in whole or in part, from access or function in the following circumstances, and You will be notified by email, intranet messages, SMS messages or phone:
<br/>
   a  If, based on the need for the security of the operation and transactions of the EdgeNext International Website or Services, You have or may have disrupted or attempted to disrupt the fair trading order of EdgeNext and/or its affiliates, or any use of the EdgeNext Services that contains the name or brand of EdgeNext or EdgeNext’s affiliates and is suspected of being misleading to others, or any use of a Chinese or English language, numbers, domain names, etc. that purports to indicate or map an affiliation with Us in some way and otherwise poses a security or system stability risk to the EdgeNext International Website or any other third party;
<br/>
   b  Violation of this Agreement, the relevant rules, specifications (such as transaction rules, administrative specifications), service descriptions and other service agreements/terms of the EdgeNext International Website.
<br/>
   c  Engaging in any fraudulent, deceptive or unlawful act.
<br/>
   d  You have been the subject of a complaint by another person and the other person has provided relevant evidence, but You have not provided evidence to the contrary as required by Us;
<br/>
   e  If, in Our reasonable opinion, You engage in other conduct of the same nature as the above or which creates a similar risk as above.
<br/>
4.3   You shall ensure that:
<br/>
4.3.1   You shall not post, communicate, transmit, cache or store the following information and content through the EdgeNext Services, or have the following circumstances:
<br/>
   a  Information or content that violates any applicable national (regional) laws and regulations, political propaganda/advocacy or news;
<br/>
   b  Information that involves state secrets or security;
<br/>
   c  Information that involves obscenity, pornography, indecency, violence or information that has (may have) the effect of abetting, leading to the commission of a crime or affecting the lives of persons;
<br/>
   d  Information that violates national (regional) ethnic and religious policies;
<br/>
   e  Infringe the rights of any person, including but not limited to the rights of others to privacy, copyright, trade secret protection, patents or other intellectual property rights or similar laws or regulations;
<br/>
4.3.2 If You violate the above-mentioned guarantee, EdgeNext shall be entitled to take measures to delete information, suspend/terminate the service and to freeze or cancel some or all functions of Your account according to the relevant agreements/rules/instructions, etc.
<br/>
4.4   If EdgeNext freezes or suspends Your right to use Your account or any EdgeNext Service, You shall be responsible for any charges incurred up to the date of the freeze or suspension.
<br/>
4.5   In the event of a freeze or cancellation of an account as described above, You shall pay attention to it in time and operate according to relevant procedures:
<br/>
4.5.1   In relation to the freezing or cancellation of Your account, You shall follow the prompts of the procedure and wait for the situation to be verified by EdgeNext after providing proof of identity and other relevant materials, information or documents. You shall fully understand that Your request may not be allowed.
<br/>
4.5.2   You acknowledge and agree that if You refuse to provide truthful proof of identity and related information, or fail to pass the verification of EdgeNext, We have the right to freeze such accounts for a long period and restrict some or all of the account functions for a long period.
<br/>
4.6   You represent and warrant that:
<br/>
   a  You, Your end users or Your licensors own any and all right, title and interest in and to the Member Content;
<br/>
   b  You have all the rights to the Member Content necessary to grant EdgeNext its rights under this Agreement;
<br/>
   c Your Member Content does not violate these Terms and Conditions or any applicable laws or rights (including any intellectual property rights) of other third parties;
<br/>
   d  You have the authority to enter into this Agreement;
<br/>
   e  You have the authority to operate Your account at EdgeNext International Website; and
<br/>
   f  You have the authority to use, purchase or subscribe to any EdgeNext Service.
<br/>
4.7 Rights in the Member Content
<br/>
4.7.1 You reserve any rights You may have to any Member Content. We will not access or use Your Member Content unless it is necessary to maintain or provide the EdgeNext Service or to comply with applicable laws or regulations. This Agreement does not grant either Party any rights in the content of the other Party or any intellectual property rights of the other Party, except as otherwise provided in this Agreement or other applicable agreements binding on Your use of the EdgeNext Services. As between You and EdgeNext, You own all intellectual property rights to the Member Content, and We own all intellectual property rights to the EdgeNext Services.</p>
        
        <h3 class="text-xl font-medium mb-4">5. Other Technologies</h3>
        <p class="mb-4">5.1   Visitor Use and Misuse Records
<br/>
5.1.1 As a visitor to EdgeNext International Website and a user of the EdgeNext Services, You agree that Your Internet Protocol address will be recorded and Your activities will be monitored to prevent abuse. Abuse includes but is not limited to attempts to gain unauthorized access to the Services, other accounts, computer systems or network links to the Services through password mining or any other means; transmit any program that contains viruses, Trojan horses, worms, time bombs, deletion flies or any other harmful or toxic program that interferes with or disrupts the network connected to the Services or violates regulations, policies, or procedures applicable to such networks; create false identities, or otherwise attempt to mislead others into exploiting the identity of an EdgeNext user, intentionally or unintentionally violate any applicable national or international law.
<br/>
5.2   Restrictions on non-cached HTML
<br/>
   5.2.1 You acknowledge that EdgeNext’s Services is to provide a platform for caching service web pages and web sites and is not intended for other uses such as remote storage. You understand and agree to use the Services to manage and publish Web pages and to provide client-side views through browsers, HTML, or other technologies.
<br/>
   5.2.2   EdgeNext’s Services is also a shared web caching service, which means that a large number of customer websites are cached from the same server. To ensure that Our services are reliable and effective for the majority of users, We require that a customer’s use of the Services should not adversely affect the performance of other customers’ websites. Furthermore, the purpose of the Services is to host the website and not to store data. It is not allowed to use an account mainly as online storage space, including storing or caching a disproportionate picture, movie, audio file or other non HTML content.
<br/>
   5.2.3   You agree that We may freeze or cancel Your account if, in Our own discretion, We determine that You have violated this Section, or caused undue burden or potential adverse effects on the EdgeNext System, or caused potential adverse effects on other users, server processing capacity, server memory, abuse of controls or for other reasons.
<br/>
5.3   Access and Service License
<br/>
5.3.1 Considering that You may need to access www.edgenext.com and the Services, EdgeNext grants You a limited license under which You may access the website and use it for Your personal use. This Membership Agreement prohibits You from downloading (except for page caching) or modifying any part of it unless expressly agreed in writing by EdgeNext. The EdgeNext Services You purchase under this Agreement may not be resold. You may not use framing techniques or attach any trademarks, logos or other proprietary (including images, text, page layouts or forms) information without EdgeNext’s express written consent. You may not use any metadata tags and any other “hidden text” utilizing EdgeNext’s name or trademarks without EdgeNext’s express written consent. If You make any unauthorized use, the permission or license granted to You by EdgeNext will be automatically terminated and You may incur liability for damages. You are granted a limited, revocable, non-exclusive right to create a hyperlink to any non-password protected directory, provided that such link shall not portray EdgeNext, its affiliated websites, or the Services in a false, misleading, defamatory, or otherwise offensive manner. You may not use any of EdgeNext’s proprietary graphics or trademarks as part of a link without EdgeNext’s written permission.</p>
        
        <h3 class="text-xl font-medium mb-4">6. Disclaimers and Limitations of Liability</h3>
        <p class="mb-4">6.1   You understand and agree that You shall be liable for any third party claims arising from Your use of the EdgeNext Services, breach of this Agreement or any action taken under Your account. If EdgeNext and any of its affiliate, employee, customer or partner is claimed by any third party, You shall be liable for handling and compensating EdgeNext and its affiliates for any and all losses and responsibilities incurred therefrom.
<br/>
6.2   EdgeNext shall not be liable for any indirect, punitive, special, incidental, derivative or consequential damages or losses (including but not limited to loss of profits, business interruption, loss of information, loss of expected profits, etc.) arising out of or in connection with this Agreement, and whether or not such damages arise from the use of, or the ability to use, the EdgeNext Services, unauthorized access by third parties to Your data or information, statements or conduct of any member of the EdgeNext International Website, and any other matters relating to the EdgeNext Services.
<br/>
6.3   EdgeNext hereby reminds that You should abide by the applicable laws during the use of Our Services, and must not endanger network security, and must not use Our Services to engage in activities that infringe on the reputation, privacy, intellectual property rights and other legitimate rights and interests of others. EdgeNext shall not be liable for any illegal or breach of contract in Your use of EdgeNext Services.
<br/>
6.4   If You obtain products or services from other third parties by using the EdgeNext Services. As We do not control such websites and resources, You acknowledge and agree that EdgeNext is not liable for the availability of such external websites or resources, and does not recognize or be responsible for any content, advertisements, products, materials or any content originating from such websites or resources. You further acknowledge and agree that EdgeNext shall not be liable for any direct or indirect losses caused by using or relying on any such content.
<br/>
6.5   The total liability of either Party under this Agreement shall be limited to the direct damage (direct economic loss) caused to the other Party, and notwithstanding the foregoing, EdgeNext’s total liability under this Agreement shall not exceed the total service fees for the services performed under this Agreement. If the Service that caused You to suffer loss has expired for 12 months at the time You suffered the loss, EdgeNext’s maximum liability shall not exceed 12 months before the loss occurred.
<br/>
6.6   The Exemption Clause shall survive the termination of this Agreement.

 </p>
        
        <h3 class="text-xl font-medium mb-4">7. Fees, Payments and Taxes</h3>
        <p class="mb-4">7.1   Unless otherwise specified or with Our prior written consent, You shall pay any payments, fees, taxes, etc. arising from Your use of EdgeNext Services in accordance with EdgeNext’s current payment terms. You shall make the relevant payment to Us through the payment method supported by the EdgeNext International Website.
<br/>
7.2   You may not set off, deduct or counterclaim any payments made by You without Our prior written consent.</p>
        <br/>
        <h3 class="text-xl font-medium mb-4">8. Notification and Service</h3>
        <p class="mb-4">8.1   You understand and agree that EdgeNext may send You notices through one or more of the methods below by posting web announcements, intranet messages, system messages, or by email, SMS messages, telephone, and instant messaging on the EdgeNext International Website, and EdgeNext can rely on the fact that the contact information You provide is true, accurate, and valid, and that such notices shall be deemed to have been served upon posting or delivery.
 <br/>
8.2   Unless otherwise agreed between You and EdgeNext, the notice You send to EdgeNext shall be served through the contact information such as mailing address and e-mail officially announced by EdgeNext.</p>
<br/>
<h3 class="text-xl font-medium mb-4">9.  Miscellaneous</h3>
        <p class="mb-4">9.1   For the purposes of this Agreement, the headings are for convenience only and shall have no legal or contractual effect. This Agreement constitutes the entire agreement between You and Us with respect to the use of the EdgeNext Services and governs Your use of the EdgeNext Services and supersedes any prior agreements, written or oral, between You and Us with respect to the same Services, subject matter, etc.
<br/>
9.2   If any provision of this Agreement is held to be invalid, void or unenforceable, such provision shall be deemed severable from this Agreement and shall not affect the validity or enforceability of the remaining provisions of this Agreement.
<br/>
9.3   EdgeNext’s failure to exercise any right or take action with respect to any breach by You under this Agreement shall not be construed as a waiver of Our right to exercise such right, nor shall it be construed as a waiver of Our right to take action with respect to any subsequent breach or similar conduct by You.
<br/>
9.4   Except as otherwise provided in the relevant terms of the EdgeNext Services, in no event shall EdgeNext be liable for damages for any delay, failure, interruption or inability to function properly of the Content or Services delivered through the EdgeNext International Website and/or the EdgeNext Services, as a result of natural acts, forces, causes or unexpected events beyond Our reasonable control, including but not limited to natural disasters, strikes, riots, wars, government actions, orders of domestic or foreign courts, and other factors; public service factors such as power supply failures, communication network failures, computer viruses, and network attacks; and EdgeNext System maintenance with advance announcement or notification.
<br/>
9.5   The validity, interpretation, modification, enforcement and dispute resolution of this Agreement shall be governed by the laws of Singapore without regard to any other conflict of law provisions. In case of any dispute arising from this Agreement, the Parties agree to submit such dispute to the Singapore International Arbitration Centre (“SIAC”) for settlement.
<br/>
9.6   Unless otherwise agreed, for the sake of the professionalism of the services, EdgeNext may entrust its affiliates or other legal entities to provide You with one or more specific Services on the EdgeNext Website, and You may enter into relevant terms or conditions with such companies, please carefully read and fully understand the terms and conditions, and choose to accept or not accept such terms and conditions.</p>
      `
    },
    'data-protection': {
      title: 'EdgeNext Customer Data Protection Policy',
      icon: <Shield size={20} />,
      content: `
        <h2 class="text-2xl font-medium mb-6">EdgeNext Customer Data Protection Policy</h2>
        <p class="mb-4">Edgenext Legend Dynasty Pte.Ltd. and its affiliates (hereinafter referred to as “EdgeNext” or “we”) value the data security of our customers. As a cloud service provider, EdgeNext provides various activities and services in compliance with relevant data protection laws and regulations and provides customers with a stable, secure and data-friendly cloud environment. Adhering to the concept of providing customers with adequate data protection, we are committed to becoming a stable, reliable, secure and reliable cloud partner with sustainable evolution.</p>
If customers have any questions about this Statement or other related matters, please contact us as follows. We will provide you with further instructions and explanations to meet your needs. </p>

Email: info_apac@edgenext.com</p>
Service-Hotline: +65 68718812</p>
Address: 60 PAYA LEBAR ROAD, #11-20, PAYA LEBAR SQUARE, SINGAPORE 409051</p>
<br />
        <h3 class="text-xl font-medium mb-4">1.Definitions and Interpretations</h3>
        <p class="mb-4">1.1. "Customer data" refers to the data stored in the EdgeNext server by the customer due to the use of EdgeNext services, including but not limited to text, audio, video or images.This includes personal data contaioned within.</p>
   1.2. The customer data does not include the customer’s EdgeNext account data and the data generated by the customer using EdgeNext services for administrative and billing purposes;this type of data does not apply to this statement; the customer can click on the “EdgeNext Privacy Policy” to understand our processing policy of such type of data, including the collection, use, storage, sharing and other specific information.</p>
     <br />
        <h3 class="text-xl font-medium mb-4">2. Customer data control and roles</h3>
        <p class="mb-4">2.1. Customer Data is controlled and managed by the Customer, who is the data controller of such data. EdgeNext acts as a data processor on the instructions of the customer.we do not access or use customer data uless othderwise required by law or mutually agreed. Customers decide for themselves how they control customer data. We will carry out the corresponding data processing activities in strict accordance with the written instructions of the customer and in compliance with the Singapore PDPA.</p>

   2.2. Customers have full control over customer data and should correctly and comprehensively identify cloud data, select appropriate services and formulate security and data protection policies to protect personal data. Customers should perform security configuration work according to business and data protection requirements to ensure that the processing of customer data complies with the requirements of relevant laws and regulations on data protection,including the PDPA.</p><br />
   2.3. Customers can take security protection measures for the computer information systems they use in accordance with the relevant country regulations and EdgeNext service rules, such as installing special products for computer information system security approved by the country. Customers can also choose to manage their own encryption keys according to the encryption functions we provide. </p>
   <br />
        <h3 class="text-xl font-medium mb-4">3. Customer Data Lifecycle</h3>
        <p class="mb-4">We strictly implement this statement and the relevant commitments we have made and ensure customer data security from the full life cycle of data use, storage, and disclosure through data security technology and security management measures.</p>

   3.1 Use</p>

   3.1.1 We always play the role of providing basic support for customers and will not access or disclose customer data except in other cases mentioned in this statement. We prevent unauthorized access or disclosure of customer data through reliable and sophisticated technical and physical controls and strict internal management systems.</p>
<br />
   3.1.2 Customers manage their own access to and use of customer data. We will provide a range of access, encryption and logging capabilities that can effectively help customers achieve this goal.</p>
<br />
3.2 Storage and International Data Transfer</p>

   3.2.1 Data Storage Location: To provide our services effectively, the Customer Data you store with us will be hosted and processed on our secure servers located in Malaysia.</p>
<br />
   3.2.2 Cross-Border Data Transfer: By using our services, you acknowledge and consent to the transfer, storage, and processing of your Customer Data from Singapore (and other jurisdictions where you operate) to Malaysia. This cross-border transfer is necessary for the performance of our service agreement with you. We ensure that such transfers are conducted in compliance with the Singapore PDPA. Our legal safeguards for these transfers include the implementation of robust contractual clauses (e.g., based on PDPA model clauses) with our affiliated entity and partners in Malaysia, ensuring they provide a standard of protection comparable to the requirements of the PDPA.</p>
<br />
   3.2.3 Service Management: In order to ensure the security and stability of the service, if customers use our cloud storage products, we will provide customers with multiple storage copies and backup services, which will also be stored in Malaysia. We may perform irregular upgrades and migrations of EdgeNext's computer room, server, bandwidth, database, and other products within Malaysia. When major changes are involved (such as data center migration), we will notify customers in advance.</p>
<br />
   3.2.4 Data Retention & Deletion: According to the agreement reached between EdgeNext and the customer, Customer Data will be retained for a reasonable period of time after the expiration or termination of the service, and the customer must complete the migration of Customer Data before the expiration of the retention period. After the retention period expires, unless otherwise stipulated by law, the EdgeNext service system will automatically delete all Customer Data and account information of the customer, and all data after deletion cannot be recovered.</p>
<br />
3.3 Disclosure</p>

Unless otherwise required by law, we will protect Customer Data in accordance with the law and will not disclose Customer Data without authorization. Where disclosure is mandated by law, we will, where legally permissible, inform the customer prior to disclosure.</p>
      <br />  
        <h3 class="text-xl font-medium mb-4">4. Customer Data Security</h3>
   4.1  EdgeNext provides customers with a variety of data protection technologies, including access control and identity authentication, data encryption, logging and auditing and related enhanced technologies, as well as various services of EdgeNext based on this, to help customers according to business needs. data protection. We will endeavor to implement the following safeguards:</p>

   (1) Strict management and control measures are taken for the data retained in the EdgeNext platform, and in order to ensure data security, unified management of access, authentication, authorization, storage, and auditing is carried out.</p>

   (2) Implement role-based access control rights management for the rights of operation and maintenance personnel, grant corresponding rights according to job requirements and conduct regular monitoring to ensure that access rights match job requirements.</p>

   (3) Regularly conduct retrospective audits on logs, and review personnel operations to check the rationality and necessity of personal data operations.</p>

   (4) Conduct due diligence and data security assessment on suppliers providing data processing services as required, and the contracts signed with them will clarify the data protection obligations of suppliers as processors/sub-processors and the requirements of applicable laws and regulations. requirements to ensure that suppliers meet customer data protection requirements.</p>

   (5) Equipped with a professional team to fully respond to customers’ requests related to data protection, complete the request processing within the specified time after receiving the customer’s request, and feedback the processing results to the customer. In the unfortunate event of a data breach, we will fully fulfill our legal obligations, disclose it in a timely manner, and implement emergency plans and recovery procedures to minimize the impact on customers.</p>
<br />  
4.2 We make continuous efforts to take more secure physical and technical measures and strengthen security management to protect customer data. When customers use EdgeNext services, we provide encryption functions for customer data in transmission and storage according to customer needs, and support customers to choose to manage their own encryption keys.</p>
<br />  
4.3 We have obtained information security management system certificationISO27001, quality management system certification ISO9001, information technology service management system certification ISO20000, privacy information management system compliance evaluation ISO27701, business continuity management system certification ISO22301, personal identifiable information security management system certification ISO27018, cloud services Information security management system certification ISO27017, compliance management system certification ISO37301  and other certifications for information security management activities related to technical services such as cloud distribution, with the corresponding security competence.</p>
      <br />  
        <h3 class="text-xl font-medium mb-4">5. Data Subject Rights and Complaints</h3>
        <p>Customers, as data controllers, are primarily responsible for responding to requests from individuals whose personal data is contained within the Customer Data. However, we will provide reasonable assistance to you in fulfilling your obligations under the PDPA. If you receive any data subject requests or have any concerns about how we handle Customer Data, please contact us at <a href="mailto:info_apac@edgenext.com" class="text-[#0EB623] hover:underline">info_apac@edgenext.com</a>.</p>
        <p>If you are not satisfied with how we have handled your complaint, you may have the right to lodge a complaint with the <strong>Personal Data Protection Commission (PDPC) of Singapore</strong>.</p>
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
              <h1 className="text-[40px] md:text-[56px] font-medium mb-6 leading-[1.1] tracking-tight text-gray-900">
                Legal
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Terms, policies, and agreements governing EdgeNext services and your use of our platform.
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
                  <h2 className="text-lg font-medium mb-6 text-gray-900">Legal Documents</h2>
                  <nav className="space-y-2">
                    {tabKeys.map((key) => {
                      const doc = legalDocuments[key];
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveTab(key)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 ${
                            activeTab === key
                              ? 'bg-[#0EB623] text-white shadow-lg'
                              : 'text-gray-600 hover:bg-white hover:text-[#0EB623] hover:shadow-sm'
                          }`}
                        >
                          <div className={`transition-colors duration-300 ${
                            activeTab === key ? 'text-white' : 'text-[#0EB623]'
                          }`}>
                            {doc.icon}
                          </div>
                          <span className="font-medium text-sm leading-tight">{doc.title}</span>
                        </button>
                      );
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
                      '--tw-prose-links': '#0EB623',
                    }}
                  />
                  
            
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-medium mb-6 text-gray-900">
                Questions About Our Legal Terms?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our legal team is here to help clarify any questions you may have about our terms and policies.
              </p>
              <a 
                href="/contact_us" 
                className="inline-flex items-center px-8 py-4 bg-[#0EB623] text-white rounded-xl font-medium hover:bg-[#0EA620] transition-all duration-300"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;