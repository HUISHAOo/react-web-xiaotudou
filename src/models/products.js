
import { querylist } from '../services/example';
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    *querylist({ payload }, { call }) {
      const response = yield call(querylist, payload);
      return response;
    }
  }
};
