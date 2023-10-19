import './App.css';
import {
  Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, RecurrenceEditor,
  ViewsDirective, ViewDirective, TimelineViews, TimelineMonth, DragAndDrop, Resize
} from '@syncfusion/ej2-react-schedule'

import { TreeViewComponent , DragAndDropEventArgs } from '@syncfusion/ej2-react-navigations';

function App() {
  const EventSettingsModel = [
    // {
    //   Id: 1,
    //   Subject: 'Examination',
    //   StartTime: new Date(2018, 4, 8, 6, 0),
    //   EndTime: new Date(2018, 4, 8, 7, 0),
    //   Location: 'School'
    // },
    // {
    //   Id: 2,
    //   Subject: 'Meditation',
    //   StartTime: new Date(2018, 4, 9, 6, 0),
    //   EndTime: new Date(2018, 4, 9, 7, 0),
    //   Location: 'Yoga Center'
    // },
  ];

  const treeViewData = [
    {
      id: 1,
      Name: 'James'
    },
    {
      id: 2,
      Name: 'Jessy'
    },
    {
      id: 3,
      Name: 'Daisy'
    },
    {
      id: 4,
      Name: 'Louis'
    }
  ]
  return (
    <>
      <div className="sch-title" >Doctor Appointments</div>
      <div className="sch-component">
        <ScheduleComponent
          currentView='Month'
          eventSettings={{ dataSource: EventSettingsModel }}
          selectedDate={new Date(2018, 1, 11)}
        >
          <ViewsDirective>
            <ViewDirective
              option='Week'
              displayName='2 WEEKS Only'
              interval={2}
            />
            <ViewDirective
              option='Day'
              displayName='3 Days Only'
              interval={3}
              startHour='03:00'
              endHour='18:00'
            />
            <ViewDirective
              option='Month'
              showWeekNumber={true}
              showWeekend={false}
            />
          </ViewsDirective>
          <Inject services={
            [Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, DragAndDrop, Resize]} />
        </ScheduleComponent>
      </div>
      <div className="tree-title">Patient List</div>
      <div className="tree-component">
        <TreeViewComponent allowDragAndDrop={true} fields={{dataSource: treeViewData, id: 'id', text:'Name'}} />
      </div>
    </>
  );
}

export default App;
