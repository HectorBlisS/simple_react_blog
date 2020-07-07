import React from 'react'
import { Link } from 'react-router-dom'


export default function SimpleCard({ id = 2, author, authorPic, title, buttonText, size = 1, status }) {
    return (
        <Link to={"/content/" + (status ? id : "")} >
            <div className="simple-card">
                <header>
                    <h3 style={{ fontSize: `${size * 16}px` }} >{title}</h3>
                    {buttonText && <button>{buttonText}</button>}
                </header>
                {status &&
                    <div>
                        <img src={authorPic} alt="author pic" />
                        <p style={{ color: status === "Draft" ? "orangered" : "rgba(0,0,0,0.5)" }} >{status}</p>
                        <span className="fotis">{author}</span>
                    </div>
                }

            </div>
        </Link>
    )
}