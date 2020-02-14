import pic from '../asserts/pic.jpg'
import url from '../asserts/url.png'
let app = document.getElementById('app')
var img1 = new Image()
var img2 = new Image()
img1.src = pic
img2.src = url
app.append(img1)
app.append(img2)
console.log(pic)
console.log(url)