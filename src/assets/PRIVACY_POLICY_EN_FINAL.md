# ULTRAX Privacy Policy

**Effective Date**: January 1, 2025
**Last Updated**: January 1, 2025

---

## Article 1 (Purpose)

Sukwang (developed through business received from Sukwang Precision Co., Ltd.) (hereinafter "Company") establishes this Privacy Policy (hereinafter "Policy") to protect the information (hereinafter "Personal Information") of individuals (hereinafter "Users" or "Individuals") using the ULTRAX service (hereinafter "Company Service") provided by the Company, in compliance with the Personal Information Protection Act, the Act on Promotion of Information and Communications Network Utilization and Information Protection (hereinafter "Information and Communications Network Act"), and other related laws, and to promptly and smoothly handle grievances related to the protection of users' personal information.

---

## Article 2 (Principles of Personal Information Processing)

In accordance with personal information-related laws and this Policy, the Company may collect users' personal information, and the collected personal information may be provided to third parties only with the individual's consent. However, if legally compelled by laws and regulations, the Company may provide collected users' personal information to third parties without prior individual consent.

---

## Article 3 (Disclosure of this Policy)

1. The Company discloses this Policy through the Company's homepage main screen or a screen linked to the main screen so that users can easily check this Policy at any time.

2. When the Company discloses this Policy pursuant to Paragraph 1, it shall utilize font size, color, etc., to ensure that users can easily check this Policy.

---

## Article 4 (Changes to this Policy)

1. This Policy may be amended in accordance with changes in personal information-related laws, guidelines, notices, or government or Company service policies or content.

2. When the Company amends this Policy pursuant to Paragraph 1, it shall notify users through one or more of the following methods:

   - a. Notification through the notice section on the main screen of the Company's website or through a separate window
   - b. Notification to users by document, facsimile, email, or similar methods

3. The Company shall provide notice pursuant to Paragraph 2 at least 7 days prior to the effective date of the Policy amendment. However, in case of significant changes to user rights, notice shall be provided at least 30 days in advance.

---

## Article 5 (Information for Membership Registration)

The Company collects the following information for users' membership registration for the Company service.

### Required Information

- Email address
- Password
- Name
- Gender and date of birth

### Optional Information

- Phone number

---

## Article 5-2 (Background Location Information Collection and Use)

### 1. Purpose of Background Location Information Collection

The Company collects location information in the background to **maintain continuous connection with fish finder devices**.

### 2. Background Location Collection Details

- **Collection Items**: Precise location information (latitude, longitude) via GPS
- **Collection Method**: Automatic collection when the app is in the background
- **Collection Frequency**: Continuous collection while connected to fish finder

### 3. User Value

Background location collection provides the following value:

- **Continuous Fish Finder Connection**: Maintains connection with fish finder even when app is in background
- **Real-time Sonar Data**: Provides uninterrupted real-time data while fishing
- **Automatic Fishing Route Recording**: Automatically saves movement routes
- **Location-based Safety Alerts**: Alerts when approaching hazardous areas

### 4. Battery Optimization

The Company applies the following optimizations for background location collection:

- Efficient location update interval adjustment
- Minimization of unnecessary collection
- Application of battery consumption minimization algorithms

### 5. How to Disable Background Location

Users can stop background location collection at any time:

- **Android**: Settings > Apps > ULTRAX > Permissions > Location > "Allow only while using the app"
- **iOS**: Settings > ULTRAX > Location > "While Using the App"

**Note**: Disabling background location may disconnect the fish finder connection when the app is in the background.

---

## Article 5-3 (Bluetooth and WiFi Permissions)

### 1. Bluetooth Permission

The Company requests Bluetooth permission to connect to fish finder devices.

#### Collected Information

- Bluetooth connection status
- Connected device information (fish finder devices only)

#### Purpose of Use

- Search for and connect to fish finder devices
- Receive real-time sonar data
- Synchronize device settings

#### Location Tracking Disclaimer

**Important**: The Company does **NOT use Bluetooth permission for location tracking purposes**.

- Android 12+: `neverForLocation` flag set
- Android 13+: NEARBY_WIFI_DEVICES with `neverForLocation` flag
- **Bluetooth is used solely for fish finder device connection**

### 2. WiFi Permission

The Company requests WiFi permission to connect to fish finder devices via WiFi.

#### Collected Information

- WiFi connection status
- Connected network information (fish finder WiFi only)

#### Purpose of Use

- Connect to fish finder device WiFi network
- Receive real-time sonar data via WiFi
- Update fish finder firmware

