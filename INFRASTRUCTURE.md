# Infrastructure & Hosting Specifications

## Summary

This repository (`willitclaw`) is a **static website** for the "Will It Claw?" YouTube series by [Kilo Code](https://kilo.ai). It has no backend compute infrastructure — it is built with Astro and deployed as a static site on Vercel's edge network.

**There are no KiloClaw instance specifications in this repository.** The term "KiloClaw" does not appear anywhere in the codebase. The repository contains no infrastructure-as-code, no cloud resource definitions, and no compute instance configurations.

## Hosting Platform

| Property        | Value                                                   |
| --------------- | ------------------------------------------------------- |
| **Provider**    | [Vercel](https://vercel.com/)                           |
| **Type**        | Serverless static hosting (edge CDN)                    |
| **URL**         | [willitclaw.com](https://willitclaw.com)                |
| **Config file** | None (`vercel.json` absent; uses Vercel auto-detection) |
| **Framework**   | [Astro](https://astro.build/) (static site generator)   |

Vercel auto-detects the Astro framework and handles build & deployment. The site URL is resolved dynamically in `astro.config.ts` via Vercel environment variables:

- `VERCEL_ENV` — used to determine if the environment is `production`
- `VERCEL_URL` — used for preview/staging deployment URLs

Since Vercel is a managed serverless platform, there are **no user-configured instance types, CPU/memory allocations, or region selections** in this repository. Vercel automatically distributes static assets across its global edge network.

## CI/CD Pipeline

| Property            | Value                                               |
| ------------------- | --------------------------------------------------- |
| **Platform**        | GitHub Actions                                      |
| **Config file**     | `.github/workflows/nightly.yml`                     |
| **Trigger**         | Cron schedule (`0 0 * * *` — daily at midnight UTC) |
| **Runner**          | `ubuntu-latest`                                     |
| **Node version**    | 20                                                  |
| **Package manager** | pnpm 8                                              |
| **Memory**          | 4 GB (`NODE_OPTIONS: '--max_old_space_size=4096'`)  |

The sole CI/CD workflow is a nightly job that automatically upgrades Astro dependencies and opens a PR via `peter-evans/create-pull-request@v4`.

## What Was Searched

The following file types and patterns were searched for and **not found**:

- **Terraform** (`.tf`, `.tfvars`) — None
- **Docker** (`Dockerfile`, `docker-compose.yml`) — None
- **Kubernetes** (manifests, Helm charts) — None
- **CloudFormation** (templates) — None
- **Ansible** (playbooks, inventories) — None
- **Vercel config** (`vercel.json`) — None
- **Cloud provider references** (AWS, GCP, Azure instance types, regions) — None
- **"KiloClaw"** keyword (case-insensitive search across all files) — None
