import React from "react";

const navigationLinks = [
  { name: "Overview", href: "#", current: false },
  { name: "Onboarding", href: "#", current: false },
  { name: "Monitoring", href: "#", current: true },
  { name: "Flagging", href: "#", current: false },
  { name: "Source of Income", href: "#", current: false },
  { name: "UAR", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  return (
    <div className="h-full w-1/5 min-h-screen shadow-md bg-white flex flex-col justify-between">
      <div className="px-4 sm:px-6 lg:px-8  ">
        <div className="flex flex-col items-center justify-center mt-16">
          <div className="flex items-center ">
            <span className="text-3xl border-t-2 border-b-2 text-gray-300 p-4">
              LOGO HERE
            </span>
          </div>
        </div>

        <nav className="mt-24 items-center ">
          <div>
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-violet-100 text-violet-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-violet-900",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className="h-20 w-full ">
        <div  className="flex p-4 ml-4">
            <div className="h-12 w-12 rounded-full bg-black"></div>
            <div className="flex flex-col text-black ml-6">
                <div>Elon Musk</div>
                <div>elon@twitter.com</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
