import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: #eee;
  text-decoration: none;
`

const SidebarLink = ({ linkTo, text }) => {
  return (
    <li>
      <StyledLink to={linkTo}>{text}</StyledLink>
    </li>
  )
}

export default SidebarLink
