document.querySelector('.delete').addEventListener('click', deleteIt)

async function deleteIt() {
    const sName = this.parentNode.childNodes[1].innerText
    const sCountry = this.parentNode.childNodes[3].innerText
    try {
        const response = await fetch('deleteName', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'nameS': sName,
                'countryS': sCountry
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}