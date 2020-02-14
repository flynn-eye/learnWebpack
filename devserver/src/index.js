import './index.css'
import find from './find'
var a= document.createElement('a')
a.innerHTML=1231
document.body.append(a)
find()
a.onclick = function(){
    document.body.append("test")
}

if (module.hot) {//hmr刷新jsmodule
    module.hot.accept('./find.js', function() {
      find()
    })
  }