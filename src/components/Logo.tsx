import { useEffect, useState } from 'react'

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

  // const logo = "../../public/logo.png"
  // use below when deployed
  const logo = "/logo.png"
  return (
    
<>
  {
  !isHomePage ? (
    <a href={homeLinkHref}>
      {
      blogOrLogo ? (
        <h1 className="text-xl text-white m-2 slideLeft">All Posts</h1>
      ) : (
        <img className="h-[38px]" src={logo} alt="Logo" />
      )
      }
    </a>
  ) : (
    <img className="h-[38px]" src={logo} alt="Logo" />
  )}
</>
 
  )
}
