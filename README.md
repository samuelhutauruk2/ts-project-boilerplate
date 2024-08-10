Instead of removing and re-adding, you can do this:

```pwsh
git remote set-url origin git://new.url.here
```

To remove remote use this:

```pwsh
git remote remove origin
```

To add new remote url:
```pwsh
git remote add origin <project url>
git push -f origin main
```
