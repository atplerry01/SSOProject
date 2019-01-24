const app = require("./app");
const PORT = 3020;

app.listen(PORT, () => {
  console.log(app);
  console.info(`sso-consumer listening on port ${PORT}`);
});
