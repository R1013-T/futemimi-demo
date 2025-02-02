import { IconLoader } from "justd-icons";
import PageLayout from "~/shared/layout/page-layout";

export default function TryOnStartPage() {
  return (
    <PageLayout>
      <div className="flex gap-2 justify-center items-center h-screen">
        <IconLoader className="animate-spin" />
        <p>Loading...</p>
      </div>
    </PageLayout>
  )
}
