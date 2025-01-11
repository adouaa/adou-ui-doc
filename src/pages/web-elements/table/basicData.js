const data = [
  {
    id: "team001",
    teamName: "研发团队",
    leader: "张峰",
    contactEmail: "rf_team@company.com",
    memberCount: 30,
    yearsSinceEstablishment: 5,
    checked: false,
  },
  {
    id: "team002",
    teamName: "市场团队",
    leader: "李悦",
    contactEmail: "mk_team@company.com",
    memberCount: 25,
    yearsSinceEstablishment: 4,
    checked: false,
  },
  {
    id: "team003",
    teamName: "销售团队",
    leader: "王强",
    contactEmail: "sl_team@company.com",
    memberCount: 40,
    yearsSinceEstablishment: 6,
    checked: false,
  },
  {
    id: "team004",
    teamName: "客服团队",
    leader: "赵琳",
    contactEmail: "cs_team@company.com",
    memberCount: 15,
    yearsSinceEstablishment: 3,
    checked: false,
  },
  {
    id: "team005",
    teamName: "财务团队",
    leader: "孙洁",
    contactEmail: "fc_team@company.com",
    memberCount: 10,
    yearsSinceEstablishment: 7,
    checked: false,
  },
];

const columns = [
  { title: "团队 ID", prop: "id", width: "120px" },
  {
    title: "团队名称",
    prop: "teamName",
    width: "150px",
  },
  { title: "负责人", prop: "leader", width: "120px" },
  {
    title: "联系邮箱",
    prop: "contactEmail",
    width: "250px",
  },
  { title: "团队人数", prop: "memberCount", width: "120px" },
  {
    title: "成立年限",
    prop: "yearsSinceEstablishment",
    width: "120px",
  },
];

export { data, columns };
