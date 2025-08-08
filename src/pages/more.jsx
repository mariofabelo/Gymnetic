import React from 'react';
import {
  Page,
  Navbar,
  Block,
  Link,
} from 'framework7-react';

const MorePage = () => (
  <Page name="more" className="activity-page">
    {/* Page content */}
    <Block className="activity-content">
      {/* Page Title */}
      <div className="page-title">
        <h1>More</h1>
      </div>

      {/* More Options */}
      <div className="more-options">
        {/* Stats Button */}
        <Link href="/stats/" className="glass-card more-option-card">
          <div className="card-content centered">
            <h3>Stats</h3>
          </div>
        </Link>

        {/* Connect Button */}
        <Link href="/connect/" className="glass-card more-option-card">
          <div className="card-content centered">
            <h3>Connect</h3>
          </div>
        </Link>

        {/* Customise AI Trainer Button */}
        <Link href="/ai-trainer/" className="glass-card more-option-card">
          <div className="card-content centered">
            <h3>Customise AI Trainer</h3>
          </div>
        </Link>

        {/* Privacy Policy Button */}
        <div className="glass-card more-option-card">
          <div className="card-content centered">
            <h3>Privacy Policy</h3>
          </div>
        </div>

        {/* Terms of Service Button */}
        <div className="glass-card more-option-card">
          <div className="card-content centered">
            <h3>Terms of Service</h3>
          </div>
        </div>
      </div>
    </Block>
  </Page>
);

export default MorePage;
