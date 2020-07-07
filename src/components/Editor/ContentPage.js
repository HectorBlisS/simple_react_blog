import React, { useState } from 'react'
import SimpleCard from './SimpleCard'
import { array } from '../Home/EntriesList'

export default function ContentPage() {

    const [list] = useState(array)

    function renderItem(item, index) {
        return <SimpleCard key={index} {...item} />
    }

    function renderList() {
        return list.map(renderItem)
    }

    return (
        <section>
            <SimpleCard
                title={"Content"}
                size="2"
                buttonText="New Post"
            />
            {renderList()}
        </section>
    )
}