let sentPackages = [];
let tryPackages = [];

const computeIdsToFind = (id) => {
    let result = [];
    for (let i = 1; i < id; ++i) {
        result.push(i);
    }
    return result;
}

const protocol = (id) => {
    tryPackages.push(id);
    tryPackages = tryPackages.sort();
    sentPackages = sentPackages.sort();
    const searched = computeIdsToFind(tryPackages[0]);
    for (let i = 0; i < sentPackages.length; ++i) {
        for (let j = 0; j < searched.length; ++i) {
            if (sentPackages[i] === searched[j]) {
                searched.splice(j, 1);
                break;
            }
        }
    }
    if (!searched.length) {
        tryPackages.splice(0, 1);
        sentPackages.push(id);
    }
    let validEnd = 0;
    for (let i = 0; i < tryPackages.length; ++i, ++validEnd) {
        if (tryPackages[i] != id + (i + 1)) {
            break;
        }
    }
    for (let i = 0; i < validEnd && i < tryPackages.length; ++i) {
        sentPackages.push(tryPackages[i]);
    }
    tryPackages.splice(0, validEnd);
}

const test = () => {
    protocol(4);
    protocol(3);
    protocol(2);
    protocol(1);
    console.log(sentPackages);
}

test();