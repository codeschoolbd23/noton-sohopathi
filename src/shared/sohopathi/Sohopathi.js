import React from "react";

const Sohopathi = () => {
    const sohopathiMenu = [
      {
        sohopathiId: 1,
        sohopathiName: "Rani Gupta Charon",
        group:"science",
        sohopathiDescription: "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        sohopathiImages: "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
      {
        sohopathiId: 2,
        sohopathiName: "Rani Gupta Charon",
        group:"science",
        sohopathiDescription: "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        sohopathiImages: "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
      {
        sohopathiId: 3,
        sohopathiName: "Rani Gupta Charon",
        group:"science",
        sohopathiDescription: "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        sohopathiImages: "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
      {
        sohopathiId: 4,
        sohopathiName: "Rani Gupta Charon",
        group:"science",
        sohopathiDescription: "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        sohopathiImages: "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
      {
        sohopathiId: 5,
        sohopathiName: "Rani Gupta Charon",
        group:"science",
        sohopathiDescription: "Remaining Reason,became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        sohopathiImages: "https://img.daisyui.com/images/profile/demo/1@94.webp",
      },
    ];
  return (
    <ul className="list bg-base-100 ">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Most played sohopathi app in this week
      </li>
      {sohopathiMenu.map((sohopathi) => (
        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src={`${sohopathi.sohopathiImages}`}
              alt="..."
            />
          </div>
          <div>
            <div>{sohopathi.sohopathiName}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {sohopathi.group}
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            {sohopathi.sohopathiDescription}
          </p>
          {/* <button className="btn btn-square btn-ghost">
           Routine
          </button>
          <button className="btn btn-square btn-ghost">
            About
          </button> */}
        </li>
      ))}
    </ul>
  );
};

export default Sohopathi;
