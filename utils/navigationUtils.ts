// utils/navigationUtils.ts
import { Router } from 'expo-router';

export const resetNavigate = (router: any, newPath: string) => {
  // Reset the navigation stack by going back to the root (if applicable)
  
  while (router.canGoBack()) {
    console.log("new path is",newPath)
    router.back();
  }

  // After going back to the root, navigate to the new path passed as prop
  router.push(newPath);
};