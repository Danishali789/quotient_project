import SideBar from "@/components/SideBar/sidebar";
import NavTabs from "./NavTabs";
import Breadcrumb from "@/components/BreadCrumbs";
import ThemeToggle from "@/components/Shared/themeToggle";
import AccountDetails from "@/components/SideBar/topBar";

export default function MainLayout() {
   const breadcrumbPaths = [
    { title: 'CRM', path: '/crm' },
    { title: 'Account', path: '/crm/account' },
    { title: 'Account Details' }, // no path = current page
  ];
  return (
    <section className="bg-white dark:bg-dark-blue">
     <Breadcrumb paths={breadcrumbPaths} />
       <div className="container flex sm:flex-row flex-col gap-3">
    <SideBar />
    <AccountDetails />
    <NavTabs />
   </div>
   <ThemeToggle />
    </section>
 
  );
}
