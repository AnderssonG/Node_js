import React, { useEffect, useState } from 'react';
import { getgenero, creategenero } from '../services/generoServ';

const GeneroList = () => {
    const [generos, setGeneros] = useState([]);
    const [newGenero, setNewGenero] = useState({
        name: '',
        status: true
    });

    useEffect(() => {
        fetchGenero();
    }, []);

    const fetchGenero = async () => {
        const genresData = await getgenero();
        setGeneros(genresData);
    };


    

    const handleSubmit = async (e) => {
    
        e.preventDefault();

        if (newGenero.trim()){
            await creategenero({name: newGenero});
            setNewGenero('');
            fetchGenero();
        }
    }

    return (
        <div>
            <h2>Lista de Géneros</h2>
            <ul>
                {generos.map((genre) => (
                    <li key={genre._id}>{genre.name} - {genre.status ? 'Activo' : 'Inactivo'}</li>
                ))}
            </ul>

            <h3>Agregar Nuevo Género</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre del género"
                    value={newGenero.name}
                    onChange={(e)=> setNewGenero(e.target.value)}
                    required
                />
                
                <button type="submit">Agregar Género</button>
            </form>
        </div>
    );
};

export default GeneroList;
