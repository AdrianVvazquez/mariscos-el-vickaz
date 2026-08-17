const WHATSAPP_NUMBER = '524521628312';
const CART_KEY = 'vickaz-cart-v2';

const productData = [
  {
    id: 'ceviche-camaron',
    category: 'ceviches',
    label: 'Ceviche de camarón',
    emoji: '🦐',
    description: 'Jitomate, cebolla blanca, cilantro, limón y camarón.',
    badge: 'Favorito',
    image: "./assets/ceviche-camaron.webp",
    presentations: [
      { id: '1l', label: '1 litro', price: 260 },
      { id: 'half', label: '1/2 litro', price: 130 },
      { id: '355', label: 'Mediano (vaso #12 / 355 ml)', price: 90 },
      { id: '236', label: 'Chico (vaso #8 / 236 ml)', price: 70 }
    ]
  },
  {
    id: 'ceviche-tilapia',
    category: 'ceviches',
    label: 'Ceviche de pescado de tilapia',
    emoji: '🐟',
    description: 'Jitomate, cebolla blanca, cilantro, limón y pescado de tilapia.',
    image: "./assets/ceviche-tilapia.webp",
    presentations: [
      { id: '1l', label: '1 litro', price: 260 },
      { id: 'half', label: '1/2 litro', price: 130 },
      { id: '355', label: 'Mediano (vaso #12 / 355 ml)', price: 90 },
      { id: '236', label: 'Chico (vaso #8 / 236 ml)', price: 70 }
    ]
  },
  {
    id: 'carne-apache',
    category: 'ceviches',
    label: 'Carne apache',
    emoji: '🥩',
    description: 'Jitomate, cebolla blanca, cilantro, limón y carne de res.',
    image: "./assets/carne-apache.webp",
    presentations: [
      { id: '1l', label: '1 litro', price: 260 },
      { id: 'half', label: '1/2 litro', price: 130 },
      { id: '355', label: 'Mediano (vaso #12 / 355 ml)', price: 90 },
      { id: '236', label: 'Chico (vaso #8 / 236 ml)', price: 70 }
    ]
  },
  {
    id: 'tiritas-pescado',
    category: 'ceviches',
    label: 'Tiritas de pescado',
    emoji: '🐟',
    description: 'Pescado de tilapia, cebolla morada y pepino.',
    image: "./assets/tiritas-pescado.webp",
    presentations: [
      { id: '1l', label: '1 litro', price: 260 },
      { id: 'half', label: '1/2 litro', price: 130 },
      { id: '355', label: 'Mediano (vaso #12 / 355 ml)', price: 90 },
      { id: '236', label: 'Chico (vaso #8 / 236 ml)', price: 70 }
    ]
  },

  {
    id: 'aguachile-negro',
    category: 'aguachiles',
    label: 'El de 3 salsas negras',
    emoji: '🦐',
    description: 'Maggi, soya, inglesa, cebolla morada, pepino y camarón.',
    badge: 'Más pedido',
    image: "./assets/aguachile-negro.webp",
    presentations: [
      { id: '1l', label: '1 litro', price: 350 },
      { id: 'half', label: '1/2 litro', price: 180 },
      { id: '355', label: 'Mediano (vaso #12 / 355 ml)', price: 130 },
      { id: '236', label: 'Chico (vaso #8 / 236 ml)', price: 90 }
    ]
  },
  {
    id: 'aguachile-mango',
    category: 'aguachiles',
    label: 'En salsa de mango',
    emoji: '🥭',
    description: 'Cebolla morada, pepino, mango y camarón.',
    badge: 'Especial',
    image: "./assets/aguachile-mango.webp",
    presentations: [
      { id: '1l', label: '1 litro', price: 350 },
      { id: 'half', label: '1/2 litro', price: 180 },
      { id: '355', label: 'Mediano (vaso #12 / 355 ml)', price: 130 },
      { id: '236', label: 'Chico (vaso #8 / 236 ml)', price: 90 }
    ]
  },
  {
    id: 'aguachile-verde',
    category: 'aguachiles',
    label: 'En salsa verde',
    emoji: '🦐',
    description: 'Cebolla morada, pepino, camarón y salsa especial de tomate con cilantro.',
    image: "./assets/aguachile-verde.webp",
    presentations: [
      { id: '1l', label: '1 litro', price: 350 },
      { id: 'half', label: '1/2 litro', price: 180 },
      { id: '355', label: 'Mediano (vaso #12 / 355 ml)', price: 130 },
      { id: '236', label: 'Chico (vaso #8 / 236 ml)', price: 90 }
    ]
  },

  {
    id: 'tostada-aguachile-verde',
    category: 'tostadas',
    label: 'Tostada de aguachile · Salsa verde',
    emoji: '🦐',
    image: "./assets/aguachile-verde.webp",
    description: 'Camarón, cebolla morada, pepino y salsa especial de tomate con cilantro.',
    fixedPrice: 30
  },
  {
    id: 'tostada-aguachile-negro',
    category: 'tostadas',
    label: 'Tostada de aguachile · Salsas negras',
    emoji: '🦐',
    image: "./assets/aguachile-negro.webp",
    description: 'Camarón en 3 salsas (maggi, soya, inglesa), cebolla morada y pepino.',
    fixedPrice: 30
  },
  {
    id: 'tostada-aguachile-mango',
    category: 'tostadas',
    label: 'Tostada de aguachile · Salsa de mango',
    emoji: '🥭',
    image: "./assets/aguachile-mango.webp",
    description: 'Camarón, cebolla morada, pepino y salsa de mango.',
    fixedPrice: 30
  },
  {
    id: 'tostada-mixta',
    category: 'tostadas',
    label: 'Tostada mixta',
    emoji: '🐙',
    image: "./assets/tostada-mixta.webp",
    description: 'Pulpo, camarón, tilapia, jitomate, cebolla blanca, cilantro y limón.',
    fixedPrice: 30
  },
  {
    id: 'tostada-pescado',
    category: 'tostadas',
    label: 'Tostada de pescado',
    emoji: '🐟',
    image: "./assets/tostada-pescado.webp",
    description: 'Pescado de tilapia, jitomate, cebolla blanca, cilantro y limón.',
    fixedPrice: 30
  },
  {
    id: 'tostada-camaron',
    category: 'tostadas',
    label: 'Tostada de camarón',
    emoji: '🦐',
    image: "./assets/tostada-camaron.webp",
    description: 'Camarón, jitomate, cebolla blanca, cilantro y limón.',
    fixedPrice: 30
  },
  {
    id: 'tostada-carne-apache',
    category: 'tostadas',
    label: 'Tostada de carne apache',
    emoji: '🥩',
    image: "./assets/tostada-carne-apache.webp",
    description: 'Carne de res, jitomate, cebolla blanca, cilantro y limón.',
    fixedPrice: 30
  },
  {
    id: 'tostada-tiritas',
    category: 'tostadas',
    label: 'Tostada de tiritas de pescado',
    emoji: '🐟',
    image: "./assets/tostada-tiritas.webp",
    description: 'Tiritas de pescado de tilapia, cebolla morada y pepino.',
    fixedPrice: 30
  },

  {
    id: 'tostitos-sencillo',
    category: 'especiales',
    label: 'Tostitos preparados · Sencillo',
    emoji: '🔥',
    image: './assets/tostitos-verdes.webp',
    description: 'Elige Tostitos Verdes o Flaming Hot y combínalos con cualquier ceviche o aguachile.',
    fixedPrice: 50,
    configurable: true,
    servings: 1
  },
  {
    id: 'tostitos-doble',
    category: 'especiales',
    label: 'Tostitos preparados · Doble',
    emoji: '🔥🔥',
    image: './assets/tostitos-flaming-hot.webp',
    description: 'Elige Tostitos Verdes o Flaming Hot y combínalos con cualquier ceviche o aguachile.',
    fixedPrice: 80,
    configurable: true,
    servings: 2
  }
];

