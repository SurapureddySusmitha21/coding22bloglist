// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listItemDetails} = props
  const {title, description, publishedDate} = listItemDetails
  return (
    <li className="li-contsiner">
      <div className="post-container">
        <h1 className="post-heading">{title}</h1>
        <p className="date-paragraph">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
