import b2b_converter from '../../assets/img/projects/b2b_converter/main_form.png'
import it_monitoring from '../../assets/img/projects/it_monitoring/requests_page.png'
import timekeeping from '../../assets/img/projects/timekeeping/timekeeping.png'
import timekeeping_maintenance from '../../assets/img/projects/timekeeping_maintenance/reports.png'
import warehouse_del_sched from '../../assets/img/projects/warehouse_del_sched_system/main_form.png'

import vs from '../../assets/img/ide/vs.png'
import vscode from '../../assets/img/ide/vscode.png'

import react from '../../assets/img/frameworks/reactjs.png'

import csharp from '../../assets/img/languages/csharp.png'

import sql_server from '../../assets/img/databases/sqlserver.png'
import sqlite from '../../assets/img/databases/sqlite.png'

export const projects_details = [
    {
        label: "B2B Converter",
        img: b2b_converter,
        summary: "This is a summary",
        stacks: [vs, csharp, sql_server]
    },
    {
        label: "IT Monitoring",
        img: it_monitoring,
        summary: "This is a summary",
        stacks: [vscode, react, sqlite]
    },
    {
        label: "Timekeeping",
        img: timekeeping,
        summary: "This is a summary",
        stacks: []
    },
    {
        label: "Timekeeping Maintenance",
        img: timekeeping_maintenance,
        summary: "This is a summary"
    },
    {
        label: "Warehouse Delivery Schedule System",
        img: warehouse_del_sched,
        summary: "This is a summary"
    },
]
