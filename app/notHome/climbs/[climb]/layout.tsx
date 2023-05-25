import ClimbNav from "../../../components/ClimbNav";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    return(
    <>
    <ClimbNav />
    <main>{children}</main>
    </>
    )
    
  }