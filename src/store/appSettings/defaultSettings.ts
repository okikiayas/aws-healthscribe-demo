// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import { AppSettings } from './appSettings.type';

export const DEFAULT_SETTINGS: AppSettings = {
    'app.region': { label: 'EU Central (Frankfurt)', value: 'eu-central-1'},
    'app.apiTiming': { label: 'Off', value: 'off' },
    'app.comprehendMedicalEnabled': { label: 'Enabled', value: 'enabled' },
};
