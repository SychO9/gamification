import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import VoteNotification from './components/VoteNotification';
import ItemList from 'flarum/common/utils/ItemList';

export default function addNotifications() {
  app.notificationComponents.vote = VoteNotification;

  extend('flarum/forum/components/NotificationGrid', 'notificationTypes', function (items: ItemList<{ name: string; icon: string; label: any }>) {
    const user = app.session?.user;

    if (!user?.canHaveVotingNotifications?.()) return;

    items.add('vote', {
      name: 'vote',
      icon: 'fas fa-thumbs-up',
      label: app.translator.trans('fof-gamification.forum.notification.prefrences.vote'),
    });
  });
}
