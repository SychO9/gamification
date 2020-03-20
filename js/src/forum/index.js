import { extend } from 'flarum/extend';
import app from 'flarum/app';
import AddAttributes from './components/AddAttributes';
import AddHotnessFilter from './components/AddHotnessSort';
import AddVoteButtons from './components/AddVoteButtons';
import Rank from '../common/models/Rank';
import RankingsPage from './components/RankingsPage';
import VoteNotification from './components/VoteNotification';
import addUpvotesToDiscussion from './components/addUpvotesToDiscussion';

app.initializers.add('fof-gamification', app => {
    app.store.models.ranks = Rank;

    app.notificationComponents.vote = VoteNotification;

    app.routes.rankings = { path: '/rankings', component: RankingsPage.component() };

    AddVoteButtons();
    AddHotnessFilter();
    AddAttributes();
    addUpvotesToDiscussion();
});
