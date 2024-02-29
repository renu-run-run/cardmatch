import card from '../Assets/card.png';

const Card = (props) => {
    const flip = () => {
        if (!props.matchedState) {
            props.flip(props.index);
        }
    }

    // Get the width and height of the card based on the image dimensions
    const cardStyle = {
        backgroundImage: `url(${card})`, // Set background image here
        backgroundSize: 'cover', // Ensure the background image covers the entire card
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent background image from repeating
        width: '110px', // Set width of the card (adjust as needed)
        height: '130px', // Set height of the card (adjust as needed)
    };

    return (
        <div 
            className={`card ${props.isFlipped || props.matchedState ? "flipped" : ""}`} 
            onClick={flip}
            style={cardStyle}
        >
            <div className="content">
                <h1>{props.emoji}</h1>
            </div>
        </div>
    );
}

export default Card;
