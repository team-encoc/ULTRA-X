# ULTRAX Account Deletion and Data Deletion Guide

**Effective Date: January 1, 2025**
**Google Play Policy Compliance Document (July 10, 2025 Mandatory Requirement)**

This is a guide for account deletion and data deletion for the ULTRAX app (hereinafter "Service") provided by Sukwang Precision Co., Ltd. (hereinafter "Company").

---

## 1. Account Deletion Methods

### 1.1 In-app Deletion

#### Android / iOS Common

1. Launch ULTRAX app
2. Select **Settings** > **Account** > **Delete Account**
3. Select deletion reason (optional)
4. Click **"Delete Account"** button
5. Enter password (identity verification)
6. Complete deletion request after final confirmation

### 1.2 Deletion Request via Email

If deletion through the app is difficult, you can request deletion via email.

**Request Method:**

- **Email Address**: privacy@sukwangfishing.com
- **Subject**: Account Deletion Request
- **Body Contents**:
  - Registered email address
  - Registered name
  - Deletion reason (optional)
  - Last 4 digits of phone number for identity verification

**Processing Period**: Deletion completed and email response within 3 business days

### 1.3 Deletion Request via Customer Service

**Customer Service Email**: kwonoj90@gmail.com
**Phone**: [Customer Service Phone Number]
**Business Hours**: Weekdays 09:00 ~ 18:00 (excluding weekends and holidays)

---

## 2. 7-Day Grace Period System (Google Play Mandatory Requirement)

### 2.1 What is the Grace Period?

In accordance with Google Play policy, the Company provides a **7-day grace period** after account deletion request. During this period, users can login and cancel the deletion to recover their account.

### 2.2 Account Status During Grace Period

**For 7 days after deletion request:**

- ✅ Login possible
- ✅ Account recovery possible (cancel deletion)
- ⚠️ Service use restricted (read-only mode)
- ⚠️ Fish finder connection disabled
- ⚠️ Cannot save new fishing spots
- ⚠️ Cannot modify existing data

**Guidance Message Displayed During Grace Period:**

```
⚠️ This account has been requested for deletion.
If you wish to recover, click "Cancel Deletion" button.

Remaining grace period: X days XX hours
Grace period ends: 2025-XX-XX XX:XX

All data will be permanently deleted after grace period.
```

### 2.3 How to Cancel Deletion

**Cancel Deletion During Grace Period:**

1. Launch ULTRAX app
2. Login with registered email/password
3. Click **"Cancel Deletion"** button
4. Account immediately recovered and normal service use available

**Cancel Deletion via Email:**

- **Email Address**: privacy@sukwangfishing.com
- **Subject**: Cancel Deletion Request
- **Body**: Registered email address, name

### 2.4 After Grace Period Expires

**After 7 days:**

- ❌ Account permanently deleted (irreversible)
- ❌ All personal information permanently deleted
- ❌ All fishing records permanently deleted
- ❌ Login disabled
- ⚠️ Re-registration restricted for 15 days with same email

**Important**: After the grace period expires, the account and data cannot be recovered by any means.

---

## 3. List of Data to be Deleted

### 3.1 Data Immediately Deleted (After Grace Period Expires)

#### Personal Information

- ✅ Email address
- ✅ Name
- ✅ Password (encrypted hash value)
- ✅ Phone number (if entered)
- ✅ Profile picture (social login users)

#### Location Information

- ✅ All saved fishing spot location information
- ✅ Fishing route records
- ✅ Fish finder connection location records
- ✅ Real-time location records

#### Sonar Data

- ✅ Sonar CSV files (local storage)
- ✅ Sonar scan records
- ✅ Fishing logs and notes

#### Fish Finder Connection Information

- ✅ Fish finder device registration information
- ✅ Fish finder serial number
- ✅ Fish finder settings (local connection via WiFi/Bluetooth only)

#### Server Upload Data

If you have uploaded sonar data to the server, you can choose one of the following deletion options:

**Option 1: Immediate Complete Deletion**

- ✅ All uploaded sonar data immediately deleted
- ✅ GPS coordinates immediately deleted
- ✅ All related records immediately deleted

**Option 2: Anonymization and Retention (Default)**

