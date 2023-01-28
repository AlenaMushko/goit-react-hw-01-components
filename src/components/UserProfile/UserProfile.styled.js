import styled from 'styled-components';

export const UserSection = styled.section`
background-color:white;
 max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius:8px;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
 :hover, :focus{
box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.72);
scale : 1.02;
 }
`
export const UserDescription = styled.div`
border:1px solid tomato;
margin:0 auto;
max-width:250px;
`
export const UserImg = styled.img`
margin-right: auto;
margin-left:auto;
margin-top:12px;
width: 150px;
border-radius:50%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const UserName = styled.p`
font-size:24px;
font-weight:800;
text-align: center;
`
export const UserText = styled.p`
text-align: center;
`
// border:1px solid tomato;