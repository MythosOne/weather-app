import React from 'react';
import {TailSpin} from 'react-loader-spinner';
import {LoaderSpinner} from "./Loader.styled"

export const Loader = () => {

    return (
        <LoaderSpinner>
            <TailSpin color="#9ebce1" radius="9" height={50} width={50} />
        </LoaderSpinner>
    );
};