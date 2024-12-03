const container = document.querySelector(".container");

window.addEventListener("mousemove", (event) => {
  container.innerHTML = `
        <div class="mouse-event">
        <h3>Mouse X Prosition(px)</h3>
        ${event.clientX}
      </div>
      <div class="mouse-event">
      <h3>Mouse Y Prosition(px)</h3>
        ${event.clientY}
      </div>
    </div>
    `;
});