#### Location Tracking Disclaimer

**Important**: The Company does **NOT use WiFi permission for location tracking purposes**.

- Android 13+: NEARBY_WIFI_DEVICES with `neverForLocation` flag
- **WiFi is used solely for fish finder device connection**

---

## Article 5-4 (Photo and Video Upload Feature Not Provided)

### 1. No Photo/Video Upload Features

**Important**: This service **does NOT provide photo or video upload features**.

- **No Camera Usage**: The app does not use the camera to take photos or record videos
- **No Photo/Video Storage**: Does not save photos or videos to the server
- **No Gallery Access**: Does not request permissions to access photos or videos

### 2. Permissions NOT Requested

The following permissions are **NOT requested** by this app:

- ❌ Camera permission
- ❌ Photo/video access permission (READ_MEDIA_IMAGES, READ_MEDIA_VIDEO)
- ❌ Storage access permission (READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE)

### 3. Sonar Data Management

- **Sonar Videos**: CSV files parsed and displayed on screen (not actual video/photo files)
- **Fishing Spot Saving**: Location information only saved (no photos)

---

## Article 5-5 (Sonar Data Server Upload)

### 1. Optional Data Upload

The Company provides a feature for users to **optionally** upload sonar data to the server.

### 2. Information Collected (Upon Upload)

- **Sonar CSV Data**: Scan data, depth, water temperature, beam angle, frequency, etc.
- **GPS Location Information**: Location (latitude, longitude) at the time of sonar data collection
- **Timestamp Information**: Date and time of data collection
- **Device Information**: Fish finder model, app version

### 3. Purpose of Collection

- **Service Improvement and Expansion**: Analyze fish distribution patterns, improve fishing spot recommendation algorithms
- **AI Learning**: Improve fish detection accuracy, learn fish species prediction models based on water temperature/depth
- **Statistical Analysis**: Provide regional/seasonal fish distribution statistics, real-time fish species information
- **New Service Development**: Provide big data-based fishing insights

### 4. Data Retention and Anonymization

- **Retention Period**: **Permanent retention** for service improvement and expansion purposes
- **Anonymization Process**: Personal identifiers (email, name, device ID) are deleted, while sonar data and GPS coordinates are retained as-is
- **GPS Coordinate Retention**: Exact GPS coordinates are **retained as-is** for regional fish distribution analysis and fishing spot recommendations
- **Re-identification Prevention**: Multiple users' data is mixed, making it impossible to identify specific individuals

### 5. User Data Deletion Request

Users can request deletion of uploaded data at any time:

**Deletion Request Method:**

- **In-app**: Settings > Privacy > Uploaded Data Management > Request Deletion
- **Email**: privacy@sukwangfishing.com

**Processing Period**: Deletion completed within 7 business days from request

### 6. Consent Procedure

**First Upload Consent Popup:**

When uploading sonar data to the server for the first time, the following consent popup is displayed:

```
📡 Sonar Data Server Upload

Your sonar data will be used to improve the service.

• Collected Information: Sonar CSV data, GPS coordinates, timestamp
• Purpose: Service improvement, AI learning, statistical analysis
• Retention Period: Permanent (anonymized after account deletion)
• Deletion: Request deletion at any time

☑️ I agree to upload sonar data to the server
```

**Important**: Uploading sonar data is entirely optional, and you can use all services even if you do not upload.

---

## Article 6 (Social Login Information)

The Company collects the following information when users use social login services.

### 1. Naver Login

- **Collected Information**: Email, name, profile picture
- **Authentication Method**: OAuth 2.0 token authentication
- **No Additional Collection**: Only authentication tokens are used; no additional information is collected

### 2. Kakao Login

- **Collected Information**: Email, name, profile picture
- **Authentication Method**: OAuth 2.0 token authentication
- **No Additional Collection**: Only authentication tokens are used; no additional information is collected

### 3. Google Login

- **Collected Information**: Email, name, profile picture
- **Authentication Method**: OAuth 2.0 token authentication
- **No Additional Collection**: Only authentication tokens are used; no additional information is collected

### 4. Social Login Data Retention

- Social login information is retained until account deletion
- Authentication tokens are immediately deleted upon logout
- Social account linkage can be canceled at any time

---

## Article 6-2 (Information Collected by App Permissions and Purpose of Use)

**Google Play Policy Compliance (2025 Mandatory Requirements)**

The following table clearly shows the information collected through each app permission and its purpose of use:

