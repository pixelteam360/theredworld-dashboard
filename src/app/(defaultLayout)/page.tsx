
import CustomLineChart from "@/components/modules/Dashboard/Chart/CustomLineChart";
import RenderBarChart from "@/components/modules/Dashboard/Chart/RenderBarChart ";
import NotificationCard from "@/components/modules/Dashboard/NotificationCard";
import OverView from "@/components/modules/Dashboard/OverView";
import UserTable from "@/components/modules/Dashboard/UserTable";

const CommonLayoutHomePage = () => {
  return (
    <div>
      <OverView />

      <div className="bg-white rounded-2xl p-6 grid md:grid-cols-5 grid-cols-1 gap-12 mt-10">
          <div className="md:col-span-3">
            <CustomLineChart  />
          </div>
          <div className="md:col-span-2">
            <RenderBarChart />
          </div>
          <div className="md:col-span-3">
            <p className="font-medium my-5 text-lg">All Students</p>
            <UserTable />
          </div>
          <div className="md:col-span-2">
            <p className="font-medium my-5 text-lg">Notifications</p>
            <NotificationCard />
          </div>
      </div>
    </div>
  );
};

export default CommonLayoutHomePage;
