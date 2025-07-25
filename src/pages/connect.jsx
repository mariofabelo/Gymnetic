import React from 'react';
import {
  Page,
  Navbar,
  Block,
  Link,
} from 'framework7-react';

// Import custom logos
import garminLogo from '../logos_connect/Garmin Logo Without Delta-black-high-res.png';
import appleWatchLogo from '../logos_connect/apple watch logo.png';
import googleHealthLogo from '../logos_connect/Google health logo.png';
import fitbitLogo from '../logos_connect/fitbit.png';
import polarLogo from '../logos_connect/Polar logo.png';
import samsungHealthLogo from '../logos_connect/Samsung Health.png';
import whoopLogo from '../logos_connect/WHOOP_Logo_Black.png';

const ConnectPage = () => (
  <Page name="connect" className="activity-page">
    {/* Top Navbar */}
    <Navbar backLink="Back" sliding={true}>
    </Navbar>

    {/* Page content */}
    <Block className="connect-page-content">
      {/* Page Title */}
      <div className="page-title connect-title">
        <h1>Connect</h1>
      </div>

      <div className="device-grid">
      <div className="device-card" data-device="google">
          <div className="device-logo">
            <img src={googleHealthLogo} alt="Google Health" className="device-logo-img" />
          </div>
        </div>
        
        <div className="device-card" data-device="samsunghealth">
          <div className="device-logo">
            <img src={samsungHealthLogo} alt="Samsung Health" className="device-logo-img" />
          </div>
        </div>

        <div className="device-card" data-device="applewatch">
          <div className="device-logo">
            <img src={appleWatchLogo} alt="Apple Watch" className="device-logo-img" />
          </div>
        </div>

        <div className="device-card" data-device="fitbit">
          <div className="device-logo">
            <img src={fitbitLogo} alt="Fitbit" className="device-logo-img" />
          </div>
        </div>

        <div className="device-card" data-device="garmin">
          <div className="device-logo">
            <img src={garminLogo} alt="Garmin" className="device-logo-img" />
          </div>
        </div>

        <div className="device-card" data-device="polar">
          <div className="device-logo">
            <img src={polarLogo} alt="Polar" className="device-logo-img" />
          </div>
        </div>

        <div className="device-card whoop-card" data-device="whoop">
          <div className="device-logo">
            <img src={whoopLogo} alt="WHOOP" className="device-logo-img" />
          </div>
        </div>
      </div>
    </Block>
  </Page>
);

export default ConnectPage; 