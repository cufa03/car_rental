export const manufacturers = [
  'Acura',
  'Alfa Romeo',
  'Aston Martin',
  'Audi',
  'Bentley',
  'BMW',
  'Buick',
  'Cadillac',
  'Chevrolet',
  'Chrysler',
  'Citroen',
  'Dodge',
  'Ferrari',
  'Fiat',
  'Ford',
  'GMC',
  'Honda',
  'Hyundai',
  'Infiniti',
  'Jaguar',
  'Jeep',
  'Kia',
  'Lamborghini',
  'Land Rover',
  'Lexus',
  'Lincoln',
  'Maserati',
  'Mazda',
  'McLaren',
  'Mercedes-Benz',
  'MINI',
  'Mitsubishi',
  'Nissan',
  'Porsche',
  'Ram',
  'Rolls-Royce',
  'Subaru',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo',
];

export const yearsOfProduction = [
  { title: 'Year', value: '' },
  { title: '2015', value: '2015' },
  { title: '2016', value: '2016' },
  { title: '2017', value: '2017' },
  { title: '2018', value: '2018' },
  { title: '2019', value: '2019' },
  { title: '2020', value: '2020' },
  { title: '2021', value: '2021' },
  { title: '2022', value: '2022' },
  { title: '2023', value: '2023' },
];

export const fuels = [
  {
    title: 'Fuel',
    value: '',
  },
  {
    title: 'Gas',
    value: 'Gas',
  },
  {
    title: 'Electricity',
    value: 'Electricity',
  },
];

export const footerLinks = [
  {
    title: 'About',
    links: [
      { title: 'How it works', url: '/' },
      { title: 'Featured', url: '/' },
      { title: 'Partnership', url: '/' },
      { title: 'Bussiness Relation', url: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Events', url: '/' },
      { title: 'Blog', url: '/' },
      { title: 'Podcast', url: '/' },
      { title: 'Invite a friend', url: '/' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { title: 'Discord', url: '/' },
      { title: 'Instagram', url: '/' },
      { title: 'Twitter', url: '/' },
      { title: 'Facebook', url: '/' },
    ],
  },
];

import Image from 'next/image';
import Link from 'next/link';

// const Footer = () => (
//   <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
//     <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
//       <div className='flex flex-col justify-start items-start gap-6'>
//         <Image
//           src='/logo.svg'
//           alt='logo'
//           width={118}
//           height={18}
//           className='object-contain'
//         />
//         <p className='text-base text-gray-700'>
//           Carhub 2023 <br />
//           All Rights Reserved &copy;
//         </p>
//       </div>

//       <div className='footer__links'>
//         {footerLinks.map((item) => (
//           <div key={item.title} className='footer__link'>
//             <h3 className='font-bold'>{item.title}</h3>
//             <div className='flex flex-col gap-5'>
//               {item.links.map((link) => (
//                 <Link
//                   key={link.title}
//                   href={link.url}
//                   className='text-gray-500'
//                 >
//                   {link.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
//       <p>@2023 CarHub. All rights reserved</p>

//       <div className='footer__copyrights-link'>
//         <Link href='/' className='text-gray-500'>
//           Privacy & Policy
//         </Link>
//         <Link href='/' className='text-gray-500'>
//           Terms & Condition
//         </Link>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;
