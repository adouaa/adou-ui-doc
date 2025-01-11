import Tabs from "@site/src/components/web-elements/adou-tabs";
import TabItem from "@site/src/components/web-elements/adou-tabs/tab-item";

export default () => {
  return (
    <Tabs tabStyle="common">
      <TabItem label="标签1">内容1</TabItem>
      <TabItem label="标签2">内容2</TabItem>
      <TabItem label="标签3">内容3</TabItem>
    </Tabs>
  );
};
