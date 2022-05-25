// Import the functions you need from the SDKs you need
//import messaging from '@react-native-firebase/messaging';
//
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { Notifications } from 'react-native-notifications';

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

class Firebase {

    static async init() {
        await sleep(500);
        // await messaging().hasPermission();
        await messaging().requestPermission({
            sound: true,
            announcement: true,
            providesAppNotificationSettings: true
        });
        // await messaging().setAutoInitEnabled(true);
        messaging().getToken().then(fcmToken => {
            if (fcmToken) {
                console.log(fcmToken);
            }
        }).catch(err => {
            console.log(err.message);
        });
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log('Message received. ', remoteMessage);
            Notifications.postLocalNotification({
                title: 'Tapeke',
                body: remoteMessage.notification.body,
            });
            // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    }
}
export default Firebase;