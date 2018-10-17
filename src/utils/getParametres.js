export default () => {
    let obj = {};
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        obj = {
            radius: 150,
            width: 320,
            height: 312,
            fontSize: 12,
            strokeWidth: 2,
            arrowRadius: 18,
            arrowStroke: 1,
            capText: false,
            x: 300,
            y: 156,
            offsetY: 5
        }

    } else {
        obj = {
            radius: 250,
            width: 820,
            height: 520,
            fontSize: 18,
            strokeWidth: 5,
            arrowRadius: 30,
            arrowStroke: 4,
            capText: true,
            x: 655,
            y: 260,
            offsetY: 10
        }

    }
    return obj;
}