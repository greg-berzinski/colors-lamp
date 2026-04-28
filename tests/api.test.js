const { spawn, spawnSync } = require("child_process");

let server;

const phpAvailable = spawnSync("php", ["-v"], {
  encoding: "utf8",
}).status === 0;

const testOrSkip = phpAvailable ? test : test.skip;

beforeAll((done) => {
  if (!phpAvailable) {
    done();
    return;
  }

  server = spawn("php", ["-S", "127.0.0.1:8000"], {
    stdio: "ignore",
  });

  setTimeout(done, 1000);
});

afterAll(() => {
  if (server) {
    server.kill();
  }
});

testOrSkip("health API returns valid JSON structure", async () => {
  const response = await fetch("http://127.0.0.1:8000/api/health.php");
  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data).toHaveProperty("status", "ok");
  expect(data).toHaveProperty("app", "COLORS");
});