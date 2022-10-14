// Create a variable for the invite button
const guestButton = document.querySelector(".invite-button")
// Variable for input field
const inviteInput = document.querySelector(".guest__list input")
// Variable for list of invited guests
const invitedGuests = document.querySelector(".invitees")
// Guests attending
let attendingGuests = document.querySelector("span")
// Invited guests alert message
const guestAlert = document.querySelector(".alert")
// Guest label
const guestLabel = document.querySelector(".guest__list label")
// The assigned dishes button
const assignButton = document.querySelector(".alert-button")
// Assigned items list
const assignedItems = document.querySelector(".assigned__items")

//console.log(inviteInput)
guestButton.addEventListener("click", event => {
    const inputValue = inviteInput.value
    if (inputValue !== "") {
        inviteInput.value = " "
    }

    /* This line of code prevents an empty input from being added to the list */
    if (inputValue.trim() === "") {
        return;
    }

    const listItem = document.createElement("li")
    listItem.textContent = inputValue
    invitedGuests.append(listItem)
    const count = invitedGuests.childElementCount
    attendingGuests.textContent = `${count}`

    if (count === 8) {
        guestButton.classList.add("hide")
        inviteInput.classList.add("hide")
        guestLabel.classList.add("hide")
        guestAlert.classList.remove("hide")
    }
})

assignButton.addEventListener("click", event => {
    let potluckItems = [
        "Potato salad",
        "Fried rice",
        "Pesto pasta salad",
        "Barbeque pork ribs",
        "Chicken wings",
        "Avocado tomato salad",
        "Bean and vegetable salad",
        "Chocolate cookies",
        "Corn salad",
        "Pepper steak",
        "T-bone steak",
        "Carrot cake"
    ]

    const allGuests = document.querySelectorAll('.invitees li')
    allGuests.forEach(guest => {
        const randomPotluckIndex = Math.floor(Math.random() * potluckItems.length)
        const randomPotluckItem = potluckItems[randomPotluckIndex]
        const listItem = document.createElement('li')
        listItem.textContent = `${guest.textContent} is bringing ${randomPotluckItem}`
        assignedItems.append(listItem)
        
        potluckItems.splice(randomPotluckIndex, 1)
    })
     assignButton.disabled = true
     invitedGuests.classList.add("hide")
})