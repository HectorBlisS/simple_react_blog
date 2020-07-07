import React, { Fragment, useState } from 'react'
import SimpleCard from './SimpleCard'
import ReactMarkdown from 'react-markdown'
import fakeText from './fakeText'

export default function Editor({
    body = fakeText,
    title = "Introducción a ReactJs | 1/3" }) {

    let [text, setText] = useState(body)

    return (
        <Fragment>
            <SimpleCard title={title} buttonText="Save" />
            <section className="editor-container">
                <article className="editor-mark">
                    <textarea onChange={({ target: { value } }) => setText(value)} >{text}</textarea>
                </article>
                <article className="editor-preview">
                    <ReactMarkdown
                        source={text}
                        escapeHtml={false} />
                </article>
            </section>
        </Fragment>
    )
}