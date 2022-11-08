import "./BlogCard.scss";

function BlogCardC(props) {


    return (
        <div classname="card">
                 <img className="card-img-top" src={props.blogItem.image} alt="Card image cap"/>
                 <div className="card-body">
                 <h5 className="card-title">{props.blogItem.title}</h5>
                 <p className="card-text">{props.blogItem.paragraph}</p>
                 
                 <footer className="article-footer">
                     <a href="#"><img src="https://miro.medium.com/fit/c/96/96/1*eyz90vDt_L21tUvaVhu9Bw.jpeg" alt="post avatar"/></a>
                         <div className="footer-description">
                         <a href="#"><h5>Chef Fran</h5></a>
 
                         <div className="author-details">
                             <time datetime={props.blogItem.datetime}>{props.blogItem.datetime.toString()}</time>
                             <span>|</span>
                             <p>{props.blogItem.minutes}</p>
                         </div>
                         </div>
                 </footer>
                 </div>
             </div>
    )

}
export default BlogCardC;