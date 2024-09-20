import React, { useContext, useState } from 'react';
import Nav from '../../Nav/Navbar';
import ProfileSidebar from '../../Nav/ProfileSidebar';
import AccountInformation from './AccountInformation';
import PaymentInformation from './PaymentInformation';

function Profile() {
  const [selectedSection, setSelectedSection] = useState('Account');

  const renderSection = () => {
    switch (selectedSection) {
      case 'Account':
        return <AccountInformation />;
      case 'Payment Information':
        return <PaymentInformation />;
      default:
        return <AccountInformation />;
    }
  };

  return (
    <div>
      <Nav />
      <div className="flex mt-[120px]">
        {/* Sidebar */}
        <div className="w-[240px]">
            <ProfileSidebar setSelectedSection={setSelectedSection} />

        </div>

        {/* Main content area */}
        <div className="flex-1 lg:ml-[69.36px] mt-[60px]">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default Profile;
