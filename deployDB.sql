CREATE TABLE `answers` (
  `answerid` int(20) NOT NULL,
  `userid` int(20) NOT NULL,
  `questionid` varchar(100) NOT NULL,
  `answer` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `questions` (
  `id` int(20) NOT NULL,
  `questionid` varchar(100) NOT NULL,
  `userid` int(20) NOT NULL,
  `title` varchar(150) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users` (
  `userid` int(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `answers` (`answerid`, `userid`, `questionid`, `answer`) VALUES
(1, 1, '3145f756-deeb-4d76-b056-54a5528ee673', 'Ensure that you’re using async/await and promises to handle I/O operations without blocking the event loop.'),
(2, 1, '3145f756-deeb-4d76-b056-54a5528ee673', 'Ensure that you’re using async/await and promises to handle I/O operations without blocking the event loop.'),
(3, 1, '3145f756-deeb-4d76-b056-54a5528ee673', 'Another practical thing you can try to optimize the speed of a React application is code splitting.'),
(7, 2, 'f6888d32-b7b9-400c-8108-a9b0c38cfa64', 'Another practical thing you can try to optimize the speed of a React application is code splitting.'),
(8, 2, 'f6888d32-b7b9-400c-8108-a9b0c38cfa64', 'Virtual DOM is used in React. js to increase performance'),
(9, 2, 'f6888d32-b7b9-400c-8108-a9b0c38cfa64', 'Search engines like Google consider page load times and overall performance when ranking websites. A well-optimized application will rank higher in search results, making it more visible to potential users.');

INSERT INTO `questions` (`id`, `questionid`, `userid`, `title`, `description`, `tag`) VALUES
(27, '3145f756-deeb-4d76-b056-54a5528ee673', 1, 'How do I optimize a Node.js application?', 'I’m working on a Node.js app, and it’s starting to lag with an increasing number of users. What are some best practices or strategies to optimize the app for better performance?', NULL),
(31, '15847f0f-16c6-46aa-a65f-71b9d6031b2a', 1, 'Why Building a Forum Matters in Today\'s Digital Age: A Deep Dive into Community Platforms and Their Impact', 'Forums have become an essential part of online communities, providing users with a platform to ask questions, share ideas, and build connections.', NULL),
(32, '608b108b-8818-4b49-8ee7-b6095fc5f60d', 1, 'What is the difference between synchronous and asynchronous code in JavaScript?', 'Aimed at explaining the basic concepts of synchronous and asynchronous code execution, including callbacks, promises, and async/await.', NULL),
(36, '4a54852e-5fa9-4019-b474-2844af286541', 1, 'Can I use React with server-side rendering (SSR)?', 'This explores the concept of SSR, its benefits in terms of SEO and initial page load time, and how it can be implemented in React using frameworks like Next.js.', NULL);

INSERT INTO `users` (`userid`, `username`, `firstname`, `lastname`, `email`, `password`) VALUES
(1, 'test1', 'test', 'test', 'test@gmail.com', '$2b$10$hn.G./sYYwTLEq0wjib4IuVpW/nxjGb06Cseu0E9ZWofY4NboE9K2'),
(2, 'user2', 'user', 'test', 'user@gmail.com', '$2b$10$bvwz0Eb/Z9/Bg2IZZ66pW./USwbld3Ni/ClJrvSOPz3HmSlYBSt2W');
