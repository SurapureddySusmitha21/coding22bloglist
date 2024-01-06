// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogListDetals} = props
  return (
    <>
      <ul className="ul-container">
        {blogListDetals.map(eachItem => (
          <BlogItem key={eachItem.id} listItemDetails={eachItem} />
        ))}
      </ul>
    </>
  )
}

export default BlogList
