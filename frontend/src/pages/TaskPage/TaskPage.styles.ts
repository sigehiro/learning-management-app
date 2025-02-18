import styled from 'styled-components'

//-----------Header area-----------
export const Header = styled.header`
  background-color: #f0f0f0;
  padding: 30px 20px;
  text-align: right;
`

export const Navigation = styled.nav`
  display: inline-block;
`

export const LoginLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 5px;
`
//-----------ここまでHeader area-----------

// -----------Footer area-----------
export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;

  p {
    margin: 0;
    font-size: 14px;
  }
`
