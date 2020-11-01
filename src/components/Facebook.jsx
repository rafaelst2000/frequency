import React from "react";
import { SvgXml } from "react-native-svg";
export default function Google() {
  const svgMarkup = `<svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d)">
  <rect x="9" y="9" width="45" height="45" rx="5" fill="white"/>
  </g>
  <g clip-path="url(#clip0)">
  <rect width="27" height="27" transform="translate(18 18)" fill="white"/>
  <path d="M43.5098 45.0001C44.3327 45.0001 45 44.3329 45 43.5099V19.4902C45 18.6671 44.3327 18 43.5098 18H19.4902C18.667 18 18 18.6671 18 19.4902V43.5099C18 44.3329 18.667 45.0001 19.4902 45.0001H43.5098Z" fill="#395185"/>
  <path d="M36.6295 45.0001V34.5442H40.1392L40.6646 30.4695H36.6295V27.8678C36.6295 26.688 36.9572 25.884 38.649 25.884L40.8068 25.883V22.2386C40.4334 22.1889 39.1526 22.0779 37.6626 22.0779C34.5514 22.0779 32.4216 23.9769 32.4216 27.4643V30.4695H28.903V34.5442H32.4216V45.0001H36.6295Z" fill="white"/>
  </g>
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
  <clipPath id="clip0">
  <rect width="27" height="27" fill="white" transform="translate(18 18)"/>
  </clipPath>
  </defs>
  </svg>
  
  `;

  const Google = () => <SvgXml xml={svgMarkup} width="60px" height="60px" />;

  return <Google />;
}