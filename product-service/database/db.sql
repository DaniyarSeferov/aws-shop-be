CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products
(
    id          uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title       text NOT NULL,
    description text,
    price       integer
);

CREATE TABLE IF NOT EXISTS stocks
(
    product_id uuid UNIQUE,
    count      integer,
    foreign key ("product_id") references "products" ("id")
);

INSERT INTO products (title, description, price)
VALUES ('The Self-Taught Programmer: The Definitive Guide to Programming Professionally',
        'I am a self-taught programmer. After a year of self-study, I learned to program well enough to land a job as a software engineer II at eBay.',
        20),
       ('Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming',
        'Second edition of the best-selling Python book in the world. A fast-paced, no-nonsense guide to programming in Python.',
        20),
       ('The Art of Computer Programming',
        'The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.',
        195),
       ('Introduction to Programming Using Visual Basic',
        'A Current and Comprehensive Introduction to Visual Basic Programming', 25),
       ('Game Programming Patterns',
        'You will learn how to write a robust game loop, how to organize your entities using components, and take advantage of the CPUs cache to improve your performance.',
        36),
       ('Software Engineering at Google: Lessons Learned from Programming Over Time',
        'Today, software engineers need to know not only how to program effectively but also how to develop proper engineering practices to make their codebase sustainable and healthy.',
        28),
       ('Programming: Principles and Practice Using C++ (2nd Edition)',
        'An Introduction to Programming by the Inventor of C++', 62),
       ('Clean Code: A Handbook of Agile Software Craftsmanship',
        'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees.',
        41),
       ('Learning Go: An Idiomatic Approach to Real-World Go Programming',
        'Go is rapidly becoming the preferred language for building web services.', 44);

INSERT INTO stocks (product_id, count)
VALUES ('1f566fdf-35e4-460b-9469-af26ea19c5bd', 4),
       ('4e8506b1-1fc8-49b5-9baf-5466360fcd96', 6),
       ('5a12f20b-571c-4f4b-97ed-53ee3e8a5e43', 8),
       ('6ac6d614-e028-4f29-922e-a1f1c0cc5033', 2),
       ('ef7788b5-e56d-4df9-866f-f01e38698a80', 5),
       ('72f9e9de-6255-4452-9d8b-4ab4256aa895', 9),
       ('17db963c-1102-4984-b6f3-c8f0dfe63e31', 1),
       ('0b29812c-617a-4103-8705-c765805fced2', 6),
       ('88d2e3ad-53fb-420e-9678-f5492eab40a4', 9);
