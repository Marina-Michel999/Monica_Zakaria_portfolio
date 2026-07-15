// /* =========================================================
//    THEME (light / dark) — persisted in localStorage
// ========================================================= */
// (function initTheme() {
//   const saved = localStorage.getItem("theme") || "dark";
//   document.documentElement.setAttribute("data-theme", saved);
// })();

// function toggleTheme() {
//   const current = document.documentElement.getAttribute("data-theme");
//   const next = current === "light" ? "dark" : "light";
//   document.documentElement.setAttribute("data-theme", next);
//   localStorage.setItem("theme", next);
//   updateThemeIcon(next);
// }

// function updateThemeIcon(theme) {
//   const icon = document.getElementById("themeIcon");
//   if (!icon) return;
//   icon.className = theme === "light" ? "fa fa-moon" : "fa fa-sun";
// }

// document.addEventListener("DOMContentLoaded", () => {
//   updateThemeIcon(document.documentElement.getAttribute("data-theme"));
//   const btn = document.getElementById("themeToggleBtn");
//   if (btn) btn.addEventListener("click", toggleTheme);
// });

// /* =========================================================
//    HERO TYPEWRITER
// ========================================================= */
// const typewriterWords = ["Monica Zakaria", "Digital Marketing Specialist", "Content & Social Media"];
// let twWordIndex = 0, twCharIndex = 0, twDeleting = false;

// function runTypewriter() {
//   const el = document.getElementById("typewriter");
//   if (!el) return;
//   const word = typewriterWords[twWordIndex];

//   if (!twDeleting) {
//     twCharIndex++;
//     el.textContent = word.slice(0, twCharIndex);
//     if (twCharIndex === word.length) {
//       twDeleting = true;
//       setTimeout(runTypewriter, 1400);
//       return;
//     }
//   } else {
//     twCharIndex--;
//     el.textContent = word.slice(0, twCharIndex);
//     if (twCharIndex === 0) {
//       twDeleting = false;
//       twWordIndex = (twWordIndex + 1) % typewriterWords.length;
//     }
//   }
//   setTimeout(runTypewriter, twDeleting ? 45 : 90);
// }
// document.addEventListener("DOMContentLoaded", runTypewriter);

// /* =========================================================
//    PORTFOLIO / PROJECTS DATA
//    -----------------------------------------------------------
//    HOW TO ADD YOUR OWN FILES:
//    Just drop your files inside the matching folder below using
//    plain numbers (1, 2, 3 ...) and the extension listed here.
//    If your files use a different extension, change "ext" below.

//      assets/projects/graphics/1.jpg  ... 12.jpg   (12 images)
//      assets/projects/freelancing/1.jpg, 2.jpg      (2 images)
//      assets/projects/seo/1.pdf, 2.pdf, 3.pdf       (3 files)
//      assets/projects/social/1.jpg ... 14.jpg       (14 images)
//      assets/projects/content-plan/1.xlsx           (1 file)
//      assets/projects/web/1.jpg                     (1 image)
// ========================================================= */
// const portfolioCategories = [
//   { key: "graphics",      label: "Graphics Design",  count: 12, folder: "assets/projects/graphics",      type: "image", ext: "jpg" },
//   { key: "freelancing",   label: "Freelancing",      count: 2,  folder: "assets/projects/freelancing",   type: "image", ext: "jpg" },
//   { key: "seo",           label: "SEO",              count: 3,  folder: "assets/projects/seo",           type: "file",  ext: "pdf", fileIcon: "fa-file-pdf" },
//   { key: "social",        label: "Social Media",     count: 14, folder: "assets/projects/social",        type: "image", ext: "jpg" },
//   { key: "content-plan",  label: "Content Plan",     count: 1,  folder: "assets/projects/content-plan",  type: "file",  ext: "xlsx", fileIcon: "fa-file-excel" },
//   { key: "web",           label: "Web",              count: 1,  folder: "assets/projects/web",           type: "image", ext: "jpg" },
// ];

// function buildPortfolioItems() {
//   const items = [];
//   portfolioCategories.forEach((cat) => {
//     for (let i = 1; i <= cat.count; i++) {
//       items.push({
//         category: cat.key,
//         label: cat.label,
//         type: cat.type,
//         fileIcon: cat.fileIcon,
//         index: i,
//         src: `${cat.folder}/${i}.${cat.ext}`,
//       });
//     }
//   });
//   return items;
// }

