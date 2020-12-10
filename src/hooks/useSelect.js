import React, {useState} from 'react';

const useSelect = (initialState, options) => {

    // state de custom hook
    const [state, setUpdateState] = useState(initialState);

    const SelectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setUpdateState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );

    return [state, SelectNews];
}

export default useSelect;