#!/usr/bin/env node
import { Command } from 'commander';

import parse from '../src/parser.js';
import formatList from '../src/formater.js';

const program = new Command();

program
  .description('Bloodhound is a text matching utility for files')
  .version('-v, --version', 'Output of version number')
  .option('-d --rootDirectory [dir]', 'Root directory for search (default: "/home/user/current-dir', process.cwd())
  .option('-r --recursively [is_recursively]', 'Determines whether the search for matches will be recursive (default: "false")', false)
  .option('-f, --format', 'Determines format type (default: <filename> => matched lines', 'arrowStyle')
  .argument('<keyword>')

  .action((keyword) => {
    const options = program.opts();
    const { rootDirectory, recursively, format } = options;

    parse(rootDirectory, keyword, recursively).then((files) => formatList(files, format));
  });

program.parse(process.argv);
