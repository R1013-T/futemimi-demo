import PageLayout from "~/shared/layout/page-layout";
import Title from "~/shared/ui/title";
import TryOnClothesList from "~/widgets/try-on/clothes-list";

export default function TryOnPage() {
  return (
    <PageLayout>
      <Title>Try On</Title>
      <TryOnClothesList />
    </PageLayout>
  )
}
