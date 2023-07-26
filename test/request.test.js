import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

test("Test Response", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello World");
});
