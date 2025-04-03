const fs = require('fs');
const path = require('path');

module.exports.activities = fs.readFileSync(path.join(__dirname, 'activities.gql'), 'utf8');
module.exports.activity = fs.readFileSync(path.join(__dirname, 'activity.gql'), 'utf8');
module.exports.allSettings = fs.readFileSync(path.join(__dirname, 'allSettings.gql'), 'utf8');
module.exports.blog = fs.readFileSync(path.join(__dirname, 'blog.gql'), 'utf8');
module.exports.blogs = fs.readFileSync(path.join(__dirname, 'blogs.gql'), 'utf8');
module.exports.categories = fs.readFileSync(path.join(__dirname, 'categories.gql'), 'utf8');
module.exports.category = fs.readFileSync(path.join(__dirname, 'category.gql'), 'utf8');
module.exports.comment = fs.readFileSync(path.join(__dirname, 'comment.gql'), 'utf8');
module.exports.comments = fs.readFileSync(path.join(__dirname, 'comments.gql'), 'utf8');
module.exports.contentNode = fs.readFileSync(path.join(__dirname, 'contentNode.gql'), 'utf8');
module.exports.contentNodes = fs.readFileSync(path.join(__dirname, 'contentNodes.gql'), 'utf8');
module.exports.contentType = fs.readFileSync(path.join(__dirname, 'contentType.gql'), 'utf8');
module.exports.contentTypes = fs.readFileSync(path.join(__dirname, 'contentTypes.gql'), 'utf8');
module.exports.discussionSettings = fs.readFileSync(path.join(__dirname, 'discussionSettings.gql'), 'utf8');
module.exports.friendship = fs.readFileSync(path.join(__dirname, 'friendship.gql'), 'utf8');
module.exports.generalSettings = fs.readFileSync(path.join(__dirname, 'generalSettings.gql'), 'utf8');
module.exports.getInvite = fs.readFileSync(path.join(__dirname, 'getInvite.gql'), 'utf8');
module.exports.group = fs.readFileSync(path.join(__dirname, 'group.gql'), 'utf8');
module.exports.groupTypeTerm = fs.readFileSync(path.join(__dirname, 'groupTypeTerm.gql'), 'utf8');
module.exports.groupTypeTerms = fs.readFileSync(path.join(__dirname, 'groupTypeTerms.gql'), 'utf8');
module.exports.groups = fs.readFileSync(path.join(__dirname, 'groups.gql'), 'utf8');
module.exports.mediaItem = fs.readFileSync(path.join(__dirname, 'mediaItem.gql'), 'utf8');
module.exports.mediaItems = fs.readFileSync(path.join(__dirname, 'mediaItems.gql'), 'utf8');
module.exports.members = fs.readFileSync(path.join(__dirname, 'members.gql'), 'utf8');
module.exports.menu = fs.readFileSync(path.join(__dirname, 'menu.gql'), 'utf8');
module.exports.menuItem = fs.readFileSync(path.join(__dirname, 'menuItem.gql'), 'utf8');
module.exports.menuItems = fs.readFileSync(path.join(__dirname, 'menuItems.gql'), 'utf8');
module.exports.menus = fs.readFileSync(path.join(__dirname, 'menus.gql'), 'utf8');
module.exports.node = fs.readFileSync(path.join(__dirname, 'node.gql'), 'utf8');
module.exports.nodeByUri = fs.readFileSync(path.join(__dirname, 'nodeByUri.gql'), 'utf8');
module.exports.notification = fs.readFileSync(path.join(__dirname, 'notification.gql'), 'utf8');
module.exports.notifications = fs.readFileSync(path.join(__dirname, 'notifications.gql'), 'utf8');
module.exports.page = fs.readFileSync(path.join(__dirname, 'page.gql'), 'utf8');
module.exports.pages = fs.readFileSync(path.join(__dirname, 'pages.gql'), 'utf8');
module.exports.plugin = fs.readFileSync(path.join(__dirname, 'plugin.gql'), 'utf8');
module.exports.plugins = fs.readFileSync(path.join(__dirname, 'plugins.gql'), 'utf8');
module.exports.post = fs.readFileSync(path.join(__dirname, 'post.gql'), 'utf8');
module.exports.postFormat = fs.readFileSync(path.join(__dirname, 'postFormat.gql'), 'utf8');
module.exports.postFormats = fs.readFileSync(path.join(__dirname, 'postFormats.gql'), 'utf8');
module.exports.posts = fs.readFileSync(path.join(__dirname, 'posts.gql'), 'utf8');
module.exports.readingSettings = fs.readFileSync(path.join(__dirname, 'readingSettings.gql'), 'utf8');
module.exports.registeredScripts = fs.readFileSync(path.join(__dirname, 'registeredScripts.gql'), 'utf8');
module.exports.registeredStylesheets = fs.readFileSync(path.join(__dirname, 'registeredStylesheets.gql'), 'utf8');
module.exports.revisions = fs.readFileSync(path.join(__dirname, 'revisions.gql'), 'utf8');
module.exports.signup = fs.readFileSync(path.join(__dirname, 'signup.gql'), 'utf8');
module.exports.signups = fs.readFileSync(path.join(__dirname, 'signups.gql'), 'utf8');
module.exports.tag = fs.readFileSync(path.join(__dirname, 'tag.gql'), 'utf8');
module.exports.tags = fs.readFileSync(path.join(__dirname, 'tags.gql'), 'utf8');
module.exports.taxonomies = fs.readFileSync(path.join(__dirname, 'taxonomies.gql'), 'utf8');
module.exports.taxonomy = fs.readFileSync(path.join(__dirname, 'taxonomy.gql'), 'utf8');
module.exports.termNode = fs.readFileSync(path.join(__dirname, 'termNode.gql'), 'utf8');
module.exports.terms = fs.readFileSync(path.join(__dirname, 'terms.gql'), 'utf8');
module.exports.theme = fs.readFileSync(path.join(__dirname, 'theme.gql'), 'utf8');
module.exports.themes = fs.readFileSync(path.join(__dirname, 'themes.gql'), 'utf8');
module.exports.thread = fs.readFileSync(path.join(__dirname, 'thread.gql'), 'utf8');
module.exports.threads = fs.readFileSync(path.join(__dirname, 'threads.gql'), 'utf8');
module.exports.user = fs.readFileSync(path.join(__dirname, 'user.gql'), 'utf8');
module.exports.userRole = fs.readFileSync(path.join(__dirname, 'userRole.gql'), 'utf8');
module.exports.userRoles = fs.readFileSync(path.join(__dirname, 'userRoles.gql'), 'utf8');
module.exports.users = fs.readFileSync(path.join(__dirname, 'users.gql'), 'utf8');
module.exports.viewer = fs.readFileSync(path.join(__dirname, 'viewer.gql'), 'utf8');
module.exports.writingSettings = fs.readFileSync(path.join(__dirname, 'writingSettings.gql'), 'utf8');
module.exports.xprofileField = fs.readFileSync(path.join(__dirname, 'xprofileField.gql'), 'utf8');
module.exports.xprofileGroup = fs.readFileSync(path.join(__dirname, 'xprofileGroup.gql'), 'utf8');
module.exports.xprofileGroups = fs.readFileSync(path.join(__dirname, 'xprofileGroups.gql'), 'utf8');
