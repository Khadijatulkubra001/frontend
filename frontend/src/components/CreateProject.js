import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addProject } from '../Service/Api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    description: '',
    manager: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddProject = () => {
    const [project, setProject] = useState(initialValue);
    const { name, description, manager} = project;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setProject({...project, [e.target.name]: e.target.value})
    }

    const addProjectDetails = async() => {
        await addProject(project);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Add Project</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input" >Project Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Project Manager</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='manager' value={manager} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addProjectDetails()} sx={{ backgroundColor: '#a599ea' }}>Add Project</Button>
            </FormControl>
        </Container>
    )
}

export default AddProject;
