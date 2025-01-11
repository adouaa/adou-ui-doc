import Button from "@site/src/components/adou-button";
import Tabs from "@site/src/components/web-elements/adou-tabs";
import TabItem from "@site/src/components/web-elements/adou-tabs/tab-item";
import { useRef } from "react";

export default () => {
  const tabRef = useRef<any>(null);

  return (
    <>
      <div className="opt-btns mb-2">
        <Button onClick={() => tabRef.current.goTo(0)}>goTo1</Button>
        <Button externalClassName="mx-1" onClick={() => tabRef.current.goTo(1)}>
          goTo2
        </Button>
        <Button onClick={() => tabRef.current.goTo(2)}>goTo3</Button>
      </div>
      <Tabs tabRef={tabRef}>
        <TabItem label="标签1">内容1</TabItem>
        <TabItem label="标签2">内容2</TabItem>
        <TabItem label="标签3">内容3</TabItem>
      </Tabs>
    </>
  );
};
