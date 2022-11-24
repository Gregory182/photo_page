import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const StyledSidebar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-basis: 300px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #1a4f5b;
  color: #eee;
  border-right: 1px solid black;
  height: 100vh;
  div {
    padding-left: 40px;
  }
  li {
    list-style: none;
    margin: 2em 0em;
    color: #eee;
  }
`

export const AdminContainer = styled.div`
  width: 80%;
  margin: 20px;
  background-color: #f9f9f9;
`

export const StyledDevider = styled.div`
  width: 90%;
  border-bottom: 1.2px solid #999;
  margin: 0 auto;
`
