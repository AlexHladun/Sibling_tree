'use strict';

const tree = document.getElementById('tree');
tree.addEventListener('click', siblingTree);
spanWrapper();

function spanWrapper() {
  const listLi = document.getElementsByTagName('li');
  for (let i = 0; i < listLi.length; i++) {
    const elemLi = listLi[i];
    const elemSpan = document.createElement('span');
    elemLi.insertBefore(elemSpan, elemLi.firstChild);
    elemSpan.appendChild(elemSpan.nextSibling);
  }
}

function siblingTree(evnt) {
  const target = evnt.target;
  const childrenUL = target.parentNode.getElementsByTagName('ul')[0];

  if (target.tagName !== 'SPAN' || !childrenUL) {
    return;
  }
  childrenUL.hidden = !childrenUL.hidden;
}
