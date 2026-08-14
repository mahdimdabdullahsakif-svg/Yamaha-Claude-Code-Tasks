---
name: mcp-server-dev
description: Use when scaffolding, building, or testing a Model Context Protocol (MCP) server (TypeScript or Python) — creating new tools/resources/prompts, wiring up transports, or validating a server with the MCP inspector.
---

# MCP Server Dev

Guidance for building an MCP server from scratch and iterating on it safely.

## 1. Pick a language SDK

- TypeScript: `@modelcontextprotocol/sdk`
- Python: `mcp` (official Python SDK)

Default to TypeScript unless the surrounding project is already Python.

## 2. Scaffold

TypeScript:
```bash
npm init -y
npm install @modelcontextprotocol/sdk zod
```

Python:
```bash
pip install "mcp[cli]"
```

Create one entry point (`src/index.ts` or `server.py`) that:
1. Instantiates a `Server`/`FastMCP` instance with a name + version.
2. Registers tools with explicit input schemas (zod / pydantic).
3. Registers resources/prompts only if the server actually needs them — don't add empty capability handlers.
4. Wires a transport (`StdioServerTransport` for local/CLI use is the default; only add HTTP/SSE if the server must run remotely).

## 3. Tool design rules

- Each tool does one thing; the description states what it does and when to use it, not how it's implemented.
- Validate inputs with the schema (zod/pydantic) rather than manual checks.
- Return errors as tool results (`isError: true` in TS SDK) rather than throwing, so the calling model sees the failure instead of the transport dying.
- Keep tool names short, verb-first, and consistent (e.g. `list_projects`, `get_project`, not mixed styles).

## 4. Test locally

Use the MCP inspector to exercise the server before wiring it into a client:
```bash
npx @modelcontextprotocol/inspector node dist/index.js
```
or for Python:
```bash
mcp dev server.py
```

Confirm: server starts, tool list matches expectations, each tool call returns the right shape, and errors surface as `isError` results, not crashes.

## 5. Ship it

- Add a `README.md` documenting install + config (the JSON block a client adds to its MCP server list).
- Pin SDK versions; avoid `latest`/`*` ranges for a server other people will install.
- If distributing as a Claude Code plugin, put the server under the plugin and reference it via the plugin's `mcpServers` config in `plugin.json` (or a companion `.mcp.json`) rather than requiring manual client setup.
