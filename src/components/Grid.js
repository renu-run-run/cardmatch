import { useEffect, useState } from "react";
import Card from "./Card";
import { randomizeArr } from "../HelperFunctions";
import image5 from '../Assets/image5.png'
import { pair_emojis, initRevealState } from "../Constants";
import Confetti from "react-confetti";
import win from '../Assets/win.png'
import winmizo from '../Assets/winmizo.png'

const Grid = () => {
    const [flipped, setFlipped] = useState(initRevealState);
    const [randomArr, setRandomArr] = useState(pair_emojis);
    const [timerID, setTimerID] = useState(0);
    const [score, setScore] = useState(0);
    const [matched, setMatched] = useState(initRevealState);
    const [winning, setWinning] = useState(false);

    useEffect(() => {
        const random_arr = randomizeArr(pair_emojis);
        setRandomArr(random_arr);
    }, []);

    const toggleFlipped = (index) => {
        let flipped_copy = [...flipped];

        const flipped_count = flipped_copy.reduce((previous, current) => {
            if (current === true) {
                previous++;
            }
            return previous;
        }, 0);

        if (flipped_count >= 2) {
            clearTimeout(timerID);
            setTimerID(0);
            flipped_copy = [...initRevealState];
        }

        if (!flipped_copy[index]) {
            flipped_copy[index] = true;
        }

        setFlipped(flipped_copy);

        const flipped_count_after = flipped_copy.reduce((previous, current) => {
            if (current === true) {
                previous++;
            }
            return previous;
        }, 0);

        if (flipped_count_after === 2) {
            const selected_index = [];
            flipped_copy.forEach((single_elem, idx) => {
                if (single_elem) {
                    selected_index.push(idx);
                }
            });

            if (randomArr[selected_index[0]] === randomArr[selected_index[1]]) {
                const matched_copy = [...matched];
                matched_copy[selected_index[0]] = true;
                matched_copy[selected_index[1]] = true;

                const allMatched = matched_copy.every((single_elem) => single_elem === true);
                if (allMatched) {
                    setWinning(true);
                }
                setMatched(matched_copy);
            } else {
                const timer_id = setTimeout(() => {
                    setFlipped(initRevealState);
                }, 2000);
                setTimerID(timer_id);
            }

            setScore(score + 1);
        }
        setFlipped(flipped_copy);
    }

    return (
        <div className="main-container" style={{ backgroundImage: `url(${image5})` }}>
            {winning && <Confetti />}
            <h2 className="scorecard">Moves: {score}</h2>
            <div className="cards-container">
                {flipped.map((single_data, idx) => {
                    const emojis = randomArr[idx];
                    const matched_state = matched[idx];
                    return (
                        <Card
                            key={idx}
                            flip={toggleFlipped}
                            index={idx}
                            isFlipped={single_data}
                            emoji={emojis}
                            matchedState={matched_state}
                        />
                    )
                })}
            </div>
            {winning &&
                <div className="win-image-container-centered">
                    <img src={win} alt="monkey" className="win-image" />
                    <img src={winmizo} alt="winmizo" className="winmizo-image" />
                </div>
            }
        </div>
    )
}

export default Grid;
