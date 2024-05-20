import React, { useState, useEffect } from 'react'
import './App.css'
import 'h8k-components'

import Articles from './components/Articles.Functional.Component'
// import Articles from './components/Articles.Class.Component.js'


const title = 'Sorting Articles'

function App({ articles }) {

  const sortArticleByVotes = articles.sort((a, b) => b.upvotes - a.upvotes)

  const [data, setData] = useState(sortArticleByVotes)
  const sortedByVotes = () => {
    const copy = [...articles]
    const votesData = copy.sort((a, b) => b.upvotes - a.upvotes)
    setData(votesData)
  }
  const sortedByDate = () => {
    const copy = [...articles]
    const dateData = copy.sort((a, b) => (new Date(b.date) - new Date(a.date)))
    setData(dateData)
  }
  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>
          Sort By
        </label>
        <button
          data-testid='most-upvoted-link'
          className='small'
          onClick={() => sortedByVotes()}>
          Most Upvoted
        </button>
        <button
          data-testid='most-recent-link'
          className='small'
          onClick={() => sortedByDate()}>
          Most Recent
        </button>
      </div>
      <Articles articles={data}/>
    </div>
  )
}

export default App
