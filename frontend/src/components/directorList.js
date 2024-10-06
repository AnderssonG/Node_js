import React, { useState, useEffect } from 'react';
import { getDirectors, createDirector } from '../services/directorServ';

const DirectorList = () => {
    const [directors, setDirectors] = useState([]);
    const [newDirector, setNewDirector] = useState('');

    useEffect(() => {
        fetchDirectors();
    }, []);

    const fetchDirectors = async () => {
        const data = await getDirectors();
        setDirectors(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newDirector.trim()) {
            await createDirector({ name: newDirector });
            setNewDirector('');
            fetchDirectors();
        }
    };

    return (
        <div>
            <h2>Lista de Directores</h2>
            <ul>
                {directors.map((director) => (
                    <li key={director._id}>{director.name}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del director"
                    value={newDirector}
                    onChange={(e) => setNewDirector(e.target.value)}
                />
                <button type="submit">Agregar Director</button>
            </form>
        </div>
    );
};

export default DirectorList;
