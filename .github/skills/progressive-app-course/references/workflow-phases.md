# Workflow phases

Use these phases as a dependency-aware default, not a rigid technology list.
Combine or split days to match learner pace while preserving the order of ideas.

## Core course

| Phase | Outcome | Concepts |
|---|---|---|
| Product framing | Small app, user journey, acceptance criteria | Scope, constraints, trade-offs |
| Runtime fundamentals | Minimal request/response path without heavy abstraction | Execution model, async work, HTTP |
| Official scaffold | Generated framework app inspected before modification | Files, build tools, styling |
| Persistence | Real database schema and typed data layer | SQL, validation, pooling, migrations |
| Read path | Server-rendered or API-backed persisted data | Server/client boundaries, caching semantics |
| Browser mutations | Create/update/delete from the UI | State, forms, errors, refresh/reconciliation |
| Editing and query state | Edit, search, filter, pagination | URL state, races, indexing |
| Testing | Unit, database integration, and critical E2E journey | Isolation, determinism, test pyramid |
| Authentication | Maintained identity/session solution | OAuth/credentials trade-offs, cookies, secrets |
| Authorization | Resource ownership enforced in data operations | IDOR prevention, least privilege |
| Security tests | Anonymous and cross-user negative tests | Test matrices, privacy-safe artifacts |
| Accessibility | Keyboard, semantics, focus, feedback, responsive layout | WCAG-oriented behavior |
| Deployment | Managed services, secrets, migrations, HTTPS, smoke tests | Build/runtime config, rollback |
| Release | Clean-install gate, recovery docs, full system explanation | Operations, documentation, interview synthesis |

## Optional infrastructure course

| Phase | Outcome | Rule |
|---|---|---|
| Docker | Reproducible non-root production image | No secrets in layers |
| Compose | Local app/database/migration stack | State in explicit volumes |
| CI | Repeatable merge gates | Build from lockfile |
| Query scaling | Measured plans, indexes, and cursor pagination | Measure before indexing |
| Database operations | Connection budget, pooler, replicas, restore drill | Do not jump to sharding |
| Caching | One justified cache-aside path | Identity-safe keys and invalidation |
| Observability/load | Baseline, percentiles, logs, metrics, traces | Isolated environment |
| Load balancing | Stateless replicas behind readiness-aware routing | Recalculate DB/cache capacity |
| Kubernetes | Deployment, Service, Ingress, probes, migration Job | Keep databases external initially |
| Delivery/resilience | Immutable promotion, rollout, rollback, failure drills | Predefine rollback signals |

## Stack adaptation rules

- Use the learner's requested stack when it can meet the product requirements.
- Recommend the smallest established alternative when the request leaves the
  choice open.
- Teach raw protocol/runtime fundamentals before hiding them behind framework
  conveniences.
- Prefer maintained authentication providers over custom security-sensitive
  credential code.
- Prefer a relational database when ownership, constraints, transactions, and
  query learning are important.
- Use framework-native server/client, caching, and deployment patterns for the
  installed version.
- Keep vendor-specific deployment steps in a replaceable lesson section.
- Treat queues, search engines, caches, replicas, and orchestrators as responses
  to measured behavior or explicit learning goals.

## Scope controls

The initial app should have:

- one primary entity or workflow;
- a small number of screens;
- clear CRUD or equivalent state transitions;
- one persistent database;
- one maintained authentication method if identity is required;
- enough behavior to teach boundaries without becoming a product backlog.

Move teams, billing, real-time collaboration, multi-region operation, sharding,
and microservices to optional future work unless they define the app itself.

