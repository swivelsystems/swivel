const React = require('react');
const TestUtils = require('react-addons-test-utils');
import Nav from '../components/Nav.jsx';

describe('Testing Nav.jsx', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Nav />);
  const nav = renderer.getRenderOutput();

  it('renders Nav without problems', () => {
    expect(nav).toBeDefined();
  });
});

