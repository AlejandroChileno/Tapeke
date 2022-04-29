import React from 'react';
import { PermissionsAndroid, Platform } from "react-native";
import fetch_blob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';
import CameraRoll from "@react-native-community/cameraroll";



class ImgSaveGallery {
  static async hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  static async guardar(qr) {
    if (Platform.OS === "android" && !(await ImgSaveGallery.hasAndroidPermission())) {
      console.log("Denied");
      return;
    }
  
    // fetch_blob.fs.createFile();
    // RNFS.writeFile(file_path, qr, 'base64').then((resp) => {
    //   console.log("guardado", resp);
    // })
    // .catch((error) => {
    //   alert(JSON.stringify(error));
    // });
    

  };
}
export default ImgSaveGallery;

