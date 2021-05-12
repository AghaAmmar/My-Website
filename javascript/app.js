const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#aboutContent");
const ContactMe = document.querySelector("#ContactMe");

about.addEventListener('click',()=>{
  const aboutBox = new WinBox({
    title: "About Me",
    modal:true,
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    left: 50,
    bottom: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#666");
    },
  });
})
contact.addEventListener("click", () => {
  const ContactBox = new WinBox({
    title: "Contact Me",
    modal:true,
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 150,
    right: 50,
    left: 250,
    bottom: 50,
    mount: ContactMe,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#666");
    },
  });
});