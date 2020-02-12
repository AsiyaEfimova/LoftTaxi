import {routeSaga} from './sagas';
import {fetchRoute} from '../../api';
import {recordSaga} from '../../TestUtils';
import {fetchRouteRequest, fetchRouteSuccess} from './actions';

describe.only('routeSaga', () => {

    // fetchRoute = jest.fn();
    // selectors.isAuthenticated = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should fail if not authenticated', async () => {
        // selectors.isAuthenticated.mockImplementation(() => false);
        const coords = [[30.272183, 59.80065],[30.27744, 59.799996],[30.282353, 59.796571]];
        const initialAction = {addressFrom: 'addressFrom', addressTo: 'addressTo'};
        const dispatched = await recordSaga(
            routeSaga,
            initialAction
        );

        expect(dispatched).toContainEqual(fetchRouteSuccess(coords));
        // expect(api.getProfile).not.toHaveBeenCalled();
    });

    // it('should get profile from API and call success action if authenticated', async () => {
    //     const someProfile = {name: 'Guy Incognito'};
    //     api.getProfile.mockImplementation(() => someProfile);
    //     selectors.isAuthenticated.mockImplementation(() => true);
    //
    //     const initialAction = {profileId: 1};
    //     const dispatched = await recordSaga(
    //         loadProfileSaga,
    //         initialAction
    //     );
    //
    //     expect(api.getProfile).toHaveBeenCalledWith(1);
    //     expect(dispatched).toContainEqual(loadProfileSuccess(someProfile));
    // });
});