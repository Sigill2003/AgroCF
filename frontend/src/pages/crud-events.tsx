"use client";
import React, { useState } from 'react';

const CrudEventsPage = () => {
    const [plantName, setPlantName] = useState('');
    const [detectionResult, setDetectionResult] = useState('');

    const handleDetectClick = () => {
        if (!plantName.trim()) {
            alert('Por favor ingresa el nombre de la planta.');
            return;
        }

        // Simulación de la detección de plagas
        const plaguePercentage = Math.random() * 100;
        const message = `Se ha detectado un ${plaguePercentage.toFixed(2)}% de probabilidad de plaga en la planta ${plantName}.`;
        
        // Mostrar el resultado
        setDetectionResult(message);
    };

    return (
        <div>
            <h1>Detección de Plagas</h1>
            <div>
                <label htmlFor="plantName">Nombre de la Planta:</label><br />
                <input
                    type="text"
                    id="plantName"
                    value={plantName}
                    onChange={(e) => setPlantName(e.target.value)}
                /><br /><br />
                <button onClick={handleDetectClick}>Detectar Plaga</button>
            </div>
            <div>
                {detectionResult && <p>{detectionResult}</p>}
            </div>
        </div>
    );
};

export default CrudEventsPage;

    