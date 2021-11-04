import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

//import all the screens we are going to switch
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SymptomsPage from "./SymptomsPage";
import RegisterPage from "./RegisterPage";
import MedicationInfoPage from "./MedicationInfoPage";
import RefillsPage from "./RefillsPage";

//Constant which holds all the screens like index of any book
const App = createStackNavigator({
        HomePage: {
          screen: HomePage,
          navigationOptions: {
              header: null // Will hide header for the page - we want this
          }
        },
        LoginPage: {
          screen: LoginPage,
          navigationOptions: {
              header: null
          }
        },
        SymptomsPage: {
            screen: SymptomsPage,
            navigationOptions: {
                header: null
            }
        },
        RegisterPage: {
            screen: RegisterPage,
            navigationOptions: {
                header: null
            }
        },
        MedicationInfoPage: {
            screen: MedicationInfoPage,
            navigationOptions: {
                header: null
            }
        },
        RefillsPage: {
            screen: RefillsPage,
            navigationOptions: {
                header: null
            }
        },
    },
    {
      initialRouteName: 'LoginPage', //Makes the LoginPage the first main page
    }
);
export default createAppContainer(App);