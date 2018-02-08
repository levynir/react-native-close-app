/**
 *
 *  services/exit/index.js
 *  dayzz
 *
 *  Created by Nir Levy on 07/02/2018.
 *  Copyright © 2018 DayZz. All rights reserved.
 *  Released under MIT Licence.
 *
 */


import {NativeModules, BackHandler, Platform} from 'react-native';

/**
 *
 * Exit the current application.
 * On Android uses the built-in RN BackHandler module
 * On iOS uses a custom NativeModule
 *
 * @param isError (iOS only: if true exit with status code = 1, else exit with status code = 0)
 * @return {void}
 */
export function exitApp(isError=false) {
    if ( Platform.OS === 'android' ) {
        BackHandler.exitApp();
    } else {
        NativeModules.RNCloseApp.exitApp(isError);
    }
}