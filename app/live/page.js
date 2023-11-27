import { getServerSession } from "next-auth/next";
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LiveRecordView from "../components/LiveRecordView.js";

export default async function Live() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main>
      <LiveRecordView />
    </main>
  );
}
