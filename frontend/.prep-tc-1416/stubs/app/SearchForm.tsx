import type { TaskFilters } from '../lib/validation';
export default function SearchForm({ filters }: { filters: TaskFilters }) { return <form method="GET">{filters.query}</form>; }
