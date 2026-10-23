import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProjectPage = () => {
    const { id } = useParams();
    return (
        <>
            <h1>Project {id}</h1>
        </>
    );
};
