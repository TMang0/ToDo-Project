import React from 'react'
import ContentLoader from 'react-content-loader'

const TaskList = props => {
  return (
    <ContentLoader
      speed={2}
      width={1290}
      height={1000}
      viewBox="0 0 1290 1000"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="4" y="40" rx="4" ry="5" width="1270" height="80" />
      <rect x="4" y="140" rx="4" ry="5" width="1270" height="80" />
      <rect x="4" y="240" rx="4" ry="5" width="1270" height="80" />
      <rect x="4" y="340" rx="4" ry="5" width="1270" height="80" />
      <rect x="4" y="440" rx="4" ry="5" width="1270" height="80" />
    </ContentLoader>
  )
}

export {TaskList}