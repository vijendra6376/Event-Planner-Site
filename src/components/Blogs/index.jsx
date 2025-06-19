import Wrapper from "./style.js"
import Blog from "../assets/blog.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
const blogData = [
  {
    title: "Blog Post 1",
    text: "This is the first blog post summary.",
    image: Blog,
    link: "#"
  },
  {
    title: "Blog Post 2",
    text: "This is the second blog post summary.",
    image: Blog,
    link: "#"
  },
  {
    title: "Blog Post 3",
    text: "This is the third blog post summary.",
    image: Blog,
    link: "#"
  }
]
const Blogs = () => {
  return (
    <Wrapper>
      <div className="image-section text-center">
        <img src={Blog} alt="Blog" className="image" />
        <h2 className="latest-blog">Latest Blogs</h2>
      </div>
      <div className="container my-4">
        <div className="row">
          {blogData.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <a href={item.link} className="btn btn-primary custom-btn">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
export default Blogs