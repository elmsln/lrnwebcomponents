import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "./lib/gitgraphjs/src/gitgraph.js";
/**
 * `lrn-gitgraph`
 * @element lrn-gitgraph
 * For each branch in your repo use the following git command:
 *   ```
 *   git log [branch_name] --format='{"refs": "%d", "commit": "%h", "tree": "%t", "parent": "%p", "subject": "%s", "date": "%cd", "author": "%an %ae"},' --reverse
 *   ```
 * @demo demo/index.html
 */
class LrnGitgraph extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          overflow-x: scroll;
        }
      </style>
      <canvas id="gitGraph"></canvas>
    `;
  }

  static get tag() {
    return "lrn-gitgraph";
  }

  static get properties() {
    return {
      commits: {
        type: Array,
        value: [],
      },
      template: {
        type: String,
        value: "blackarrow",
      },
      orientation: {
        type: String,
        value: "horizontal",
      },
      mode: {
        type: String,
        value: "",
      },
      reverseArrow: {
        type: Boolean,
        value: false,
      },
      /**
       * @type {{template: String, reverseArrow: Boolean, orientation: String, element: Object}}
       */
      config: {
        type: Object,
      },
    };
  }

  static get observers() {
    return ["_commitsChanged(commits)"];
  }

  _commitsChanged(commits) {
    var root = this;
    if (root.config) {
      if (commits.length > 0) {
        var gitgraph = new GitGraph(root.config);
        var tree = [];
        commits.forEach(function (item) {
          if (item.commits) {
            item.commits.forEach(function (commit) {
              commit["branch"] = item.branch;
              tree.push(commit);
            });
          }
        });
        // remove duplicate commits
        console.log("befor", tree);
        tree = root._treeRemoveDuplicates(tree);
        // sort by date
        tree = tree.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        // reverse the tree so the newest oldest is first
        tree.reverse();
        // identify forks
        var branches = [];
        tree.forEach(function (item, i) {
          // if the branch doesn't exist create it
          if (typeof branches[item.branch] === "undefined") {
            branches[item.branch] = gitgraph.branch(item.branch);
          }
          // make the commit
          branches[item.branch].commit({
            sha1: item.commit,
            message: item.subject,
            author: item.author,
            tag: item.refs,
          });
        });
      }
    }
  }

  _treeRemoveDuplicates(tree) {
    var htTree = [];
    var htCommits = [];
    tree.forEach(function (t) {
      if (!htCommits.includes(t.commit)) {
        htTree.push(t);
        htCommits.push(t.commit);
      }
    });
    return htTree;
  }

  ready() {
    super.ready();
    var root = this;
    var config = {
      template: root.template, // could be: "blackarrow" or "metro" or `myTemplate` (custom Template object)
      reverseArrow: false, // to make arrows point to ancestors, if displayed
      orientation: root.orientation,
      element: root.shadowRoot.querySelector("#gitGraph"),
    };
    if (root.mode !== "") {
      config.mode = root.mode;
    }
    root.config = config;
  }
}
customElements.define(LrnGitgraph.tag, LrnGitgraph);
export { LrnGitgraph };
