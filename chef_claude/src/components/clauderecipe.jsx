import React from "react"
import ReactMarkdown from 'react-markdown'

export default function claudeRecipe(props){
    return (
        <section className="suggested-recipe-container" >
          <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}