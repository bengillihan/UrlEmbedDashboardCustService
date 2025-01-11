import { DashboardEmbed } from '@/components/DashboardEmbed';
import { DASHBOARD_URLS } from '@/lib/config';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DashboardGrid() {
  return (
    <div className="flex w-full h-screen">
      <Tabs defaultValue={DASHBOARD_URLS[0].id} orientation="vertical" className="flex w-full">
        <TabsList className="flex flex-col h-full border-r bg-muted/50 w-40">
          {DASHBOARD_URLS.map((dashboard) => (
            <TabsTrigger 
              key={dashboard.id} 
              value={dashboard.id} 
              className="justify-start text-sm px-3 py-2"
            >
              {dashboard.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {DASHBOARD_URLS.map((dashboard) => (
          <TabsContent 
            key={dashboard.id} 
            value={dashboard.id} 
            className="flex-1 h-full p-0 m-0"
          >
            <DashboardEmbed 
              url={dashboard.url} 
              title={dashboard.title}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}