import React from 'react';
import {Platform, View, Text, Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  Dashboard,
  MediaLibrary,
  More,
  Watch,
  MovieDetails,
} from '../../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import {AppColor, appIcons, colors} from '../../globals/utilities';

const DashboardStack = createStackNavigator();
const WatchStack = createStackNavigator();
const MediaLibraryStack = createStackNavigator();
const MoreStack = createStackNavigator();
const tabBarHeight = responsiveHeight(9);
const MainTab = createBottomTabNavigator();
const MainApp = createStackNavigator();

const DashboardStackScreens = () => {
  return (
    <DashboardStack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'Dashboard'}>
      <DashboardStack.Screen name={'Dashboard'} component={Dashboard} />
    </DashboardStack.Navigator>
  );
};

const WatchStackScreens = () => {
  return (
    <WatchStack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'Watch'}>
      <WatchStack.Screen name={'Watch'} component={Watch} />
    </WatchStack.Navigator>
  );
};

const MediaLibraryStackScreens = () => {
  return (
    <MediaLibraryStack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'MediaLibrary'}>
      <MediaLibraryStack.Screen
        name={'MediaLibrary'}
        component={MediaLibrary}
      />
    </MediaLibraryStack.Navigator>
  );
};

const MoreStackScreens = () => {
  return (
    <MoreStack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'More'}>
      <MoreStack.Screen name={'More'} component={More} />
    </MoreStack.Navigator>
  );
};

const MainTabScreens = props => {
  return (
    <MainTab.Navigator
      barStyle={{backgroundColor: colors.bottomTab}}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        allowFontScaling: true,
        tabBarShowLabel: false,
        gestureEnabled: false,
        tabBarStyle: {
          backgroundColor: colors.bottomTab,
          display: 'flex',
          width: responsiveWidth(100),
          alignSelf: 'center',
          height: tabBarHeight,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          alignItems: 'center',
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderTopWidth: responsiveWidth(0),
          elevation: 5,
          position: 'absolute',
          bottom: 0,
          borderTopLeftRadius: responsiveWidth(5),
          borderTopRightRadius: responsiveWidth(5),
          paddingTop: Platform.OS === 'android' ? null : responsiveHeight(1),
        },
      }}
      initialRouteName={'WatchStackScreens'}>
      <MainTab.Screen
        name={'DashboardStackScreens'}
        component={DashboardStackScreens}
        options={() => ({
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tab(tabBarHeight)}>
                <Image source={appIcons.dashboard} style={styles.icon(5.5)} />

                <Text
                  style={{
                    ...styles.titleText,
                    color: focused ? AppColor.white : AppColor.unActiveTab,
                  }}>
                  {'Dashboard'}
                </Text>
              </View>
            );
          },
        })}
      />

      <MainTab.Screen
        name={'WatchStackScreens'}
        component={WatchStackScreens}
        options={props => ({
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tab(tabBarHeight)}>
                <Image source={appIcons.watch} style={styles.icon(5.5)} />
                <Text
                  style={{
                    ...styles.titleText,
                    color: focused ? AppColor.white : AppColor.unActiveTab,
                  }}>
                  {'Watch'}
                </Text>
              </View>
            );
          },
        })}
      />

      <MainTab.Screen
        name={'MediaLibraryStackScreens'}
        component={MediaLibraryStackScreens}
        options={props => ({
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tab(tabBarHeight)}>
                <Image source={appIcons.media} style={styles.icon(5.5)} />
                <Text
                  style={{
                    ...styles.titleText,
                    color: focused ? AppColor.white : AppColor.unActiveTab,
                  }}>
                  {'Media Library'}
                </Text>
              </View>
            );
          },
        })}
      />

      <MainTab.Screen
        name={'MoreStackScreens'}
        component={MoreStackScreens}
        options={props => ({
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.tab(tabBarHeight)}>
                <Image source={appIcons.more} style={styles.icon(6)} />
                <Text
                  style={{
                    ...styles.titleText,
                    color: focused ? AppColor.white : AppColor.unActiveTab,
                  }}>
                  {'More'}
                </Text>
              </View>
            );
          },
        })}
      />
    </MainTab.Navigator>
  );
};

const App = () => {
  return (
    <MainApp.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      defaultScreenOptions={{gestureEnabled: false}}
      initialRouteName={'MainTabScreens'}>
      <MainApp.Screen name={'MainTabScreens'} component={MainTabScreens} />
      <MainApp.Screen name={'MovieDetails'} component={MovieDetails} />
    </MainApp.Navigator>
  );
};
export default App;
