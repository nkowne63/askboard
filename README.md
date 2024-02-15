# 🌦️This project has been abandoned.🌦️

This is because the extension called SessionBox proved to be an easy way to switch sessions between multiple accounts without having to create your own client.

# askboard

An integrated environment for OpenAI ChatGPT and its plugins in multiple environments.

# Feature overview

## Function Calling with plugin system

You can extend LLM by registering the actions executed by Function Calling as plugins.

## Switching between multiple API keys and managing fees for each key

By switching between multiple API keys, you can query using keys from multiple accounts.
This makes it possible to use API keys from private OpenAI accounts for private purposes.
You can also track charges by API Key.

# Status

- interface
  - ⬜ tui
  - ⬜ slack
  - ⬜ discord
  - ⬜ api
  - ⬜ web
  - ⬜ web-backend
- library
  - 🔄 core
  - ⬜ web-view

# interface

The following interface is planned.

## tui

This is the version that runs on the terminal.
Intended for local use.

## slack

This is the version as a bot in the slack workspace.
It is intended for deployment in several environments.

## discord

This is the bot version on the discord server.
It is intended for deployment in several environments.

## api

This version operates as a RESTful API server.
It has an authentication system and is intended for deployment on cloudflare.

## web, web-backend

This version can be accessed from a web browser.
It has an authentication system and a simple encryption mechanism, and supports synchronization of settings between multiple clients.

# library

## core

A collection of core domains and business logic for OpenAI's Assistant API.

## web-view

A group of components for React views that are framework-independent.
