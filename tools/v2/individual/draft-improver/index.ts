// Draft Improver — non-UI execution entry point.

export {
  improveDraft,
  safeImproveDraft,
  sanitizeInput,
  sanitizeText,
  validateInput,
  validateOptions,
  checkInputLimits,
  GUARD_LIMITS,
} from "./services/guards";
export { successFixtures, failureFixtures } from "./services/fixtures";
export type { SuccessFixture, FailureFixture } from "./services/fixtures";
export type {
  DraftImproverErrorCode,
  DraftImproverInput,
  DraftImproverIssue,
  DraftImproverIssueType,
  DraftImproverMetrics,
  DraftImproverOptions,
  DraftImproverResult,
  DraftImproverSeverity,
  DraftImproverValidationIssue,
  SafeDraftImproverResult,
} from "./types/draftImprover";
