# &lt;baseline-build-hax&gt;

Build
> create an inflexible baseline build of hax with all elements

## Usage
To use this web component in your project you can utilize one of the following styles of syntax.

```js
/* In an existing JS module / web component */
import '@haxtheweb/baseline-build-hax/baseline-build-hax.js';
/* At top of an application with build routine */
<script type="module" src="@haxtheweb/baseline-build-hax/baseline-build-hax.js"></script>
/* Alternatives for top of application */
<script type="module">
  import '@haxtheweb/baseline-build-hax/baseline-build-hax.js';
  // imperative form
  import {BaselineBuildHax} from '@haxtheweb/baseline-build-hax';
  // if you don't have a build routine and need to reference directly
  import './node_modules/@haxtheweb/baseline-build-hax/baseline-build-hax.js';
</script>
// via unpkg CDN (good for testing)
<script type="module" src="https://unpkg.com/@haxtheweb/baseline-build-hax/baseline-build-hax.js"></script>
```

## Develop / Demo
Run `yarn start` will start a local development server, open your default browser to display it, open your finder to the correct window and start watching the `/src` directory for changes and automatically rebuilding the element and documentation site for the demo.
```bash
$ yarn start
```

## Test

```bash
$ yarn run test
```

## Build
Builds ensure that wcfactory can correctly compile your web component project to
work on the maximum number of browsers possible.
```bash
$ yarn run build
```

## Contributing

1. Fork it! `git clone git@github.com/haxtheweb/webcomponents.git`
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Code style

Build  use [Prettier][prettier] to auto-format JS and JSON.  The style rules get applied when you commit a change.  If you choose to, you can [integrate your editor][prettier-ed] with Prettier to have the style rules applied on every save.

[prettier]: https://github.com/prettier/prettier/
[prettier-ed]: https://github.com/prettier/prettier/#editor-integration
[polyserve]: https://github.com/Polymer/polyserve
[web-component-tester]: https://github.com/Polymer/web-component-tester

## License
[Apache-2.0 License](http://opensource.org/licenses/Apache-2.0)