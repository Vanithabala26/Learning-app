import test from "node:test";
import assert from "node:assert/strict";
import { isValidConfidence } from "./validation.ts";

test("rejects confidence outside the range 1-5", () => {
  assert.equal(isValidConfidence(0), false);
  assert.equal(isValidConfidence(6), false);
  assert.equal(isValidConfidence(3), true);
});