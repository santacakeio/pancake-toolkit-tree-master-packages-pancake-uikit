import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://santacake.io",
      },
      {
        label: "Blog",
        href: "https://docs.santacake.io",
      },
      {
        label: "Community",
        href: "https://docs.santacake.io",
      },
      {
        label: "CAKE",
        href: "https://docs.santacake.io",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "#",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.santacake.io/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.santacake.io/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.santacake.io/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.santacake.io",
      },
      {
        label: "Games",
        href: "https://game.santacake.io",
      },
    
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/santacake_io",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/santacake",
      },
      
    ],
  },
  
  
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/santacakeio/",
  },

];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
