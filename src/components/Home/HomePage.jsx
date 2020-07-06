import React, { Fragment } from 'react'
import EntriesList from './EntriesList'

export default function HomePage() {
    return (
        <Fragment>
            <section className="cover">
                <h1>FixterGeek</h1>
                <p>No basta con ser programador, toma el camino del desarrollador.</p>
            </section>
            <EntriesList />
        </Fragment>

    )
}