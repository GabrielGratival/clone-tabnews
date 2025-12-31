import database from "infra/database.js";

function status(request, response) {
  const result = database.query("SELECT NOW()");
  console.log(result.rows);
  response.status(200).json({ chave: "valor" });
}

export default status;
