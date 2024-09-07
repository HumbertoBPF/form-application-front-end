import Diet from 'components/Diet';
import Diseases from 'components/Diseases';
import PersonalData from 'components/PersonalData';
import { useEffect, useState } from 'react';

function Form() {
    const [personalData, setPersonalData] = useState({});
    const [diseasesData, setDiseasesData] = useState({});
    const [step, setStep] = useState(1);

    useEffect(() => {
        setStep(3);
    }, []);

    if (step === 1) {
        return (
            <PersonalData
                onNext={(data) => {
                    setStep(2);
                    console.log(personalData);
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
                    console.log(diseasesData);
                    setDiseasesData(data);
                }}
                onNext={() => {
                    setStep(3);
                }}
            />
        );
    }

    return <Diet onPrevious={() => setStep(2)} />;
}

export default Form;
