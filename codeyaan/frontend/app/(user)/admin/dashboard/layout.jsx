import AdminNavbar from "./_components/Navbar";
import SideNav from "./_components/SideNav";


export default function DashboardLayout({ children }) {
    return (
        <>


            <div className="h-screen flex flex-col">
                {/* Top Header */}
                <AdminNavbar />

                <div className="flex ">
                    <SideNav />
                    {children}
                </div>



            </div>
        </>
    );
}
