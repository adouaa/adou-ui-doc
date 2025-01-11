import Button from "@site/src/components/adou-button";
import Tabs from "@site/src/components/web-elements/adou-tabs";
import TabItem from "@site/src/components/web-elements/adou-tabs/tab-item";

export default () => {
  return (
    <>
      <h5>通用额外内容：</h5>
      <Tabs tabStyle="common" commonExtraContent={<Button>额外操作</Button>}>
        <TabItem label="标签1">内容1</TabItem>
        <TabItem label="标签2">内容2</TabItem>
        <TabItem label="标签3">内容3</TabItem>
      </Tabs>
      <hr />
      <h5>标签对应不同通用内容：</h5>
      <Tabs>
        <TabItem
          label="标签1"
          extraContent={
            <Button size="sm" type="warning">
              标签1额外内容
            </Button>
          }
        >
          内容1
        </TabItem>
        <TabItem
          label="标签2"
          extraContent={<Button size="sm">标签2额外内容</Button>}
        >
          内容2
        </TabItem>
        <TabItem
          label="标签3"
          extraContent={
            <Button size="sm" type="danger">
              标签3额外内容
            </Button>
          }
        >
          内容3
        </TabItem>
      </Tabs>
    </>
  );
};
