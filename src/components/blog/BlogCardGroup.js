import React, { Fragment } from 'react';
import "./BlogCard.scss";
import "./BlogCardC";
import BlogImage1 from "../imagesBlog/image1.png";
import BlogImage2 from "../imagesBlog/image2.png";
import BlogImage3 from "../imagesBlog/image3.jpeg";
import ArticlesWrapper from './ArticlesWrapper';
import BlogCardC from './BlogCardC';

// oppure fare chiamata fetch
const BlogCard = props => {

    const articleItems = [
        { 
          id: 0,
          title: "Post 0",
          paragraph: "This is the pararaph of Post 0",
          image: {BlogImage1},
          //aggiungere datetime and minutes
         
        },

        { 
            id: 1,
            title: "Post 1",
            paragraph: "This is the pararaph of Post 1",
            image: {BlogImage2},
        },
        
        { 
            id: 2,
            title: "Post 2",
            paragraph: "This is the pararaph of Post 2",
            image: {BlogImage3},
        },
            
    ]

   
    return (

        <ArticlesWrapper>
            {articleItems.map((item, index) => (
                <BlogCardC 
                    blogItem={articleItems}
                    key={index}> 
                </BlogCardC>
            ))} 
           
        </ArticlesWrapper>
     
    )
}

export default BlogCard;