// function placeholderFor(label, index) {
//   const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
//     <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
//       <stop offset='0%' stop-color='#6c2bd9'/><stop offset='55%' stop-color='#ee2a7b'/><stop offset='100%' stop-color='#ffb020'/>
//     </linearGradient></defs>
//     <rect width='400' height='300' fill='url(#g)'/>
//     <text x='50%' y='48%' font-family='Inter,sans-serif' font-size='22' fill='#fff' text-anchor='middle'>${label}</text>
//     <text x='50%' y='60%' font-family='Inter,sans-serif' font-size='16' fill='#ffffffcc' text-anchor='middle'>#${index} — add your file</text>
//   </svg>`;
//   return "data:image/svg+xml;base64," + btoa(svg);
// }

// function renderPortfolio() {
//   const grid = document.getElementById("portfolioGrid");
//   const filterNav = document.getElementById("portfolioFilters");
//   if (!grid || !filterNav) return;

//   const items = buildPortfolioItems();

//   // filter buttons
//   const allCats = [{ key: "all", label: "All" }, ...portfolioCategories.map(c => ({ key: c.key, label: c.label }))];
//   filterNav.innerHTML = allCats.map((c, i) =>
//     `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c.key}">${c.label}</button>`
//   ).join("");

//   // grid cards
//   grid.innerHTML = items.map((item, i) => {
//     const inner = item.type === "image"
//       ? `<div class="project-thumb" data-src="${item.src}" data-label="${item.label} #${item.index}">
//            <img src="${item.src}" alt="${item.label} ${item.index}"
//                 onerror="this.onerror=null; this.src='${placeholderFor(item.label, item.index)}'">
//            <div class="zoom-hint"><i class="fa fa-magnifying-glass-plus"></i></div>
//          </div>`
//       : `<a class="project-file text-decoration-none" href="${item.src}" target="_blank" rel="noopener">
//            <i class="fa ${item.fileIcon}"></i>
//            <span class="text-muted small">Click to open</span>
//          </a>`;

//     return `<div class="col-lg-3 col-md-4 col-6 portfolio-item" data-category="${item.category}">
//       <div class="project-card">
//         ${inner}
//         <div class="card-footer-info">
//           <div class="cat-tag">${item.label}</div>
//           <p class="item-name">Item ${item.index}</p>
//         </div>
//       </div>
//     </div>`;
//   }).join("");

//   // filtering
//   filterNav.addEventListener("click", (e) => {
//     const btn = e.target.closest(".filter-btn");
//     if (!btn) return;
//     filterNav.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
//     btn.classList.add("active");
//     const filter = btn.dataset.filter;
//     grid.querySelectorAll(".portfolio-item").forEach(card => {
//       const show = filter === "all" || card.dataset.category === filter;
//       card.classList.toggle("d-none", !show);
//     });
//   });

//   // lightbox
//   const lightboxImg = document.getElementById("lightboxImg");
//   grid.addEventListener("click", (e) => {
//     const thumb = e.target.closest(".project-thumb");
//     if (!thumb) return;
//     lightboxImg.src = thumb.querySelector("img").src;
//     const modal = new bootstrap.Modal(document.getElementById("lightboxModal"));
//     modal.show();
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderPortfolio();
// });
/* =========================================================
   THEME (light / dark) — persisted in localStorage
========================================================= */
(function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (!icon) return;
  icon.className = theme === "light" ? "fa fa-moon" : "fa fa-sun";
}

document.addEventListener("DOMContentLoaded", () => {
  updateThemeIcon(document.documentElement.getAttribute("data-theme"));
  const btn = document.getElementById("themeToggleBtn");
  if (btn) btn.addEventListener("click", toggleTheme);
});

/* =========================================================
   HERO TYPEWRITER
========================================================= */
const typewriterWords = ["Monica Zakaria", "Digital Marketing Specialist", "Content & Social Media"];
let twWordIndex = 0, twCharIndex = 0, twDeleting = false;

function runTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const word = typewriterWords[twWordIndex];

  if (!twDeleting) {
    twCharIndex++;
    el.textContent = word.slice(0, twCharIndex);
    if (twCharIndex === word.length) {
      twDeleting = true;
      setTimeout(runTypewriter, 1400);
      return;
    }
  } else {
    twCharIndex--;
    el.textContent = word.slice(0, twCharIndex);
    if (twCharIndex === 0) {
      twDeleting = false;
      twWordIndex = (twWordIndex + 1) % typewriterWords.length;
    }
  }
  setTimeout(runTypewriter, twDeleting ? 45 : 90);
}
document.addEventListener("DOMContentLoaded", runTypewriter);

/* =========================================================
   PORTFOLIO / PROJECTS DATA
   -----------------------------------------------------------
   HOW TO ADD YOUR OWN FILES:
   Just drop your files inside the matching folder below using
   plain numbers (1, 2, 3 ...) and the extension listed here.
   If your files use a different extension, change "ext" below.

     assets/projects/graphics/1.jpg  ... 12.jpg   (12 images)
     assets/projects/freelancing/1.jpg, 2.jpg      (2 images)
     assets/projects/seo/1.pdf, 2.pdf, 3.pdf       (3 files)
     assets/projects/social/1.jpg ... 14.jpg       (14 images)
     assets/projects/content-plan/1.xlsx           (1 file)
     assets/projects/web/1.jpg                     (1 image)
========================================================= */
// const portfolioCategories = [
//   { key: "graphics",      label: "Graphics Design",  count: 12, folder: "assets/projects/graphics",      type: "image", ext: "jpg" },
//   { key: "freelancing",   label: "Freelancing",      count: 2,  folder: "assets/projects/freelancing",   type: "image", ext: "png" },
//   { key: "seo",           label: "SEO",              count: 3,  folder: "assets/projects/seo",           type: "file",  ext: "pdf", fileIcon: "fa-file-pdf" },
//   { key: "social",        label: "Social Media",     count: 14, folder: "assets/projects/social",        type: "image", ext: "jpg" },
//   { key: "content-plan",  label: "Content Plan",     count: 1,  folder: "assets/projects/content-plan",  type: "file",  ext: "xlsx", fileIcon: "fa-file-excel" },
//   { key: "web",           label: "Web",              count: 1,  folder: "assets/projects/web",           type: "image", ext: "jpg" },
// ];

// function buildPortfolioItems() {
//   const items = [];
//   portfolioCategories.forEach((cat) => {
//     for (let i = 1; i <= cat.count; i++) {
//       items.push({
//         category: cat.key,
//         label: cat.label,
//         type: cat.type,
//         fileIcon: cat.fileIcon,
//         index: i,
//         src: `${cat.folder}/${cat.key}-${i}.${cat.ext}`,
//       });
//     }
//   });
//   return items;
// }
const portfolioCategories = [
  { 
    key: "graphics", label: "Graphics Design", folder: "assets/projects/graphics",
    items: Array.from({ length: 12 }, (_, i) => ({ ext: "jpg", type: "image" }))
  },
  { 
    key: "freelancing", label: "Freelancing", folder: "assets/projects/freelancing",
    items: [
      { ext: "png", type: "image" },
      { ext: "pdf", type: "file", fileIcon: "fa-file-pdf" },
    ]
  },
  { 
    key: "seo", label: "SEO", folder: "assets/projects/seo",
    items: [
      { ext: "xlsx", type: "file", fileIcon: "fa-file-excel" },
      { ext: "xlsx", type: "file", fileIcon: "fa-file-excel" },
      { ext: "pdf",  type: "file", fileIcon: "fa-file-pdf" },
    ]
  },
  { 
    key: "social", label: "Social Media", folder: "assets/projects/social",
    items: Array.from({ length: 14 }, (_, i) => ({ ext: "jpg", type: "image" }))
  },
  { 
    key: "content-plan", label: "Content Plan", folder: "assets/projects/content-plan",
    items: [{ ext: "xlsx", type: "file", fileIcon: "fa-file-excel" }]
  },
{ 
  key: "web", label: "Web", folder: "assets/projects/web",
  items: [{ ext: "html", type: "file", fileIcon: "fa-file-code" }]
},
];

