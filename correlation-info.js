var Int = {
  "tlb": {
        name: "时间轴书店",
        head: "跨维基页面",
        url: "https://timeline-bookstore.wikidot.com/",
        id: "4803609",
        category: ""
    },
  
  "tlb-sandbox": {
        name: "TLB沙盒站",
        head: "跨维基页面",
        url: "http://tlb-sandbox.wikidot.com/",
        id: "4814079",
        category: ""
    },
  
  "tlb-files": {
        name: "TLB附件站",
        head: "跨维基页面",
        url: "http://tlb-files.wikidot.com/",
        id: "4808722",
        category: ""
    },
  
  "netboard": {
        name: "Netboard",
        head: "跨维基页面",
        url: "http://netboard.wikidot.com/",
        id: "4800923",
        category: ""
    },
  
  "orcinus-library": {
        name: "虎鲸图书馆",
        head: "跨维基页面",
        url: "http://orcinus-library.wikidot.com/",
        id: "4761586",
        category: ""
    },
  
  "scp-mc": {
        name: "基金会MC分部",
        head: "跨维基页面",
        url: "http://scp-wiki-mc.wikidot.com/",
        id: "4427955",
        category: ""
    },
  
  "dfc": {
        name: "深林文学部",
        head: "跨维基页面",
        url: "http://deep-forest-club.wikidot.com/",
        id: "4861346",
        category: ""
    },
};

function bhlDark() {
    var bhlDarkStyle = document.createElement("style");
    bhlDarkStyle.setAttribute("type", "text/css");
    bhlDarkStyle.innerHTML = "@import url(https://cdn.jsdelivr.net/gh/scp-cn-tech/interwiki@cn/style-bhl-dark.css);";
    document.getElementsByTagName("head")[0].insertBefore(bhlDarkStyle, document.getElementById("custom-style"));
}

function bhlDarkCheck() {
    try {
        if (window.parent.window.BHLDarkFrame) {
            bhlDark();
        }
    } catch (e) {}
}

bhlDarkCheck();
