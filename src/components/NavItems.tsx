import { useEffect, useState } from 'react';

interface Props {
  itemClasses?: string;
  toggled?: boolean;
}

function NavItems(props: Props) {
  const {itemClasses, toggled} = props
  const [isHomePage, setIsHomePage] = useState(false)
  const [isBlogPage, setIsBlogPage] = useState(false)
  const [isChartsPage, setIsChartsPage] = useState(false)
  useEffect(() => {
    const {pathname} = window.location
    if (pathname == "/astron/"){
      setIsHomePage(true)
    }
    else if (pathname.startsWith("/astron/blog/")){
      setIsBlogPage(true)
    } 
    else if (pathname.startsWith("/astron/charts/")){
      setIsChartsPage(true)
    }
    else{
      null
    }
  }, [])

  return (
    <ul className={itemClasses}>
      
      <li>
        {isHomePage ? (<span className="text-slate-500">Home</span>) : (<a href="/astron/">Home</a>)}
      </li>

      {!toggled && (
        <li>|</li>
      )}
      <li>
        {isBlogPage ? (<span className="text-slate-500">Blog</span>) : (<a href="/astron/blog/">Blog</a>)}
      </li>
      {!toggled && (
        <li>|</li>
      )}
      <li>
        {isChartsPage ? (<span className="text-slate-500">Charts</span>) : ( <a href="/astron/charts/">Charts</a>)}
      </li>

    </ul>
  )
}

export default NavItems
