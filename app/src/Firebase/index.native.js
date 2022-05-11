// Import the functions you need from the SDKs you need
//import messaging from '@react-native-firebase/messaging';
//
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

class Firebase {

    static async init() {
        await messaging().requestPermission({
            sound: false,
            announcement: true,
        });
        messaging().getToken().then(fcmToken => {
            if (fcmToken) {
                console.log(fcmToken);
            }
        }).catch(err => {
            console.log('An error occurred while retrieving token. ', err);
        });
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log('Message received. ', remoteMessage);
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    }
}
export default Firebase;