| Permission                | Information Collected                                     | Purpose of Use                                                        | Required/Optional      | Limitations When Denied                                   |
| ------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| **Location (Foreground)** | Precise location (GPS), approximate location              | Display current location, save fishing spots, location-based search   | Required               | Cannot display fish finder location or save fishing spots |
| **Location (Background)** | Precise location (GPS) while app is in background         | Maintain continuous fish finder connection, automatic route recording | Optional (Recommended) | Fish finder connection disconnects in background          |
| **Bluetooth**             | Bluetooth connection status, connected device information | Connect to fish finder device, receive sonar data                     | Required               | Cannot connect to fish finder                             |
| **WiFi**                  | WiFi connection status, connected network information     | Connect to fish finder via WiFi, firmware updates                     | Optional               | Cannot connect to fish finder via WiFi                    |
| **Sensors**               | Device orientation, compass data, motion data             | Compass display, device direction detection, motion detection         | Optional               | Compass and direction features unavailable                |

### Permission Request Policy

- **Explanation Before Request**: Clear explanation before requesting each permission
- **Step-by-step Request**: Foreground location → Background location (separate requests)
- **Cancelable**: Users can deny or revoke permissions at any time
- **Settings Navigation**: Guidance to app settings when permissions are denied

---

## Article 7 (Purpose of Personal Information Collection and Use)

The Company uses collected personal information for the following purposes:

### 1. Account Management

- User registration and identity verification
- Fish finder device registration and ownership verification
- Account management and customer support
- Prevention of unauthorized use and fraud

### 2. Service Provision

- **Fish Finder Connection and Real-time Data**: Provide sonar data through Bluetooth/WiFi connection
- **Location-based Services**: Display current location, save and manage fishing spots, map features
- **Background Location Use**: Maintain continuous connection with fish finder and provide real-time data while fishing
- **Fishing Records Management**: Record sonar videos, save fishing spot photos, synchronize records
- **Real-time Environmental Information**: Provide weather, water temperature, and depth information based on current location

### 3. Service Improvement

- Analyze service usage statistics
- Develop new services and improve features
- Enhance user experience (UX)

### 4. Uploaded Sonar Data Usage (Optional)

If users choose to upload sonar data to the server:

- **AI Learning and Service Improvement**: Improve fish detection accuracy, analyze regional fish distribution patterns
- **Statistical Analysis**: Provide regional/seasonal fish species information and fishing spot recommendations
- **New Service Development**: Develop big data-based fishing insights and prediction services

**Important**: Sonar data upload is entirely optional and not mandatory for service use.

---

## Article 8 (Retention and Use Period of Personal Information)

### 1. Account Information

- **Retention Period**: Until account deletion
- **After Deletion**: Immediately deleted (7-day grace period for recovery)
- **Legal Requirements**: Certain information may be retained for the period required by applicable laws:
  - Contract or withdrawal records: 5 years (E-Commerce Act)
  - Consumer complaint or dispute records: 3 years (E-Commerce Act)
  - Fraud records: 1 year

### 2. Service Usage Records

- **Location Information**: Until fishing spot is deleted by user
- **Sonar CSV Files**: Until user deletes them (local storage only)
- **Fish Finder Connection Records**: Local WiFi/Bluetooth connection only (not stored on server)

---

## Article 8-2 (Data Encryption and Security)

**Google Play Policy Compliance (2025 Mandatory Requirements)**

### 1. Encryption in Transit

- **Protocol**: HTTPS/TLS 1.2 or higher
- **Data in Transit**: All personal information transmitted between app and server is encrypted
- **Certificate**: Valid SSL/TLS certificate from trusted CA

### 2. Encryption at Rest

- **Encryption Algorithm**: AES-256
- **Encrypted Data**: Passwords, authentication tokens, sensitive personal information
- **Key Management**: Encryption keys securely managed using Android Keystore / iOS Keychain

### 3. Password Security

- **Password Hashing**: bcrypt algorithm with salt
- **Storage**: Only hashed passwords stored; original passwords never stored
- **Transmission**: Passwords encrypted during transmission via HTTPS

### 4. Security Measures

- **Access Control**: Personal information processing system access permission management
- **Access Log Retention**: Retained for at least 6 months with tamper-prevention measures
- **Regular Security Audits**: Periodic security vulnerability assessments
- **Firewall**: Network firewall and intrusion detection system operation

---

## Article 9 (Third-party Sharing of Personal Information)

The Company does not share users' personal information with third parties except in the following cases:

### 1. With User Consent

