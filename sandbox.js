// Задача: Спасение из темницы
export function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake) {
        return false;
    } else {
        return true;
    }
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
        return true;
    } else {
        return false;
    }
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if (!archerIsAwake && prisonerIsAwake) {
        return true;
    } else {
        return false;
    }
}

export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
) {
    if (petDogIsPresent && !archerIsAwake) {
        return true;
    } else if (!knightIsAwake && !archerIsAwake && prisonerIsAwake) {
        return true;
    } else {
        return false;
    }
}

//Задача: Калькулятор стоимости услуг
export const dayRate = (ratePerHour) => ratePerHour * 8;
export const daysInBudget = (budget, ratePerHour) =>
    Math.floor(budget / (ratePerHour * 8));
export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
    const monthFull = Math.floor(numDays / 22) * 22;
    const monthRest = numDays - monthFull;
    const dayRate = ratePerHour * 8;
    return Math.ceil(
        monthFull * dayRate * (1 - discount) + monthRest * dayRate
    );
};

// Задача: Правила посещения Поэтического клуба
export const frontDoorResponse = (line) => line[0];
export const frontDoorPassword = (word) =>
    word[0] + word.slice(1).toLowerCase();
export const backDoorResponse = (line) => line.at(-1);
export const backDoorPassword = (word) =>
    word[0].toUpperCase() + word.slice(1) + ", please";

//Задача: Чары Элиз
export const getItem = (cards, position) => cards[position];
export const setItem = (cards, position, replacementCard) => {
    cards[position] = replacementCard;
    return cards;
};
export const insertItemAtTop = (cards, newCard) => {
    return (newCard = [...cards, newCard]);
};
export const removeItem = (cards, position) => {
    let arr = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] == cards[position]) {
            continue;
        } else {
            arr.push(cards[i]);
        }
    }
    return arr;
};
export const removeItemFromTop = (card) => {
    card.pop();
    return card;
};
export const insertItemAtBottom = (cards, newCard) =>
    (cards = [newCard, ...cards]);
export const removeItemAtBottom = (cards) => {
    cards.shift();
    return cards;
};
export const checkSizeOfStack = (cards, stackSize) =>
    cards.length === stackSize ? true : false;

//Задача: Покупка автомобиля #07
export const needsLicense = (kind) =>
    kind === "car" || kind === "truck" ? true : false;
export const chooseVehicle = (option1, option2) => {
    if (option1 < option2) {
        return `${option1} is clearly the better choice.`;
    } else {
        return `${option2} is clearly the better choice.`;
    }
};
export const calculateResellPrice = (originalPrice, age) => {
    if (age < 3) {
        return originalPrice * 0.8;
    } else if (age <= 10) {
        return originalPrice * 0.7;
    } else {
        return originalPrice * 0.5;
    }
};

//Задача: Наблюдение за птицами
const totalBirdCount = (birdsPerDay) => birdsPerDay.reduce((a, b) => a + b);
console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));

const birdsInWeek = (birdsPerDay, week) => {
    if (week === 1) {
        birdsPerDay.length = 7;
    } else if (week > 1) {
        birdsPerDay = birdsPerDay.slice(week * 7 - 7, week * 7);
    }
    console.log(birdsPerDay);
    let sum = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        sum += birdsPerDay[i];
    }
    return sum;
};
console.log(
    birdsInWeek(
        [4, 7, 3, 2, 1, 1, 2, 0, 2, 3, 2, 7, 1, 3, 0, 6, 5, 3, 7, 2, 3],
        2
    )
);

const fixBirdCountLog = (birdsPerDay) =>
    birdsPerDay.map((el, id) => (id % 2 === 0 ? el + 1 : el));
console.log(fixBirdCountLog([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0]));

function limesToCut(wedgesNeeded, limes) {
    let count = 0;
    let arr = [];
    let sum = 0;
    for (let i = 0; i < limes.length; i++) {
        switch (limes[i]) {
            case "small":
                arr.push(6);
                break;
            case "medium":
                arr.push(8);
                break;
            case "large":
                arr.push(10);
                break;
        }
    }

    let i = 0;
    while (i < arr.length) {
        if (sum <= wedgesNeeded) {
            sum += arr[i];
            count++;
        } else {
            return count;
        }
        i++;
    }
    return count;
}

console.log(
    limesToCut(42, [
        "small",
        "large",
        "large",
        "medium",
        "small",
        "large",
        "large",
        "medium",
    ])
);

function remainingOrders(timeLeft, orders) {
    let array = [];
    let arr = [];
    let sum = 0;

    orders.map((el) => {
        if (el === "Pure Strawberry Joy") {
            array.push(["Pure Strawberry Joy", 0.5]);
        } else if (el === "Green Garden") {
            array.push(["Green Garden", 1.5]);
        } else if (el === "Energizer") {
            array.push(["Energizer", 1.5]);
        } else if (el === "All or Nothing") {
            array.push(["All or Nothing", 5]);
        } else if (el === "Vitality") {
            array.push(["Vitality", 2.5]);
        } else if (el === "Tropical Island") {
            array.push(["Tropical Island", 2.5]);
        } else if (el === "Limetime") {
            array.push(["Limetime", 2.5]);
        }
    });
    for (let i = 0; i < array.length; i++) {
        if (sum < timeLeft - 0.5) {
            sum += array[i][1];
        } else if (sum === timeLeft) {
            return arr;
        } else {
            arr.push(array[i][0]);
        }
    }
    return arr;
}

