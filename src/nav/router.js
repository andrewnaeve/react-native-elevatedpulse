import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home/container/Home';
import Cash from '../screens/addCash/container/CashContainer';
import WriteNFC from '../screens/nfc/containers/WriteNFC';
import ReadNFC from '../screens/nfc/containers/ReadNFC';
import PulseReader from '../screens/nfc/containers/PulseReader';

export const HomeScreen = StackNavigator(
	{
		Home: {
			screen: Home
		},
		Elevate: {
			screen: Cash
		},
		Pulse: {
			screen: ReadNFC
		},
		WriteNFC: {
			screen: WriteNFC
		}
	},
	{
		headerMode: 'none'
	}
);
