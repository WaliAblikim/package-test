import { formatDistanceToNow } from 'date-fns'

const date = '1999-10-20 10:00:00';
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
