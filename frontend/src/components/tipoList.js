import React, { useState, useEffect } from 'react';
import { getTypes, createType } from '../services/tipoServ';

const TypeList = () => {
    const [types, setTypes] = useState([]);
    const [newType, setNewType] = useState('');

    useEffect(() => {
        fetchTypes();
    }, []);

    const fetchTypes = async () => {
        const data = await getTypes();
        setTypes(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newType.trim()) {
            await createType({ name: newType });
            setNewType('');
            fetchTypes();
        }
    };

    return (
        <div>
            <h2>Lista de Tipos</h2>
            <ul>
                {types.map((type) => (
                    <li key={type._id}>{type.name}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del tipo"
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                />
                <button type="submit">Agregar Tipo</button>
            </form>
        </div>
    );
};

export default TypeList;
