import Diet from 'components/Diet';
import Diseases from 'components/Diseases';
import PersonalData from 'components/PersonalData';
import { useEffect, useState } from 'react';

function Form() {
    const [step, setStep] = useState(1);

    useEffect(() => {
        setStep(3);
    }, []);

    if (step === 1) {
        return <PersonalData />;
    }

    if (step === 2) {
        return <Diseases onPrevious={() => setStep(1)} />;
    }

    return <Diet onPrevious={() => setStep(2)} />;
}

export default Form;