- ⚠️ Personal identifiers (email, name, device ID) deleted
- ⚠️ **Exact GPS coordinates retained as-is** for regional fish distribution analysis
- ⚠️ Sonar data (depth, water temperature) retained as-is
- ✅ Cannot identify specific individuals (multiple users' data mixed)

**Selection Method**: Settings > Account > Delete Account > Choose deletion option

#### Service Usage Records

- ✅ Login records
- ✅ Service usage history
- ✅ Search history
- ✅ App settings information

### 3.2 Data Retained According to Law

The following information is retained for a certain period according to related laws and then deleted:

| Retained Information                  | Retention Period | Legal Basis                              |
| ------------------------------------- | ---------------- | ---------------------------------------- |
| Contract or withdrawal records        | 5 years          | E-Commerce Act                           |
| Consumer complaint or dispute records | 3 years          | E-Commerce Act                           |
| Fraud records                         | 1 year           | Company internal policy                  |
| Access log records                    | 6 months         | Protection of Communications Secrets Act |

**Important**: Information retained by law is stored in a **separate database (DB)** and immediately deleted after the period expires. This information is never used for purposes other than those specified in the law.

### 3.3 Data NOT Deleted

The following information is not deleted even after account deletion:

#### Anonymized Statistical Data

- Service usage statistics processed in a form that cannot identify individuals
- Example: "Number of fishing spot saves in January 2025: 1,234" (personal information removed)

**Purpose of Use**: Service improvement, new feature development, statistical analysis

#### Anonymized Upload Data (If Option 2 Selected)

If you selected "Anonymization and Retention" option when deleting server upload data:

**Information Retained:**

- ⚠️ Sonar scan data (depth, water temperature, fish detection information)
- ⚠️ **Exact GPS coordinates** (latitude, longitude) - Essential for regional fish distribution analysis and fishing spot recommendations
- ⚠️ Data collection timestamp (year/month/day/hour/minute)

**Information Deleted:**

- ✅ Email, name, and other personal identifiers
- ✅ Device unique identifiers
- ✅ User account linkage information

**Why GPS Coordinates Are Retained:**

- Exact GPS coordinates are essential for analyzing regional fish distribution patterns
- Required for providing accurate fishing spot recommendations to users
- Multiple users' data is mixed, making it impossible to identify specific individuals
- Only fish-related data is retained; personal information is completely deleted

**Re-identification Prevention:**

- Data from multiple users is mixed and stored in a single database
- No personal identifiers (email, name, account ID, etc.) are retained
- Even with GPS coordinates, it is impossible to determine which user collected the data
- Only aggregated statistical data is used (e.g., "Fish detected at this location on this date")

---

## 4. Data Deletion Process

### 4.1 Deletion Schedule

```
[Deletion Request] → [7-Day Grace Period] → [Grace Period Ends] → [Data Permanently Deleted]
        ↓                    ↓                      ↓                        ↓
      Day 0               Day 1-6                 Day 7                  Day 7 23:59
                                                                        (Auto Delete)
```

### 4.2 Automatic Deletion System

**Deletion Timing**: Grace period end date 23:59 (KST)
**Deletion Method**: Automated system proceeds with deletion in the following order

1. **Electronic Files**: Permanently deleted using irreversible methods (secure deletion algorithms applied)
2. **Backup Data**: Simultaneously deleted from all backup servers
3. **Cloud Storage**: Permanently delete photos and video files
4. **Database**: Complete removal of personal identification information
5. **Cache Data**: Complete deletion of temporary files and cache

### 4.3 Deletion Completion Notification

Upon grace period expiration and data deletion completion, notifications are sent via the following methods:

**Email Notification (email entered at deletion request)**

```
Subject: [ULTRAX] Account Deletion and Data Deletion Completed

Hello, this is ULTRAX.

Your account deletion has been completed and all personal information and data have been permanently deleted.

- Deletion request date: 2025-XX-XX
- Grace period end date: 2025-XX-XX
- Deletion completion date: 2025-XX-XX

Deleted data cannot be recovered by any means.

Thank you for using ULTRAX.
```

**SMS Notification (if phone number was entered)**

```
[ULTRAX] Account deletion and data deletion completed. (2025-XX-XX)
```

---

## 5. Re-registration Restriction Policy

### 5.1 Re-registration Restriction Period

**Re-registration restricted for 15 days with same email**

**Purpose:**

- Prevent fraudulent use
- Prevent abuse of repeated registration/deletion
- Ensure stability of data deletion process

### 5.2 Re-registration Availability Timing

**Re-registration available after 15 days from deletion**

```
[Deletion Complete] → [15-Day Wait] → [Re-registration Available]
       Day 7              Day 8-22           Day 22 onwards
```

**Re-registration Precautions:**

- Data from before deletion is not recovered
- Start with a new account
- Must re-register fish finder device

### 5.3 Immediate Re-registration with Different Email

Even after deletion, you can immediately re-register using a **different email address**.

---

## 6. Precautions When Deleting Account

### 6.1 Fish Finder Device Disconnection

**Important**: It is recommended to disconnect the fish finder device before account deletion.

**Device Disconnection Method:**

1. Launch ULTRAX app
2. **Settings** > **Fish Finder Management**
3. Click **"Disconnect Device"** button
4. Confirm ownership release

**Automatic Processing Upon Deletion:**

- Fish finder device connection is automatically disconnected when account is deleted
- Fish finder device can be re-registered with another account even after deletion

### 6.2 Sonar Data Backup

**Important**: Please download sonar data directly before account deletion.

**Data Download Method:**

1. Launch ULTRAX app
2. **Settings** > **Fishing Records** > **Export Data**
3. Select data to export (CSV files, fishing spot information)
4. Select download location (device storage)

**Available Export Formats:**

- **CSV Files**: Sonar scan data, depth, water temperature, GPS coordinates
- **JSON Files**: Structured fishing spot information
- **Markdown Reports**: Fishing session summaries

**Note**: All data is stored locally, so download is not necessary. However, it is recommended to export data before deletion for backup purposes.

### 6.3 Social Login Disconnection

**For social login users:**

- **Naver Login**: Naver Account > Security Settings > External Site Login Management > ULTRAX Disconnect
- **Kakao Login**: KakaoTalk > Settings > Kakao Account > Connected Service Management > ULTRAX Disconnect
- **Google Login**: Google Account > Security > Apps with access to your account > ULTRAX Remove access

**Important**: Social login disconnection is not automatically processed, so it is recommended to manually disconnect after account deletion.

### 6.4 Difference Between App Deletion and Account Deletion

| Category               | App Deletion        | Account Deletion       |
| ---------------------- | ------------------- | ---------------------- |
| Account Retention      | ✅ Retained         | ❌ Deleted             |
| Data Storage           | ✅ Stored on server | ❌ Permanently deleted |
| After Reinstall        | ✅ Login available  | ❌ Login unavailable   |
| Fish Finder Connection | ✅ Maintained       | ❌ Disconnected        |

**Important**: Deleting the app retains the account, and existing data can be used after reinstalling and logging in. To completely delete the account, the **account deletion** process must be followed.

---

## 7. Data Requests After Deletion

### 7.1 Data Recovery Request After Deletion

**During Grace Period**: Cancel deletion by logging in (all data recovered)
**After Grace Period Expires**: Data recovery impossible (permanent deletion completed)

**Impossible Requests:**

- Recover deleted fishing spot information
- Recover deleted sonar videos
- Recover deleted fish finder connection records
- Recover deleted account information

### 7.2 Deletion Confirmation Request

After deletion, you can request confirmation of data deletion.

**Request Method:**

- **Email Address**: privacy@sukwangfishing.com
- **Subject**: Data Deletion Confirmation Request
- **Body**: Deleted email address, name, deletion date

**Response Contents:**

- Account deletion completion confirmation
- Data deletion completion date
- List of information retained by law (if applicable)

---

## 8. Account Deletion Frequently Asked Questions (FAQ)

### Q1. Is my account deleted immediately upon deletion request?

**A1.** No. A **7-day grace period** is provided after deletion request. During this period, you can login and cancel the deletion. All data is permanently deleted after the grace period expires.

### Q2. Can I use services during the grace period?

**A2.** During the grace period, login is possible but service use is restricted (read-only mode). Features such as fish finder connection and fishing spot saving cannot be used.

### Q3. Is my account deleted when I delete the app?

**A3.** No. Deleting the app only removes the app from the device, and the account and data on the server are retained. To completely delete the account, the **account deletion** process must be followed.

### Q4. Can I re-register after deletion?

**A4.** Yes. However, **re-registration is restricted for 15 days** with the same email after deletion. Immediate re-registration is possible with a different email address.

### Q5. Is data from before deletion recovered when re-registering?

**A5.** No. Data deleted after account deletion is not recovered. When re-registering, you must start with a new account.

### Q6. What happens to my fish finder device?

**A6.** Fish finder device connection is automatically disconnected when account is deleted. The fish finder device can be re-registered and used with another account even after deletion.

### Q7. What data is retained by law?

**A7.** Contract/withdrawal records (5 years), consumer complaint/dispute records (3 years), fraud records (1 year), access logs (6 months), etc., are retained for a certain period according to law and then deleted.

### Q8. Is social login disconnection automatic?

**A8.** No. Naver, Kakao, and Google login connections must be manually disconnected on each social platform.

### Q9. How do I cancel deletion?

**A9.** During the grace period, login to the ULTRAX app and click the **"Cancel Deletion"** button to immediately recover your account.

### Q10. Can I receive confirmation of data deletion after account deletion?

**A10.** Yes. Request deletion confirmation via privacy@sukwangfishing.com and we will issue a deletion confirmation certificate.

---

## 9. Privacy Protection Inquiries

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

## 10. Dispute Resolution

If you have suffered privacy rights violations related to account deletion and data deletion, you can contact the following organizations:

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

## Supplementary Provisions

### Effective Date

This guide is effective from January 1, 2025.

### Google Play Policy Compliance

This guide has been prepared in accordance with Google Play Developer Policy (July 10, 2025 mandatory requirements).

---

**Sukwang Precision Co., Ltd.**
**Representative Director**: [Representative Director Name]
**Business Registration Number**: [Business Registration Number]
**Address**: [Company Address]
**Email**: kwonoj90@gmail.com
**Customer Service**: [Customer Service Phone Number]
