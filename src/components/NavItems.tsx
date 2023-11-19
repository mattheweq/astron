import { useEffect, useState } from 'react';

interface Props {
  itemClasses?: string;
  toggled?: boolean;
}

function NavItems(props: Props) {
  const [isHomePage, setisHomePage] = useState(false)
  const [isBlogPage, setisBlogPage] = useState(false)
  const [isChartsPage, setisChartsPage] = useState(false)
  const {itemClasses, toggled} = props

  useEffect(() => {
    const { pathname } = window.location
    const onHomePage = pathname == '/astron/'
    const onBlogPage = pathname == '/astron/blog'
    const onChartsPage = pathname == '/astron/charts'
    onHomePage && setisHomePage(true)
    onBlogPage && setisBlogPage(true)
    onChartsPage && setisChartsPage(true)
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
        {isBlogPage ? (<span className="text-slate-500">Blog</span>) : (<a href="/astron/blog">Blog</a>)}
      </li>
      {!toggled && (
        <li>|</li>
      )}
      <li>
        {isChartsPage ? (<span className="text-slate-500">Charts</span>) : ( <a href="/astron/charts">Charts</a>)}
      </li>
    </ul>
  )
}

export default NavItems
