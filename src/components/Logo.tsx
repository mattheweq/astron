import { useEffect, useState } from 'react';
const logoPath = "../../public/imgs/logo.png";

export default function GetPathLink() {
  const [isHomePage, setisHomePage] = useState(false)
  const [homeLinkHref, setHomeLinkHref] = useState("/astron")
  const [blogOrLogo, setblogOrLogo] = useState(true)

  useEffect(() => {
    const { pathname } = window.location
    const isBlogPage = pathname.startsWith('/astron/blog/')
    const isHomePage = pathname == '/astron/'
    const newHomeLinkHref = isBlogPage ? '/astron/blog' : '/astron/'
    setHomeLinkHref(newHomeLinkHref)
    !isBlogPage && setblogOrLogo(false)
    isHomePage && setisHomePage(true)

  }, [])

  return (
    
<>
  {
  !isHomePage ? (
    <a href={homeLinkHref}>
      {
      blogOrLogo ? (
        <h1 className="text-xl text-white m-2 slideLeft">All Posts</h1>
      ) : (
        <img src={logoPath} alt="Logo" />
      )
      }
    </a>
  ) : (
    <img src={logoPath} alt="Logo" />
  )}
</>
 
  )
}
