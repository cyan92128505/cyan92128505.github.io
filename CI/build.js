import fs from 'fs-extra';
import path from 'path';

class Main {
  constructor() {
    this.Exec();
  }

  async Exec() {
    const readmePath = path.join(process.cwd(), 'README.md');
    const indexPath = path.join(process.cwd(), 'index.html');
    const indexTemplatePath = path.join(process.cwd(), 'template', 'index.template');
    const readmeContent = `${await fs.readFile(readmePath)}`.replace(/\n/g, '\\n');
    let template = `${await fs.readFile(indexTemplatePath)}`;
    template = template.replace(/\$\{\{readme\.md\}\}/g, readmeContent);

    await fs.writeFile(indexPath, template);
  }
}

new Main();
