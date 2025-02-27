document.getElementById('select1')
    .addEventListener('click', function () {
        document.getElementById('banner').style.backgroundImage = "url('./media/horizon.png')";
        document.getElementById('select1').style.height = '5px';
        document.getElementById('select2').style.height = '2px';
        document.getElementById('select3').style.height = '2px';
        document.getElementById('select1').style.backgroundColor = 'purple';
        document.getElementById('select2').style.backgroundColor = 'white';
        document.getElementById('select3').style.backgroundColor = 'white';
        document.getElementById('tag-line').textContent = 'Capturing Moments, Creating Memories';
        document.getElementById('body').style.backgroundColor = 'rgb(43, 28, 58)';
    })

document.getElementById('select2')
    .addEventListener('click', function () {
        document.getElementById('banner').style.backgroundImage = "url('./media/horizon-2.jpg')";
        document.getElementById('select2').style.height = '5px';
        document.getElementById('select1').style.height = '2px';
        document.getElementById('select3').style.height = '2px';
        document.getElementById('select2').style.backgroundColor = 'orange';
        document.getElementById('select1').style.backgroundColor = 'white';
        document.getElementById('select3').style.backgroundColor = 'white';
        document.getElementById('tag-line').textContent = 'Explore desert and ride with  ancient Camel';
        document.getElementById('body').style.backgroundColor = 'rgb(43, 22, 14)';

    })

document.getElementById('select3')
    .addEventListener('click', function () {
        document.getElementById('banner').style.backgroundImage = "url('./media/horizon-3.jpg')";
        document.getElementById('select3').style.height = '5px';
        document.getElementById('select1').style.height = '2px';
        document.getElementById('select2').style.height = '2px';
        document.getElementById('select3').style.backgroundColor = 'yellow';
        document.getElementById('select1').style.backgroundColor = 'white';
        document.getElementById('select2').style.backgroundColor = 'white';
        document.getElementById('tag-line').textContent = 'Beyond the horizon, Desert become fear to stay';
        document.getElementById('body').style.backgroundColor = 'rgb(56, 34, 34)';
    })





