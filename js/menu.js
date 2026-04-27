// ============================================================
// MENU.JS — Mesal Café
// Genera el HTML del menú a partir de menu-data.js
// No hace falta tocar este archivo para editar el menú
// ============================================================

// ---- Renderizar tabs ----
function renderTabs() {
  const container = document.querySelector('.menu-tabs');
  container.innerHTML = menuTabs.map((tab, i) => `
    <button class="tab-btn ${i === 0 ? 'active' : ''}" data-filter="${tab.filter}">
      <i class="fa-solid ${tab.icon}"></i>
      <span>${tab.label}</span>
    </button>
  `).join('');
}

// ---- Renderizar precio(s) ----
function renderPrecio(item) {
  if (item.precios) {
    return `<div class="item-price-multi">${item.precios.map(p => `<span>${p}</span>`).join('')}</div>`;
  }
  return `<span class="item-price">${item.precio}</span>`;
}

// ---- Renderizar un item ----
function renderItem(item, destacado = false) {
  const vegBadge = item.vegano ? ' <span class="veg-icon">🌿</span>' : '';
  return `
    <div class="menu-item ${destacado ? 'highlight-item' : ''}">
      <div class="item-info">
        <span class="item-name">${item.nombre}${vegBadge}</span>
        ${item.desc ? `<span class="item-desc">${item.desc}</span>` : ''}
      </div>
      ${renderPrecio(item)}
    </div>
  `;
}

// ---- Renderizar upgrade box ----
function renderUpgrade(upgrades) {
  if (!upgrades?.length) return '';
  return `
    <div class="upgrade-box">
      <span class="upgrade-label">UPGRADE</span>
      ${upgrades.map(u => `<span>${u.label} ${u.precio}</span>`).join('')}
    </div>
  `;
}

// ---- Renderizar secciones ----
function renderSecciones() {
  const container = document.querySelector('.menu-container');
  container.innerHTML = menuData.map(seccion => `
    <section class="menu-section" data-category="${seccion.categoria}">
      <div class="section-header">
        <h2 class="section-title">${seccion.titulo}</h2>
        ${seccion.nota ? `<span class="section-note">${seccion.nota}</span>` : ''}
        <div class="section-line"></div>
      </div>
      <div class="menu-grid ${seccion.destacado ? 'highlight-grid' : ''}">
        ${seccion.items.map(item => renderItem(item, seccion.destacado)).join('')}
      </div>
      ${renderUpgrade(seccion.upgrade)}
    </section>
  `).join('');
}

// ---- Lógica de filtrado ----
function initFiltros() {
  document.querySelector('.menu-tabs').addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.menu-section').forEach(sec => {
      const visible = filter === 'all' || sec.dataset.category === filter;
      sec.style.display = visible ? 'block' : 'none';
      if (visible) sec.style.animation = 'fadeIn 0.35s ease';
    });
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  renderSecciones();
  initFiltros();
});