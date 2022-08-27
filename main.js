const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(let textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        // console.log(section, value);
        textToChange.innerHTML = texts[section][value];
        console.log(texts[section][value]);
    }
}
flagsElement.addEventListener('click', (event) => {
    changeLanguage(event.target.parentElement.dataset.language);
})