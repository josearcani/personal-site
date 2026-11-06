import Translate from '@docusaurus/Translate';

/**
 * Single source of truth for the Projects page.
 *
 * To publish a project when it is done: set status to 'live' and fill
 * githubUrl (and optionally demoUrl / image). No component changes needed.
 *
 * Media policy (see plan/projects/README.md): keep demos in each project's own
 * repo README or on YouTube (unlisted). `image` is only for a small
 * screenshot (WebP, < 200 KB) in static/img/projects/. Do not commit videos.
 *
 * status: 'planned' -> "Coming soon" card, no links
 *         'live'    -> full card with links
 */
export const PROJECTS = [
  {
    id: 'claude-code-toolkit',
    title: 'Claude Code Toolkit',
    status: 'planned',
    description: (
      <Translate id="projects.p1.description">
        Reusable Claude Code skills, agents and hooks for testing, debugging
        and code review, with notes on keeping context and token costs low.
      </Translate>
    ),
    tech: ['Claude Code', 'Skills', 'Agents', 'Hooks'],
  },
  {
    id: 'mcp-server-csharp',
    title: 'MCP Server in C#',
    status: 'planned',
    description: (
      <Translate id="projects.p2.description">
        A read-only SQL Server MCP server with query validation, row limits
        and audit logging.
      </Translate>
    ),
    tech: ['C#', '.NET', 'MCP', 'SQL Server'],
  },
  {
    id: 'rag-dotnet-react',
    title: 'RAG Assistant',
    status: 'planned',
    description: (
      <Translate id="projects.p3.description">
        A RAG assistant over technical documentation: ingestion, retrieval and
        cited answers with streaming, with a React and TypeScript chat UI.
      </Translate>
    ),
    tech: ['.NET', 'React', 'TypeScript', 'Azure OpenAI', 'RAG'],
  },
  {
    id: 'llm-eval-harness',
    title: 'LLM Eval Harness',
    status: 'planned',
    description: (
      <Translate id="projects.p4.description">
        A multi-model evaluation harness that compares quality, latency and
        cost across Claude, Azure OpenAI and open-source models, runnable in
        CI.
      </Translate>
    ),
    tech: ['.NET', 'React', 'LLM evals', 'CI'],
  },
];
