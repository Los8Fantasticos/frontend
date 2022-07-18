import React from 'react';
import { FiShoppingBag, FiCreditCard } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Inicio',
        icon: <FiShoppingBag />,
      },
    ],
  },
];

export const linksAdmin = [
  {
    title: 'Admin',
    links: [
      {
        name: 'Usuarios',
        icon: <RiContactsLine />,
      },
      {
        name: 'Privilegios',
        icon: <IoMdContacts />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'Mi Perfil',
    desc: 'Ajustes de Cuenta',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'Mi Casilla',
    desc: 'Mensajes & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'Mis Tareas',
    desc: 'To-do & Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];