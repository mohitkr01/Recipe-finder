// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiUrl: 'https://recipe-finder-server.herokuapp.com/',
  pwdEncryptionKey:
    'f6ba631f32206fc158e5b094671d894c74620127ab1b8dc1463babf4dc9a52f350655f5e8506e6b3793cfd5dc9cd3f385158a0cbd4146eff7e6795f9a297a651',
  firebaseConfig: {
    apiKey: 'AIzaSyD6TJUyJ4MIXRUqBk6CAN9Swp90xFyTmJ8',
    authDomain: 'recipe-finder-a7ec2.firebaseapp.com',
    databaseURL: 'https://recipe-finder-a7ec2.firebaseio.com',
    projectId: 'recipe-finder-a7ec2',
    storageBucket: 'recipe-finder-a7ec2.appspot.com',
    messagingSenderId: '73872248307',
    appId: '1:73872248307:web:b8d9a32e0c5e83888d5686',
    measurementId: 'G-7H82RM8H9H',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
