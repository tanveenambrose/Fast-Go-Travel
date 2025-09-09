import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PackageOverview from "./PackageOverview";

const PackagesTabs = () => {
  return (
    <Tabs defaultValue="overview" className="w-full mx-3 md:mx-0">
      <TabsList className="w-full flex overflow-x-auto whitespace-nowrap scrollbar-hide bg-white">
        <TabsTrigger
          value="overview"
          className="flex-shrink-0 whitespace-nowrap"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="itenary"
          className="flex-shrink-0 whitespace-nowrap"
        >
          Day wise Itinerary
        </TabsTrigger>
        <TabsTrigger
          value="inclusion"
          className="flex-shrink-0 whitespace-nowrap"
        >
          Inclusion/Exclusions
        </TabsTrigger>
        <TabsTrigger value="info" className="flex-shrink-0 whitespace-nowrap">
          Additional Info
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <PackageOverview />
      </TabsContent>
    </Tabs>
  );
};

export default PackagesTabs;
