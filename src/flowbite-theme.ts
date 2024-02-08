import type { CustomFlowbiteTheme } from "flowbite-react";

const flowbiteTheme: CustomFlowbiteTheme = {
  accordion: {
    content: {
      base: "py-5 px-5 last:rounded-b-lg bg-white dark:bg-gray-900 first:rounded-t-lg"
    },
    title: {
      flush: {
        off: "hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-800"
      }
    }
  },
  badge: {
    root: {
      color: {
        info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
        primary:
          "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
        lightGray: "bg-gray-200 text-gray-500 dark:bg-blue-200 dark:text-blue-800 hover:bg-gray-300 dark:hover:bg-blue-300 transition"
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
        "text-white bg-blue-700 ring-none hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
      lightPrimary: "text-primary-700 bg-primary-100 dark:!text-primary-700 hover:bg-primary-200",
      lightGray: "text-gray-800 border border-gray-200",
      primaryOutline: "border border-primary-700 hover:bg-primary-700/10 text-primary-700 pb-px pt-0.5"
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
  checkbox: {
    root: {
      base: "h-4 w-4 rounded focus:ring-0 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
    }
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
  },
  progress: {
    base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-900",
    bar: "rounded-sm text-center font-medium leading-none text-gray-200 dark:text-cyan-100 space-x-2",
    color: {
      green: "bg-green-500 dark:bg-green-400"
    }
  },
  table: {
    head: {
      base: "group/head text-sm uppercase text-gray-500 dark:text-gray-100 font-semibold border border-gray-200 dark:border-gray-500",
      cell: {
        base: "bg-gray-50 dark:bg-gray-700 px-6 py-4"
      }
    },
    body: {
      cell: {
        base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg px-6 py-4"
      }
    }
  },
  pagination: {
    pages: {
      previous: {
        base: "w-10 ml-0 rounded-l-lg border border-gray-300 bg-white p-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5"
      },
      next: {
        base: "rounded-r-lg border border-gray-300 bg-white p-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5"
      },
      selector: {
        base: "w-10 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        active: "text-primary-700 bg-primary-100 :hover:bg-primary-200 font-medium"
      }
    }
  }
};

export default flowbiteTheme;
