import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getProject, updateProject } from '../Service/Api';

const initialValue = {
    name: '',
    description: '',
    manager: ''
    
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const UpdateProject = () => {
    const [project, setProject] = useState(initialValue);
    const { name, description, manager} = project;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getProject(id);
        setProject(response.data);
    }

    const editUserDetails = async() => {
        const response = await updateProject(id, project);
        navigate('/');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setProject({...project, [e.target.name]: e.target.value})
    }

    return (
        <Container injectfirst="true">
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="name-input">Project Name</InputLabel>
                <Input onChange={onValueChange} name="name" value={name} id="name-input" />
                </FormControl>
                <FormControl>
                <InputLabel htmlFor="description-input">Description</InputLabel>
                <Input
                    onChange={onValueChange}
                    name="description"
                    value={description}
                    id="description-input"
                />
                </FormControl>
                <FormControl>
                <InputLabel htmlFor="manager-input">Manager</InputLabel>
                <Input
                    onChange={onValueChange}
                    name="manager"
                    value={manager}
                    id="manager-input"
                />
                </FormControl>
                <Button variant="contained" onClick={editUserDetails} sx={{ backgroundColor: '#a599ea' }}>Update Details</Button>


        </Container>
    )
}

export default UpdateProject
