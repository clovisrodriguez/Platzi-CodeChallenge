export const sortDirection = ['ascending', 'descending'];
export function formatCurrency(value) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
}
