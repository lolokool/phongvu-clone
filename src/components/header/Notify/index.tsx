import { Link } from "react-router-dom";
import Notify from "../../Svgs/notify";

const Notification = () => {
  return (
    <Link to={"/detail"}>
      <div className="flex  px-2">
        <Notify />
      </div>
    </Link>
  );
};

export default Notification;
