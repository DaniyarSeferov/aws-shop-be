export const getProducts = () => {
	return [
		{
			id: 1,
			title: 'The Self-Taught Programmer: The Definitive Guide to Programming Professionally',
			description: 'I am a self-taught programmer. After a year of self-study, I learned to program well enough to land a job as a software engineer II at eBay. Once I got there, I realized I was severely under-prepared. I was overwhelmed by the amount of things I needed to know but hadn\'t learned yet. My journey learning to program, and my experience at my first job as a software engineer were the inspiration for this book.',
			price: 19.68,
			count: 4
		},
		{
			id: 2,
			title: 'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming',
			description: 'Second edition of the best-selling Python book in the world. A fast-paced, no-nonsense guide to programming in Python. Updated and thoroughly revised to reflect the latest in Python code and practices.',
			price: 19.95,
			count: 6
		},
		{
			id: 3,
			title: 'The Art of Computer Programming',
			description: 'The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.',
			price: 194.99,
			count: 8
		},
		{
			id: 4,
			title: 'Introduction to Programming Using Visual Basic',
			description: 'A Current and Comprehensive Introduction to Visual Basic Programming',
			price: 19.99,
			count: 2
		},
		{
			id: 5,
			title: 'Game Programming Patterns',
			description: 'You will learn how to write a robust game loop, how to organize your entities using components, and take advantage of the CPUs cache to improve your performance.',
			price: 35.96,
			count: 5
		},
		{
			id: 6,
			title: 'Software Engineering at Google: Lessons Learned from Programming Over Time',
			description: 'Today, software engineers need to know not only how to program effectively but also how to develop proper engineering practices to make their codebase sustainable and healthy. This book emphasizes this difference between programming and software engineering.',
			price: 27.73,
			count: 9
		},
		{
			id: 7,
			title: 'Programming: Principles and Practice Using C++ (2nd Edition)',
			description: 'An Introduction to Programming by the Inventor of C++',
			price: 61.99,
			count: 1
		},
		{
			id: 8,
			title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
			description: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.',
			price: 41.20,
			count: 6
		},
		{
			id: 9,
			title: 'Learning Go: An Idiomatic Approach to Real-World Go Programming',
			description: 'Go is rapidly becoming the preferred language for building web services. While there are plenty of tutorials available that teach Go\'s syntax to developers with experience in other programming languages, tutorials aren\'t enough.',
			price: 44.29,
			count: 9
		},
	];
};

export const getProductsPromise = () => {
	return new Promise((resolve) => {
		const data = getProducts();

		resolve(data);
	});
};