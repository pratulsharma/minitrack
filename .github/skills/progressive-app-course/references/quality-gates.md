# Quality gates

## Repository safety

- Inspect git status before editing.
- Do not overwrite learner work or unrelated files.
- Do not expose future implementation in the active learner scaffold.
- Keep generated output, secrets, databases, traces, and local environment
  files ignored.
- Give parallel learning tracks collision-safe names.

## Lesson quality

For every lesson verify:

- canonical zero-padded filename and sequential navigation;
- time, starting point, observable goal, and learning objectives;
- exact filenames and complete code for the core milestone;
- at least two Mermaid diagrams;
- commands plus expected observations;
- deliberate debugging exercises;
- at least four numbered questions;
- every question has an Interview-ready answer, example, and senior follow-up;
- complexity or operational-cost analysis;
- exit checklist and suggested commit.

## Architecture quality

- Persistent data has one source of truth.
- Untrusted data is validated at boundaries.
- SQL or equivalent queries bind values.
- Authentication and authorization are treated separately.
- Resource ownership is enforced in the data operation.
- Private caches include identity in their key and invalidation rules.
- Database pool budgets account for all app replicas.
- Migrations have forward, compatibility, backup, and recovery considerations.
- Errors are explicit without exposing internals or secrets.

## Verification matrix

| Change | Minimum verification |
|---|---|
| Pure function | Focused unit test |
| Data function | Isolated real-database integration test |
| HTTP/API boundary | Validation, success, missing, unauthorized, and failure cases |
| Critical user flow | Browser/E2E test |
| Authentication/ownership | Anonymous, owner, and cross-owner negative tests |
| Accessibility | Keyboard, names/roles/states, focus, zoom, narrow viewport |
| Deployment | Type check, production build, migration, HTTPS smoke test |
| Docker | Image build, non-root run, health, shutdown, secret inspection |
| Performance | Representative data, baseline, percentiles, before/after comparison |
| Kubernetes | Probes, resources, rollout, migration Job, pod-loss behavior |
| Documentation only | Local links, headings, diagrams, whitespace, stale claims |

## Final checks

- Run whitespace checks on all changed files.
- Verify every local Markdown target exists.
- Check that documentation describes the actual stage and versions.
- Search for stale milestone names, obsolete APIs, and contradictory claims.
- Confirm no secret values, session tokens, personal data, or production URLs
  were added.
- Report checks actually run; do not imply unrun validation passed.

