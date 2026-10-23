interface Column {
  title: string,
  dotClass: string,
  border: string,
  details: Task[],
}

interface Task{
  id: number;
  title: string;
  description: string,
  priority: string,
  status: string;
  date: string;
}
