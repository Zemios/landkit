/* Landkit demo — render the colour scales and token tables from JS
   so the demo always reflects the live tokens.css file. */

;(function () {
  const root = document.documentElement
  const cs = getComputedStyle(root)

  // ── Theme switcher ────────────────────────────────
  document.querySelectorAll('[data-set-theme]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-set-theme')
      root.setAttribute('data-theme', theme)
      document.querySelectorAll('[data-set-theme]').forEach((b) =>
        b.classList.toggle('is-active', b === btn)
      )
      try {
        localStorage.setItem('zemios-demo-theme', theme)
      } catch {}
    })
  })
  try {
    const saved = localStorage.getItem('zemios-demo-theme')
    if (saved) {
      root.setAttribute('data-theme', saved)
      document.querySelectorAll('[data-set-theme]').forEach((b) =>
        b.classList.toggle('is-active', b.getAttribute('data-set-theme') === saved)
      )
    }
  } catch {}

  // ── Colour scales ──────────────────────────────────
  const scales = [
    { group: 'Sky (primario)', variable: 'sky', stops: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
    { group: 'Violet (acento)', variable: 'violet', stops: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
    { group: 'Gold (destacado)', variable: 'gold', stops: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { group: 'Rose (destructivo)', variable: 'rose', stops: [50, 100, 200, 300, 400, 500, 600, 700] },
    { group: 'Slate (neutros)', variable: 'slate', stops: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] },
  ]
  const isLight = (hex) => {
    const c = hex.replace('#', '')
    const r = parseInt(c.substring(0, 2), 16)
    const g = parseInt(c.substring(2, 4), 16)
    const b = parseInt(c.substring(4, 6), 16)
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return lum > 0.6
  }

  const scalesEl = document.getElementById('color-scales')
  if (scalesEl) {
    const html = scales
      .map(({ group, variable, stops }) => {
        const swatches = stops
          .map((stop) => {
            const v = cs.getPropertyValue(`--zemios-${variable}-${stop}`).trim()
            const name = `${variable}-${stop}`
            return `
              <button class="demo-swatch ${isLight(v) ? 'is-light' : ''}"
                      style="background:${v}"
                      title="Copiar ${v}"
                      data-copy="${v}">
                <span class="demo-swatch__name">${name}</span>
                <span class="demo-swatch__hex">${v}</span>
              </button>`
          })
          .join('')
        return `
          <div>
            <p class="demo-scale-title">${group}
              <small>--zemios-${variable}-*</small>
            </p>
            <div class="demo-swatches">${swatches}</div>
          </div>`
      })
      .join('')
    scalesEl.innerHTML = html
  }

  // ── Token tables ──────────────────────────────────
  const tablesEl = document.getElementById('tokens-tables')
  if (tablesEl) {
    const blocks = [
      {
        title: 'Espaciado',
        rows: [0, 'px', 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((s) => ({
          name: `space-${s}`,
          variable: `--zemios-space-${s}`,
          value: cs.getPropertyValue(`--zemios-space-${s}`).trim(),
        })),
      },
      {
        title: 'Radios',
        rows: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full', 'card', 'control'].map((r) => ({
          name: `radius-${r}`,
          variable: `--zemios-radius-${r}`,
          value: cs.getPropertyValue(`--zemios-radius-${r}`).trim(),
        })),
      },
      {
        title: 'Sombras',
        rows: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'glow', 'glow-accent', 'ring'].map((r) => ({
          name: `shadow-${r}`,
          variable: `--zemios-shadow-${r}`,
          value: cs.getPropertyValue(`--zemios-shadow-${r}`).trim(),
        })),
      },
      {
        title: 'Motion',
        rows: [
          { name: 'duration-fast', variable: '--zemios-duration-fast', value: cs.getPropertyValue('--zemios-duration-fast').trim() },
          { name: 'duration-base', variable: '--zemios-duration-base', value: cs.getPropertyValue('--zemios-duration-base').trim() },
          { name: 'duration-moderate', variable: '--zemios-duration-moderate', value: cs.getPropertyValue('--zemios-duration-moderate').trim() },
          { name: 'duration-slow', variable: '--zemios-duration-slow', value: cs.getPropertyValue('--zemios-duration-slow').trim() },
          { name: 'easing-default', variable: '--zemios-easing-default', value: cs.getPropertyValue('--zemios-easing-default').trim() },
          { name: 'easing-bounce', variable: '--zemios-easing-bounce', value: cs.getPropertyValue('--zemios-easing-bounce').trim() },
        ],
      },
    ]
    tablesEl.innerHTML = `
      <div class="demo-grid-3">
        ${blocks
          .map(
            ({ title, rows }) => `
          <div>
            <p class="demo-scale-title">${title}</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem">
              <thead>
                <tr style="text-align:left;color:var(--zemios-text-muted)">
                  <th style="padding:0.4rem 0;border-bottom:1px solid var(--zemios-border-default)">Token</th>
                  <th style="padding:0.4rem 0;border-bottom:1px solid var(--zemios-border-default)">Valor</th>
                </tr>
              </thead>
              <tbody>
                ${rows
                  .map(
                    (r) => `<tr>
                      <td style="padding:0.4rem 0;border-bottom:1px solid var(--zemios-border-subtle);font-family:var(--zemios-font-mono);color:var(--zemios-accent)">${r.variable}</td>
                      <td style="padding:0.4rem 0;border-bottom:1px solid var(--zemios-border-subtle);font-family:var(--zemios-font-mono);font-size:0.8rem">${r.value || '—'}</td>
                    </tr>`
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        `
          )
          .join('')}
      </div>
    `
  }

  // ── Click-to-copy on swatches ─────────────────────
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-copy]')
    if (!target) return
    const text = target.getAttribute('data-copy')
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
    }
    target.style.outline = '2px solid var(--zemios-accent)'
    target.style.outlineOffset = '2px'
    setTimeout(() => {
      target.style.outline = ''
      target.style.outlineOffset = ''
    }, 800)
  })
})()