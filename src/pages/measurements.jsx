import React, { useState } from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  Block,
  f7
} from 'framework7-react';

const MeasurementsPage = () => {
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    age: '',
  });

  const handleSave = () => {
    f7.toast.show({
      text: 'Measurements updated!',
      position: 'center',
      closeTimeout: 2000,
    });
    f7.views.main.router.back();
  };

  return (
    <Page name="measurements" className="activity-page">
      <Navbar title="Body Measurements" backLink="Back" />
      
      <Block className="activity-content">
        <div className="glass-card">
          <List className="no-hairlines-md measurements-list">
            <ListInput
              label="Height"
              type="number"
              placeholder="Enter height (cm)"
              value={measurements.height}
              onInput={(e) => setMeasurements({ ...measurements, height: e.target.value })}
              inputmode="decimal"
              min="0"
              max="300"
              step="0.1"
              clearButton
            />
            <ListInput
              label="Weight"
              type="number"
              placeholder="Enter weight (kg)"
              value={measurements.weight}
              onInput={(e) => setMeasurements({ ...measurements, weight: e.target.value })}
              inputmode="decimal"
              min="0"
              max="500"
              step="0.1"
              clearButton
            />
            <ListInput
              label="Age"
              type="number"
              placeholder="Enter age"
              value={measurements.age}
              onInput={(e) => setMeasurements({ ...measurements, age: e.target.value })}
              inputmode="numeric"
              min="0"
              max="120"
              step="1"
              clearButton
            />
          </List>
        </div>

        <div
          className="glass-card selected-glass-card clickable-card compact"
          style={{ marginTop: '20px' }}
          role="button"
          tabIndex={0}
          onClick={handleSave}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSave(); }}
        >
          <div className="card-content centered">
            <h3>Save Changes</h3>
          </div>
        </div>
      </Block>
    </Page>
  );
};

export default MeasurementsPage; 