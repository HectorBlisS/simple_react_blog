import React, { useState, Fragment } from 'react'
import { array } from './EntriesList'
import NavBar from '../common/NavBar'
import ReactMarkdown from 'react-markdown'

export default function EntryDetail() {

    let [entry] = useState(array[0])

    return (
        <Fragment>
            <NavBar />
            <div className="detail-cover"></div>
            <section className="detail-container">
                <h1>
                    {entry.title}
                </h1>
                <ReactMarkdown source={entry.prev} />
            </section>
        </Fragment>

    )
}