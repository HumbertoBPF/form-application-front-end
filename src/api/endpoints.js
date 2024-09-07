import api from './http';

export const getAlimentacao = () => api().get('/getAlimentacao');
