import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

const StartPage = () => {
  return (
    <Page name="start" className="activity-page">
      <Navbar />
      <Block className="activity-content">
        {/* Page Title */}
        <div className="page-title">
          <h1>Start Workout</h1>
        </div>
      </Block>
    </Page>
  );
};

export default StartPage;