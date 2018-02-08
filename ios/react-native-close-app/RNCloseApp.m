//
//  RNCloseApp.m
//  dayzz
//
//  Created by Nir Levy on 07/02/2018.
//  Copyright © 2018 DayZz. All rights reserved.
//  Released under MIT Licence.
//

#import <Foundation/Foundation.h>
#import "RNCloseApp.h"
#import <React/RCTLog.h>

@implementation RNCloseApp

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(exitApp:(BOOL)isError )
{
  RCTLogTrace(@"RNCloseApp is closing application bacause you asked to.");
  exit(isError?1:0);
}
@end

