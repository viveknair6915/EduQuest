const words = [
            {
                word: "photosynthesis",
                hint: "The process in which plants make their own food"
            },
            {
                word: "sunlight",
                hint: "necessary for photosynthesis"
            },
            {
                word: "chlorophyll",
                hint: "Green pigment present in the plant"
            },
            {
                word: "carbondioxide",
                hint: "gas inhaled by plants during photosynthesis"
            },
            {
                word: "oxygen",
                hint: "Gas exhaled by plants during photosynthesis"
            },
            {
                word: "garden",
                hint: "Space for planting flowers and plant"
            },
            {
                word: "green",
                hint: "Which plants do photosynthesis"
            },
            {
                word: "stomata",
                hint: "holes in leaves which increase photosynthesis"
            },
            {
                word: "water",
                hint: "Oxygen gas which is released during photosynthesis comes from:-"
            },
            {
                word: "room",
                hint: "most suitable temperature for photosynthesis"
            },
            {
                word: "chloroplast",
                hint: "process of photosynthesis takes place in "
            },
            {
                word: "glucose",
                hint: "Photosynthesis converts carbon di oxide and water into oxygen and "
            },   
        ]        

const wordText = document.querySelector(".word"),
            hintText = document.querySelector(".hint span"),
            inputField = document.querySelector("input"),
            timeText = document.querySelector(".time b"),
            refreshBtn = document.querySelector(".refresh-word"),
            checkBtn = document.querySelector(".check-word");

        let correctWord, timer;
        //lets work on timer
        const initTimer = maxTime => {
            clearInterval(timer);
            timer = setInterval(() => {
                if (maxTime > 0) {
                    maxTime--;//decrement of max time by 1
                    return timeText.innerText = maxTime;
                }
                clearInterval(timer);
                alert(`Time out! ${correctWord.toLocaleUpperCase()} was the correct word`);
                initGame(); //calling initGame function, so as to restart the game
            }, 1000);
        }


        const initGame = () => {
            initTimer(30); //calling initTimer function with passing 30 as maxTime value
            let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random object from words
            let wordArray = randomObj.word.split(""); //splitting each letter of the random word
            for (let i = wordArray.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1)); //getting random number
                //shuffling and swiping word Array letters randomly
                [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
            }
            wordText.innerText = wordArray.join(""); //passing shffled word as a text
            hintText.innerText = randomObj.hint; //passing random object hint as a hint text
            correctWord = randomObj.word.toLocaleLowerCase(); //passing random word to correct word
            inputField.value = ""; //making input field empty after checking
            inputField.setAttribute("maxlength", correctWord.length); //setting input maxlength attr value to word length
            console.log(randomObj);
        }
        initGame();

        const checkWord = () => {
            let userWord = inputField.value.toLocaleLowerCase(); //getting user value
            if (!userWord) return alert("please enter a word check"); //if the user didn't enter anything
            if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
            //if the above two conditions are not met means the word is correct hence display congrats
            alert(`congrats! ${userWord.toLocaleUpperCase()} is a correct word`);
            //lets refresh word if the entered word is correct
            initGame();
        }
        //lets work on refresh button
        refreshBtn.addEventListener("click", initGame);
        //lets work on the check word button
        checkBtn.addEventListener("click", checkWord);