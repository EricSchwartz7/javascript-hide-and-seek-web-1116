function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(nested, target) {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
    var num = parseInt(lis[i].innerHTML, 10)
    num += n
    lis[i].innerHTML = num
  }
}

function deepestChild() {
  var divs = document.getElementById('grand-node').querySelectorAll('div')
  return divs[divs.length - 1]
}
