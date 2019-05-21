'use strict';

const tree = document.getElementById('tree');
tree.addEventListener('click', siblingTree);
spanLi();

function spanLi() {
  const listLi = document.getElementsByTagName('li');
  for (let i = 0; i < listLi.length; i++) {
    const li = listLi[i];
    const span = document.createElement('span');
    li.insertBefore(span, li.firstChild);
    span.appendChild(span.nextSibling);
  }
}

function siblingTree(evnt) {
  const target = evnt.target;
  const childrenUL = target.parentNode.getElementsByTagName('ul')[0];

  if (target.tagName !== 'SPAN' || !childrenUL) {
    return;
  }
  //if () {
  //  return;
  //}

  childrenUL.hidden = !childrenUL.hidden;
}
