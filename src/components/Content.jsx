import React, { useState } from 'react'
import Languages from '../Languages'
import getFarewellText from '../FarewellText';
import getRandomWords from '../words';
import ReactConfetti from 'react-confetti';

function Content() {


    const [currentWord, setCurrentWord] = useState(() => getRandomWords());
    const [guessedLetters, setGuessedLetters] = useState([]);

    const wrongGuesses = guessedLetters
        .filter((char) => !currentWord.includes(char))
        .length
    const isGameWon = currentWord.split("").every((ele) => guessedLetters.includes(ele))
    const isGameLost = wrongGuesses >= (Languages.length - 1)
    const isGameOver = isGameWon || isGameLost
    const lastGuessLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect = lastGuessLetter && !currentWord.split("").includes(lastGuessLetter)

    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    function letterClick(letter, e) {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters(prevValue => [...prevValue, letter])
        }
    }

    function newGame() {
        setCurrentWord(getRandomWords())
        setGuessedLetters([])
    }

    const LanguageList = Languages.map((lang, index) => {

        const strikeClass = `before:content-["💀"] before:absolute before:bg-[#0a0a0a33] before:inset-0 before:flex before:justify-center before:items-center`

        return (<li key={index}
            className={`${lang.bgColor} ${lang.textColor} p-2 rounded-md relative ${index < wrongGuesses ? strikeClass : ""}`}>
            {lang.name}
        </li>)
    });

    const letterBox = currentWord.split('').map((char, index) => {

        const shouldReveal = guessedLetters.includes(char) || isGameOver
        const missedLetter = isGameOver && !guessedLetters.includes(char)

        return (
        <span className={`bg-slate-900 text-slate-50 p-3 text-1xl border-b-2 border-white rounded-md min-w-[3rem] min-h-[3.5rem] ${missedLetter?"text-red-500":""}` }
        key={index}>
            { shouldReveal ? char.toLocaleUpperCase() : " "}
        </span>)
    })

    let keyElements = alphabets.split('').map((char, index) => {

        const bgColour = guessedLetters.includes(char) ?
            currentWord.split('').includes(char) ?
                "bg-lime-600" : "bg-red-600"
            : 'bg-yellow-400'

        return (<button key={index}
            disabled={isGameOver}
            className={`p-1 w-12 aspect-square ${bgColour} text-slate-50 rounded-lg text-1xl flex items-center justify-center font-bold disabled:opacity-30`}
            aria-disabled={guessedLetters.includes(char)}
            onClick={(e) => letterClick(char, e)}
        >
            {char.toLocaleUpperCase()}
        </button>)
    })

    function renderGameStatus() {
        if (isGameOver) {
            return (
                <div className={`w-full flex flex-col justify-center items-center p-4 rounded ${isGameWon ? " bg-green-500" : "bg-red-500"}`} aria-live='polite' role='status'>
                    <h2>
                        {isGameWon ? "You Won!" : "GAME OVER !!"}
                    </h2>
                    <p>
                        {isGameWon ? "Great Job 🎉" : "GET READY TO LEARN ASSEMBLY"}
                    </p>
                </div>
            )
        }
        if (isLastGuessIncorrect) {

            const language = Languages[wrongGuesses - 1]?.name
            return (
                <div className={`w-full flex flex-col justify-center items-center p-4 rounded bg-purple-400`}>
                    <p>{getFarewellText(language)}</p>
                </div>
            )
        }
    }

    return (
        <main className='max-h-full max-w-full flex flex-col items-center justify-start p-2 gap-6'>
            {isGameWon && <ReactConfetti gravity={0.7}/>}
            <section className=' text-white justify-center text-2xl p-2 min-w-[80%] min-h-[15vh] rounded-lg'>
                {renderGameStatus()}
            </section>

            <section className='p-5 w-full flex justify-center'>
                <ul className='flex justify-center flex-wrap max-w-[25%] gap-1 relative'>
                    {LanguageList}
                </ul>
            </section>

            <section className='flex flex-col items-center gap-9'>
                <p className='flex gap-2'>
                    {letterBox}
                </p>
                <p className='flex flex-wrap max-w-[45%] justify-center gap-2'>
                    {keyElements}
                </p>
            </section>

            <section>
                {isGameOver ? (
                    <button
                        onClick={newGame}
                        className='bg-cyan-300 text-slate-700 px-10 py-5 rounded-lg font-bold'>
                        NEW GAME
                    </button>) : ""}
            </section>

        </main>
    )
}

export default Content