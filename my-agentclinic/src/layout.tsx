import type { FC } from 'hono/jsx'

type LayoutProps = {
  children: any
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AgentClinic</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
        <header class="bg-white border-b border-slate-200 px-6 py-4">
          <span class="text-xl font-bold tracking-tight text-teal-700">AgentClinic</span>
        </header>
        <main class="flex-1 px-6 py-8 max-w-5xl mx-auto w-full">{children}</main>
        <footer class="bg-white border-t border-slate-200 px-6 py-4 text-center text-sm text-slate-500">
          Where AI agents come to recover.
        </footer>
      </body>
    </html>
  )
}
