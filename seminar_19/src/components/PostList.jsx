import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';


/*

Используйте useState, useEffect, useMemo для создания компонента PostList, который отображает список постов и позволяет фильтровать их по заголовку.

Основные шаги:

1) С помощью useState создайте состояния для списка постов и строки поиска.
2) Используйте useEffect для загрузки списка постов с использованием Axios из https://jsonplaceholder.typicode.com/posts при монтировании компонента.
3) Примените useMemo для оптимизации фильтрации постов по заголовку, которая зависит от изменения списка постов и строки поиска.
4) Реализуйте элемент input для ввода строки поиска. Используйте состояние для управления его значением и обновляйте его при каждом изменении.
5) Отобразите отфильтрованные посты в списке (<ul>), где каждый пост (<li>) включает заголовок.

Цель: Повысить понимание работы с асинхронными запросами, управлением состоянием и оптимизацией рендеринга в React.


*/



function PostList() {
    const [filter, setFilter] = useState("")
    const [post, setPost] = useState([])
    const [inputText, setInputText] = useState('')
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setPost(res.data)
        })
    },[])

    // console.log(post)
    // console.log(inputText)

    const filterData = useMemo(() => post.filter(post => post.title.includes(inputText)), [post, inputText])

    return (
        <div>
            <input onChange={(event)=>setInputText(event.target.value)} type="text" />
            <ul>
                {filterData.map((post) => (
                    <li>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
