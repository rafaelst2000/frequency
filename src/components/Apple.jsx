import React from "react";
import { SvgXml } from "react-native-svg";
export default function Google() {
  const svgMarkup = `<svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d)">
  <rect x="9" y="9" width="45" height="45" rx="5" fill="white"/>
  </g>
  <path d="M37.7068 32.1249C37.6963 30.3267 38.511 28.9714 40.1563 27.9721C39.2361 26.6537 37.8439 25.9286 36.0088 25.7889C34.2712 25.6518 32.3701 26.8014 31.674 26.8014C30.9383 26.8014 29.2561 25.8363 27.9325 25.8363C25.2008 25.8785 22.2978 28.0143 22.2978 32.3596C22.2978 33.6437 22.5325 34.9699 23.0018 36.3357C23.6294 38.134 25.8917 42.5399 28.2515 42.4688C29.4855 42.4397 30.3583 41.5934 31.964 41.5934C33.5223 41.5934 34.3292 42.4688 35.7055 42.4688C38.0865 42.4345 40.1326 38.4293 40.7285 36.6258C37.5354 35.1202 37.7068 32.2172 37.7068 32.1249ZM34.9356 24.0829C36.2724 22.4956 36.1511 21.0507 36.1116 20.5312C34.9303 20.5998 33.5645 21.3354 32.7867 22.2398C31.9298 23.2102 31.4261 24.4099 31.5342 25.7625C32.8104 25.8601 33.9759 25.2035 34.9356 24.0829Z" fill="black"/>
  <defs>
  <filter id="filter0_d" x="0" y="0" width="69" height="69" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dx="3" dy="3"/>
  <feGaussianBlur stdDeviation="6"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
  </svg>
  
  `;

  const Google = () => <SvgXml xml={svgMarkup} width="60px" height="60px" />;

  return <Google />;
}