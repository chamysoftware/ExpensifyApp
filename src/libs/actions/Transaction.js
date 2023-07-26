import Onyx from 'react-native-onyx';
import ONYXKEYS from '../../ONYXKEYS';

function createInitialWaypoints(transactionID) {
    Onyx.merge(`${ONYXKEYS.COLLECTION.TRANSACTION}${transactionID}`, {
        'waypoint0': {},
        'waypoint1': {},
    });
}

export default createInitialWaypoints;