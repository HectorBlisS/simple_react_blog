import React from 'react'

export default function ListItem({ title, prev, author, date, authorPic }) {
    return (
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
    )
}
