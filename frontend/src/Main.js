import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import App from '../App';
import Home from './Home'

const MainNavigator = createStackNavigator({
    App: { screen: App },
    Home: { screen: Home },
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);