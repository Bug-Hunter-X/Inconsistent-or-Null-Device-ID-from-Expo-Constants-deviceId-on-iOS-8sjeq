# Expo Constants.deviceId Inconsistency on iOS

This repository demonstrates a bug encountered when using `Constants.deviceId` within the Expo framework on iOS devices, specifically within the Expo Go client.  The `Constants.deviceId` API may return `null` or inconsistent values, hindering reliable user identification. This issue is intermittent and doesn't always occur, making debugging more complex.

## Problem Description

The core problem is the unreliable nature of `Constants.deviceId` on iOS devices using Expo Go. In some cases, it returns a valid device ID, while in others it returns `null` or a different ID unexpectedly.  This inconsistency severely affects applications relying on persistent user identification and tracking.

## Reproduction Steps

1. Clone this repository.
2. Run the project in Expo Go on an iOS device.
3. Observe the output of `Constants.deviceId` multiple times.  Inconsistency in the returned value should be evident.

## Workaround (provided in bugSolution.js)

The workaround involves utilizing a combination of other APIs and local storage to generate a more reliable unique identifier.  The provided solution is not perfect but offers increased consistency compared to using `Constants.deviceId` directly.  Consult the `bugSolution.js` file for details.

## Solution Notes

The provided solution prioritizes application functionality over relying on a potentially unreliable API. This approach ensures smoother user experiences even with the limitations of `Constants.deviceId`.