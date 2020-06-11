import mirador from "mirador";

let params = new URL(document.location).searchParams;
let manifest =
  params.get("manifest") ||
  "https://fromthepage.com/iiif/37912/manifest";

var miradorInstance = mirador.viewer({
  id: "app", // id selector where Mirador should be instantiated
  windows: [
    {
      manifestId: manifest
    }
  ],
  window: {
    allowClose: false,
    allowMaximize: false
  },
  workspaceControlPanel: {
    enabled: false
  }
});
