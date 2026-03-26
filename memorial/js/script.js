/* const spoilerIframe = document.getElementById('spoileredrecordingiframe');

spoilerIframe.addEventListener('mouseenter', (event) => {
    console.log('Spoilered content is being hovered over.');
    event.target.classList.add('hovered');
});

spoilerIframe.addEventListener('mouseleave', (event) => {
    console.log('Spoilered content is not being hovered over.');
    event.target.classList.remove('hovered');
});

function toggleSpoiler(event, spoilerIFrame) {
    event.preventDefault();
    var spoilerIrameVar = document.getElementById('spoileredrecordingiframe');
    if (spoilerIrameVar.classList.contains('hovered')) {
        spoilerIrameVar.style.visibility="visible";
    } else {
        spoilerIframeVar.style.visibility="hidden";
    }
} */

function toggleSpoiler() {
    var spoilerIframe = document.getElementById('spoileredrecordingiframe');
    if (spoilerIframe.style.visibility === 'hidden') {
        spoilerIframe.style.visibility = 'visible';
    } else {
        spoilerIframe.style.visibility = 'hidden'; 
    }
}