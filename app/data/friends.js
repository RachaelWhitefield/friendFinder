var friends = [
    {
        name: "Captain America",
        photo: "https://cdn.flickeringmyth.com/wp-content/uploads/2018/07/captain-america-avengers-4-600x717-600x454.jpg",
        scores: [
            1,
            4,
            4,
            4,
            5,
            1,
            4,
            2,
            3,
            3
        ]
    },

    {
        name: "Thor",
        photo: "https://sparkchronicles.com/wp-content/uploads/2019/06/Avengers-Endgame-thor-740x414.jpg",
        scores: [
            5,
            2,
            3,
            2,
            4,
            2,
            4,
            3,
            5,
            2
        ]
    },
    {
        name: "Black Panther",
        photo: "https://i.etsystatic.com/16887642/r/il/bf2976/1557031446/il_794xN.1557031446_5jo7.jpg",
        scores: [
            4,
            3,
            5,
            2,
            5,
            1,
            4,
            2,
            1,
            5
        ]     
    },
    {
        name: "Black Widow",
        photo: "https://www.thewrap.com/wp-content/uploads/2017/05/black-widow.jpg",
        scores: [
            1,
            2,
            1,
            5,
            1,
            4,
            3,
            2, 
            4,
            1
        ]
    },
    {
        name: "Valkyrie",
        photo: "data:image/jpeg;base64,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",
        scores: [
            1,
            2,
            2,
            5,
            3,
            5,
            3,
            3,
            4,
            2
        ]
    },
    {
        name: "The Wasp",
        photo:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVMF8oowEZdVBD8U3E6yY3Tl1nKE397gAmsqgkfVNY8lS4He6tA",
        scores: [
            3,
            2,
            3, 
            4,
            5,
            5,
            3,
            2,
            4,
            4
        ]
    }
]

module.exports = friends

// SCORES
// CAPTAIN AMERICA - 31
// THOR - 32
// BLACK PANTHER - 33
// BLACK WIDOW - 24
// VALKYRIE - 30
// WASP - 35