# Workshop for this step

Goals:

* Add a new route.
* Split the static HTML in to smaller components.

-----

1. Use the Angular CLI to create a dashboard module

```
ng generate module dashboard
```

2. Generate the dashboard component and all nested components. Add the
   'dashboard/' prefix, so they are added to the dashboard module.
   Split the dashboard component template between them
   (as noted in comments in the HTML). For example, your commands
   may look something like this:

```
ng generate component dashboard/dashboard
ng generate component dashboard/videoList
ng generate component dashboard/videoViewer
ng generate component dashboard/statFilters
```

The stat graphs component will be added later.

3. Set up routing

If you followed the directions to use the `--routing` option while
creating your application (or used our Cloud 9 setup script), your
application will already have a basic routing set up. If not, you can
follow the example in an earlier step to add that.

Then, add a route for the dashboard component, using lazy loading.

4. Assemble your static application

Use the components you generated in step 2 to reconstruct the video
stat tracker app in the dashboard component. As you begin of course,
the components will be placeholders without actual functionality.
