// Exemplo simples

const INTERVAL_30_DAYS = 1000 * 60 * 60 * 24 * 30

// setTimeout(() => {}, 2592000000) // 30 dias (número mágico)
setTimeout(() => {}, INTERVAL_30_DAYS) // 30 dias

// DICA BOA (é possível separar números grandes com _, o javascript irá ignorar eles na execução)
const validNumber = 13_593_058_300

// Exeplo avançado

// Importante descrever a unidade de medida de dados salvos em bancos de dados, etc.
function calculateDiscount(priceInCents, discountAmountInPercentage) {}