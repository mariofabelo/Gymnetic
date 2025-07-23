import React, { useState, useEffect } from 'react';
import { getDevice }  from 'framework7/lite-bundle';
import {
  f7,
  f7ready,
  App,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import capacitorApp from '../js/capacitor-app';
import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const device = getDevice();
  
  // Framework7 Parameters
  const f7params = {
    name: 'My App', // App name
    theme: 'ios', // Automatic theme detection
    
    // App store
    store: store,
    // App routes
    routes: routes,
    
    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
    // Safe area settings
    safeAreas: true,
    // Ensure proper handling of iOS status bar and safe areas
    iosTranslucentBars: false,
    iosTranslucentModals: false,
    
    // Add navigation events
    on: {
      tabShow: function () {
        const currentView = f7.views.current;
        if (currentView) {
          const currentPage = currentView.router.currentPageEl;
          if (currentPage) {
            const pageContent = currentPage.querySelector('.page-content');
            if (pageContent) {
              pageContent.scrollTo(0, 0);
            }
          }
        }
      },
      pageInit: function (page) {
        const pageContent = page.$el.find('.page-content')[0];
        if (pageContent) {
          pageContent.scrollTo(0, 0);
        }
      }
    }
  };

  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  
  f7ready(() => {
    // Init capacitor APIs (see capacitor-app.js)
    if (f7.device.capacitor) {
      capacitorApp.init(f7);
    }
    // Call F7 APIs here
  });

  return (
    <App { ...f7params }>

        {/* Views/Tabs container */}
        <Views tabs>
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar icons bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconMd="material:home" text="Home" />
            <Link tabLink="#view-start" iconIos="f7:plus_square" iconMd="material:add_box" text="Start" />
            <Link tabLink="#view-settings" iconIos="f7:line_horizontal_3" iconMd="material:menu" text="More" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/" />

          {/* Start View */}
          <View id="view-start" name="start" tab url="/start/" />

          {/* Settings View */}
          <View id="view-settings" name="settings" tab url="/settings/" />

        </Views>

      {/* Popup */}
      <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup>

      <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.<br />Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  )
}
export default MyApp;