const useCurrency = (cost) => {
  const resultCost = cost.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  return resultCost
}

export default useCurrency