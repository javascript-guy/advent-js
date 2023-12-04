function manufacture(gifts, materials) {
  // Code here
  const canMake = [];
  gifts.forEach((gift) => {
    const giftComponents = gift.split("");
    let hasEach = true;
    giftComponents.forEach((component) => {
      hasEach = hasEach && materials.includes(component);
    });
    if (hasEach) {
      canMake.push(gift);
    }
  });
  return canMake;
}
