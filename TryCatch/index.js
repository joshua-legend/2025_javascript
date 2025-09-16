try {
  //   throw new Error("일부러 에러 터지게 했음");
  const a = 1;
  a.toUpperCase();
} catch (e) {
  console.log(e.name);
  console.log(e.message);
  console.log(e.stack);
} finally {
}
