import configureStore from '../../client/store/configureStore';
import * as actions from '../../client/actions/index.js';
const store = configureStore();

describe('actions', () => {
  it('dispatch GO_HOME, state should change goHome state', () => {
    expect(store.getState().goHome).toEqual(true);
    store.dispatch(actions.goHome(false));
    expect(store.getState().goHome).toEqual(false);
  });

  it('dispatch DISPLAY_COURSE, state should change displayedCourse state', () => {
    // check original value so we don't have a falsy value if dispatch was successful
    expect(store.getState().displayedCourse).not.toEqual({ test: 'test' });
    store.dispatch(actions.displayCourse({ test: 'test' }));
    expect(store.getState().displayedCourse).toEqual({ test: 'test' });
  });

  it('dispatch DISPLAY_COURSES, state should change courses state', () => {
    expect(store.getState().courses).not.toEqual([]);
    store.dispatch(actions.receiveCourses([]));
    expect(store.getState().courses).toEqual([]);
  });

  it('dispatch SWITCH_TABS, state should change tabView state', () => {
    expect(store.getState().tabView).toEqual('Assignments');
    store.dispatch(actions.switchTabs('Students'));
    expect(store.getState().tabView).toEqual('Students');
  });

  it('dispatch DISPLAY_STUDENT, state should change displayStudent state', () => {
    expect(store.getState().displayedStudent).not.toEqual({ displayStudentTest: 'test' });
    store.dispatch(actions.displayStudent({ displayStudentTest: 'test' }));
    expect(store.getState().displayedStudent).toEqual({ displayStudentTest: 'test' });
  });
});
