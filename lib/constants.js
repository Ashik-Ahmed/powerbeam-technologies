export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://powerbeam.com.bd";
export const SITE_NAME = "Powerbeam Technologies";
export const CONTACT = {
  address: "House - 4 (1st floor), Road - 3, Sector - 17, Uttara Model Town, Dhaka-1230, Bangladesh",
  phone: "+8801799608805",
  phoneDisplay: "+880 1799-608805",
  email: "powerbeamtech.bd@gmail.com",
  hours: "Sat – Thu (10 AM – 7 PM)",
  whatsapp: "https://wa.me/8801799608805",
  mapEmbed: "https://www.google.com/maps?q=Uttara+Sector+17+Dhaka&output=embed",
};
export const NAV = [
  {label:"Home",href:"/"},
  {label:"About Us",href:"/about"},
  {label:"Products",href:"/products",mega:true},
  {label:"Solutions",href:"/solutions"},
  {label:"Services",href:"/services"},
  {label:"Partnership",href:"/partnership"},
  {label:"Resources",href:"/resources"},
];
export const STATS = [
  {value:30,label:"Countries Served by Crown Micro",suffix:"+"},
  {value:350,label:"kW Max On-Grid Capacity",suffix:"kW"},
  {value:99,label:"% Max Conversion Efficiency",suffix:"%"},
  {value:10,label:"Years Inverter Warranty",suffix:"Y"},
];
export const CERTS = ["ISO 9001","IEC 62109","CE Certified","IP66 Rated","BSTI Compliant","IDCOL Aligned"];