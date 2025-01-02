# 使用说明

## 1. props

### 1.1   minWidth

* type: number
  * 侧边栏最小宽度（默认 = 280）



### 1.1   maxWidth

* type: number
  * 侧边栏最大宽度（默认 = 500）



### 1.3 children

* type: any

  * 侧边栏的自定义内容

    * ~~~tsx
      <ResizableSidebar>
          <Collapse firstShow={true} header={<Button type="primary">点击</Button>}>
              <TimeLine vertical events={events}>
                  <TimeLineItem render={render}></TimeLineItem>
      
                  <TimeLineItem render={render}></TimeLineItem>
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
                                  <div
                                      style={{ width: timeLineWidth, height: timeLineHeight }}
                                      className={`timeline-line ${event.isFinish ? 'finished' : 'un-finish'}`}
                                      ></div>
                              )}{' '}
                              {/* 连接线 */}
                          </div>
                          </>
                      )}
                      ></TimeLineItem>
                  <TimeLineItem render={render}></TimeLineItem>
              </TimeLine>
          </Collapse>
      </ResizableSidebar>
      ~~~







