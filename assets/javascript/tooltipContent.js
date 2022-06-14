function addContent(query, content) {
    document.querySelector(query).setAttribute('data-tooltip', content)
}

window.onload = () => {

addContent('.ChooseSeatsHeading', 'Editable under Settings > System Setup > Custom Website Messages.')

addContent('.SeatingAreaOptionalInstructions', 'Editable under Settings > System Setup > Custom Website Messages.')

}