import { GUARD_LIMITS } from "./guards";
import type {
  DraftImproverErrorCode,
  DraftImproverInput,
  DraftImproverIssueType,
} from "../types/draftImprover";

export interface SuccessFixture {
  name: string;
  input: DraftImproverInput;
  expectedIssueTypes: DraftImproverIssueType[];
}

export interface FailureFixture {
  name: string;
  input: unknown;
  expectedCode: DraftImproverErrorCode;
}

export const successFixtures: SuccessFixture[] = [
  {
    name: "clear-note",
    input: {
      messageId: "msg-clear-001",
      subject: "Quick update",
      body: "The meeting moved to Friday. Please review the agenda before then.",
      language: "en",
    },
    expectedIssueTypes: [],
  },
  {
    name: "wordy-note",
    input: {
      messageId: "msg-wordy-001",
      subject: "URGENT PLEASE REVIEW",
      body: "I am writing to let you know that the update will be very helpful for the team and may require additional review before we proceed.",
      language: "en",
    },
    expectedIssueTypes: ["clarity", "tone"],
  },
];

export const failureFixtures: FailureFixture[] = [
  {
    name: "missing-body",
    input: {
      messageId: "msg-invalid-001",
      subject: "No body field",
    },
    expectedCode: "invalid-input",
  },
  {
    name: "oversized-body",
    input: {
      messageId: "msg-oversized-001",
      subject: "Large payload",
      body: "x".repeat(GUARD_LIMITS.maxBodyChars + 1),
    },
    expectedCode: "input-too-large",
  },
  {
    name: "unsupported-language",
    input: {
      messageId: "msg-lang-001",
      subject: "Bonjour",
      body: "Merci de simplifier ce texte.",
      language: "fr",
    },
    expectedCode: "unsupported-language",
  },
];
