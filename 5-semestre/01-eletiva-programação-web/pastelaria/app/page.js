import Header from "@/app/components/header";
import Main from "@/public/images/main";

export default function Home() {
  return (
      <div style={{
          height: "100vh",
          maxWidth: "80rem",
          marginInline: "auto",
          paddingBottom: "2rem",
      }}>
        <Header />
        <Main />
      </div>
  );
}
