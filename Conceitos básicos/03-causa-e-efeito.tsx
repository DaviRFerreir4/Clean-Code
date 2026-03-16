// @ts-nocheck

// Nomear variáveis pela causa, e não pelo efeito
// Efeito: botão desabilitado
// Causa: formulário sendo enviado

function Button() {
  // const isButtonDisabled = false
  const isFormSubmitting = false

  return (
    <button /*disabled={isButtonDisabled}*/ disabled={isFormSubmitting}>
      <span id="icon"></span>
      {/* {isButtonDisabled ? 'Carregando' : 'Enviar'} */}
      {isFormSubmitting ? 'Carregando' : 'Enviar'}
    </button>
  )
}