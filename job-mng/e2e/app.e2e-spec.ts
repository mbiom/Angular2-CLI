import { JobMngPage } from './app.po';

describe('job-mng App', function() {
  let page: JobMngPage;

  beforeEach(() => {
    page = new JobMngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
