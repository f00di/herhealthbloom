import { describe, expect, it } from "vitest";
import { contactLimits, validateContactFields } from "@/lib/contact-validation";

describe("contact validation", () => {
  it("requires every public field", () => expect(validateContactFields({ name: "", email: "", message: "" })).toEqual({ name: "Enter your name.", email: "Enter your email address.", message: "Enter a message." }));
  it("rejects malformed email and short messages", () => {
    const result = validateContactFields({ name: "Reader", email: "not-an-email", message: "short" });
    expect(result.email).toMatch(/valid email/);
    expect(result.message).toMatch(/at least 10/);
  });
  it("accepts valid general messages and enforces length", () => {
    expect(validateContactFields({ name: "Reader", email: "reader@example.com", message: "A general website question." })).toEqual({});
    expect(validateContactFields({ name: "x".repeat(contactLimits.name + 1), email: "reader@example.com", message: "A sufficiently long message." }).name).toBeTruthy();
  });
});
