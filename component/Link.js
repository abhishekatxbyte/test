// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const LinkComponent = ({ children, skipLocaleHandling, ...rest }) => {
//   const router = useRouter();
//   const locale = rest.locale || router.query.locale || "";

//   let href = rest.href || router.asPath;
//   if (href.indexOf("http") === 0) skipLocaleHandling = true;
//   if (locale && !skipLocaleHandling) {
//     href = href
//       ? `/${locale}${href}`
//       : router.pathname.replace("[locale]", locale);
//   }

//   return (
//     <>
//       <Link href={href}>{children}</Link>
//     </>
//   );
// };

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LinkR = ({ href, children }) => {
  const router = useRouter();
  const currentLang = router.query.lang || "en";
  const newHref = currentLang === "en" ? href : `/${currentLang}${href}`;
  return <Link href={newHref}>{children}</Link>;
};

export default LinkR;
