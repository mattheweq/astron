import React from 'react'

interface Props {
  itemClasses?: string;
  toggled?: boolean;
}

function NavItems(props: Props) {
  const {itemClasses, toggled} = props

  return (
    <ul className={itemClasses}>
      <li>
        <a href="/astron/blog">Blog</a>
      </li>
      {!toggled && (
        <li>|</li>
      )}
      <li>
        <a href="/astron/charts">Charts</a>
      </li>
    </ul>
  )
}

export default NavItems
