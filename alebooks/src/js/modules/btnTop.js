import { module as BaseModule } from "modujs";

export default class extends BaseModule {
  constructor(m) {
    super(m);
  }

  init() {
    const btnTop = document.querySelector(".btn-top");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        btnTop.classList.add("show");
      } else {
        btnTop.classList.remove("show");
      }
    });
    btnTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}
