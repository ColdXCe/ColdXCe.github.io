const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});

function onNotify() {
  console.log(NOTIFY INIT);
  //check Notification API have permission or not
  if (Notification?.permission === 'granted') {
    new Notification('Hi')
  }
}