const state = {
  activeFilter: 'all',
  search: '',
  cart: loadCart(),
  configProduct: null
};

const els = {
  navbar: document.getElementById('navbar'),
  hamburger: document.getElementById('hamburger'),
  mobileMenu: document.getElementById('mobileMenu'),
  menuResults: document.getElementById('menuResults'),
  search: document.getElementById('menuSearch'),
  filterPills: document.getElementById('filterPills'),
  cartOverlay: document.getElementById('cartOverlay'),
  cartBody: document.getElementById('cartBody'),
  cartFooter: document.getElementById('cartFooter'),
  configOverlay: document.getElementById('configOverlay'),
  configBody: document.getElementById('configBody'),
  configTitle: document.getElementById('configTitle'),
  configClose: document.getElementById('configClose'),
  configCancel: document.getElementById('configCancel'),
  configAdd: document.getElementById('configAdd')
};

function money(value) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(value);
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>'"]/g,
    (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#039;',
      '"': '&quot;'
    })[char]
  );
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
  updateCartUI();
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function cartTotal() {
  return state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

function updateCartUI() {
  const count = cartCount();

  document.querySelectorAll('.cart-count').forEach((node) => {
    node.textContent = count;
    node.classList.toggle('empty', count === 0);
  });
}

function productById(id) {
  return productData.find((item) => item.id === id);
}

function presentationLabel(product, item) {
  if (product.fixedPrice) return '';

  return (
    product.presentations.find(
      (presentation) => presentation.id === item.variantId
    )?.label || ''
  );
}

function filteredProducts() {
  const search = state.search.trim().toLowerCase();

  return productData.filter((product) => {
    const matchesCategory =
      state.activeFilter === 'all' ||
      product.category === state.activeFilter;

    const matchesSearch =
      !search ||
      `${product.label} ${product.description} ${product.category}`
        .toLowerCase()
        .includes(search);

    return matchesCategory && matchesSearch;
  });
}

function renderMenu() {
  const products = filteredProducts();

  if (!products.length) {
    els.menuResults.innerHTML = `
      <div class="empty-results">
        <span>🦐</span>
        <h3>No encontramos ese antojo</h3>
        <p>
          Prueba con "camarón", "mango" o selecciona otra categoría.
        </p>
      </div>
    `;
    return;
  }

  const groups = [
    [
      'ceviches',
      'Ceviches',
      'Frescos, cítricos y servidos al momento.'
    ],
    [
      'aguachiles',
      'Aguachiles de camarón',
      'Tres estilos para elegir tu favorito.'
    ],
    [
      'tostadas',
      'Tostadas',
      'Una tostada para cada antojo.'
    ],
    [
      'especiales',
      'Especiales',
      'Combina y arma algo diferente.'
    ]
  ];

  els.menuResults.innerHTML = groups
    .map(([key, title, subtitle]) => {
      const group = products.filter(
        (product) => product.category === key
      );

      if (!group.length) return '';

      return `
        <section class="menu-group" data-group="${key}">
          <div class="group-heading">
            <div>
              <span class="group-kicker">
                ${
                  key === 'especiales'
                    ? '✨'
                    : '•'
                }
                ${
                  key === 'ceviches'
                    ? 'Clásicos'
                    : key === 'aguachiles'
                    ? 'De camarón'
                    : key === 'tostadas'
                    ? 'Crujientes'
                    : 'Para compartir'
                }
              </span>

              <h3>${title}</h3>
            </div>

            <p>${subtitle}</p>
          </div>

          <div class="menu-grid">
            ${group.map(renderCard).join('')}
          </div>
        </section>
      `;
    })
    .join('');

  els.menuResults
    .querySelectorAll('[data-add]')
    .forEach((button) => {
      button.addEventListener('click', () => {
        addProduct(button.dataset.add);
      });
    });

  els.menuResults
    .querySelectorAll('[data-variant]')
    .forEach((select) => {
      select.addEventListener('change', (event) => {
        const card = event.target.closest('.menu-card');
        const priceNode = card.querySelector('.card-price');

        priceNode.textContent = money(
          Number(event.target.selectedOptions[0].dataset.price)
        );
      });
    });
}

function renderCard(product) {
  const defaultPrice =
    product.fixedPrice || product.presentations[0].price;

  const priceBlock = product.fixedPrice
    ? `
      <div class="single-price">
        ${money(product.fixedPrice)}
        <small>MXN</small>
      </div>
    `
    : `
      <label class="select-field">
        <span>Presentación</span>

        <select data-variant="${product.id}">
          ${product.presentations
            .map(
              (presentation) => `
                <option
                  value="${presentation.id}"
                  data-price="${presentation.price}"
                >
                  ${presentation.label}
                </option>
              `
            )
            .join('')}
        </select>
      </label>

      <div class="card-price">
        ${money(defaultPrice)}
      </div>
    `;

  return `
    <article class="menu-card">
      <div class="card-image-wrap">
        <img
          class="card-img"
          src="${product.image}"
          alt="${escapeHtml(product.label)}"
          loading="lazy"
        />

        <div class="card-emoji">
          ${product.emoji}
        </div>

        ${
          product.badge
            ? `<span class="card-badge">${escapeHtml(product.badge)}</span>`
            : ''
        }
      </div>

      <div class="card-body">
        <div class="card-top">
          <h4>${escapeHtml(product.label)}</h4>
        </div>

        <p>${escapeHtml(product.description)}</p>

        <div class="card-purchase">
          ${priceBlock}

          <button
            type="button"
            class="btn-add"
            data-add="${product.id}"
          >
            ${
              product.configurable
                ? 'Personalizar'
                : 'Agregar al pedido'
            }
          </button>
        </div>
      </div>
    </article>
  `;
}

function addProduct(productId) {
  const product = productById(productId);

  if (!product) return;

  if (product.configurable) {
    openConfigurator(product);
    return;
  }

  const card = [...els.menuResults.querySelectorAll('.menu-card')].find(
    (candidate) =>
      candidate.querySelector(`[data-add="${productId}"]`)
  );

  const select = card?.querySelector(
    `[data-variant="${productId}"]`
  );

  const variantId = select?.value || null;

  const price =
    product.fixedPrice ||
    product.presentations.find(
      (item) => item.id === variantId
    ).price;

  const variantLabel = variantId
    ? product.presentations.find(
        (item) => item.id === variantId
      ).label
    : '';

  upsertCartItem({
    key: `${product.id}:${variantId || 'unit'}`,
    productId: product.id,
    name: product.label,
    variantId,
    variantLabel,
    price,
    quantity: 1,
    customization: '',
    image: product.image
  });

  showToast(
    `${product.label}${
      variantLabel ? ` · ${variantLabel}` : ''
    } agregado`
  );
}

function openConfigurator(product) {
  state.configProduct = product;

  els.configTitle.textContent = product.label;

  const fillingOptions = [
    'Ceviche de camarón',
    'Ceviche de pescado de tilapia',
    'Ceviche mixto',
    'Carne apache',
    'Tiritas de pescado',
    'Aguachile de 3 salsas negras',
    'Aguachile en salsa de mango',
    'Aguachile en salsa verde'
  ];

  els.configBody.innerHTML = `
    <div class="config-intro">
      <img
        src="${product.image}"
        alt="${escapeHtml(product.label)}"
      >

      <div>
        <strong>${money(product.fixedPrice)}</strong>
        <span>
          Precio por
          ${product.servings === 2 ? 'doble' : 'sencillo'}
        </span>
      </div>
    </div>

    <div class="config-section">
      <label>1. Elige tus Tostitos</label>

      <div class="choice-grid" data-config="chips">
        <button
          type="button"
          class="choice-btn selected"
          data-value="Tostitos Verdes"
        >
          🌿 Tostitos Verdes
        </button>

        <button
          type="button"
          class="choice-btn"
          data-value="Tostitos Flaming Hot"
        >
          🔥 Flaming Hot
        </button>
      </div>
    </div>

    <div class="config-section">
      <label>2. Elige la preparación</label>

      <select
        class="config-select"
        id="configFilling"
      >
        ${fillingOptions
          .map(
            (value) =>
              `<option>${value}</option>`
          )
          .join('')}
      </select>
    </div>

    ${
      product.servings === 2
        ? `
          <div class="config-section">
            <label>3. Segundo complemento</label>

            <select
              class="config-select"
              id="configSecondFilling"
            >
              ${fillingOptions
                .map(
                  (value) =>
                    `<option>${value}</option>`
                )
                .join('')}
            </select>
          </div>
        `
        : ''
    }
  `;

  els.configBody
    .querySelectorAll('.choice-btn')
    .forEach((button) => {
      button.addEventListener('click', () => {
        els.configBody
          .querySelectorAll('.choice-btn')
          .forEach((item) =>
            item.classList.remove('selected')
          );

        button.classList.add('selected');
      });
    });

  els.configOverlay.classList.add('open');
  els.configOverlay.setAttribute(
    'aria-hidden',
    'false'
  );
}

function closeConfigurator() {
  els.configOverlay.classList.remove('open');
  els.configOverlay.setAttribute(
    'aria-hidden',
    'true'
  );

  state.configProduct = null;
}

function confirmConfigurator() {
  const product = state.configProduct;

  if (!product) return;

  const chips =
    els.configBody.querySelector(
      '.choice-btn.selected'
    )?.dataset.value || 'Tostitos Verdes';

  const filling =
    document.getElementById('configFilling')?.value || '';

  const second =
    document.getElementById('configSecondFilling')?.value;

  const customization =
    product.servings === 2
      ? `${chips} · ${filling} + ${second}`
      : `${chips} · ${filling}`;

  upsertCartItem({
    key: `${product.id}:${Date.now()}`,
    productId: product.id,
    name: product.label,
    variantId: null,
    variantLabel: '',
    price: product.fixedPrice,
    quantity: 1,
    customization,
    image: product.image
  });

  closeConfigurator();

  showToast('Tostitos personalizados agregados');
}

function upsertCartItem(item) {
  const existing = state.cart.find(
    (cartItem) => cartItem.key === item.key
  );

  if (existing) {
    existing.quantity += item.quantity;
  } else {
    state.cart.push(item);
  }

  saveCart();
}

function changeQuantity(index, delta) {
  const item = state.cart[index];

  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    state.cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function removeItem(index) {
  state.cart.splice(index, 1);
  saveCart();
  renderCart();
}

function clearCart() {
  const confirmed = confirm('¿Estás seguro de vaciar tu pedido?');
  if (!confirmed) return;

  state.cart = [];
  saveCart();
  renderCart();
}

function renderCart() {
  if (!state.cart.length) {
    els.cartBody.innerHTML = `
      <div class="cart-empty">
        <span>🦐</span>

        <h4>
          Aún no hay nada en tu pedido
        </h4>

        <p>
          Agrega tus favoritos y aquí aparecerá el resumen.
        </p>

        <a
          class="btn-primary"
          href="index.html#menu"
          data-close-cart
        >
          Ver menú
        </a>
      </div>
    `;

    els.cartFooter.innerHTML = '';

    els.cartBody
      .querySelector('[data-close-cart]')
      ?.addEventListener(
        'click',
        closeCart
      );

    return;
  }

  els.cartBody.innerHTML = state.cart
    .map(
      (item, index) => `
        <div class="cart-row">
          <img
            src="${item.image}"
            alt="${escapeHtml(item.name)}"
            class="cart-thumb"
          />

          <div class="cart-row-main">
            <div class="cart-row-name">
              ${escapeHtml(item.name)}
            </div>

            ${
              item.variantLabel
                ? `
                  <div class="cart-row-meta">
                    ${escapeHtml(item.variantLabel)}
                  </div>
                `
                : ''
            }

            ${
              item.customization
                ? `
                  <div class="cart-row-meta">
                    ${escapeHtml(item.customization)}
                  </div>
                `
                : ''
            }

            <div class="cart-row-bottom">
              <strong>
                ${money(item.price * item.quantity)}
              </strong>

              <div class="cart-row-counter">
                <button
                  class="counter-btn"
                  data-cart-index="${index}"
                  data-delta="-1"
                  type="button"
                >
                  −
                </button>

                <span class="counter-val">
                  ${item.quantity}
                </span>

                <button
                  class="counter-btn"
                  data-cart-index="${index}"
                  data-delta="1"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            class="cart-remove"
            data-remove-index="${index}"
            type="button"
            aria-label="Eliminar ${escapeHtml(item.name)}"
          >
            ×
          </button>
        </div>
      `
    )
    .join('');

  els.cartBody
    .querySelectorAll('[data-delta]')
    .forEach((button) => {
      button.addEventListener(
        'click',
        () =>
          changeQuantity(
            Number(button.dataset.cartIndex),
            Number(button.dataset.delta)
          )
      );
    });

  els.cartBody
    .querySelectorAll('[data-remove-index]')
    .forEach((button) => {
      button.addEventListener(
        'click',
        () =>
          removeItem(
            Number(button.dataset.removeIndex)
          )
      );
    });

  els.cartFooter.innerHTML = `
    <div class="cart-total-line">
      <span>Total estimado</span>
      <strong>${money(cartTotal())}</strong>
    </div>

    <button
      class="btn-whatsapp-order"
      id="sendWhatsApp"
      type="button"
    >
      Enviar pedido por WhatsApp
      <span>→</span>
    </button>

    <button
      class="btn-clear"
      id="clearCart"
      type="button"
    >
      Vaciar pedido
    </button>

    <small>
      El total es estimado. Confirma disponibilidad y
      detalles al enviar.
    </small>
  `;

  document
    .getElementById('sendWhatsApp')
    .addEventListener(
      'click',
      sendWhatsAppOrder
    );

  document
    .getElementById('clearCart')
    .addEventListener(
      'click',
      clearCart
    );
}

function openCart() {
  renderCart();

  els.cartOverlay.classList.add('open');

  els.cartOverlay.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add(
    'modal-open'
  );
}

function closeCart() {
  els.cartOverlay.classList.remove('open');

  els.cartOverlay.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.classList.remove(
    'modal-open'
  );
}

function sendWhatsAppOrder() {
  const lines = state.cart.map((item) => {
    const extra = [
      item.variantLabel,
      item.customization
    ]
      .filter(Boolean)
      .join(' · ');

    return `• ${item.quantity} x ${item.name}${
      extra ? ` (${extra})` : ''
    } — ${money(
      item.price * item.quantity
    )}`;
  });

  const message = [
    'Hola, Mariscos El Vickaz 🦐',
    '',
    'Quiero hacer este pedido:',
    lines.join('\n'),
    '',
    `Total estimado: ${money(cartTotal())}`,
    '',
    '¿Me confirman disponibilidad?'
  ].join('\n');

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`,
    '_blank',
    'noopener'
  );
}

function showToast(message) {
  const toast = document.createElement('div');

  toast.className = 'toast';
  toast.textContent = `✓ ${message}`;

  document.body.appendChild(toast);

  requestAnimationFrame(() =>
    toast.classList.add('show')
  );

  setTimeout(() => {
    toast.classList.remove('show');

    setTimeout(
      () => toast.remove(),
      220
    );
  }, 2100);
}

els.hamburger?.addEventListener(
  'click',
  () =>
    els.mobileMenu.classList.toggle(
      'open'
    )
);

document
  .querySelectorAll('.mobile-link')
  .forEach((link) =>
    link.addEventListener(
      'click',
      () =>
        els.mobileMenu.classList.remove(
          'open'
        )
    )
  );

window.addEventListener(
  'scroll',
  () =>
    els.navbar.classList.toggle(
      'scrolled',
      window.scrollY > 40
    )
);

els.search?.addEventListener(
  'input',
  (event) => {
    state.search = event.target.value;
    renderMenu();
  }
);

els.filterPills?.addEventListener(
  'click',
  (event) => {
    const button =
      event.target.closest(
        '[data-filter]'
      );

    if (!button) return;

    state.activeFilter =
      button.dataset.filter;

    els.filterPills
      .querySelectorAll(
        '.filter-pill'
      )
      .forEach((pill) =>
        pill.classList.toggle(
          'active',
          pill === button
        )
      );

    renderMenu();
  }
);

[
  'openCart',
  'openCartMobile',
  'floatingCart',
  'heroCart',
  'menuCart'
].forEach((id) => {
  document
    .getElementById(id)
    ?.addEventListener(
      'click',
      openCart
    );
});

document
  .getElementById('cartClose')
  ?.addEventListener(
    'click',
    closeCart
  );

els.cartOverlay?.addEventListener(
  'click',
  (event) => {
    if (
      event.target ===
      els.cartOverlay
    ) {
      closeCart();
    }
  }
);

els.configClose?.addEventListener(
  'click',
  closeConfigurator
);

els.configCancel?.addEventListener(
  'click',
  closeConfigurator
);

els.configAdd?.addEventListener(
  'click',
  confirmConfigurator
);

els.configOverlay?.addEventListener(
  'click',
  (event) => {
    if (
      event.target ===
      els.configOverlay
    ) {
      closeConfigurator();
    }
  }
);

document.addEventListener(
  'keydown',
  (event) => {
    if (event.key === 'Escape') {
      closeCart();
      closeConfigurator();
    }
  }
);

const observer =
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            'visible'
          );

          observer.unobserve(
            entry.target
          );
        }
      });
    },
    {
      threshold: 0.12
    }
  );

document
  .querySelectorAll(
    '.contact-card, .trust-item, .section-header, .menu-cta, .post'
  )
  .forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

if (els.menuResults) {
  renderMenu();
}

updateCartUI();