import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({ id = 2, title, prev, author, date, authorPic }) {
    return (
        <Link to={"/" + id} >
            <div className="list-item">
                <h2>{title}</h2>
                <p>{prev}</p>
                <div className="author-data">
                    <img src={authorPic} alt="post author" />
                    <span>
                        {author}
                    </span>
                </div>
            </div>
        </Link>
    )
}
