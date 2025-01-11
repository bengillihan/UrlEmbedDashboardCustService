import { DashboardEmbed } from '@/components/DashboardEmbed';
import { DASHBOARD_URLS } from '@/lib/config';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DashboardGrid() {
  return (
    <Tabs defaultValue={DASHBOARD_URLS[0].id} orientation="vertical" className="flex w-full h-screen overflow-hidden">
      <TabsList className="flex flex-col h-full border-r bg-muted/50 w-32 shrink-0">
        {DASHBOARD_URLS.map((dashboard) => (
          <TabsTrigger 
            key={dashboard.id} 
            value={dashboard.id} 
            className="justify-start text-sm px-1.5 py-1.5"
          >
            {dashboard.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {DASHBOARD_URLS.map((dashboard) => (
        <TabsContent 
          key={dashboard.id} 
          value={dashboard.id} 
          className="flex-1 h-full m-0 p-0 [&_>div]:h-full [&_>div]:w-full"
        >
          <DashboardEmbed 
            url={dashboard.url} 
            title={dashboard.title}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}