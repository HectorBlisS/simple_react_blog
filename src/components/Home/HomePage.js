import React, { Fragment } from 'react'
import EntriesList from './EntriesList'
import NavBar from '../common/NavBar'

export default function HomePage() {
    return (
        <Fragment>
            <NavBar />
            <section className="cover">
                <div></div>
                <h1>FixterGeek</h1>
                <p>No basta con ser programador, toma el camino del desarrollador.</p>
            </section>
            <EntriesList />
        </Fragment>

    )
}