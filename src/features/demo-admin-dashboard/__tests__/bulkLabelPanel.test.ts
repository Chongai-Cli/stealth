import { describe, expect, it } from "vitest";
import { calculateLabelState } from "../components/BulkLabelPanel";
import type { DemoMessage } from "../types/dataset";

function makeMessage(id: string, labels: string[]): DemoMessage {
  return {
    id,
    threadId: `thread-${id}`,
    subject: `Subject ${id}`,
    snippet: `Snippet ${id}`,
    body: `Body ${id}`,
    sender: {
      address: `sender-${id}@example.com`,
      name: `Sender ${id}`,
      isTrusted: true,
    },
    recipients: [`recipient-${id}@example.org`],
    date: "2026-06-20T12:00:00Z",
    isRead: true,
    isStarred: false,
    labels,
    attachments: [],
  };
}

describe("calculateLabelState", () => {
  it("deduplicates labels case-insensitively and keeps the preview stable", () => {
    const messages = [
      makeMessage("m1", ["Priority", "review"]),
      makeMessage("m2", ["priority", "review", "archive"]),
    ];

    const result = calculateLabelState(messages, [
      "Priority",
      "priority",
      "Archive",
      "Review",
      "Archive",
    ]);

    expect(result.common).toEqual(["priority", "review"]);
    expect(result.partial).toEqual(["archive"]);
    expect(result.available).toEqual([]);
  });
});
