export default function traceMouseMoviment () {
    var eye = document.querySelectorAll('.Bender__pupil')
    debugger
    eye.forEach((eye) => {
        const x = (eye.getBoundingClientRect().left + eye.clientWidth / 2)
        const y = (eye.getBoundingClientRect().top + eye.clientHeight / 2)
        const radian = Math.atan2(event.pageX - x, event.pageY - y)
        const rot = (radian * (180 / Math.PI) * -1) + 0
        eye.style.transform = `rotate(${rot}deg)`
    })
}
