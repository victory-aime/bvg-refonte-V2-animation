import { PhoneRingsIcon, MailIcon } from "_assets/svg";
import { RiMapPin2Fill } from "react-icons/ri";

const serviceGallery = [
  {
    image: "/assets/images/service/dev-mob.png",
    text: "Development Mobile",
  },
  {
    image: "/assets/images/service/dev-web.png",
    text: "Development Web",
  },
  {
    image: "/assets/images/service/ui-ux.png",
    text: "Design UI/UX",
  },
  {
    image: "/assets/images/service/graphic.png",
    text: "Graphic",
  },
  {
    image: "/assets/images/service/refonte.png",
    text: "Refonte",
  },
  {
    image: "/assets/images/service/consulting.png",
    text: "Consulting",
  },
];

const aboutUsGallery = [
  {
    img: "/assets/images/about/perfect.png",
    id: 1,
  },
  {
    img: "/assets/images/about/planning.png",
    id: 2,
  },
  {
    img: "/assets/images/about/priority.png",
    id: 3,
  },
];

const stats = [
  { value: 20, label: "Clients Satisfaits", suffix: "+" },
  { value: 24, label: "équipe Experte", suffix: "H" },
  { value: 8, label: "Demandes par jour", suffix: "+" },
];

const links = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "",
    subMenu: [
      { label: "Développement Site Web", href: "/service/web-dev" },
      { label: "Développement App Mobile", href: "/service/mobile-dev" },
      { label: "Design", href: "/service/web-dev" },
      { label: "Design Graphique", href: "/service/mobile-dev" },
      { label: "Refonte & Maintenance", href: "/service/refonte" },
      { label: "Consulting IT", href: "/service/consulting" },
    ],
  },
  {
    label: "A propos",
    href: "",
  },
  { label: "Contact", href: "" },
];

const socialLinks = [
  {
    icon: "/assets/images/social-media/Facebook.png",
    link: "Avenue Ibn Khaldoun, Suisse, 400, Sousse, Tunisie",
  },
  {
    icon: "/assets/images/social-media/Instagram.png",
    link: "+(216) 51 719 140 ",
  },
  {
    icon: "/assets/images/social-media/TikTok.png",
    link: "contact.bgv.innovation@gmail.com",
  },
  {
    icon: "/assets/images/social-media/Linkedin.png",
    link: "https://www.bvg-innovation.tech",
  },
];

const renderContacts = [
  {
    icon: <RiMapPin2Fill />,
    label: "Avenue Ibn Khaldoun, Suisse, 400, Sousse, Tunisie",
  },
  { icon: <PhoneRingsIcon fill={"#fff"} />, label: "+(216) 51 719 140 " },
  {
    icon: <MailIcon fill={"#fff"} />,
    label: "contact.bgv.innovation@gmail.com",
  },
];

export {
  links,
  serviceGallery,
  aboutUsGallery,
  stats,
  socialLinks,
  renderContacts,
};
