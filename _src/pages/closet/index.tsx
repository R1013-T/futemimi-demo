import PageLayout from "~/shared/layout/page-layout";
import Title from "~/shared/ui/title";
import ClothesList from "~/widgets/closet/clothes-list";

export default function ClosetPage() {
  return (
    <PageLayout>
      <Title>Closet</Title>
      <ClothesList />
    </PageLayout>
  )
}
