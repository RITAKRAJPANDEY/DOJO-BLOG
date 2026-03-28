--CREATE DATABASE

CREATE DATABASE blogs_v1;

--ENTER DATABASE

\c blogs_v1

--CREATE TABLE 

CREATE TABLE blogs(
id UUID PRIMARY KEY  DEFAULT gen_random_uuid(),
author TEXT NOT NULL,
title TEXT NOT NULL,
description TEXT NOT NULL
);

CREATE INDEX blog_idx_author ON blogs(author);
