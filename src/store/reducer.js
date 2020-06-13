export default function reducer(state, { type, payload }) {
    switch (type) {
        case "SIDE_NAV_BAR":
        return {
            ...state,
            isSideNavMenu: payload,
        };
        default:
      return state;
    }
}