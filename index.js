import { Navigation } from 'react-native-navigation';
import { AppRegistry } from 'react-native';
import App from './App';
import Login from './screens/login';
Navigation.registerComponent('Login', () => Login);

Navigation.startSingleScreenApp({
	screen : {
		screen : 'Login',
		title : 'Login'
	}
});