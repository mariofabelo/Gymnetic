import React, { useState } from 'react';
import {
  Page,
  Link,
  Block,
  Button,
  Navbar,
  f7
} from 'framework7-react';

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    age: '',
  });

  const handleImageUpload = () => {
    // Open file input dialog
    f7.dialog.prompt('Enter image URL', 'Profile Picture', (url) => {
      if (url) setProfileImage(url);
    });
  };

  return (
    <Page name="profile" className="activity-page">
      <Navbar backLink="Back">
        <Link slot="right" href="/settings/">
          <i className="f7-icons" style={{fontSize: '22px'}}>gear</i>
        </Link>
      </Navbar>
      
      <Block className="activity-content">
        {/* Page Title */}
        <div className="page-title">
          <h1>Profile</h1>
        </div>

        {/* Profile Picture Section */}
        <div className="glass-card" style={{maxWidth: '280px', margin: '0 auto 20px'}}>
          <div 
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              margin: '0 auto 20px',
              background: profileImage ? `url(${profileImage}) center/cover` : '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            }}
            onClick={handleImageUpload}
          >
            {!profileImage && <i className="f7-icons" style={{fontSize: '40px', color: '#666'}}>person_fill</i>}
          </div>
          <Button fill onClick={handleImageUpload} style={{maxWidth: '200px', margin: '0 auto'}}>
            Change Photo
          </Button>
        </div>

        {/* Body Measurements Card */}
        <div 
          className="glass-card" 
          style={{
            cursor: 'pointer',
            minHeight: '140px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
          onClick={() => f7.views.main.router.navigate('/measurements/')}
        >
          <div className="card-content centered">
            <h3 style={{
              fontFamily: '-apple-system, SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              margin: '0',
              textAlign: 'center'
            }}>Body Measurements</h3>
          </div>
        </div>

        {/* Settings Button */}
        <Link 
          href="/settings/" 
          className="glass-card" 
          style={{
            textDecoration: 'none', 
            color: 'inherit',
            minHeight: '140px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="card-content centered">
            <h3 style={{
              fontFamily: '-apple-system, SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              margin: '0',
              textAlign: 'center'
            }}>Settings</h3>
          </div>
        </Link>
      </Block>
    </Page>
  );
};

export default ProfilePage; 