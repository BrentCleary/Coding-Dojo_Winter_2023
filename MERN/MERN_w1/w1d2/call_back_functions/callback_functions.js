// Call back functions

const setSrcById = (id, src) => { 
    document.querySelector(`#${id}`).src = src;
}



document.getElementById('breathtaking').onmouseover = () => {

    setSrcById('breathtaking', 'https://placekitten.com/200/200')
}

