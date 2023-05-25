import CodeNav from "../../../components/CodeNav";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    return(
    <>
    <CodeNav />
    <main>{children}</main>
    </>
    )
    
  }