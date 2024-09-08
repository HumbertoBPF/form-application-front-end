import { submitForm } from 'api/endpoints';
import Diet from 'components/Diet';
import Diseases from 'components/Diseases';
import PersonalData from 'components/PersonalData';
import Toast from 'components/Toast';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function Form() {
    const [personalData, setPersonalData] = useState({});
    const [diseasesData, setDiseasesData] = useState({});
    const [step, setStep] = useState(1);
    const [toastProps, setToastProps] = useState({
        title: '',
        message: '',
        show: false,
        variant: 'success',
    });

    const handleSubmit = (data) => {
        submitForm({
            page_1: personalData,
            page_2: diseasesData,
            page_3: data,
        })
            .then(() => {
                setToastProps({
                    title: 'Submissão de formulário',
                    message: 'O formulário foi submetido com sucesso.',
                    show: true,
                    variant: 'success',
                });
            })
            .catch(() => {
                setToastProps({
                    title: 'Erro',
                    message:
                        'Um erro ocorreu durante a submissão do formulário.',
                    show: true,
                    variant: 'danger',
                });
            });
    };

    const renderFormPages = () => {
        if (step === 1) {
            return (
                <PersonalData
                    onNext={(data) => {
                        setStep(2);
                        setPersonalData(data);
                    }}
                />
            );
        }

        if (step === 2) {
            return (
                <Diseases
                    onPrevious={(data) => {
                        setStep(1);
                        setDiseasesData(data);
                    }}
                    onNext={() => {
                        setStep(3);
                    }}
                />
            );
        }

        return <Diet onPrevious={() => setStep(2)} onSubmit={handleSubmit} />;
    };

    return (
        <Container>
            {renderFormPages()}
            <Toast
                {...toastProps}
                onClose={() => setToastProps({ ...toastProps, show: false })}
            />
        </Container>
    );
}

export default Form;
