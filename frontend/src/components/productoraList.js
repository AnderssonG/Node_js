import React, { useState, useEffect } from 'react';
import { getProducers, createProducer } from '../services/productoraServ';

const ProducerList = () => {
    const [producers, setProducers] = useState([]);
    const [newProducer, setNewProducer] = useState('');
    const [newSlogan, setNewSlogan] = useState('');

    useEffect(() => {
        fetchProducers();
    }, []);

    const fetchProducers = async () => {
        const data = await getProducers();
        setProducers(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newProducer.trim()) {
            await createProducer({ name: newProducer, slogan: newSlogan });
            setNewProducer('');
            setNewSlogan('');
            fetchProducers();
        }
    };

    return (
        <div>
            <h2>Lista de Productoras</h2>
            <ul>
                {producers.map((producer) => (
                    <li key={producer._id}>{producer.name} - {producer.slogan}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de la productora"
                    value={newProducer}
                    onChange={(e) => setNewProducer(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Slogan"
                    value={newSlogan}
                    onChange={(e) => setNewSlogan(e.target.value)}
                />
                <button type="submit">Agregar Productora</button>
            </form>
        </div>
    );
};

export default ProducerList;
