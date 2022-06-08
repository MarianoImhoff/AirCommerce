import "../styles/Carousel.scss";

const ReviewCard = ({review}) => {

    return(
        <li key={review.id}>
            <p>
                {review.userId}<br/>
                {review.rating}<br/>
                {review.review}
            </p>
        </li>
    )
}

export default ReviewCard;