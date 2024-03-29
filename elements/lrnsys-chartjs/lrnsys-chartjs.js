/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@vowo/chart-elements/chart-elements.js";
/**
`lrnsys-chartjs`
A LRN element

* @demo demo/index.html
*/
class LrnsysChartjs extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>
        <!--
        Use the logic from the logic of the template dom-if's to allow for abstraction for all the chart types
      -->
        <chart-line labels="{{labels}}" data="[[data]]"></chart-line>
      </div>
    `;
  }
  static get tag() {
    return "lrnsys-chartjs";
  }
  static get properties() {
    return {
      labels: {
        type: Array,
        value: ["January", "February", "March", "April", "May", "June", "July"],
      },
      data: {
        type: Object,
        value: {},
      },
    };
  }
  ready() {
    super.ready();
    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(220,220,220,0.2)",
          borderColor: "rgba(220,220,220,1)",
          borderWidth: 1,
          pointBackgroundColor: "rgba(220,220,220,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "rgba(151,187,205,0.2)",
          borderColor: "rgba(151,187,205,1)",
          borderWidth: 1,
          pointBackgroundColor: "rgba(151,187,205,1)",
          pointBorderColor: "#fff",
          pointHighlightFill: "#fff",
          pointHoverBorderColor: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
  }
}
customElements.define(LrnsysChartjs.tag, LrnsysChartjs);
export { LrnsysChartjs };
