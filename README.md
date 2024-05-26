# utils/dom-focus
Module for working with focus

## subtree

### pull/push

```bash
# Push
git subtree push --prefix=src/utils/dom-focus utils-dom-focus main
# Pull
git subtree pull --prefix=src/utils/dom-focus utils-dom-focus main
# Force
git push utils-dom-focus `git subtree split --prefix=src/utils/dom-focus @`:main --force
```

### Add to your project

1. Add a repository alias `git remote add utils-dom-focus <REMOTE_ADDRESS>`
2. To check a list of aliases `git remote -v`, you must see `utils-dom-focus`
3. Check that your project has no changes
4. run `git subtree add --prefix=src/utils/dom-focus utils-dom-focus main`
