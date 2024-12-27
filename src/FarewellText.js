function getFarewellText(language) {

    const farewellMessages = [
        `Goodbye, ${language}! It's been great coding with you.`,
        `Farewell, ${language}! See you in another project.`,
        `Time to part ways with ${language}. Until next time!`,
        `Wrapping up with ${language}. Goodbye!`,
        `Saying goodbye to ${language}. It's been fun!`,
        `Moving on from ${language}. Farewell!`,
        `Goodbye, ${language}! Thanks for all the help.`,
        `Parting ways with ${language}. Take care!`,
        `Adieu, ${language}! Catch you later.`,
        `Signing off with ${language}. Goodbye!`
    ];

    const randomIndex = Math.floor(Math.random()*farewellMessages.length)

    return farewellMessages[randomIndex]


}

export default getFarewellText