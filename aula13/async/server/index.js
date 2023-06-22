const http = require("http");
const fs = require("fs");
const apiJson = require("./api.json");

const getDataFromProduct = (req) => {
  return new Promise((resolve) => {
    let obj = "";

    req.on("data", (chunk) => {
      obj += chunk.toString();
    });

    req.on("end", () => {
      resolve(obj);
    });
  });
};

const server = http.createServer(async (req, res) => {
  if (req.url.includes("/produtos")) {
    if (req.method === "GET") {
      const json = JSON.stringify(apiJson);

      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Content-type", "application/json");
      res.writeHead(200);
      res.end(json);
    }

    if (req.method === "POST") {
      try {
        const body = await getDataFromProduct(req);
        const obj = apiJson;
        const lastId = obj.produtos[obj.produtos.length - 1].id;
        const newObj = JSON.parse(body);
        obj.produtos.push({ id: lastId + 1, ...newObj });

        fs.writeFile("./api.json", JSON.stringify(obj, null, 3), (err) => {
          console.log(err);
          res.writeHead(500);
        });

        res.writeHead(201);
        res.end();
      } catch (error) {
        res.writeHead(500);
        res.end();
      }
    }

    if (req.method === "PUT") {
      try {
        const body = await getDataFromProduct(req);
        const urlContents = req.url.split("/");
        const id = urlContents[urlContents.length - 1];
        const indexToUpdate = apiJson.produtos.findIndex(
          (produto) => produto.id === Number(id)
        );
        const obj = apiJson;
        const newObj = JSON.parse(body);

        if (indexToUpdate !== -1) {
          obj.produtos[indexToUpdate] = {
            ...obj.produtos[indexToUpdate],
            ...newObj,
          };
        }

        fs.writeFile("./api.json", JSON.stringify(obj, null, 3), (err) => {
          console.log(err);
          res.writeHead(500);
        });

        res.writeHead(200);
        res.end();
      } catch (error) {
        res.writeHead(500);
        res.end();
      }
    }

    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end();
    }

    if (req.method === "DELETE") {
      try {
        const urlContents = req.url.split("/");
        const id = urlContents[urlContents.length - 1];
        const indexToRemove = apiJson.produtos.findIndex(
          (produto) => produto.id === Number(id)
        );

        if (indexToRemove !== -1) {
          apiJson.produtos.splice(indexToRemove, 1);

          fs.writeFile(
            "./api.json",
            JSON.stringify(apiJson, null, 3),
            (err) => {
              console.log(err);
            }
          );
        }

        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        res.end();
      } catch (error) {
        res.writeHead(500);
        res.end();
      }
    }
  }

  res.end();
});

server.listen("8080", "localhost");
