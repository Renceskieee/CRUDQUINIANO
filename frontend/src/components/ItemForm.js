import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const [sex, setSex] = useState('');
    const [birthday, setBirthday] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [religion, setReligion] = useState('');
    const [citizenship, setCitizenship] = useState('');
    
    const [fatherFirstName, setFatherFirstName] = useState('');
    const [fatherMiddleName, setFatherMiddleName] = useState('');
    const [fatherLastName, setFatherLastName] = useState('');
    const [fatherOccupation, setFatherOccupation] = useState('');
    
    const [motherFirstName, setMotherFirstName] = useState('');
    const [motherMiddleName, setMotherMiddleName] = useState('');
    const [motherLastName, setMotherLastName] = useState('');
    const [motherOccupation, setMotherOccupation] = useState('');
    
    const [elementary, setElementary] = useState('');
    const [secondary, setSecondary] = useState('');
    const [vocationalTradeCourse, setVocationalTradeCourse] = useState('');
    const [college, setCollege] = useState('');
    const [courseProgram, setCourseProgram] = useState('');
    const [favouriteGroup, setFavouriteGroup] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            
            setSex(item.sex);
            setBirthday(item.birthday);
            setPlaceOfBirth(item.place_of_birth);
            setCivilStatus(item.civil_status);
            setReligion(item.religion);
            setCitizenship(item.citizenship);
            
            setFatherFirstName(item.father_first_name);
            setFatherMiddleName(item.father_middle_name);
            setFatherLastName(item.father_last_name);
            setFatherOccupation(item.father_occupation);
            
            setMotherFirstName(item.mother_first_name);
            setMotherMiddleName(item.mother_middle_name);
            setMotherLastName(item.mother_last_name);
            setMotherOccupation(item.mother_occupation);
            
            setElementary(item.elementary);
            setSecondary(item.secondary);
            setVocationalTradeCourse(item.vocational_trade_course);
            setCollege(item.college);
            setCourseProgram(item.course_program);
            setFavouriteGroup(item.favourite_group);
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address,
            email,
            phone,
            sex,
            birthday,
            place_of_birth: placeOfBirth,
            civil_status: civilStatus,
            religion,
            citizenship,
            father_first_name: fatherFirstName,
            father_middle_name: fatherMiddleName,
            father_last_name: fatherLastName,
            father_occupation: fatherOccupation,
            mother_first_name: motherFirstName,
            mother_middle_name: motherMiddleName,
            mother_last_name: motherLastName,
            mother_occupation: motherOccupation,
            elementary,
            secondary,
            vocational_trade_course: vocationalTradeCourse,
            college,
            course_program: courseProgram,
            favourite_group: favouriteGroup,
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            console.error('Config:', error.config);
        }
    };    

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2>{item ? "Edit Item" : "Add Item"}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Middle Name:</label>
                        <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label>Sex:</label>
                        <select value={sex} onChange={(e) => setSex(e.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Birthday:</label>
                        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                    </div>
                    <div>
                        <label>Place of Birth:</label>
                        <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
                    </div>
                    <div>
                        <label>Civil Status:</label>
                        <select value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)}>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="widowed">Widowed</option>
                            <option value="divorced">Divorced</option>
                        </select>
                    </div>
                    <div>
                        <label>Religion:</label>
                        <input type="text" value={religion} onChange={(e) => setReligion(e.target.value)} />
                    </div>
                    <div>
                        <label>Citizenship:</label>
                        <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
                    </div>
                    <div>
                        <label>Father's First Name:</label>
                        <input type="text" value={fatherFirstName} onChange={(e) => setFatherFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Father's Middle Name:</label>
                        <input type="text" value={fatherMiddleName} onChange={(e) => setFatherMiddleName(e.target.value)} />
                    </div>
                    <div>
                        <label>Father's Last Name:</label>
                        <input type="text" value={fatherLastName} onChange={(e) => setFatherLastName(e.target.value)} />
                    </div>
                    <div>
                        <label>Father's Occupation:</label>
                        <input type="text" value={fatherOccupation} onChange={(e) => setFatherOccupation(e.target.value)} />
                    </div>
                    <div>
                        <label>Mother's First Name:</label>
                        <input type="text" value={motherFirstName} onChange={(e) => setMotherFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Mother's Middle Name:</label>
                        <input type="text" value={motherMiddleName} onChange={(e) => setMotherMiddleName(e.target.value)} />
                    </div>
                    <div>
                        <label>Mother's Last Name:</label>
                        <input type="text" value={motherLastName} onChange={(e) => setMotherLastName(e.target.value)} />
                    </div>
                    <div>
                        <label>Mother's Occupation:</label>
                        <input type="text" value={motherOccupation} onChange={(e) => setMotherOccupation(e.target.value)} />
                    </div>
                    <div>
                        <label>Elementary:</label>
                        <input type="text" value={elementary} onChange={(e) => setElementary(e.target.value)} />
                    </div>
                    <div>
                        <label>Secondary:</label>
                        <input type="text" value={secondary} onChange={(e) => setSecondary(e.target.value)} />
                    </div>
                    <div>
                        <label>Vocational/Trade Course:</label>
                        <input type="text" value={vocationalTradeCourse} onChange={(e) => setVocationalTradeCourse(e.target.value)} />
                    </div>
                    <div>
                        <label>College:</label>
                        <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
                    </div>
                    <div>
                        <label>Course/Program:</label>
                        <input type="text" value={courseProgram} onChange={(e) => setCourseProgram(e.target.value)} />
                    </div>
                    <div>
                        <label>Favourite Group:</label>
                        <input type="text" value={favouriteGroup} onChange={(e) => setFavouriteGroup(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
       
};
export default ItemForm;