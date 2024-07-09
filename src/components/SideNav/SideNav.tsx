// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';

import { useNavigate } from 'react-router-dom';

import SideNavigation from '@cloudscape-design/components/side-navigation';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

type SideNavProps = {
    activeHref: string;
};

export default function SideNav({ activeHref }: SideNavProps) {
    const navigate = useNavigate();

    const sideNavItems: SideNavigationProps.Item[] = [
        // {
        //     type: 'link',
        //     text: 'Patients',
        //     href: 'https://d13qy380vrp732.cloudfront.net/patients',
        //     external: true
        // },
        { type: 'divider' },
        {
            type: 'link',
            text: 'New Application',
            href: '/new',
        },
        {
            type: 'link',
            text: 'All Applications',
            href: '/conversations',
        },
        { type: 'divider' },
        {
            type: 'link',
            text: 'Generate Audio',
            href: '/generate',
        },
        { type: 'divider' },
        {
            type: 'link',
            text: 'Settings',
            href: '/settings',
        },
        { type: 'divider' },
        {
            type: 'link',
            text: 'Amazon Transcribe',
            href: 'https://aws.amazon.com/transcribe',
            external: true,
        },
        {
            type: 'link',
            text: 'Amazon Comprehend',
            href: 'https://aws.amazon.com/comprehend',
            external: true,
        },
        {
            type: 'link',
            text: 'Amazon Web Services',
            href: 'https://aws.amazon.com',
            external: true,
        },
    ];

    return (
        <SideNavigation
            activeHref={activeHref}
            header={{ text: 'AWS Conversación Agente Demo', href: '/' }}
            items={sideNavItems}
            onFollow={(e) => {
                e.preventDefault();
                if (e.detail.external === true) {
                    window.open(e.detail.href, '_blank', 'noopener');
                    return;
                }
                navigate(e.detail.href, { relative: 'route' });
            }}
        />
    );
}
