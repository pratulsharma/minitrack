async function getDriver() {
  return "Rahul";
}

async function bookTaxi() {
  const driver = await getDriver();
  console.log(driver); // Rahul
}

bookTaxi();
