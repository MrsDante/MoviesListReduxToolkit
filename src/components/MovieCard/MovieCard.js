import React from 'react'

const MovieCard = ({ data }) => {
  console.log(data)
  return (
    <div>{data.Title}</div>
  )
}

export default MovieCard