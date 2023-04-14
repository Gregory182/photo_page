import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import SidebarLink from "./SidebarLink";
import { BiLogOut } from "react-icons/bi";

const StyledSidebar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-basis: 300px;
  flex-direction: column;
  background-color: #1a4f5b;
  color: #eee;
  border-right: 1px solid black;
  height: 100vh;

  li {
    list-style: none;
    margin: 2em 0em;
    color: #eee;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 36px 0px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #eee;
`;
export const StyledDevider = styled.div`
  width: 90%;
  border-bottom: 1.2px solid #999;
  margin: 0 auto;
`;

const Sidebar = () => {
  const { currentUser, logout } = useAuth();
  return (
    <StyledSidebar>
      <StyledLogo>
        <h2>Administracja</h2>
      </StyledLogo>
      <StyledDevider />

      <div>
        <ul>
          {currentUser.admin === true ? (
            <>
              <SidebarLink linkTo="clients" text="Klienci" />
              <SidebarLink linkTo="sessions" text="Sesje zdjęciowe" />
            </>
          ) : (
            <>
              <SidebarLink linkTo="client-sessions" text="Sesje zdjęciowe" />
            </>
          )}

          <li onClick={logout}>
            <BiLogOut />
            Wyloguj
          </li>
        </ul>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
