import MainForm from "@/features/auth/components/main-form";

export default function Page() {
  return (
    <div className="container mx-auto px-4 lg:px-80 xl:px-100 flex items-center justify-center h-screen">
      <div className="w-full lg:border lg:p-5 rounded-2xl">
        <MainForm />
      </div>
    </div>
  );
}