- Social login service providers (Naver, Kakao, Google)
- Only authentication tokens are used; no additional information is shared

### 2. Legal Requirements

- When required by law enforcement agencies following legally prescribed procedures
- When required for investigation purposes in accordance with laws and regulations

### 3. Information NOT Shared

- **Location Information**: Not shared with third parties (stored only on Company servers)
- **Sonar CSV Files**: Not shared with third parties (local storage only)
- **Fish Finder Connection Information**: Local WiFi/Bluetooth connection only (not stored on server, not shared)

---

## Article 9-2 (Third-party SDK Usage)

**Google Play Policy Compliance (2025 Mandatory Requirements)**

The Company uses the following third-party SDKs in the app:

### 1. Social Login SDKs

- **Naver Login SDK**: For Naver social login authentication

  - Data Shared: Authentication token only (no personal information directly shared)
  - Privacy Policy: https://policy.naver.com/policy/privacy.html

- **Kakao Login SDK**: For Kakao social login authentication

  - Data Shared: Authentication token only (no personal information directly shared)
  - Privacy Policy: https://www.kakao.com/policy/privacy

- **Google Sign-In SDK**: For Google social login authentication
  - Data Shared: Authentication token only (no personal information directly shared)
  - Privacy Policy: https://policies.google.com/privacy

### 2. Map SDK

- **Google Maps SDK**: For map display and location services
  - Data Shared: Location information for map display
  - Privacy Policy: https://policies.google.com/privacy

### 3. Bluetooth SDK

- **React Native BLE PLX**: For Bluetooth communication with fish finder
  - Data Shared: None (local device communication only)
  - Open Source: MIT License

### 4. Analytics SDK (if applicable)

- Currently not in use. If added in the future, notification will be provided through this Policy.

### SDK Data Processing

- All SDKs process data in accordance with their respective privacy policies
- The Company regularly reviews SDK updates and privacy policy changes
- Users can withdraw consent for specific SDKs by revoking app permissions

---

## Article 10 (Deletion Procedures and Methods of Personal Information)

### 1. Deletion Procedures

- Immediate deletion upon account deletion or completion of collection purpose
- Information required to be retained by law is moved to a separate database (DB) and deleted after retention period

### 2. Deletion Methods

- **Electronic Files**: Permanently deleted using methods that prevent recovery (secure deletion algorithms)
- **Paper Documents**: Shredded or incinerated

### 3. Deletion Timing

- **Account Deletion**: Immediately deleted after 7-day grace period
- **Purpose Fulfilled**: Immediately deleted upon fulfillment of collection and use purpose
- **Retention Period Expired**: Immediately deleted after expiration of legally required retention period

---

## Article 11 (User Rights and How to Exercise Them)

Users have the following rights:

### 1. Right to Access Personal Information

Users can request access to their personal information held by the Company.

**Request Method:**

- **In-app**: Settings > Account > Privacy Management > View My Information
- **Email**: privacy@sukwangfishing.com
- **Customer Support**: kwonoj90@gmail.com

### 2. Right to Correction and Deletion

Users can request correction or deletion of their personal information.

**Request Method:**

- **In-app**: Settings > Account > Edit Profile / Delete Account
- **Email**: privacy@sukwangfishing.com

### 3. Right to Data Portability

Users can request their personal information in a commonly used electronic format.

**Request Method:**

- **In-app**: Settings > Account > Export My Data
- **Email**: privacy@sukwangfishing.com

### 4. Right to Withdraw Consent

Users can withdraw consent for personal information collection and use at any time.

**Withdrawal Method:**

- **In-app**: Settings > Privacy > Manage Permissions
- **Account Deletion**: Settings > Account > Delete Account

**Response Period**: Within 10 business days from request receipt

---

## Article 11-2 (Account Deletion and Data Deletion)

**Google Play Policy Compliance (2025 July 10 Mandatory Requirement)**

### 1. Account Deletion Method

Users can delete their account at any time through the following methods:

#### In-app Deletion

1. Launch ULTRAX app
2. Settings > Account > Delete Account
3. Select deletion reason (optional)
4. Click "Delete Account" button
5. Enter password (identity verification)
6. Final confirmation and complete deletion request

#### Email Deletion Request

- **Email Address**: privacy@sukwangfishing.com
- **Subject**: Account Deletion Request
- **Body Contents**: Registered email address, name, deletion reason (optional)

### 2. 7-Day Grace Period

The Company provides a **7-day grace period** after account deletion request.

**During Grace Period:**

