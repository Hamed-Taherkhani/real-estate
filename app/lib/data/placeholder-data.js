import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Buy",
    href: "/search?cat=buy",
  },
  {
    title: "Rent",
    href: "/search?cat=rent",
  },
  {
    title: "Mortgage",
    href: "/search?cat=mortgage",
  },
];

export const homesList = [
  {
    price: 520000,
    bed: 3,
    bath: 2,
    sqr: 280,
    city: "New york",
    street: "1911 Bissonnet St",
    postal_address: "",
    lat: "",
    lon: "",
    pictures: ["/images/p0.jpg"],
  },
  {
    price: 520000,
    bed: 3,
    bath: 2,
    sqr: 280,
    city: "New york",
    street: "1911 Bissonnet St",
    postal_address: "",
    lat: "",
    lon: "",
    pictures: ["/images/p1.jpg"],
  },
  {
    price: 520000,
    bed: 3,
    bath: 2,
    sqr: 280,
    city: "New york",
    street: "1911 Bissonnet St",
    postal_address: "",
    lat: "",
    lon: "",
    pictures: ["/images/p2.jpg"],
  },
  {
    price: 520000,
    bed: 3,
    bath: 2,
    sqr: 280,
    city: "New york",
    street: "1911 Bissonnet St",
    postal_address: "",
    lat: "",
    lon: "",
    pictures: ["/images/p3.jpg"],
  },
];

export const footerLinks = [
  {
    title: "Fast access",
    links: navLinks,
  },
  {
    title: "Markets",
    links: [
      {
        title: "Tehran",
        href: "/",
      },
      {
        title: "London",
        href: "/",
      },
      {
        title: "Los angles",
        href: "/",
      },
      {
        title: "Houston",
        href: "/",
      },
    ],
  },
  {
    title: "Contacts",
    links: [
      {
        title: "09120000000",
        href: "tel:09120000000",
      },
      {
        title: "hamedtahi7@gmail.com",
        href: "mailto:hamedtahi7@gmail.com",
      },
    ],
  },
];

export const socialMedia = [
  {
    title: <PiTelegramLogo />,
    href: "/",
  },
  {
    title: <FaInstagram />,
    href: "/",
  },
  {
    title: <FaXTwitter />,
    href: "/",
  },
];
