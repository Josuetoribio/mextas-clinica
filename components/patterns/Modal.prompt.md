Diálogo o drawer.

```jsx
<Modal open={open} onClose={close} eyebrow="Agendar cita" title="¿Qué necesitas?" size="lg"
  footer={<Button onClick={next}>Continuar</Button>}>…</Modal>
```
`variant="drawer"` para paneles laterales; `variant="sheet"` para bottom sheets en móvil (filtros).