let sentPackages = [];
let tryPackages = [];

const protocol = (id) => {
    tryPackages.push(id);
    tryPackages = tryPackages.sort();
    sentPackages = sentPackages.sort();
    if (id == 1 || (sentPackages.length && sentPackages[sentPackages.length - 1] === tryPackages[0] - 1)) {
        sentPackages.push(tryPackages[0]);
        tryPackages.splice(0, 1);
    }
    let validEnd = 0;
    for (let i = 0; i < tryPackages.length; ++i, ++validEnd) {
        if (tryPackages[i] !== id + (i + 1)) {
            break;
        }
    }
    for (let i = 0; i < validEnd && i < tryPackages.length; ++i) {
        sentPackages.push(tryPackages[i]);
    }
    tryPackages.splice(0, validEnd);
}

const test = () => {
    protocol(2);
    protocol(1);
    console.log(sentPackages);
    protocol(3);
    protocol(4);
    console.log(sentPackages);
}

test();