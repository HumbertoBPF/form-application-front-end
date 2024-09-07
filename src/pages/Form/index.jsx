import api from 'api/http';
import Diet from 'components/Diet';
import Diseases from 'components/Diseases';
import PersonalData from 'components/PersonalData';
import { useState } from 'react';

function Form() {
    const [personalData, setPersonalData] = useState({});
    const [diseasesData, setDiseasesData] = useState({});
    const [step, setStep] = useState(1);

    const handleSubmit = (data) => {
        api()
            .post('/submitFormulario', {
                page_1: personalData,
                page_2: diseasesData,
                page_3: data,
            })
            .then(() => {
                console.log('Form submitted');
            })
            .catch(() => {
                console.log('Error');
            });
    };

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
}

export default Form;
