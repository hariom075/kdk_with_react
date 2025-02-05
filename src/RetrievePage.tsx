// import React, { useEffect, useState } from 'react';
// import './RetrievePage.css'

// interface UserData {
//     name: string;
//     email: string;
//     mobile_no: string;
//     address: string;
// }

// const RetrievePage: React.FC = () => {
//     // State to store retrieved data (array of users)

//     const [userData, setUserData] = useState<UserData[]>([]);

//     useEffect(() => {
//         const savedData = localStorage.getItem('userData');
//         if (savedData) {
//             try {
//                 const parsedData = JSON.parse(savedData);
//                 if (Array.isArray(parsedData)) {
//                     setUserData(parsedData); // Ensure it's an array
//                 } else {
//                     console.error('Data in localStorage is not an array');
//                 }
//             } catch (error) {
//                 console.error('Error parsing localStorage data:', error);
//             }
//         }
//     }, []);

//     return (
//         <div className="retrieve-container">
//             <h2>Retrieved User Data</h2>
//             {userData.length > 0 ? (
//                 <div className="user-data-list">
//                     {userData.map((user, index) => (
//                         <div key={index} className="user-data">
//                             <p><strong>Name:</strong> {user.name}</p>
//                             <p><strong>Email:</strong> {user.email}</p>
//                             <p><strong>Mobile No.:</strong> {user.mobile_no}</p>
//                             <p><strong>Address:</strong> {user.address}</p>
//                             <hr />
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p>No user data found.</p>
//             )}
//         </div>
//     );
// };

// export default RetrievePage;



// code to retrive data from indexdb

import React, { useEffect, useState } from 'react';
import './RetrievePage.css'


interface UserData {
    name: string;
    email: string;
    mobile_no: string;
    address: string;
}

const RetrievePage: React.FC = () => {
    const [userData, setUserData] = useState<UserData[]>([]); // State to hold the retrieved data

    // Function to retrieve data from IndexedDB
    const retrieveDataFromIndexedDB = () => {
        const request = indexedDB.open('SimpleUserDB', 1);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains('users')) {
                db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            const transaction = db.transaction('users', 'readonly');
            const store = transaction.objectStore('users');
            const getAllRequest = store.getAll(); 

            getAllRequest.onsuccess = () => {
                
                const users = getAllRequest.result;
                setUserData(users);
            };

            getAllRequest.onerror = () => {
                console.error('Error retrieving data from IndexedDB.');
                alert('Error retrieving data!');
            };
        };

        request.onerror = () => {
            console.error('Error opening IndexedDB.');
            alert('Failed to open IndexedDB!');
        };
    };

    
    useEffect(() => {
        retrieveDataFromIndexedDB();
    }, []);

    return (
        <div className="retrieve-container">
            <h2>Retrieved User Data</h2>
            {userData.length > 0 ? (
                <div className="user-data-list">
                    {userData.map((user, index) => (
                        <div key={index} className="user-data">
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Mobile No.:</strong> {user.mobile_no}</p>
                            <p><strong>Address:</strong> {user.address}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No user data found in IndexedDB.</p>
            )}
        </div>
    );
};

export default RetrievePage;
