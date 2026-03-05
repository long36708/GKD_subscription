import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youdao.note',
  name: '有道云笔记',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
        {
          key: 1,
          name: '首页上方卡片广告',
          fastQuery: true,
          activityIds: 'com.youdao.note.activity2.MainActivity',
          matches:
            '[id="com.youdao.note:id/recycle_view"] + [id="com.youdao.note:id/close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13379524',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-签到任务',
      desc: '自动点击包含【签到】文字的按钮',
      enable: true,
      rules: [
        {
          key: 2,
          name: '自动点击包含【签到】文字的按钮',
          matches: [
            'Button[id="com.youdao.note:id/sign_in" && text="签到得空间"]',
          ],
          fastQuery: true,
          activityIds: ['com.youdao.note.activity2.MainActivity'],
          snapshotUrls: 'https://i.gkd.li/i/25659673',
        },
      ],
    },
    {
      key: 20,
      name: '功能类-领取更多空间',
      actionMaximum: 1,
      enable: true,
      rules: [
        {
          key: 3,
          name: '自动点击领取更多空间',
          matches: ['TextView[text="签到得空间"]'],
          activityIds: ['com.youdao.note.activity2.TaskListActivity'],
          snapshotUrls: 'https://i.gkd.li/i/25659676',
        },
      ],
    },
  ],
});
