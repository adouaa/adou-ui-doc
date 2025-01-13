export const data = [
  {
    id: "team001",
    teamName: "Software Engineer",
    email: "software@company.com",
    age: 38,
    count: 12,
    checked: false,
    /* children: [
                { id: 'member001', teamName: 'Alice', email: 'alice.software@company.com', age: 29, count: 6, checked: false },
                { id: 'member002', teamName: 'Bob', email: 'bob.software@company.com', age: 31, count: 5, checked: false },
                { id: 'member003', teamName: 'Charlie', email: 'charlie.software@company.com', age: 34, count: 8, checked: false },
            ], */ children: [
      {
        id: "member0062",
        teamName: "Frank222",
        email: "frank.supp@company.com",
        age: 36,
        count: 51,
        checked: false,
        children: [
          {
            id: "member0083",
            teamName: "Frank333",
            email: "frank.sup@company.com",
            age: 36,
            count: 55,
            checked: false,
            children: [
              {
                id: "member0094",
                teamName: "Frank444",
                email: "frank.sup@company.com",
                age: 36,
                count: 52,
                checked: false,
              },
              {
                id: "member0123",
                teamName: "Frank123",
                email: "frank.sup@company.com",
                age: 36,
                count: 56,
                checked: false,
              },
            ],
          },
        ],
      },
      {
        id: "member0071",
        teamName: "Grace1",
        email: "grace.support@company.com",
        age: 35,
        count: 5,
        checked: false,
      },
    ],
  },
  {
    id: "team002",
    teamName: "Product Management",
    email: "product@company.com",
    age: 45,
    count: 8,
    checked: false,
    /*  children: [
                { id: 'member004', teamName: 'David', email: 'david.product@company.com', age: 40, count: 4, checked: false },
                { id: 'member005', teamName: 'Eve', email: 'eve.product@company.com', age: 38, count: 4, checked: false },
            ], */
  },
  {
    id: "team003",
    teamName: "Customer Support",
    email: "support@company.com",
    age: 42,
    count: 10,
    checked: false,
    children: [
      {
        id: "member006",
        teamName: "Frank",
        email: "frank.supp@company.com",
        age: 36,
        count: 51,
        checked: false,
        children: [
          {
            id: "member008",
            teamName: "Frank111",
            email: "frank.sup@company.com",
            age: 36,
            count: 51,
            checked: false,
            children: [
              {
                id: "member009",
                teamName: "Frank111",
                email: "frank.sup@company.com",
                age: 36,
                count: 51,
                checked: false,
              },
              {
                id: "member012",
                teamName: "Frank111",
                email: "frank.sup@company.com",
                age: 36,
                count: 51,
                checked: false,
              },
            ],
          },
        ],
      },
      {
        id: "member007",
        teamName: "Grace",
        email: "grace.support@company.com",
        age: 35,
        count: 5,
        checked: false,
      },
    ],
  },
  {
    id: "team004",
    teamName: "Finance",
    email: "finance@company.com",
    age: 50,
    count: 6,
    checked: false,
  },
  {
    id: "team005",
    teamName: "Marketing",
    email: "marketing@company.com",
    age: 48,
    count: 7,
    checked: false,
    children: [
      {
        id: "member010",
        teamName: "Jack",
        email: "jack.marketing@company.com",
        age: 32,
        count: 4,
        checked: false,
      },
      {
        id: "member011",
        teamName: "Liam",
        email: "liam.marketing@company.com",
        age: 36,
        count: 3,
        checked: false,
      },
    ],
  },
];

export const columns = [
  {
    title: "TeamName",
    prop: "teamName",
    width: "280px",
    tooltip: true,
    // align: 'start',
  },
  {
    title: "Mem",
    prop: "id",
    width: "150px",
    tooltip: true,
  },
  // { title: 'Mem', prop: 'id', width: '150px', tooltip: true, align: 'center' }, // 成员ID
  {
    title: "人数",
    prop: "count",
    width: "150px",
    sortable: true,
    align: "center",
  }, // 成员姓名
  { title: "YourEmail", prop: "email", width: "150px", align: "start" }, // 成员邮箱
  { title: "Age", prop: "age", width: "150px", sortable: true }, // 成员年龄
];

export default () => <div></div>;