- ✅ Login possible
- ✅ Account recovery possible (cancel deletion)
- ⚠️ Service use restricted (read-only mode)
- ⚠️ Fish finder connection disabled
- ⚠️ Cannot save new fishing spots

**Grace Period Message:**

```
⚠️ This account has been requested for deletion.
If you wish to recover, click "Cancel Deletion" button.

Remaining grace period: X days XX hours
Grace period ends: 2025-XX-XX XX:XX

All data will be permanently deleted after grace period.
```

### 3. Canceling Deletion During Grace Period

**Cancel Deletion:**

1. Launch ULTRAX app
2. Login with registered email/password
3. Click "Cancel Deletion" button
4. Account immediately recovered and normal service use available

### 4. After Grace Period

**After 7 days:**

- ❌ Account permanently deleted (irreversible)
- ❌ All personal information permanently deleted
- ❌ All fishing records permanently deleted
- ❌ Login disabled
- ⚠️ Re-registration restricted for 15 days with same email

### 5. Data Deleted

- Account information (email, name, password)
- Location information and fishing spots
- Sonar CSV files (local storage)
- Fish finder device registration information
- Service usage history

### 6. Server Upload Data Handling

If you have uploaded sonar data to the server, you can choose one of the following options upon account deletion:

#### Option 1: Immediate Complete Deletion

- ✅ All uploaded sonar data immediately deleted
- ✅ GPS coordinates immediately deleted
- ✅ All related records immediately deleted

**Selection Method**: Settings > Account > Delete Account > Select "Delete all uploaded data"

#### Option 2: Anonymization and Retention (Default)

