import React, { useState } from 'react'
import ListItem from './ListItem'

export const array = [
    {
        title: "Introducción a ReactJs | 1/3",
        prev: "¿Para Quíen es este post? Ahora que haz llegado a este post, seguro no necesito explicarte a profundidad qué es ReactJs, cuales son sus ventajas, porqué »",
        author: "Héctor BlisS on javascript, fixtergeek, reactjs, firebasemx, hectorbliss",
        date: "14 SEPTEMBER 2018",
        authorPic: "http://blog.fixter.org/content/images/2018/11/blisss.jpeg",
        status: "Draft"
    },
    {
        title: "Learn ES6 Promise and ES7 Async/Await",
        prev: "Asynchronicity (ES6 Promises and ES7 Async/Await) Assuming you already know: How setTimeout works: Learn Here What is a Callback Learn it Here How to throw »",
        author: "Héctor BlisS on javascript, fixtergeek, reactjs, firebasemx, hectorbliss",
        date: "14 SEPTEMBER 2018",
        authorPic: "http://blog.fixter.org/content/images/2018/11/blisss.jpeg",
        status: "Draft"
    },
    {
        title: "¡Crea tu primer chat en tiempo real con Firebase!",
        prev: "En este tutorial aprenderás a crear de manera muy sencilla y rápida un chat en tiempo real para web, utilizando Firebase, la herramienta de Google dedicada »",
        author: "Martín Melo on firebase, web, javascript, jquery, fixtergeek ",
        date: "15 JUNE 2017",
        authorPic: "http://blog.fixter.org/content/images/2017/06/17457722_1361967587159562_7794880770419645970_n.jpg",
        status: "Published"
    }
]

export default function EntriesList() {
    const [list] = useState(array)

    function renderItem(item, index) {
        return <ListItem key={index} {...item} />
    }

    function renderList() {
        return list.map(renderItem)
    }

    return (
        <section className="entries-list">
            {renderList()}
        </section>
    )
}