// function buildPortfolioItems() {
//   const items = [];
//   portfolioCategories.forEach((cat) => {
//     cat.items.forEach((item, idx) => {
//       const index = idx + 1;
//       items.push({
//         category: cat.key,
//         label: cat.label,
//         type: item.type,
//         fileIcon: item.fileIcon,
//         index,
//         src: `${cat.folder}/${cat.key}-${index}.${item.ext}`,
//       });
//     });
//   });
//   return items;
// }
// extensions that browsers can't display inline — force a proper download
const FORCE_DOWNLOAD_EXTS = ["xlsx", "xls", "docx", "doc", "pptx", "csv"];

function buildPortfolioItems() {
  const items = [];
  portfolioCategories.forEach((cat) => {
    cat.items.forEach((item, idx) => {
      const index = idx + 1;
      const src = `${cat.folder}/${cat.key}-${index}.${item.ext}`;
      items.push({
        category: cat.key,
        label: cat.label,
        type: item.type,
        fileIcon: item.fileIcon,
        index,
        src,
        filename: src.split("/").pop(), // e.g. "seo-1.xlsx"
        forceDownload: FORCE_DOWNLOAD_EXTS.includes(item.ext),
      });
    });
  });
  return items;
}
function placeholderFor(label, index) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#6c2bd9'/><stop offset='55%' stop-color='#ee2a7b'/><stop offset='100%' stop-color='#ffb020'/>
    </linearGradient></defs>
    <rect width='400' height='300' fill='url(#g)'/>
    <text x='50%' y='48%' font-family='Inter,sans-serif' font-size='22' fill='#fff' text-anchor='middle'>${label}</text>
    <text x='50%' y='60%' font-family='Inter,sans-serif' font-size='16' fill='#ffffffcc' text-anchor='middle'>#${index} - add your file</text>
  </svg>`;
  // encodeURIComponent (not btoa) so this never breaks on non-ASCII characters
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function renderPortfolio() {
  const grid = document.getElementById("portfolioGrid");
  const filterNav = document.getElementById("portfolioFilters");
  if (!grid || !filterNav) return;

  const items = buildPortfolioItems();

  // filter buttons
  const allCats = [{ key: "all", label: "All" }, ...portfolioCategories.map(c => ({ key: c.key, label: c.label }))];
  filterNav.innerHTML = allCats.map((c, i) =>
    `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c.key}">${c.label}</button>`
  ).join("");

  // grid cards
  try {
    grid.innerHTML = items.map((item, i) => {
      const inner = item.type === "image"
        ? `<div class="project-thumb" data-src="${item.src}" data-label="${item.label} #${item.index}">
             <img src="${item.src}" alt="${item.label} ${item.index}"
                  onerror="this.onerror=null; this.src='${placeholderFor(item.label, item.index)}'">
             <div class="zoom-hint"><i class="fa fa-magnifying-glass-plus"></i></div>
           </div>`
        : `<a class="project-file text-decoration-none" href="${item.src}"
     ${item.forceDownload ? `download="${item.filename}"` : `target="_blank" rel="noopener"`}>
     <i class="fa ${item.fileIcon}"></i>
     <span class="text-muted small">${item.forceDownload ? "Click to download" : "Click to open"}</span>
   </a>`;

      return `<div class="col-lg-3 col-md-4 col-6 portfolio-item" data-category="${item.category}">
        <div class="project-card">
          ${inner}
          <div class="card-footer-info">
            <div class="cat-tag">${item.label}</div>
            <p class="item-name">Item ${item.index}</p>
          </div>
        </div>
      </div>`;
    }).join("");
  } catch (err) {
    console.error("Failed to build portfolio grid:", err);
  }

  // filtering
  filterNav.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterNav.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    grid.querySelectorAll(".portfolio-item").forEach(card => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("d-none", !show);
    });
  });

  // lightbox
  const lightboxImg = document.getElementById("lightboxImg");
  grid.addEventListener("click", (e) => {
    const thumb = e.target.closest(".project-thumb");
    if (!thumb) return;
    lightboxImg.src = thumb.querySelector("img").src;
    const modal = new bootstrap.Modal(document.getElementById("lightboxModal"));
    modal.show();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
});
