import axios from 'axios';

const usersUrl = 'http://localhost:9000';

export const getProject = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addProject = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteProject = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const updateProject = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}