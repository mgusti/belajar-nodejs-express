import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello Response`);
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

test("Test Response", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello Response");
});

test("Test Response Not found", async () => {
  const response = await request(app).get("/not-found");
  expect(response.text).toBe("404 Not Found");
});
