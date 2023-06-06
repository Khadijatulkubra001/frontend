
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #a599ea;
`;
    
const Tabs = styled(NavLink)`
    color: white;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact="true">All Project</Tabs>
                <Tabs to="add" exact="true">Add Project</Tabs>
            </Toolbar>
        </Header>
        
    )
}

export default NavBar;