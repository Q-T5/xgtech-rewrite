import { computed } from 'vue';
import { ref } from 'vue';

export default function useServicesComposable() {
  const servicesOffered = [
    {
      serviceName: 'PSP(Play Station Portable) Services',
      options: [
        {
          action: 'Install',
          component: 'PSP Games',
          cost: 'At least 100Ksh',
        },
        {
          action: 'Chipping',
          component: 'PSP Console',
          cost: 'At least 500Ksh',
        },
        {
          action: 'Repair/ Replace',
          component: 'Analog Stick(Button)',
          cost: 'At least 1500Ksh',
        },
        {
          action: 'Repair',
          component: 'PSP Charging Problems',
          cost: 'At least 1800Ksh',
        },
        {
          action: 'Repair/ Replace',
          component: 'Broken PSP Screens',
          cost: 'At least 3500Ksh',
        },
        {
          action: 'Replace',
          component: 'PSP Motherboard',
          cost: 'At least 4500Ksh',
        },
      ],
    },
    {
      serviceName: 'PS2(Play Station 2) Services',
      options: [
        {
          action: 'Install',
          component: 'PS2 USB Games',
          cost: 'At Least 100Ksh',
        },
        {
          action: 'Repair/ Replace',
          component: 'PS2 Power Switch',
          cost: 'At Least 1000Ksh',
        },
        {
          action: 'Repair',
          component: 'PS2 Lens',
          cost: 'At Least 1500Ksh',
        },
        {
          action: 'Chipping',
          component: 'PS2 Console',
          cost: 'At Least 2000Ksh',
        },
        {
          action: 'Repair',
          component: 'PS2 Motherboard',
          cost: 'At Least 4500Ksh',
        },
      ],
    },
    {
      serviceName: 'PS3(Play Station 3) Services',
      options: [
        {
          action: 'Repair',
          component: 'PS3 Gamepads e.g. analog stick replacement',
          cost: 'At Least 500Ksh',
        },
        {
          action: 'Install',
          component: 'PS3 Games',
          cost: 'At Least 500Ksh',
        },
        {
          action: 'Chipping/Jailbreak',
          component: 'PS3 Console',
          cost: 'At Least 1500Ksh',
        },
        {
          action: 'Repair/Replace',
          component: 'PS3 Lens',
          cost: 'At Least 5300Ksh',
        },
        {
          action: 'Repair',
          component: 'PS3 Power On Issues',
          cost: 'At Least 6500Ksh',
        },
        {
          action: 'Repair',
          component: 'PS3 Failure On-Screen Display',
          cost: 'At Least 6500Ksh',
        },
        {
          action: 'Repair',
          component: 'PS3 Motherboard',
          cost: 'At Least 7500Ksh',
        },
      ],
    },
    {
      serviceName: 'PS4(Play Station 4) Services',
      options: [
        {
          action: 'Repair',
          component: 'PS4 Gamepads',
          cost: 'At Least 800Ksh',
        },
        {
          action: 'Replace',
          component: 'Cross, Square, Triangle & Circle Rubber',
          cost: 'At Least 800Ksh',
        },
        {
          action: 'Repair',
          component: 'PS4 Charging Issues & Port',
          cost: 'At Least 1200Ksh',
        },
        {
          action: 'Diagnose & Fix',
          component: 'PS4 Software Issues',
          cost: 'At Least 2500Ksh',
        },
        {
          action: 'Repair',
          component: 'PS4 Overheating Issues',
          cost: 'At Least 2500Ksh',
        },
        {
          action: 'General Servcing',
          component: 'PS4 Console',
          cost: 'At Least 2500Ksh',
        },
        {
          action: 'Replace',
          component: 'PS4 HDMI Port',
          cost: 'At Least 4500Ksh',
        },
        {
          action: 'Repair',
          component: 'PS4 Disk Drive Issues',
          cost: 'At Least 4500Ksh',
        },
        {
          action: 'Upgrade/Replace',
          component: 'PS4 Hard Disk',
          cost: 'At Least 4500Ksh',
        },
        {
          action: 'Replace',
          component: 'PS4 Fan',
          cost: 'At Least 4500Ksh',
        },
        {
          action: 'Repair',
          component: 'PS4 Failure On-Screen Display',
          cost: 'At Least 6500Ksh',
        },
      ],
    },
    {
      serviceName: 'PS5(Play Station 5) Services',
      options: [
        {
          action: 'Repair',
          component: 'PS5 Analog Stick',
          cost: 'At Least 500Ksh',
        },
        {
          action: 'Repair',
          component: 'PS5 R1, R2 Rubber',
          cost: 'At Least 800Ksh',
        },
        {
          action: 'Replace',
          component: 'Cross, Square, Triangle & Circle Rubber',
          cost: 'At Least 800Ksh',
        },
        {
          action: 'Repair',
          component: 'PS5 Gamepad Controller Power Issues',
          cost: 'At Least 1200Ksh',
        },
      ],
    },
    {
      serviceName: 'XBOX 360 Services',
      options: [
        {
          action: 'Install',
          component: 'XBOX 360 Games',
          cost: 'At Least 500Ksh',
        },
        {
          action: 'Repair/Replace',
          component: 'XBOX 360 Gamepad Analog Shaft',
          cost: 'At Least 500Ksh',
        },
        {
          action: 'Replace',
          component: 'Gamepad Controller Cable',
          cost: 'At Least 500Ksh',
        },
        {
          action: 'Repair',
          component: 'XBOX 360 Freezing',
          cost: 'At Least 1500Ksh',
        },
        {
          action: 'Chipping',
          component: 'XBOX 360 Console',
          cost: 'At Least 3500Ksh',
        },
        {
          action: 'Repair',
          component: 'XBOX 360 Lens',
          cost: 'At Least 4500Ksh',
        },
        {
          action: 'Repair',
          component: 'XBOX 360 Death Ring',
          cost: 'At Least 6500Ksh',
        },
      ],
    },
    {
      serviceName: 'XBOX ONE Services',
      options: [
        {
          action: 'Repair',
          component: 'XBOX ONE Gamepad',
          cost: 'At Least 1000Ksh',
        },
        {
          action: 'Diagnose & Repair',
          component: 'XBOX ONE Software Issues',
          cost: 'At Least 2500Ksh',
        },
        {
          action: 'Repair',
          component: 'Damaged XBOX HDMI Port',
          cost: 'At Least 4500Ksh',
        },
        {
          action: 'Upgrade',
          component: 'XBOX ONE Hard Disk',
          cost: 'At Least 5500Ksh',
        },
        {
          action: 'Repair',
          component: 'XBOX ONE Disk Drive Issues',
          cost: 'At Least 6500Ksh',
        },
        {
          action: 'Repair',
          component: 'XBOX One On-Screen Display Failure',
          cost: 'At Least 6500Ksh',
        },
      ],
    },
    {
      serviceName: 'Laptop Services',
      options: [
        {
          action: 'Install',
          component: 'Laptop Games',
          cost: 'At Least 50Ksh',
        },
        {
          action: 'Upgrade',
          component: 'Laptop RAM',
          cost: 'At Least 1000Ksh',
        },
        {
          action: 'Repair',
          component: 'Laptop Speakers',
          cost: 'At Least 2000Ksh',
        },
        {
          action: 'Upgrade',
          component: 'Laptop SSD/HDD Replacement',
          cost: 'At Least 2950Ksh',
        },
        {
          action: 'Repair',
          component: 'Laptop Charging Problems',
          cost: 'At Least 3000Ksh',
        },
        {
          action: 'Repair/Replace',
          component: 'Broken Laptop Hinges',
          cost: 'At Least 3000Ksh',
        },
        {
          action: 'Replace',
          component: 'Laptop Keyboards',
          cost: 'At Least 3000Ksh',
        },
        {
          action: 'Replace',
          component: 'Broken Laptop Screen',
          cost: 'At Least 7500Ksh',
        },
      ],
    },
    {
      serviceName: 'Desktop Computer Services',
      options: [
        {
          action: 'Install',
          component: 'Computer Games',
          cost: 'At Least 50Ksh',
        },
        {
          action: 'Upgrade/Replace',
          component: 'Desktop Cooler',
          cost: 'At Least 500Ksh',
        },
        {
          action: 'Repair',
          component: 'Graphics Card(AMD Radeon, RTX, GTX)',
          cost: 'At Least 5500Ksh',
        },
      ],
    },
  ];
  const filteredServicesOffered = computed(() => {
    return servicesOffered;
  });

  return {
    servicesOffered,
    filteredServicesOffered,
  };
}
