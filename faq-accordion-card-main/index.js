function toggle(event) {
    let ele = document.getElementById(event.target.className);
    if (ele.style.display === "none") {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  }