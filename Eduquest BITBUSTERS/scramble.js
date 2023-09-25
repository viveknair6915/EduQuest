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
        const initTimer = maxTime => {
            clearInterval(timer);
            timer = setInterval(() => {
                if (maxTime > 0) {
                    maxTime--;
                    return timeText.innerText = maxTime;
                }
                clearInterval(timer);
                alert(`Time out! ${correctWord.toLocaleUpperCase()} was the correct word`);
                initGame();
            }, 1000);
        }


        const initGame = () => {
            initTimer(30);
            let randomObj = words[Math.floor(Math.random() * words.length)];
            let wordArray = randomObj.word.split("");
            for (let i = wordArray.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
            }
            wordText.innerText = wordArray.join("");
            hintText.innerText = randomObj.hint;
            correctWord = randomObj.word.toLocaleLowerCase();
            inputField.value = "";
            inputField.setAttribute("maxlength", correctWord.length);
            console.log(randomObj);
        }
        initGame();

        const checkWord = () => {
            let userWord = inputField.value.toLocaleLowerCase();
            if (!userWord) return alert("please enter a word check");
            if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
            alert(`congrats! ${userWord.toLocaleUpperCase()} is a correct word`);
            initGame();
        }
        refreshBtn.addEventListener("click", initGame);
        checkBtn.addEventListener("click", checkWord);