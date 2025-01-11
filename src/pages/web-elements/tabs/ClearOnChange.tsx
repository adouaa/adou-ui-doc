import Tabs from "@site/src/components/web-elements/adou-tabs";
import TabItem from "@site/src/components/web-elements/adou-tabs/tab-item";
import Test from "./Test";

export default () => {
  return (
    <>
      <h5>切换时不清除：</h5>
      <Tabs clearOnChange={false}>
        <TabItem label="标签1">
          <Test></Test>
        </TabItem>
        <TabItem label="标签2">内容2</TabItem>
        <TabItem label="标签3">内容3</TabItem>
      </Tabs>
      <hr />
      <h5>切换时清除：</h5>
      <Tabs>
        <TabItem label="标签1">
          <Test></Test>
        </TabItem>
        <TabItem label="标签2">内容2</TabItem>
        <TabItem label="标签3">内容3</TabItem>
      </Tabs>
    </>
  );
};
