function sockMerchant(n, ar) {
  if (n >= 1 && n <= 100) {
    let pairs = 0;
    let i = 0;

    ar.sort();
    while (i < n) {
      if (ar[i] === arr[i + 1]) {
        pairs++;
        i = i + 2;
      }
      i++;
    }
    return pairs;
  }
}
