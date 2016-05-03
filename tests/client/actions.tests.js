import configureStore from '../../client/store/configureStore';
import * as actions from '../../client/actions/index.js';
const store = configureStore();

describe('actions', () => {
  it('dispatch GO_HOME, state should change goHome state', () => {
    expect(store.getState().goHome).toEqual(true);
    store.dispatch(actions.goHome(false));
    expect(store.getState().goHome).toEqual(false);
  });

  it('dispatch UPDATE_COURSE, state should change currentCourse state', () => {
    // check original value so we don't have a falsy value if dispatch was successful
    expect(store.getState().currentCourse).not.toEqual({ test: 'test' });
    store.dispatch(actions.updateCourse({ test: 'test' }));
    expect(store.getState().currentCourse).toEqual({ test: 'test' });
  });

  it('dispatch GET_COURSES, state should change courses state', () => {
    expect(store.getState().courses).not.toEqual([]);
    store.dispatch(actions.getCourses([]));
    expect(store.getState().courses).toEqual([]);
  });

  it('dispatch SWITCH_TABS, state should change tabView state', () => {
    expect(store.getState().tabView).toEqual('Assignments');
    store.dispatch(actions.switchTabs('Students'));
    expect(store.getState().tabView).toEqual('Students');
  });

  it('dispatch VIEW_STUDENT, state should change currentStudent state', () => {
    expect(store.getState().currentStudent).not.toEqual({ viewStudentTest: 'test' });
    store.dispatch(actions.viewStudent({ viewStudentTest: 'test' }));
    expect(store.getState().currentStudent).toEqual({ viewStudentTest: 'test' });
  });
});
