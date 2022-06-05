
let clickNum = 0;

function alertClick() {
    alert('This is what an alert is')
}

function changeColor() {
    if (clickNum === 0) {
        document.getElementById('demo').style.color = 'red';
        clickNum = 1;
    }else if (clickNum === 1) {
        document.getElementById('demo').style.color = 'aquamarine';
        clickNum = 2;
    }else if (clickNum === 2) {
        document.getElementById('demo').style.color = 'white';
        clickNum = 0;
    }
    
}