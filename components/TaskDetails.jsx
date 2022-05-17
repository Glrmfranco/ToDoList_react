import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './TaskDetails.css';
import Button from './Button';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="back-button-container" onClick={handleBackButtonClick}>
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a suscipit optio culpa itaque! Corporis.</p>
            </div>
        </>
    );
};

export default TaskDetails;
