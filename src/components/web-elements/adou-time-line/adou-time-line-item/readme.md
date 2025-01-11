# 使用说明

## 1. Props

### 1.1 data

-   type: any

    -   每个 TimeLineItem在 父组件TimeLine对应获取到的数据，由父组件自行配值

    -   example:

    -   ```tsx
        {
            id: 1,
            title: 'Event 1',
            description: 'Description for event 1',
            date: '2023-01-01',
            isFinish: true,
        }
        ```

### 1.2 vertical

-   type: boolean
    -   时间轴纵向 / 横向展示(跟随父组件TimeLine的vertical属性)

### 1.3 render

-   type: any

    -   时间轴每一项的内容，`(event: any, timeLineWidth: any, timeLineHeight: any, isLasted: any)`具有这些参数，可以自定义 TimeLineItem的内容，并且每一项的内容可以不一样

    -   example:

        -   ```tsx
            <TimeLineItem
                render={(event: any, timeLineWidth: any, timeLineHeight: any, isLasted: any) => (
                    <>
                        <div className={`content`}>
                            <div className="icon">
                                <i className={`fs-5 fa-solid fa-circle-check ${event.isFinish ? 'finished' : 'un-finish'}`}></i>
                            </div>
                            <div className="timeline-date">{event.date}</div>
                            <div className="timeline-content">
                                <h4>{event.title}</h4>
                                <p>{event.description}</p>
                            </div>
                            {!isLasted && (
                                <div style={{ width: timeLineWidth, height: timeLineHeight }} className={`timeline-line ${event.isFinish ? 'finished' : 'un-finish'}`}></div>
                            )}{' '}
                            {/* 连接线 */}
                        </div>
                    </>
                )}
            ></TimeLineItem>
            ```




### 1.4 isLasted

* type: boolean
  * 是否是 TimeLine列表的最后一项？如果是则不会出现时间轴，由父组件计算进行判断