import React from 'react';
import styled from 'styled-components';
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";


const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  li {
    padding: 1px 1px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(38,63,91);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 220px;
    text-align: center;
    height: auto;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    display: inline-block;
    li a {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        font-weight: 300;
        padding: 5px 10px;
        margin-left: 20px;
      }

      li a:hover,
       li a.active {
        background-color: #fff;
        border-radius: 1px;
        color: #000;
        transition: all 0.5ms ease-in-out;
       }
  }
`;

const RightNav = ({ open }) => {
    const menuList = MenuList.map(({ url, title }, index) => {
        return (
          <li key={index}>
            <NavLink exact to={url} activeClassName="active">
              {title}
            </NavLink>
          </li>
        );
      });
  return (
    <Ul open={open}>
    {menuList}
    </Ul>
  )
}

export default RightNav