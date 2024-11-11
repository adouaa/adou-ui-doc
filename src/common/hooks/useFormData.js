import { useState } from 'react';

const useFormData = (data) => {
    const [formData, _setFormData] = useState(data);

    const setFormData = (key, value, isInitial = false) => {
        if (isInitial) {
            _setFormData(value);
        } else {
            _setFormData((prevFormData) => ({
                ...prevFormData,
                [key]: value,
            }));
        }
    };

    return [formData, setFormData];
};

export default useFormData;
