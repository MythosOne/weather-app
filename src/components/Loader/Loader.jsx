import React from 'react';
import {TailSpin} from 'react-loader-spinner';
import {LoaderSpinner} from "./Loader.styled"

const Loader = () => {

    return (
        <LoaderSpinner>
            <TailSpin color="#4B2A99" radius="9" height={50} width={50} />
        </LoaderSpinner>
    );
};

export default Loader;