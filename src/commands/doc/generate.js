/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const BaseCommand = require('../../base_command')
const path = require('path')

class GenerateCommand extends BaseCommand {
  async run () {
    const { args } = this.parse(GenerateCommand)

    if (args.path !== '.') {
      const destDir = path.resolve(args.path)
      process.chdir(destDir)
    }

    return this.gatsby(['build'])
  }
}

GenerateCommand.description = 'Generate the production docs'

GenerateCommand.args = [
  {
    name: 'path',
    description: 'Path to the doc directory',
    default: '.'
  }
]

module.exports = GenerateCommand
