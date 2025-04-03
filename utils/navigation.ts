// types/navigation.ts
export interface NavigationItem {
	name: string
	title: string
	// Add other properties you need
  }
  
  export interface NavigationState {
	items: NavigationItem[]
	isLoading: boolean
  }
  