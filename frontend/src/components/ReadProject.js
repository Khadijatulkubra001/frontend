import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getProject, deleteProject } from '../Service/Api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #a599ea;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllProject = () => {
    const [project, setProject] = useState([]);
    
    useEffect(() => {
        getAllProjects();
    }, []);

    const deleteUserData = async (id) => {
        await deleteProject(id);
        getAllProjects();
    }

    const getAllProjects = async () => {
        let response = await getProject();
        setProject(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Project Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Manager</TableCell>
                    
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {project.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> 
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.description}</TableCell>
                        <TableCell>{user.manager}</TableCell>
                        
                        <TableCell>
                            <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`} sx={{ backgroundColor: '#a599ea' }}>Edit</Button> 
                            <Button color="error" variant="contained"  onClick={() => deleteUserData(user._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllProject;
