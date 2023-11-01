// components/Navbar.js

// import LinkComponent from "@/component/Link";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <LinkComponent href="/">Home</LinkComponent>
//         </li>
//         <li>
//           <LinkComponent href="de/about">About</LinkComponent>
//         </li>
//         {/* Add more navigation links here */}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// components/Navbar.js
// components/Navbar.js

import LinkR from "@/component/Link";

const Navbar = () => {
  return (
    <nav>
      <LinkR href={`/`}>Home</LinkR>
      <LinkR href={`/about`}>About</LinkR>
    </nav>
  );
};

export default Navbar;
