import "./ArticlesWrapper.scss";



function ArticlesWrapper({children}) {

  

    return (
        <div className="articles-container">
            {children}
        </div>
    )
}
export default ArticlesWrapper;