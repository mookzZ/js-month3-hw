const getData = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'obj.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)
        console.log(data)
    }
}

getData()