console.log(
    remainingOrders(13, [
        "Pure Strawberry Joy",
        "Pure Strawberry Joy",
        "Vitality",
        "Tropical Island",
        "All or Nothing",
        "All or Nothing",
        "All or Nothing",
        "Green Garden",
        "Limetime",
    ])
);

//Задача: Доска рекордов
function addPlayer(scoreBoard, player, score) {
    scoreBoard.player = score;
    return scoreBoard;
}
console.log(addPlayer({ "Dave Thomas": 0 }, "José Valim", 486373));

function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
    return scoreBoard;
}
console.log(removePlayer({ "Dave Thomas": 0 }, "Dave Thomas"));

function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;
    return scoreBoard;
}
console.log(updateScore({ "Freyja Ćirić": 12771008 }, "Freyja Ćirić", 73));

function applyMondayBonus(scoreBoard) {
    for (let i in scoreBoard) {
        scoreBoard[i] += 100;
    }
    return scoreBoard;
}
console.log(
    applyMondayBonus({
        "Amil Pastorius": 345,
        "Min-seo Shin": 19,
        "Jesse Johnson": 122,
    })
);

function normalizeScore(params) {
    if (params.score < 100) {
        return params.score * 3 - 10;
    } else {
        return params.score / 2 + 100;
    }
}

// Задача Парк аттракционов
function ticketStatus(tickets, ticketId) {
    for (let i in tickets) {
        if (tickets[ticketId] === null) {
            return "not sold";
        } else if (!tickets[ticketId]) {
            return "unknown ticket id";
        } else {
            return `sold to ${tickets[ticketId]}`;
        }
    }
}
console.log(
    ticketStatus(
        {
            V42NWRMQ: null,
            A56MTX8E: null,
            YEVHK4MC: null,
            QINS6S94: "Hong Hsu",
            H31SAW5Q: "Lior MacNeil",
            M9ZTXP89: "Kamani Ybarra",
        },
        "YEVHK4MC"
    )
);

function gtcVersion(visitor) {
    if (visitor.gtc.version) {
        return visitor.gtc.version;
    }
}
console.log(
    gtcVersion({
        name: "Zohar Pekkanen",
        age: 28,
        ticketId: "8DGM3163",
        gtc: { signed: true, version: "4.2" },
    })
);

// Задача Счастливые числа
const twoSum = (a, b) => +a.join("") + +b.join("");
console.log(twoSum([1, 2, 3], [0, 7]));

function luckyNumber(value) {
    let num = value + "";
    let left = 0;
    let right = 0;
    if (num.length % 2 === 0) {
        left = num.slice(0, num.length / 2);
        right = num
            .slice(num.length / 2)
            .split("")
            .reverse()
            .join("");
    } else {
        left = num.slice(0, Math.floor(num.length / 2));
        right = num
            .slice(Math.ceil(num.length / 2))
            .split("")
            .reverse()
            .join("");
    }
    return left === right ? true : false;
}
console.log(luckyNumber(156151));

const errorMessage = (input) =>
    !input
        ? "Required field"
        : !Boolean(+input)
        ? "Must be a number besides 0"
        : "";
console.log(errorMessage(""));

// Задача: Мастер Лазаньи
const cookingStatus = (t) =>
    t === 0
        ? "Lasagna is done."
        : t > 0
        ? "Not done, please wait."
        : "You forgot to set the timer.";
console.log(cookingStatus(12));

const preparationTime = (arr, t = 2) => arr.length * t;
console.log(
    preparationTime(
        ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"],
        3
    )
);

const quantities = (arr) => {
    let noodles = 0,
        sauce = 0;
    arr.map((el) => {
        if (el === "noodles") {
            noodles += 50;
        } else if (el === "sauce") {
            sauce += 0.2;
        }
    });
    return { noodles, sauce };
};
console.log(
    quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
);

const addSecretIngredient = (arrFriend, arr) => {
    let lastItem = [];
    let items = [];
    lastItem.push(arrFriend[arrFriend.length - 1]);
    items.push(...arr, ...lastItem);
    return items;
};

console.log(
    addSecretIngredient(
        ["sauce", "noodles", "béchamel", "marjoram"],
        ["sauce", "noodles", "meat", "tomatoes"]
    )
);

const scaleRecipe = (recipe, t) => {
    let sum = t / 2;
    for (let key in recipe) {
        recipe[key] *= sum;
    }
    return recipe;
};
console.log(
    scaleRecipe(
        { sauce: 0.5, noodles: 250, meat: 150, tomatoes: 3, onion: 0.5 },
        6
    )
);

function closure() {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
}
const newClosure = closure();
newClosure();
newClosure();
newClosure();
newClosure();

const sum = (n) => (n === 1 ? n : n + sum(n - 1));
console.log(sum(100));

const fact = (n) => (n !== 1 ? n * fact(n - 1) : 1);
console.log(fact(3));

const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
console.log(fib(7));

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

const listing = (list) => {
    console.log(list.value);
    if (list.next) {
        listing(list.next);
    }
};
console.log(listing(list));

let i;
console.log(i);
