import api from './http';

export const getAlimentacao = () => api().get('/getAlimentacao');
export const submitForm = (data) => api().post('/submitFormulario', data);
