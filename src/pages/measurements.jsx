import React, { useState } from 'react';
import {
  Page,
  Navbar,
  List,
  ListItem,
  Block,
  Button,
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
          <List className="no-hairlines-md">
            <ListItem
              title="Height"
              input
              inputType="number"
              inputPlaceholder="Enter height (cm)"
              value={measurements.height}
              onChange={(e) => setMeasurements({...measurements, height: e.target.value})}
            />
            <ListItem
              title="Weight"
              input
              inputType="number"
              inputPlaceholder="Enter weight (kg)"
              value={measurements.weight}
              onChange={(e) => setMeasurements({...measurements, weight: e.target.value})}
            />
            <ListItem
              title="Age"
              input
              inputType="number"
              inputPlaceholder="Enter age"
              value={measurements.age}
              onChange={(e) => setMeasurements({...measurements, age: e.target.value})}
            />
          </List>
        </div>

        <div className="glass-card" style={{marginTop: '20px'}}>
          <Button fill large onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </Block>
    </Page>
  );
};

export default MeasurementsPage; 