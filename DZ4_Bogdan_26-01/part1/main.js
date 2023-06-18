const wrapper = document.querySelector('.wrapper')

const getData = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'peoples.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)
        data.forEach((human) => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            const img = document.createElement('img')
            img.src = 'img.jpg'
            const name = document.createElement('span')
            const age = document.createElement('span')
            name.innerHTML = `Имя: ${human.name}`
            age.innerHTML = `Возраст: ${human.age}`
            card.append(img, name, age)
            wrapper.append(card)
        })
    }
}

getData()