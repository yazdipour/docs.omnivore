import{_ as i,c as l,a as e,b as o,t as r,d as t,o as n}from"./app.d9cc5fcb.js";const q=JSON.parse('{"title":"Sync all your reading to Logseq","description":"","frontmatter":{"title":"Sync all your reading to Logseq","editLink":true},"headers":[{"level":2,"title":"Demonstration","slug":"demonstration","link":"#demonstration","children":[]},{"level":2,"title":"Setting up the Omnivore Logseq plugin","slug":"setting-up-the-omnivore-logseq-plugin","link":"#setting-up-the-omnivore-logseq-plugin","children":[]},{"level":2,"title":"Customizing which data is synced from Omnivore to Logseq","slug":"customizing-which-data-is-synced-from-omnivore-to-logseq","link":"#customizing-which-data-is-synced-from-omnivore-to-logseq","children":[]},{"level":2,"title":"Controlling the layout of the data imported to Logseq","slug":"controlling-the-layout-of-the-data-imported-to-logseq","link":"#controlling-the-layout-of-the-data-imported-to-logseq","children":[{"level":3,"title":"Variables available to the page template","slug":"variables-available-to-the-page-template","link":"#variables-available-to-the-page-template","children":[]},{"level":3,"title":"Variables available to the highlight template","slug":"variables-available-to-the-highlight-template","link":"#variables-available-to-the-highlight-template","children":[]}]},{"level":2,"title":"Community Guides","slug":"community-guides","link":"#community-guides","children":[]}],"relativePath":"integrations/logseq.md"}'),s={name:"integrations/logseq.md"},h={id:"frontmatter-title",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=t('<p>Omninove integrates with Logseq via the <a href="https://github.com/omnivore-app/logseq-omnivore" target="_blank" rel="noreferrer">logseq-omnivore</a> plugin. The plugin allows for customizing the data synced from Omnivore to Logseq, controlling the layout of the data, and the sync frequency.</p><nav class="table-of-contents"><ul><li><a href="#demonstration">Demonstration</a></li><li><a href="#setting-up-the-omnivore-logseq-plugin">Setting up the Omnivore Logseq plugin</a></li><li><a href="#customizing-which-data-is-synced-from-omnivore-to-logseq">Customizing which data is synced from Omnivore to Logseq</a></li><li><a href="#controlling-the-layout-of-the-data-imported-to-logseq">Controlling the layout of the data imported to Logseq</a><ul><li><a href="#variables-available-to-the-page-template">Variables available to the page template</a></li><li><a href="#variables-available-to-the-highlight-template">Variables available to the highlight template</a></li></ul></li><li><a href="#community-guides">Community Guides</a></li></ul></nav><h2 id="demonstration" tabindex="-1">Demonstration <a class="header-anchor" href="#demonstration" aria-hidden="true">#</a></h2>',3),u=e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Cc6DbBtOs14",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),m=t('<h2 id="setting-up-the-omnivore-logseq-plugin" tabindex="-1">Setting up the Omnivore Logseq plugin <a class="header-anchor" href="#setting-up-the-omnivore-logseq-plugin" aria-hidden="true">#</a></h2><ul><li>Search the Logseq Marketplace for Omnivore and install the plugin</li><li>In your browser open <a href="https://omnivore.app/settings/api" target="_blank" rel="noreferrer">https://omnivore.app/settings/api</a> and create an API token (see <a href="./api.html">API</a> for more info on creating a token)</li><li>In Logseq open the Omnivore Plugin Settings, and paste your API key</li></ul><h2 id="customizing-which-data-is-synced-from-omnivore-to-logseq" tabindex="-1">Customizing which data is synced from Omnivore to Logseq <a class="header-anchor" href="#customizing-which-data-is-synced-from-omnivore-to-logseq" aria-hidden="true">#</a></h2><p><a href="./images/logseq-sync-filter.png">Logseq Sync Filter</a></p><p>The Omnivore Logseq plugin offers three options for which data is imported:</p><ul><li>import all my articles: This will import every article you save to Omnivore and the labels (tags), highlights, and notes you have added to the article.</li><li>import just highlights: This will import every article you have saved that has highlights</li><li>advanced: This allows you to define a search filter to import. For example, import just Newsletters by using <code>label:Newsletter</code>.</li></ul><h2 id="controlling-the-layout-of-the-data-imported-to-logseq" tabindex="-1">Controlling the layout of the data imported to Logseq <a class="header-anchor" href="#controlling-the-layout-of-the-data-imported-to-logseq" aria-hidden="true">#</a></h2><p>The Omnivore Logseq plugin uses the <a href="https://mustache.github.io/" target="_blank" rel="noreferrer">mustache</a> template language to define how imported data is saved to Logseq. The plugin settings allow you to define the template for a page layout and the highlight layout.</p><h3 id="variables-available-to-the-page-template" tabindex="-1">Variables available to the page template <a class="header-anchor" href="#variables-available-to-the-page-template" aria-hidden="true">#</a></h3><ul><li>title</li><li>slug</li><li>siteName</li><li>originalArticleUrl</li><li>url</li><li>author</li><li>savedAt</li><li>updatedAt</li><li>pageType (article or PDF)</li><li>description</li><li>labels: A list of labels attached to the page</li></ul><h3 id="variables-available-to-the-highlight-template" tabindex="-1">Variables available to the highlight template <a class="header-anchor" href="#variables-available-to-the-highlight-template" aria-hidden="true">#</a></h3><ul><li>quote</li><li>annotation</li><li>labels</li><li>updatedAt</li></ul><h2 id="community-guides" tabindex="-1">Community Guides <a class="header-anchor" href="#community-guides" aria-hidden="true">#</a></h2><ul><li><a href="https://briansunter.com/graph/#/page/omnivore-logseq-guide?anchor=ls-block-62b28de3-0e9e-456e-bf29-7e2541213aa5" target="_blank" rel="noreferrer">omnivore-logseq-guide</a> -- A helpful setup and usage guide written by <a href="https://briansunter.com/" target="_blank" rel="noreferrer">Brian Sunter</a>.</li><li>Chinese translation: <a href="https://sywhb.github.io/#/page/omnivore-logseq%20%E6%8C%87%E5%8D%97" target="_blank" rel="noreferrer">omnivore-logseq-guide</a></li></ul>',14);function p(a,c,v,f,b,y){return n(),l("div",null,[e("h1",h,[o(r(a.$frontmatter.title)+" ",1),g]),d,u,m])}const w=i(s,[["render",p]]);export{q as __pageData,w as default};