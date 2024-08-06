export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
// In this step, you create an instance of the interface and assign some sample data to it. You won't see this sample data appear in your app yet. There are a few more lessons to complete before that happens.
//In this lesson, you created an interface that created a new data type for your app. This new data type makes it possible for you to specify where HousingLocation data is required. This new data type also makes your IDE and the TypeScript compiler ensure that HousingLocation data is used where it's required.
