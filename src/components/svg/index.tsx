// src/components/svg/index.tsx
import React from "react";

export const SolarPanelIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="12"
        width="48"
        height="32"
        rx="2"
        stroke="#28a745"
        stroke-width="3"
      />
      <path d="M8 28H56M24 12V44M40 12V44" stroke="#0056b3" stroke-width="2" />
      <path
        d="M20 44L16 52H48L44 44"
        stroke="#28a745"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const SolarPowerPlantIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 40L15 25H30L25 40H10Z" fill="#28a745" />
      <path d="M35 40L40 25H55L50 40H35Z" fill="#28a745" />
      <path
        d="M32 10V20M32 10L28 14M32 10L36 14"
        stroke="#0056b3"
        stroke-width="3"
        stroke-linecap="round"
      />
      <rect x="5" y="50" width="54" height="4" rx="2" fill="#0056b3" />
    </svg>
  );
};

export const RooftopSolarIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 8L56 28V52H8V28L32 8Z"
        stroke="#0056b3"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <rect x="20" y="30" width="24" height="16" fill="#28a745" />
      <path d="M20 38H44M28 30V46M36 30V46" stroke="white" stroke-width="1" />
    </svg>
  );
};

export const GroundMountedIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 42L15 22H49L54 42H10Z"
        stroke="#0056b3"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path d="M15 32H49M25 22V42M39 22V42" stroke="#28a745" stroke-width="2" />
      <path
        d="M22 42V52M42 42V52"
        stroke="#0056b3"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M8 52H56"
        stroke="#0056b3"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const WaterPumpIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="40" r="12" stroke="#28a745" stroke-width="3" />
      <path
        d="M44 40H54V20C54 20 45 15 40 20"
        stroke="#0056b3"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path d="M26 10L38 10M32 10V28" stroke="#28a745" stroke-width="3" />
    </svg>
  );
};

export const WaterHeaterIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="18"
        y="10"
        width="28"
        height="36"
        rx="14"
        stroke="#28a745"
        stroke-width="3"
      />
      <path d="M18 20H46M18 36H46" stroke="#0056b3" stroke-width="2" />
      <path
        d="M10 46H54"
        stroke="#0056b3"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M46 30L52 30V38"
        stroke="#0056b3"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const StreetLightIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 56V15C20 10 25 8 32 8H40"
        stroke="#0056b3"
        stroke-width="3"
        stroke-linecap="round"
      />
      <rect x="35" y="12" width="18" height="6" rx="3" fill="#28a745" />
      <circle cx="44" cy="22" r="3" fill="#ffc107" />
    </svg>
  );
};

export const SolarFencingIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="12" width="6" height="40" rx="1" fill="#0056b3" />
      <rect x="29" y="12" width="6" height="40" rx="1" fill="#0056b3" />
      <rect x="46" y="12" width="6" height="40" rx="1" fill="#0056b3" />
      <path
        d="M12 22H52M12 32H52M12 42H52"
        stroke="#28a745"
        stroke-width="2"
        stroke-dasharray="4 2"
      />
      <path
        d="M32 18L28 24H36L32 30"
        stroke="#ffc107"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SolarLanternIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 18C22 14 26 10 32 10C38 10 42 14 42 18"
        stroke="#0056b3"
        stroke-width="3"
        stroke-linecap="round"
      />
      <rect x="20" y="18" width="24" height="6" rx="2" fill="#0056b3" />
      <rect
        x="22"
        y="24"
        width="20"
        height="24"
        stroke="#28a745"
        stroke-width="3"
      />
      <circle cx="32" cy="36" r="6" fill="#ffc107" />
      <rect x="18" y="48" width="28" height="6" rx="2" fill="#0056b3" />
    </svg>
  );
};