- ⚠️ Personal identifiers (email, name, device ID) deleted
- ⚠️ **Exact GPS coordinates retained as-is** for regional fish distribution analysis and fishing spot recommendations
- ⚠️ Sonar data (depth, water temperature, scan data) retained as-is
- ⚠️ Data collection timestamp retained as-is
- ✅ Cannot identify specific individuals (multiple users' data mixed)

**Default Selection**: If no option is selected, Option 2 (anonymization and retention) is applied.

**Why GPS Coordinates Are Retained:**

- Exact GPS coordinates are essential for analyzing regional fish distribution patterns
- Required for fishing spot recommendation services
- Multiple users' data is mixed, preventing individual identification
- Only fish-related data is retained; personal information is completely deleted

### 7. Data Retained According to Law

- Contract or withdrawal records: 5 years (E-Commerce Act)
- Consumer complaint or dispute records: 3 years (E-Commerce Act)
- Fraud records: 1 year
- Access log records: 6 months (Protection of Communications Secrets Act)

**Important**: Data retained by law is stored in a separate database and deleted immediately after the retention period expires.

---

## Article 12 (Measures to Ensure Safety of Personal Information)

The Company implements the following security measures to protect personal information:

### 1. Administrative Measures

- Minimize personnel with access to personal information and provide training
- Designate privacy protection officer
- Regular security training for employees
- Internal privacy management plan operation

### 2. Technical Measures

- **Encryption in Transit**: HTTPS/TLS protocol
- **Encryption at Rest**: AES-256 encryption
- **Access Control**: Manage access permissions to personal information processing systems
- **Access Log Retention**: Retain for at least 6 months with tamper-prevention measures
- **Firewall**: Network firewall and intrusion detection system
- **Malware Protection**: Anti-virus and anti-malware solutions

### 3. Physical Measures

- Access control to servers storing personal information
- CCTV surveillance in server rooms
- Physical access log management

---

## Article 13 (App Permissions)

**Google Play Policy Compliance (2025 Mandatory Requirements)**

### 1. Permission Requests

ULTRAX app requests the following permissions:

| Permission            | Purpose                                      | Required/Optional      | Limitations When Denied                                   |
| --------------------- | -------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| Location (Foreground) | Display current location, save fishing spots | Required               | Cannot display fish finder location or save fishing spots |
| Location (Background) | Maintain fish finder connection              | Optional (Recommended) | Fish finder connection disconnects in background          |
| Bluetooth             | Connect to fish finder device                | Required               | Cannot connect to fish finder                             |
| WiFi                  | WiFi connection to fish finder               | Optional               | Cannot connect to fish finder via WiFi                    |
| Sensors               | Compass, device orientation                  | Optional               | Compass and direction features unavailable                |

### 2. How to Manage Permissions

- **Android**: Settings > Apps > ULTRAX > Permissions
- **iOS**: Settings > ULTRAX > Permissions

### 3. Permission Explanation Before Request

The Company provides clear explanations of purpose and user value before requesting each permission, in compliance with Google Play policy.

---

## Article 14 (Children's Privacy)

### 1. Age Restriction

The Company does not knowingly collect personal information from children under 14 years of age.

### 2. Parental Consent Required

If a child under 14 wishes to use the Service, parental consent is required.

### 3. Parents' Rights

Parents or legal guardians of children under 14 can:

- Request access to their child's personal information
- Request correction or deletion of their child's personal information
- Withdraw consent for their child's personal information collection

---

## Article 15 (Installation and Operation of Automatic Collection Devices)

### 1. Cookies (Web Version)

The Company does not currently use cookies. If cookies are used in the future, notification will be provided through this Policy.

### 2. App Analytics

The Company may collect the following information for service improvement:

- App crashes and error logs
- Feature usage statistics
- Device information (model, OS version)

**No Personal Identification**: Analytics data is collected in anonymized form and cannot identify individuals.

---

## Article 16 (Privacy Protection Officer)

The Company designates a privacy protection officer responsible for overall personal information processing and handling complaints and remedies related to personal information.

### Privacy Protection Officer

- **Name**: Kwon Seong-o
- **Position**: Chief Technology Officer
- **Email**: kwonoj90@gmail.com
- **Phone**: 010-9118-0592

### Privacy Protection Department

- **Department**: Customer Support Team
- **Email**: kwonoj90@gmail.com
- **Phone**: [Customer Service Phone Number]
- **Business Hours**: Weekdays 09:00 ~ 18:00 (excluding weekends and holidays)

---

## Article 17 (Changes to Privacy Policy)

This Privacy Policy is effective from January 1, 2025. We will notify users of any additions, deletions, or corrections to this Privacy Policy at least 7 days prior to the effective date through in-app notifications.

**Effective Date**: January 1, 2025

---

## Article 18 (Dispute Resolution)

If you believe your privacy rights have been violated, you can contact the following organizations:

### Korea Internet & Security Agency (KISA)

- **Phone**: 118 (in Korea)
- **Website**: https://privacy.kisa.or.kr

### Personal Information Dispute Mediation Committee

- **Phone**: 1833-6972 (in Korea)
- **Website**: https://www.kopico.go.kr

### Supreme Prosecutors' Office Cyber Crime Investigation Division

- **Phone**: 1301 (in Korea)
- **Website**: https://www.spo.go.kr

### National Police Agency Cyber Safety Bureau

- **Phone**: 182 (in Korea)
- **Website**: https://cyberbureau.police.go.kr

---

## Article 19 (Additional Information)

### 1. Privacy Policy URL

This Privacy Policy is available at: https://sukwangfishing.com/privacy-policy

### 2. Contact Information

For questions about this Privacy Policy, please contact us:

- **Email**: privacy@sukwangfishing.com
- **Customer Support**: kwonoj90@gmail.com
- **Address**: [Company Address]

---

## Article 20 (Google Play Policy Compliance)

This Privacy Policy has been prepared in compliance with Google Play Developer Content Policy requirements for 2025:

### Mandatory Compliance Items

- ✅ Background location justification and user value explanation
- ✅ Bluetooth/WiFi `neverForLocation` flag disclosure
- ✅ 7-day grace period for account deletion
- ✅ Clear permission table with required/optional designation
- ✅ SDK disclosure with privacy policy links
- ✅ Encryption methods (HTTPS/TLS, AES-256) specification
- ✅ Data deletion procedures and timing
- ✅ Children's privacy protection (under 14)

### Compliance Deadlines

- **API Level 35 (Android 15)**: August 31, 2025 (already compliant)
- **Account Deletion Feature**: July 10, 2025 (already implemented)

---

## Supplementary Provisions

### 1. Effective Date

This Privacy Policy is effective from January 1, 2025.

### 2. Previous Versions

Previous versions of this Privacy Policy are archived and available upon request.

---

**Sukwang (developed through business received from Sukwang Precision Co., Ltd.)**
**Representative Director**: [Representative Director Name]
**Business Registration Number**: [Business Registration Number]
**Address**: [Company Address]
**Email**: kwonoj90@gmail.com
**Customer Service**: [Customer Service Phone Number]

---

## Appendix: Version History

| Version | Effective Date | Changes                                               |
| ------- | -------------- | ----------------------------------------------------- |
| 1.0     | 2025-01-01     | Initial version with full Google Play 2025 compliance |

---

**Last Updated**: January 1, 2025
**Next Review Date**: July 1, 2025
