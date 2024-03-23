import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

/*
    Задание: Компонент для загрузки данных

    Использовать Axios

    1) Используйте useState для управления состоянием данных.+
    2) Создайте функцию fetchData с useCallback для загрузки данных из https://jsonplaceholder.typicode.com/posts.+
    3) Реализуйте кнопку, вызывающую fetchData при клике.+
    4) Отобразите данные в списке (<ul>), где каждый элемент (<li>) содержит заголовок поста.

*/





function DataFetcher() {
    const [info, setInfo] = useState([]);

    const fetchData = useCallback(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>setInfo(res.data))
    },[])

    
    return (
        
        <div className='column'>
            <button onClick={fetchData}>Fetch Data</button>
            <ul>
                {info.map(infos=>(
                    <li>{infos.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetcher;
