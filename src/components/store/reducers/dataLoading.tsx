interface DataLoadingInterface {
  type: string;
}

export default function dataLoading(
  state: boolean = false,
  action: DataLoadingInterface
) {
  switch (action.type) {
    case "DATA_IS_LOADING":
      return true;
    case "DATA_WAS_LOADED":
      return false;
    default:
      return state;
  }
}
