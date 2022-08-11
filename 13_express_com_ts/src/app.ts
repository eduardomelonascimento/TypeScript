import express, { NextFunction, Request, Response } from "express";

// iniciando o express

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});

app.get("/api/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.post("/api/json/product", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ message: "Produto adicionado com sucesso" });
});

app.all("/api/json/product/check", (req: Request, res: Response) => {
  res.json({ message: `Fez ${req.method}` });
});

app.post("/api/json/product/:id", (req: Request, res: Response) => {
  res.json(req.params.id);
});

app.get(
  "/api/json/product/:productID/review/:reviewID",
  (req: Request, res: Response) => {
    res.json(req.params);
  }
);

app.get("/api/json/user/:id", editUser);

function editUser(req: Request, res: Response) {
  res.send("Recuperando usuário com o Id " + req.params.id);
}

function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    next();
  } else {
    res.json({ error: "Unauthorized user" }).status(400);
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  res.send("Acesso permitido");
});

type reqres = {
  id: string;
  name: string;
};

app.get(
  "/api/user/:id/details/:name",
  (req: Request<reqres>, res: Response<reqres>) => {
    res.json({ id: req.params.id, name: req.params.name });
  }
);

// tratando erros

app.get("/api/error", (req, res) => {
  try {
    throw new Error("Error message");
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});
