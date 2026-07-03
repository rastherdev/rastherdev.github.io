export interface Project {
  name: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  url: string;
  repoUrl?: string;
  imageAlt?: string;
  snippet?: string;
  codeFilename?: string;
  /** Modal gallery. Drop real screenshots in public/assets/projects/ and list them here. */
  images?: string[];
}

export const projects: Project[] = [
  {
    name: "Bloomingtec",
    description:
      "SaaS platform functioning as an ERP and CRM for the agro-industrial sector, with a special focus on administrative, logistical, and customer management processes for agricultural raw material producers. Offers modules for crop management, payroll calculation, inventory, sales, invoicing, and customer service — all integrated into an intuitive interface.",
    problem:
      "Agricultural producers often face challenges managing their operations efficiently, from crop tracking to customer management and invoicing. Bloomingtec provides a comprehensive solution that simplifies these processes, allowing producers to focus on their core business while maintaining full control.",
    solution:
      "Built a modular monolithic architecture in Laravel with independent services per domain (users, billing, crops). Implemented multi-tenant PostgreSQL databases per client for data isolation and horizontal scalability. Used Redis-backed queues for async processing of critical workloads like payroll and bulk data.",
    stack: ["Laravel", "PostgreSQL", "DigitalOcean", "Redis", "JWT", "REST APIs"],
    url: "https://bloomingtec.com/",
    images: [
      "/assets/projects/bloomingtec-1.svg",
      "/assets/projects/bloomingtec-2.svg",
      "/assets/projects/bloomingtec-3.svg",
    ],
    codeFilename: "app/Services/TenantManager.php",
    snippet: `// Multi-tenant database resolver
class TenantManager
{
    public function connect(Tenant $tenant): void
    {
        Config::set('database.connections.tenant', [
            'driver' => 'pgsql',
            'host' => $tenant->db_host,
            'database' => $tenant->db_name,
            'username' => $tenant->db_user,
            'password' => $tenant->db_pass,
        ]);
        
        DB::purge('tenant');
        DB::reconnect('tenant');
    }
}`,
  },
  {
    name: "Presidencia Digital",
    description:
      "SaaS designed to help local governments digitize their services and improve citizen communication. Includes modules for document management, citizen services, transparency, participation, as well as managing procedures, requests, and direct communication with citizens.",
    problem:
      "Many local governments lack the resources or expertise to develop their own digital solutions, limiting their ability to offer efficient and transparent services to citizens. Presidencia Digital offers a ready-to-use platform tailored to each municipality's needs.",
    solution:
      "Developed a comprehensive SaaS platform with Laravel and Bootstrap, featuring document management with advanced search, citizen service modules for requests and issue tracking, and social program monitoring dashboards for real-time data-driven governance.",
    stack: ["Laravel", "Bootstrap", "MySQL", "DigitalOcean", "PHP"],
    url: "https://presidenciadigital.com/",
    images: [
      "/assets/projects/presidencia-1.svg",
      "/assets/projects/presidencia-2.svg",
      "/assets/projects/presidencia-3.svg",
    ],
    codeFilename: "app/Http/Controllers/DocumentController.php",
    snippet: `// Document management with advanced search
class DocumentController extends Controller
{
    public function search(Request $request): JsonResponse
    {
        $documents = Document::query()
            ->when($request->category, fn($q, $v) =>
                $q->where('category', $v))
            ->when($request->query, fn($q, $v) =>
                $q->whereFullText(['title', 'content'], $v))
            ->paginate(20);
            
        return response()->json($documents);
    }
}`,
  },
];
