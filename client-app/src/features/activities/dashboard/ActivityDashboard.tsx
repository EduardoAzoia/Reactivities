import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import LoadingComponenet from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityFilters from './ActivityFilters';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry, loadingInitial} = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) {
            loadActivities();
        }
    }, [activityRegistry, loadActivities])
  
    if (loadingInitial) return<LoadingComponenet content='Loading activities...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <GridColumn width='6'>
                <ActivityFilters />
            </GridColumn>
        </Grid>
    )
})