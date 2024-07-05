import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemList.css';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <table className="item-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Contact No.</th>
                        <th>Sex</th>
                        <th>Birthday</th>
                        <th>Place of Birth</th>
                        <th>Civil Status</th>
                        <th>Religion</th>
                        <th>Citizenship</th>
                        <th>Father's Name</th>
                        <th>Father's Occupation</th>
                        <th>Mother's Name</th>
                        <th>Mother's Occupation</th>
                        <th>Elementary</th>
                        <th>Secondary</th>
                        <th>Vocational/Trade Course</th>
                        <th>College</th>
                        <th>Course/Program</th>
                        <th>Favourite Group</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.middle_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.address}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.sex}</td>
                            <td>{item.birthday}</td>
                            <td>{item.place_of_birth}</td>
                            <td>{item.civil_status}</td>
                            <td>{item.religion}</td>
                            <td>{item.citizenship}</td>
                            <td>{`${item.father_first_name} ${item.father_middle_name} ${item.father_last_name}`}</td>
                            <td>{item.father_occupation}</td>
                            <td>{`${item.mother_first_name} ${item.mother_middle_name} ${item.mother_last_name}`}</td>
                            <td>{item.mother_occupation}</td>
                            <td>{item.elementary}</td>
                            <td>{item.secondary}</td>
                            <td>{item.vocational_trade_course}</td>
                            <td>{item.college}</td>
                            <td>{item.course_program}</td>
                            <td>{item.favourite_group}</td>
                            <td>
                                <button onClick={() => onEdit(item)}>Edit</button>
                                <button onClick={() => onDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ItemList;