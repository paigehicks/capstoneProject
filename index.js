import * as state from "./store";
import { Header, Main, Footer } from "./components";

import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo(window.location.origin);
router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header()}
      ${Main(st)}
      ${Footer()}
    `;

  router.updatePageLinks();
}
