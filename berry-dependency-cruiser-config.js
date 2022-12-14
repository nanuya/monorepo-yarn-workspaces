/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    doNotFollow: {
      dependencyTypes: [
        "npm",
        "npm-dev",
        "npm-optional",
        "npm-peer",
        "npm-bundled",
        "npm-no-pkg"
      ]
    },

    includeOnly: ["^packages"],

    /* prefix for links in html and svg output */
    prefix: "https://github.com/nanuya/monorepo-yarn-workspaces/main/",

    // 서비스가 글로벌에게 의존

    tsPreCompilationDeps: false,

    // tsConfig: {
    //   fileName: "./tsconfig.json",
    // },

    /* How to resolve external modules - use "yarn-pnp" if you're using yarn's Plug'n'Play.
      otherwise leave it out (or set to the default, which is 'node_modules')
    */
    externalModuleResolutionStrategy: "yarn-pnp",

    progress: { type: "performance-log" },

    reporterOptions: {
      archi: {
        theme: {
          graph: { splines: "ortho" },
          modules: [
            {
              criteria: { source: "plugin-" },
              attributes: { fillcolor: "#ffccff" }
            },
            {
              criteria: { source: "yarnpkg-" },
              attributes: { fillcolor: "#ccffcc" }
            },
            {
              criteria: {},
              attributes: { fillcolor: "#ccccff" }
            },
          ],
          dependencies: [
            {
              criteria: { resolved: "plugin-" },
              attributes: { color: "#ff00ff77" }
            },
            {
              criteria: { resolved: "yarnpkg-" },
              attributes: { color: "#00770077" }
            }
          ]
        }
      }
    }
  }
};