export const data = [
  {
    id: "dept001",
    department: "研发部",
    email: "rd@company.com",
    children: [
      {
        id: "emp001",
        name: "张宇",
        position: "高级研发工程师",
        age: 35,
        projects: "企业级管理系统开发移动应用性能优化",
      },
      {
        id: "emp002",
        name: "王悦",
        position: "研发工程师",
        age: 28,
        projects: "数据分析工具研发",
      },
    ],
  },
  {
    id: "dept002",
    department: "市场部",
    email: "marketing@company.com",
    children: [
      {
        id: "emp003",
        name: "李阳",
        position: "市场经理",
        age: 32,
        campaigns: [
          {
            id: "camp001",
            name: "新品上市推广活动",
            status: "进行中",
            startDate: "2024-04-01",
            endDate: "2024-06-30",
          },
        ],
      },
    ],
  },
  {
    id: "dept003",
    department: "财务部",
    email: "finance@company.com",
    children: [
      {
        id: "emp004",
        name: "赵琳",
        position: "财务主管",
        age: 38,
        // 财务相关的任务或者项目可以在这里继续添加
      },
    ],
  },
];

// 多级表头
export const columns = [
  {
    title: "部门信息",
    prop: "department",
    width: "200px",
    align: "center",
    children: [
      {
        title: "部门名称",
        prop: "department",
        width: "150px",
        tooltip: true,
      },
      {
        title: "部门邮箱",
        prop: "email",
        width: "200px",
        tooltip: true,
      },
    ],
  },
  {
    title: "员工信息",
    prop: "name",
    width: "250px",
    align: "center",
    children: [
      {
        title: "员工姓名",
        prop: "name",
        width: "120px",
        tooltip: true,
      },
      {
        title: "职位",
        prop: "position",
        width: "120px",
        tooltip: true,
      },
      {
        title: "年龄",
        prop: "age",
        width: "80px",
        tooltip: true,
      },
    ],
  },
  {
    title: "项目/活动信息",
    prop: "projects",
    width: "350px",
    align: "center",
    children: [
      {
        title: "项目/活动名称",
        prop: "projects",
        width: "150px",
        tooltip: true,
      },
      {
        title: "进度/状态",
        prop: "progress",
        width: "120px",
        tooltip: true,
        render: (value, record) => {
          if (record.projects) {
            return value;
          }
          return record.campaigns && record.campaigns.length > 0
            ? record.campaigns[0].status
            : "";
        },
      },
      {
        title: "开始日期",
        prop: "startDate",
        width: "100px",
        tooltip: true,
      },
      {
        title: "结束日期",
        prop: "endDate",
        width: "100px",
        tooltip: true,
      },
    ],
  },
];
