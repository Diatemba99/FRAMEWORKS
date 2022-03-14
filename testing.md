# Hyde

Hyde is a brazen two-column [hugo](https://gohugo.io) theme based on the [Jekyll](http://jekyllrb.com) theme of the same name.
It pairs a prominent sidebar with uncomplicated content.

![Hyde screenshot](https://f.cloud.github.com/assets/98681/1831228/42af6c6a-7384-11e3-98fb-e0b923ee0468.png)


## Contents

- [Installation](#installation)
- [Options](#options)



## Installation

### Quick Start

To give you a running start this installation puts a fully configured [starter repo](https://github.com/forestryio/hyde-hugo-starter) into your Git account and sets it up in a content manager / CMS. 

_[Forestry](https://forestry.io) Starter-Kit:_

[![Import this project into Forestry](https://assets.forestry.io/import-to-forestry.svg)](https://app.forestry.io/quick-start?repo=forestryio/hyde-hugo-starter&provider=github&engine=hugo&version=0.49)



### Sidebar menu

Create a list of nav links in the sidebar by assigning "menu=main" in the front matter, like so:

**TOML**
```toml
theme = "hyde"

[Menus]
  main = [
      {Name = "Github", URL = "https://github.com/username/"},
      {Name = "LinkedIn", URL = "https://www.linkedin.com/in/username/"}
  ]
```

**YAML**
```yaml
theme: "hyde"

Menus:
  main:
    - Name: "Github"
      URL: "https://github.com/username/"
    - Name: "LinkedIn"
      URL: "https://www.linkedin.com/in/username/"
```

### Sidebar description
Customise the describe of your page using `description`, like so:



**YAML**
```yaml
theme: "hyde"

params:
  description = "Your custom description"
```


### Sticky sidebar content

By default Hyde ships with a sidebar that affixes it's content to the bottom of the sidebar. You can optionally disabled this by removing the `.sidebar-sticky` class from the sidebar's `.container`. Sidebar content will then normally flow from top to bottom.

```html
<!-- Default sidebar -->
<div class="sidebar">
  <div class="container sidebar-sticky">
    ...
  </div>
</div>

<!-- Modified sidebar -->
<div class="sidebar">
  <div class="container">
    ...
  </div>
</div>
```


### Themes

Hyde ships with eight optional themes based on the [base16 color scheme](https://github.com/chriskempson/base16). Apply a theme to change the color scheme (mostly applies to sidebar and links).

![Hyde in red](https://f.cloud.github.com/assets/98681/1831229/42b0b354-7384-11e3-8462-31b8df193fe5.png)



To use a theme, add the `themeColor` variable under `params`, like so:

**TOML**
```toml
theme = "hyde"

[params]
  themeColor = "theme-base-09"
```



> **Note:** Previous version 1.0 the Disqus shortname had to be defined inside the `[params]` block.



## Author
**Mark Otto**
- <https://github.com/mdo>
- <https://twitter.com/mdo>



## License

Open sourced under the [MIT license](LICENSE.md).

<3
# opensec
