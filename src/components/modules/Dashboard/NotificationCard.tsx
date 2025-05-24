import Image from "next/image";
import userImage from "../../../assets/placeholders/user-placeholder.jpg";

const NotificationCard = () => {
  const item = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {item.map((item, idx) => (
        <div key={idx} className="flex gap-2 py-5 border-b">
          <Image
            src={userImage}
            alt="iamge"
            height={80}
            width={80}
            className="w-12 h-1/2 rounded-lg"
          />

          <div className="">
            <p>
              Darlene Robertson{" "}
              <span className="text-sm text-grayText">12 may 2025</span>
            </p>
            <p className="text-grayText">has just purchased the course.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationCard;
