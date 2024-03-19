import { MainPage } from "@/pages/Main";
import Layout from "@/widgets/Layout";

export default function Home() {
  return (
    <Layout type="login">
      <main className="container">
        <MainPage />
      </main>
    </Layout>
  )
}