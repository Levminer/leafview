import { build } from 'electron-builder';

build({
  config: {
    productName: 'LeafView',
    artifactName: '${productName}-${version}-${platform}-x64.${ext}',
    copyright: '© 2020 sprout2000 and other contributors.',
    files: ['dist/**/*'],
    publish: [
      {
        provider: 'github',
        releaseType: 'release',
      },
    ],
    directories: {
      buildResources: 'asset',
      output: 'release',
    },
    linux: {
      icon: 'assets/icon_linux.icns',
      target: ['AppImage', 'zip'],
      category: 'Graphics',
    },
  },
}).catch((err) => console.log(err));
