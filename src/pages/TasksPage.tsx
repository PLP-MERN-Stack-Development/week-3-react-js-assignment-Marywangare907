import React from 'react';
import { TaskManager } from '../components/tasks/TaskManager';

export const TasksPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <TaskManager />
    </div>
  );
};