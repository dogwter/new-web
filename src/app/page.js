'use client';
import React from 'react';
import './Styles.css';
import Task from './dashboard/task';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {

    return (
        <div className={inter.className}>
            <Task/>
        </div>
    );
}
