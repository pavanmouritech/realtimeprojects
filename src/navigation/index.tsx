import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};
export const goBack = () => {
  if (navigationRef.canGoBack()) {
    navigationRef.goBack();
  } else {
  }
};
