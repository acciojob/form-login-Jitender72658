function getFormvalue() {
    //Write your code here
  let inputTags = document.getElementsByTagName('input');
  let firstName = inputTags[0].value;
  let lastName = inputTags[1].value;
  window.alert(`${firstName} ${lastName}`);
}
