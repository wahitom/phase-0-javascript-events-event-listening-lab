function addingEventListener(){
    const input = document.getElementById('input')

    input.addEventListener('mouseover', function(){
        console.log("something came over me!")
    })
}

addingEventListener();
