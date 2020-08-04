import intl from '@alicloud/console-components-intl';

intl.set(
  {
    locale: '',
    messages: {},
  },
  {
    determineLocale: true,
    mergeMessages: {},
  }
);

export { model } from '@alicloud/xconsole-model';

export {
  default as ConsoleUitls,
  ConsoleContext,
} from '@alicloud/xconsole-context';

export {
  default as intl,
  withProvider,
} from '@alicloud/console-components-intl';
