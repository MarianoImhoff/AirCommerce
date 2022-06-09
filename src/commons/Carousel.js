import React from "react"
import reviews from "../utils/reviews.json";
import ReviewCard from "../components/ReviewCard";
import "../styles/Carousel.scss";

const Carousel = ({id}) => {
    let reviewsAux = [];
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].productId === (id+1)) {
            reviewsAux.push(reviews[i])
        }
    }

    return(
        <div className="slider">
            <ul> 
                {reviewsAux.map(review => <ReviewCard key={review.id} review={review}/>)}    
            </ul>
        </div>
    )

}

export default Carousel;