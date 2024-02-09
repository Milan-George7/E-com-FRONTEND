import { Search } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    height: 60px;
    
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-bottom: 25px;

`;

const Languages = styled.span`
    font-size: 14px;
    cursor: pointer;
    
`;

const SerachContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    
`;


const Center = styled.div`
    flex: 1;
    text-align: center;
    
`;


const Logo = styled.h1`
    font-weight: bold;
    
    
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
    
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Languages>EN</Languages>
                <SerachContainer>
                    <Input/>
                    <Search style={{color:'gray',fontSize:16}}/>
                </SerachContainer>
            </Left>
            <Center>
                <Logo>
                    KART
                </Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge   Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar