import type { CustomFlowbiteTheme } from "flowbite-react";

const flowbiteTheme: CustomFlowbiteTheme = {
  badge: {
    root: {
      color: {
        info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
        primary:
          "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
        lightGray: "bg-gray-200 text-gray-500 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-gray-300 dark:group-hover:bg-blue-300"
      },
      size: {
        lg: "px-3 py-1 text-sm rounded-md",
        xl: "px-3 py-2 text-base rounded-md",
      },
    },
    icon: {
      off: "rounded-full px-2 py-1",
    },
  },
  button: {
    color: {
      gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-blue-700 :ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
      info: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      primary:
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      lightPrimary: "text-primary-700 bg-primary-100 dark:!text-primary-700 hover:bg-primary-200"
    },
    inner: {
      base: "flex items-center transition-all duration-200",
    },
    outline: {
      color: {
        gray: "border border-gray-200 dark:border-gray-500",
      },
    },
  },
  dropdown: {
    floating: {
      base: "z-10 w-fit rounded-xl divide-y divide-gray-100 shadow focus:outline-none",
      content: "rounded-xl text-sm text-gray-700 dark:text-gray-200",
      target: "w-fit dark:text-white",
    },
    content: "",
  },
  modal: {
    root: {
      show: {
        on: "flex bg-black bg-opacity-80 dark:bg-opacity-80"
      }
    },
    content: {
      inner: "relative rounded-lg bg-white shadow dark:bg-gray-800",
    },
    header: {
      base: "flex items-start justify-between rounded-t px-5 pt-5",
    },
  },
  navbar: {
    root: {
      base: "fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",
    },
  },
  sidebar: {
    root: {
      base: "flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700",
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    },
    collapse: {
      button:
        "group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    },
  },
  textarea: {
    base: "block w-full text-sm 2xl:text-base p-4 rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
  },
  textInput: {
    field: {
      input: {
        colors: {
          info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        },
        withIcon: {
          on: "!pl-12",
        },
      },
    },
  },
  toggleSwitch: {
    toggle: {
      checked: {
        color: {
          blue: "bg-blue-700 border-blue-700",
        },
      },
    },
  },
  tab: {
    tablist: {
      styles: {
        underline: "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700 w-full  grid grid-flow-col"
      },
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg text-sm 2xl:text-lg font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-0 active:ring-0 focus:outline-none",
        styles: {
          underline: {
            active: {
              on: "text-primary-600 rounded-t-lg border-b-2 border-primary-600"
            }
          }
        }
      }
    },
    tabpanel: "py-0"
  },
  breadcrumb: {
    item: {
      href: {
        off: "flex items-center text-xl 2xl:text-2xl font-bold text-gray-900 dark:text-gray-400",
      },
    }
  }
};

export default flowbiteTheme;
