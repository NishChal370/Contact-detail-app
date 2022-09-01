import { useState } from 'react';
import {UserOneImage, UserTwoImage, UserThreeImage, UserFourImage, UserFiveImage, UserSixImage, UserSevenImage, UserEightImage, UserNineImage, UserTenImage } from "../assets";

const usersImage: string[] = [ UserOneImage, UserTwoImage, UserThreeImage, UserFourImage, UserFiveImage, UserSixImage, UserSevenImage, UserEightImage, UserNineImage, UserTenImage  ];

function getUserImage(): string {

      return usersImage[ Math.floor(Math.random() * usersImage.length) ]
}

export default getUserImage