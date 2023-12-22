import { useEffect, useState } from 'react'

export default function Logo() {
  const [isHomePage, setIsHomePage] = useState(true)
  const [blogOrLogo, setBlogOrLogo] = useState(true)
  const [homeLinkHref, setHomeLinkHref] = useState("/astron/")
  useEffect(() => {
    const {pathname} = window.location
    if (pathname == "/astron/"){
      setIsHomePage(true)
      setBlogOrLogo(true)
      setHomeLinkHref("")
    }
    else if (pathname.startsWith("/astron/posts/")){
      setIsHomePage(false)
      setBlogOrLogo(true)
      setHomeLinkHref("/astron/blog/")
    } else{
      setIsHomePage(false)
      setBlogOrLogo(false)
      setHomeLinkHref("/astron/")
    }
  }, [])

  const logo = "/astron/mvm-stamp.jpg"
  // use below when deployed
  // const logo = "/logo.png"
  return ( 
<div className="slideLeft">
  {
  isHomePage ? (
    <img className="h-[38px]" src={logo} alt="Logo" />
  ) : (
    <a href={homeLinkHref}>
      {
      blogOrLogo ? (
        <h1 className="text-xl text-white m-2 slideLeft">All Posts</h1>
      ) : (
        <img className="h-[38px]" src={logo} alt="Logo" />
      )
      }
    </a>
  )}
</div>
 
  )
}
