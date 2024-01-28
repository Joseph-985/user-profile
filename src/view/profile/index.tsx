import { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import EditableInfo from "../../components/Editable";

const Profile = () => {
  const [editMyData, setEditMyData] = useState(false);
  const [editBakDetails, setEditBankDetails] = useState(false);
  const [editContactDetails, setEditContactDetails] = useState(false);
  const [securityDetails, setSecurityDetails] = useState(false);

  const userProfile = {
    fullName: "Jonathan Crensent",
    staffId: "29901SHll",
    dateJoined: " August 2020",
    phoneNumber: "08106127712",
    emailAddress: " bongafish@fish.com",
    bankName: "Firstbank nigeria",
    accountNumber: "0004397652",
    accountName: "Jonathan Crensent",
    password: "yruwoiruowo",
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5 place-content-center">
        <ProfileCard
          editing={editMyData}
          title="My Data"
          onClick={() => setEditMyData(!editMyData)}
          onSave={() => setEditMyData(false)}
        >
          <EditableInfo
            label="Full name"
            initialValue={userProfile.fullName}
            editing={editMyData}
          />

          <EditableInfo
            label="Staff id"
            initialValue={userProfile.staffId}
            editing={editMyData}
            disable={true}
          />

          <EditableInfo
            label=" Date joined"
            initialValue={userProfile.dateJoined}
            editing={editMyData}
            disable={true}
          />
        </ProfileCard>

        <ProfileCard
          editing={editContactDetails}
          title="Contact Details"
          onClick={() => setEditContactDetails(!editContactDetails)}
          onSave={() => setEditContactDetails(false)}
        >
          <EditableInfo
            label="Phone number"
            initialValue={userProfile.phoneNumber}
            editing={editContactDetails}
          />

          <EditableInfo
            label="Email address"
            initialValue={userProfile.emailAddress}
            editing={editContactDetails}
          />
        </ProfileCard>

        <ProfileCard
          title="Bank Details"
          editing={editBakDetails}
          onClick={() => setEditBankDetails(!editBakDetails)}
          onSave={() => setEditBankDetails(false)}
        >
          <EditableInfo
            label="Bank name"
            initialValue={userProfile.bankName}
            editing={editBakDetails}
          />

          <EditableInfo
            label="Account number"
            initialValue={userProfile.accountNumber}
            editing={editBakDetails}
          />

          <EditableInfo
            label=" Account name"
            initialValue={userProfile.accountName}
            editing={editBakDetails}
          />
        </ProfileCard>

        <ProfileCard
          title="Security"
          onClick={() => setSecurityDetails(!securityDetails)}
          onSave={() => setSecurityDetails(false)}
        >
          <EditableInfo
            label=" Password"
            initialValue={userProfile.password.replace(/./g, "*")}
            editing={securityDetails}
            inputType="password"
          />
        </ProfileCard>
      </div>
    </>
  );
};

export default Profile;
