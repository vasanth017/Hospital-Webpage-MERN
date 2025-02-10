import React from 'react';

const PatientCard =
    (
        {
            patient, onEdit,
            onDelete
        }
    ) => {
        return (
            <div className="patient-card">
                <h4>{patient.name}</h4>
                Age: {patient.age} &nbsp;
                Gender: {patient.gender}
                <div className='btn-container'
                    style={{ width: "100%" }}>
                    <button onClick={
                        () =>
                            onEdit(patient)}>
                        Edit
                    </button>
                    <button onClick={
                        () =>
                            onDelete(patient._id)
                    }>
                        Delete
                    </button>
                </div>
            </div>
        );
    };

export default PatientCard;
