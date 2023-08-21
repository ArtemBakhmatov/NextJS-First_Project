'use client'; // для работы с хуками

const ErrorWrapper = ({ error }: { error: Error }) => {
    return (
        <h1>Oops!!! { error.message }</h1>
    );
};

export default ErrorWrapper;