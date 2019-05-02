import React from 'react'

const NavItem = ({ children, color, text, active, handleClick}) => {
  return (
    <div onClick={() => handleClick(text, color)}
      className={`${text} ${active === text && 'active'}  flex-cc`}>
      {children}
    </div>
  )
}

export default NavItem