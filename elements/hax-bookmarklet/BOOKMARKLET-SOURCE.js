var link = document.createElement("script");
link.type = "module";
window.__appliedHax = false;
link.src =
  "https://cdn.waxam.io/build/es6/node_modules/@lrnwebcomponents/h-a-x/h-a-x.js";
document.body.appendChild(link);
var style = document.createElement("style");
style.innerHTML = `.hax-injected-highlighter {
outline: 2px dotted #34e79a!important;
outline-offset: 2px!important;
}
h-a-x {
  width: 50%;
  margin: 100px auto;
}`;
document.body.appendChild(style);
document.body.addEventListener("click", function (e) {
  if (!window.__appliedHax) {
    var org_html = e.target.outerHTML;
    var new_html = "<h-a-x>" + org_html + "</h-a-x>";
    e.target.outerHTML = new_html;
    window.__appliedHax = true;
  }
});
document.body.addEventListener("mouseover", function (e) {
  if (!window.__appliedHax) {
    e.target.classList.add("hax-injected-highlighter");
  }
});
document.body.addEventListener("mouseout", function (e) {
  if (!window.__appliedHax) {
    e.target.classList.remove("hax-injected-highlighter");
  }
});
window.addEventListener("hax-store-ready", () => {
  window.HaxStore.instance.appStore = {
    status: 200,
    apps: [
      {
        details: {
          title: "Youtube",
          icon: "av:play-arrow",
          color: "red",
          author: "Google, Youtube LLC",
          description: "The most popular online video sharing and remix site.",
          status: "available",
          tags: ["video", "crowdsourced"],
        },
        connection: {
          protocol: "https",
          url: "www.googleapis.com/youtube/v3",
          data: {
            key: "AIzaSyAF9zKXv-fxus9GNqn40SHzTn6F8A7h-Yo",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "search",
              pagination: {
                style: "page",
                props: {
                  previous: "prevPageToken",
                  next: "nextPageToken",
                  total_items: "pageInfo.totalResults",
                },
              },
              search: {
                q: {
                  title: "Search",
                  type: "string",
                },
              },
              data: {
                part: "snippet",
                type: "video",
                maxResults: "20",
              },
              resultMap: {
                defaultGizmoType: "video",
                items: "items",
                preview: {
                  title: "snippet.title",
                  details: "snippet.description",
                  image: "snippet.thumbnails.default.url",
                  id: "id.videoId",
                },
                gizmo: {
                  title: "snippet.title",
                  description: "snippet.description",
                  id: "id.videoId",
                  _url_source: "https://www.youtube.com/watch?v=<%= id %>",
                  caption: "snippet.description",
                  citation: "snippet.channelTitle",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Vimeo",
          icon: "av:play-circle-filled",
          color: "blue",
          author: "Vimeo Inc.",
          description: "A high quality video sharing community.",
          status: "available",
          tags: ["video", "crowdsourced"],
        },
        connection: {
          protocol: "https",
          url: "api.vimeo.com",
          data: {
            access_token: "0a718b853bad87571d52e9fb554e0a43",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "videos",
              pagination: {
                style: "link",
                props: {
                  first: "paging.first",
                  next: "paging.next",
                  previous: "paging.previous",
                  last: "paging.last",
                },
              },
              search: {
                query: {
                  title: "Search",
                  type: "string",
                },
              },
              data: {
                direction: "asc",
                sort: "alphabetical",
                filter: "CC",
                per_page: "20",
              },
              resultMap: {
                defaultGizmoType: "video",
                items: "data",
                preview: {
                  title: "name",
                  details: "description",
                  image: "pictures.sizes.1.link",
                  id: "id",
                },
                gizmo: {
                  _url_source: "https://vimeo.com<%= id %>",
                  id: "uri",
                  title: "title",
                  caption: "description",
                  description: "description",
                  citation: "user.name",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Flickr",
          icon: "image:collections",
          color: "pink",
          author: "Yahoo",
          description: "The original photo sharing platform on the web.",
          status: "available",
          rating: "0",
          tags: ["images", "creative commons", "crowdsourced"],
        },
        connection: {
          protocol: "https",
          url: "api.flickr.com",
          data: {
            api_key: "43ccc969703b7afd4e2a1b16f02ce84e",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "services/rest",
              pagination: {
                style: "page",
                props: {
                  per_page: "photos.perpage",
                  total_pages: "photos.pages",
                  page: "photos.page",
                },
              },
              search: {
                text: {
                  title: "Search",
                  type: "string",
                },
                safe_search: {
                  title: "Safe results",
                  type: "string",
                  value: "1",
                  format: "select",
                  items: [
                    { value: "1", text: "Safe" },
                    { value: "2", text: "Moderate" },
                    { value: "3", text: "Restricted" },
                  ],
                },
                license: {
                  title: "License type",
                  type: "string",
                  value: "",
                  format: "select",
                  items: [
                    { value: "", text: "Any" },
                    { value: "0", text: "All Rights Reserved" },
                    { value: "4", text: "Attribution License" },
                    { value: "6", text: "Attribution-NoDerivs License" },
                    {
                      value: "3",
                      text: "Attribution-NonCommercial-NoDerivs License",
                    },
                    { value: "2", text: "Attribution-NonCommercial License" },
                    {
                      value: "1",
                      text: "Attribution-NonCommercial-ShareAlike License",
                    },
                    { value: "5", text: "Attribution-ShareAlike License" },
                    { value: "7", text: "No known copyright restrictions" },
                    { value: "8", text: "United States Government Work" },
                    { value: "9", text: "Public Domain Dedication (CC0)" },
                    { value: "10", text: "Public Domain Mark" },
                  ],
                },
              },
              data: {
                method: "flickr.photos.search",
                safe_search: "1",
                format: "json",
                per_page: "20",
                nojsoncallback: "1",
                extras: "license,description,url_l,url_s",
              },
              resultMap: {
                defaultGizmoType: "image",
                items: "photos.photo",
                preview: {
                  title: "title",
                  details: "description._content",
                  image: "url_s",
                  id: "id",
                },
                gizmo: {
                  title: "title",
                  source: "url_l",
                  alt: "description._content",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "NASA",
          icon: "places:all-inclusive",
          color: "blue",
          author: "US Government",
          description: "The cozmos through one simple API.",
          status: "available",
          tags: ["images", "government", "space"],
        },
        connection: {
          protocol: "https",
          url: "images-api.nasa.gov",
          operations: {
            browse: {
              method: "GET",
              endPoint: "search",
              pagination: {
                style: "page",
                props: {
                  page: "page",
                },
              },
              search: {
                q: {
                  title: "Search",
                  type: "string",
                },
              },
              data: {
                media_type: "image",
              },
              resultMap: {
                defaultGizmoType: "image",
                items: "collection.items",
                preview: {
                  title: "data.0.title",
                  details: "data.0.description",
                  image: "links.0.href",
                  id: "links.0.href",
                },
                gizmo: {
                  id: "links.0.href",
                  source: "links.0.href",
                  title: "data.0.title",
                  caption: "data.0.description",
                  description: "data.0.description",
                  citation: "data.0.photographer",
                  type: "data.0.media_type",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Giphy",
          icon: "gif",
          color: "green",
          author: "Giphy",
          description: "Crowd sourced memes via animated gifs.",
          status: "available",
          tags: ["gif", "crowdsourced", "meme"],
        },
        connection: {
          protocol: "https",
          url: "api.giphy.com",
          data: {
            api_key: "mr3blNkTT0HeTvtyPPT4TIftqUSgyHoO",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "v1/gifs/search",
              pagination: {
                style: "offset",
                props: {
                  offset: "pagination.offset",
                  total: "pagination.total_count",
                  count: "pagination.count",
                },
              },
              search: {
                q: {
                  title: "Search",
                  type: "string",
                },
                rating: {
                  title: "Rating",
                  type: "string",
                  format: "select",
                  items: [
                    { value: "Y", text: "Y" },
                    { value: "G", text: "G" },
                    { value: "PG", text: "PG" },
                    { value: "PG-13", text: "PG-13" },
                    { value: "R", text: "R" },
                  ],
                },
                lang: {
                  title: "Language",
                  type: "string",
                  format: "select",
                  items: [
                    { value: "en", text: "en" },
                    { value: "es", text: "es" },
                    { value: "pt", text: "pt" },
                    { value: "id", text: "id" },
                    { value: "fr", text: "fr" },
                    { value: "ar", text: "ar" },
                    { value: "tr", text: "tr" },
                    { value: "th", text: "th" },
                    { value: "vi", text: "vi" },
                    { value: "de", text: "de" },
                    { value: "it", text: "it" },
                    { value: "ja", text: "ja" },
                    { value: "zh-CN", text: "zh-CN" },
                    { value: "zh-TW", text: "zh-TW" },
                    { value: "ru", text: "ru" },
                    { value: "ko", text: "ko" },
                    { value: "pl", text: "pl" },
                    { value: "nl", text: "nl" },
                    { value: "ro", text: "ro" },
                    { value: "hu", text: "hu" },
                    { value: "sv", text: "sv" },
                    { value: "cs", text: "cs" },
                    { value: "hi", text: "hi" },
                    { value: "bn", text: "bn" },
                    { value: "da", text: "da" },
                    { value: "fa", text: "fa" },
                    { value: "tl", text: "tl" },
                    { value: "fi", text: "fi" },
                    { value: "iw", text: "iw" },
                    { value: "ms", text: "ms" },
                    { value: "no", text: "no" },
                    { value: "uk", text: "uk" },
                  ],
                },
              },
              data: {
                limit: "20",
                lang: "en",
              },
              resultMap: {
                defaultGizmoType: "image",
                items: "data",
                preview: {
                  title: "title",
                  details: "description",
                  image: "images.preview_gif.url",
                  id: "id",
                },
                gizmo: {
                  source: "images.original.url",
                  source2: "images.480w_still.url",
                  id: "id",
                  title: "title",
                  alt: "title",
                  caption: "user.display_name",
                  citation: "user.display_name",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Google Poly",
          icon: "icons:3d-rotation",
          color: "red",
          author: "Google",
          description: "Google 3D object sharing service",
          status: "available",
          tags: ["3D", "creative commons", "crowdsourced"],
        },
        connection: {
          protocol: "https",
          url: "poly.googleapis.com/v1",
          data: {
            key: "AIzaSyDiSvloa49gHUJG0YAt3Ys_I6IEoiscPUM",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "assets",
              pagination: {
                style: "page",
                props: {
                  previous: "prevPageToken",
                  next: "nextPageToken",
                  total_items: "pageInfo.totalResults",
                },
              },
              search: {
                keywords: {
                  title: "Search",
                  type: "string",
                },
                category: {
                  title: "Category",
                  type: "string",
                  value: "",
                  format: "select",
                  items: [
                    { value: "", text: "Any" },
                    { value: "animals", text: "Animals" },
                    { value: "architecture", text: "Architecture" },
                    { value: "art", text: "Art" },
                    { value: "food", text: "Food" },
                    { value: "nature", text: "Nature" },
                    { value: "objects", text: "Objects" },
                    { value: "people", text: "People" },
                    { value: "scenes", text: "Scenes" },
                    { value: "technology", text: "Technology" },
                    { value: "transport", text: "Transport" },
                  ],
                },
              },
              data: {
                pageSize: "20",
              },
              resultMap: {
                defaultGizmoType: "video",
                items: "assets",
                preview: {
                  title: "displayName",
                  details: "description",
                  image: "thumbnail.url",
                  id: "name",
                },
                gizmo: {
                  title: "displayName",
                  description: "description",
                  id: {
                    property: "name",
                    op: "split",
                    delimiter: "/",
                    position: "1",
                  },
                  image: "thumbnail.url",
                  _url_source: "https://poly.google.com/view/<%= id %>/embed",
                  caption: "description",
                  citation: "authorName",
                  license: "license",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Sketchfab",
          icon: "icons:3d-rotation",
          color: "purple",
          author: "Sketchfab",
          description: "3D sharing community.",
          status: "available",
          rating: "0",
          tags: ["3D", "creative commons", "crowdsourced"],
        },
        connection: {
          protocol: "https",
          url: "api.sketchfab.com",
          data: {
            type: "models",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "v3/search",
              pagination: {
                style: "page",
                props: {
                  per_page: "photos.perpage",
                  total_pages: "photos.pages",
                  page: "photos.page",
                },
              },
              search: {
                q: {
                  title: "Search",
                  type: "string",
                },
                license: {
                  title: "License type",
                  type: "string",
                  value: "",
                  format: "select",
                  items: [
                    { value: "", text: "Any" },
                    { value: "by", text: "Attribution" },
                    { value: "by-sa", text: "Attribution ShareAlike" },
                    { value: "by-nd", text: "Attribution NoDerivatives" },
                    { value: "by-nc", text: "Attribution-NonCommercial" },
                    {
                      value: "by-nc-sa",
                      text: "Attribution NonCommercial ShareAlike",
                    },
                    {
                      value: "by-nc-nd",
                      text: "Attribution NonCommercial NoDerivatives",
                    },
                    { value: "cc0", text: "Public Domain Dedication (CC0)" },
                  ],
                },
              },
              resultMap: {
                defaultGizmoType: "video",
                items: "results",
                preview: {
                  title: "name",
                  details: "description._content",
                  image: "thumbnails.images.2.url",
                  id: "uid",
                },
                gizmo: {
                  title: "name",
                  source: "embedUrl",
                  alt: "description",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Meme generator",
          icon: "android",
          color: "blue",
          author: "Meme generator",
          description: "A search engine of popular memes.",
          status: "available",
          tags: ["picture", "crowdsourced", "image", "meme"],
        },
        connection: {
          protocol: "http",
          url: "version1.api.memegenerator.net",
          data: {
            apiKey: "e7fbcd7f-8d76-4513-9698-e20de4362d99",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "Generators_Search",
              pagination: {
                style: "page",
                props: {
                  previous: "prevPageToken",
                  next: "nextPageToken",
                  total_items: "pageInfo.totalResults",
                },
              },
              search: {
                q: {
                  title: "Search",
                  type: "string",
                },
              },
              data: {
                pageIndex: "0",
                pageSize: "20",
              },
              resultMap: {
                defaultGizmoType: "image",
                items: "result",
                preview: {
                  title: "displayName",
                  details: "",
                  image: "imageUrl",
                  id: "imageID",
                },
                gizmo: {
                  title: "displayName",
                  id: "imageID",
                  source: "imageUrl",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Unsplash",
          icon: "image:collections",
          color: "grey",
          author: "Unsplash",
          description: "Crowd sourced, open photos",
          status: "available",
          tags: ["images", "crowdsourced", "cc"],
        },
        connection: {
          protocol: "https",
          url: "api.unsplash.com",
          data: {
            client_id:
              "0e1fa3a203724415c10c03581e8db8a43e8bc8906ad934e0f321d28be16281ff",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "search/photos",
              pagination: {
                style: "link",
                props: {
                  first: "paging.first",
                  next: "paging.next",
                  previous: "paging.previous",
                  last: "paging.last",
                },
              },
              search: {
                query: {
                  title: "Search",
                  type: "string",
                },
              },
              data: {},
              resultMap: {
                defaultGizmoType: "image",
                items: "results",
                preview: {
                  title: "tags.0.title",
                  details: "description",
                  image: "urls.thumb",
                  id: "id",
                },
                gizmo: {
                  id: "id",
                  source: "urls.regular",
                  alt: "description",
                  caption: "description",
                  citation: "user.name",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Dailymotion",
          icon: "av:play-circle-filled",
          color: "blue",
          author: "Dailymotion",
          description: "A crowdsourced video platform that is ad supported.",
          status: "available",
          tags: ["video", "crowdsourced"],
        },
        connection: {
          protocol: "https",
          url: "api.dailymotion.com",
          operations: {
            browse: {
              method: "GET",
              endPoint: "videos",
              pagination: {
                style: "page",
                props: {
                  total_items: "total",
                  total_pages: "total_pages",
                  page: "page",
                },
              },
              search: {
                search: {
                  title: "Search",
                  type: "string",
                },
              },
              data: {
                fields: "description,embed_url,thumbnail_240_url,title,id",
                no_live: "1",
                ssl_assets: "true",
                sort: "relevance",
                limit: "20",
              },
              resultMap: {
                defaultGizmoType: "video",
                items: "list",
                preview: {
                  title: "title",
                  details: "description",
                  image: "thumbnail_240_url",
                  id: "id",
                },
                gizmo: {
                  title: "title",
                  description: "description",
                  source: "embed_url",
                  alt: "description",
                  caption: "description",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Pixabay images",
          icon: "places:all-inclusive",
          color: "orange",
          author: "Pixabay",
          description: "Pixabay open image community",
          status: "available",
          tags: ["images", "crowdsourced"],
        },
        connection: {
          protocol: "https",
          url: "pixabay.com",
          data: {
            key: "7839766-f49bb4174cd49cb587944a5f7",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "api",
              pagination: {
                style: "page",
                props: {
                  total_items: "totalHits",
                  page: "page",
                },
              },
              search: {
                q: {
                  title: "Search",
                  type: "string",
                },
              },
              data: {
                image_type: "photo",
              },
              resultMap: {
                defaultGizmoType: "image",
                items: "hits",
                preview: {
                  title: "tags",
                  details: "user",
                  image: "previewURL",
                  id: "id",
                },
                gizmo: {
                  source: "webformatURL",
                  id: "uri",
                  title: "tags",
                  caption: "tags",
                  citation: "user.name",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "CC Mixter",
          icon: "av:library-music",
          color: "purple",
          author: "CC Mixter",
          description: "User submitted audio files and music.",
          status: "available",
          tags: ["audio", "crowdsourced"],
        },
        connection: {
          protocol: "http",
          url: "ccmixter.org",
          data: {
            format: "json",
            sort: "name",
            limit: "20",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "api/query",
              pagination: {
                style: "link",
                props: {
                  first: "paging.first",
                  next: "paging.next",
                  previous: "paging.previous",
                  last: "paging.last",
                },
              },
              search: {
                tags: {
                  title: "Search",
                  type: "string",
                },
              },
              data: {
                direction: "asc",
                sort: "alphabetical",
                filter: "CC",
                per_page: "20",
              },
              resultMap: {
                defaultGizmoType: "audio",
                items: "",
                preview: {
                  title: "upload_name",
                  details: "upload_description_plain",
                  image: "license_logo_url",
                  id: "upload_id",
                },
                gizmo: {
                  source: "files.0.download_url",
                  id: "upload_id",
                  title: "upload_name",
                  caption: "upload_description_plain",
                  description: "upload_description_plain",
                  citation: "license_name",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Codepen.io",
          icon: "code",
          color: "green",
          author: "Code pen",
          description: "HTML / CSS / JS sharing community",
          status: "available",
          rating: "0",
          tags: ["code", "development", "html", "js", "crowdsourced"],
        },
        connection: {
          protocol: "https",
          url: "cpv2api.com",
          operations: {
            browse: {
              method: "GET",
              endPoint: "search/pens",
              pagination: {
                style: "page",
                props: {
                  per_page: "photos.perpage",
                  total_pages: "photos.pages",
                  page: "photos.page",
                },
              },
              search: {
                q: {
                  title: "Search",
                  type: "string",
                },
              },
              resultMap: {
                defaultGizmoType: "video",
                items: "data",
                preview: {
                  title: "title",
                  details: "details",
                  image: "images.small",
                  id: "id",
                },
                gizmo: {
                  _url_source:
                    "https://codepen.io/fchazal/embed/<%= id %>/?theme-id=0&default-tab=html,result&embed-version=2",
                  id: "id",
                  image: "images.large",
                  title: "title",
                  caption: "details",
                  description: "details",
                },
              },
            },
          },
        },
      },
      {
        details: {
          title: "Wikipedia",
          icon: "account-balance",
          color: "grey",
          author: "Wikimedia",
          description: "Encyclopedia of the world.",
          status: "available",
          tags: ["content", "encyclopedia", "wiki"],
        },
        connection: {
          protocol: "https",
          url: "en.wikipedia.org",
          data: {
            action: "query",
            list: "search",
            format: "json",
            origin: "*",
          },
          operations: {
            browse: {
              method: "GET",
              endPoint: "w/api.php",
              pagination: {
                style: "offset",
                props: {
                  offset: "sroffset",
                },
              },
              search: {
                srsearch: {
                  title: "Search",
                  type: "string",
                },
              },
              data: {},
              resultMap: {
                image:
                  "https://en.wikipedia.org/static/images/project-logos/enwiki.png",
                defaultGizmoType: "content",
                items: "query.search",
                preview: {
                  title: "title",
                  details: "snippet",
                  id: "title",
                },
                gizmo: {
                  _url_source: "https://en.wikipedia.org/wiki/<%= id %>",
                  id: "title",
                  title: "title",
                  caption: "snippet",
                  description: "snippet",
                },
              },
            },
          },
        },
      },
    ],
    stax: [
      {
        details: {
          title: "Example Lesson",
          image: "",
          author: "ELMS:LN",
          description: "An example of what HAX can do",
          status: "available",
          rating: "0",
          tags: ["example"],
        },
        stax: [
          {
            tag: "h2",
            properties: {},
            content: "Introduction to ELMS: Learning Network",
          },
          {
            tag: "p",
            properties: {},
            content:
              "What is ELMS: Learning Network? How is it fundamentally different from other learning technologies? Why is it your reading this when it's example text that you've just added to see how to make a really solid introduction to a new unit of instruction? Let's keep reading to find out!",
          },
          {
            tag: "video-player",
            properties: {
              style: "width: 75%; margin: 0px auto; display: block;",
              source: "https://www.youtube.com/watch?v=pKLPQ4ufo64",
              src: "https://www.youtube-nocookie.com/embed/pKLPQ4ufo64?showinfo=0&controls=1&rel=0",
              iframed: true,
              sandboxed: false,
              width: "560",
              height: "315",
              responsive: true,
              caption:
                "What is ELMS:LN? Why is it fundamentally different from any other educational technology that's ever existed? What is sustainable innovation? Why is this so ...",
              secondaryColor: "#fff9c4",
              textColor: "#000000",
              secondaryColorClass: "yellow lighten-4",
              textColorClass: "black-text",
              ytNocookie: true,
              ytSuggested: false,
              ytControls: true,
              ytTitle: false,
              vimeoTitle: false,
              vimeoByline: false,
              vimeoPortrait: false,
              videoColor: "FF031D",
              resource: "#86bfd28d-8b57-a3b9-b2e5",
              prefix:
                "oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org ",
            },
            content: "",
          },
          {
            tag: "h3",
            properties: {},
            content: "Pretest",
          },
          {
            tag: "self-check",
            properties: {
              style: "width: 50%; float: right;",
              title: "Self-Check",
              image:
                "https://farm1.staticflickr.com/642/21641107852_3602f9c1a8_b.jpg",
              alt: "A few stickers associated with ELMS:LN are shown presented on the back of a laptop.",
              correct: false,
              textColor: "#000000",
              textColorClass: "black-text",
              backgroundColor: "#b2dfdb",
              backgroundColorClass: "teal lighten-4",
              resource: "#08d09967-a7c9-3d02-8935",
              prefix:
                "oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org ",
            },
            content:
              '    <span slot="question">True or False. ELMS:LN is a traditional learning management system.</span>\n\n    <span>FALSE. ELMS: Learning Network is considered to be a Next Generation Digital Learning Environment.\nLearn more about NGDLE in <a href="https://er.educause.edu/blogs/2018/3/ngdle-is-really-just-enigma-misspelled" target="_blank">this blog post on Educause</a>\n.</span>\n\n',
          },
          {
            tag: "p",
            properties: {},
            content:
              "If you think you already know about ELMS:LN, let's find out ahead of time! Take the self-check on the right to find out if ELMS:LN is a traditional Learning Management system or something more",
          },
          {
            tag: "hr",
            properties: {
              style: "width: 75%;",
            },
            content: "",
          },
          {
            tag: "h3",
            properties: {},
            content: "History Review",
          },
          {
            tag: "p",
            properties: {},
            content:
              "Now that we've read about what ELMS:LN is (and is not). Let's take a different kind of self-check to illustrate the flexibility of the HAX authoring platform.",
          },
          {
            tag: "multiple-choice",
            properties: {
              style: "width: 75%; margin: 0px auto; display: block;",
              checkLabel: "Check guess",
              resetLabel: "Clear",
              hideTitle: true,
              question: "Who founded the ELMS:LN Platform?",
              answers: [
                {
                  correct: true,
                  label: "Bryan Ollendyke",
                },
                {
                  correct: false,
                  label: "Mythic Elves",
                },
                {
                  correct: false,
                  label: "Michael Potter",
                },
                {
                  correct: false,
                  label: "Nikki Massaro Kauffman",
                },
                {
                  correct: false,
                  label: "Charles Lavera",
                },
              ],
              correctText: "Great job!",
              incorrectText: "Try again",
              randomize: true,
              typeof: "oer:Assessment",
              resource: "#97ffed48-c928-39ae-1bea",
              prefix:
                "oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org ",
            },
            content: "",
          },
          {
            tag: "multiple-choice",
            properties: {
              style: "width: 75%; margin: 0px auto; display: block;",
              title: "ELMS Development team",
              checkLabel: "Check your guess",
              resetLabel: "Clear answers",
              hideTitle: false,
              question:
                "Who is responsible for ELMS:LN existing? Who improves it and wants it to be the best NGDLE solution to transform education and the world?",
              answers: [
                {
                  correct: true,
                  label: "Nikki Massaro Kauffman",
                },
                {
                  correct: true,
                  label: "Michael Potter",
                },
                {
                  correct: true,
                  label: "Charles Lavera",
                },
                {
                  correct: true,
                  label: "Bryan Ollendyke",
                },
                {
                  correct: true,
                  label:
                    "Anyone, ELMS:LN is an open community developed by multiple organizations!",
                },
              ],
              displayedAnswers: [
                {
                  correct: true,
                  label: "Nikki Massaro Kauffman",
                },
                {
                  correct: true,
                  label: "Michael Potter",
                },
                {
                  correct: true,
                  label: "Charles Lavera",
                },
                {
                  correct: true,
                  label: "Bryan Ollendyke",
                },
                {
                  correct: true,
                  label:
                    "Anyone, ELMS:LN is an open community developed by multiple organizations!",
                },
              ],
              correctText: "Great job! You got our trick question!",
              incorrectText: "Try again, there's some more answers...",
              randomize: true,
              typeof: "oer:Assessment",
              resource: "#59426af4-ecf2-f49d-06a6",
              prefix:
                "oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org ",
            },
            content: "",
          },
        ],
      },
      {
        details: {
          title: "About the course",
          image: "",
          author: "ELMS:LN",
          description: "An example about the course page.",
          status: "available",
          rating: "0",
          tags: ["example"],
        },
        stax: [
          {
            tag: "h2",
            properties: {},
            content: "About this course",
          },
          {
            tag: "p",
            properties: {},
            content:
              'DMD 100: Digital Multimedia Design Foundations introduces design process and thinking skills to support and facilitate creative and reasoned approaches to ambiguous and ill-defined problem spaces. It introduces concepts, skills, language, and principles of practice related to art and design, communications, and information sciences — three discreet disciplines in which students can pursue further study while developing their learning pathways. With the aid of a standard design process, we walk through methods, tools, and mental attitudes necessary to approach ambiguous problems. This course is not meant to be a comprehensive design process catalog, and instead should inspire and build confidence in the act of design. The concept of "design" for DMD students is a frame through which complex issues can be discovered and defined and solutions can be best developed and delivered.',
          },
          {
            tag: "h3",
            properties: {},
            content: "Course Structure",
          },
          {
            tag: "p",
            properties: {},
            content:
              "DMD 100 is comprised of 5 lessons that introduce design topics, approaches, and considerations. Each lesson will span one to 4 weeks depending on the semester. Students will read assigned chapters and course pages, review supplemental media including podcasts and videos, and complete design exercises employing the double-diamond method, culminating in a lesson project and critique. Students are expected to practice the design process throughout the course, and therefore will be assigned several activities a week to provide opportunity for practice and iteration.",
          },
          {
            tag: "h3",
            properties: {},
            content: "Digital course technology",
          },
          {
            tag: "p",
            properties: {},
            content:
              "A course is not software or a website, but rather the delivery of pedagogy for particular subject matter over a set period of time. Without getting too far into learning theory, you can think of pedagogy as the todo list that an instructor gives students in order to meaningfully engage with and learn course content.",
          },
          {
            tag: "p",
            properties: {},
            content:
              'Delivering pedagogy online has its own set of challenges. We\'ll be using  a mix of online software to meet the needs of this online course.     <a href="http://canvas.psu.edu">Canvas</a>\n\n\n\n\n is a Learning Management System (LMS) that stores the assignment calendar, grades, and provides an easy way to send messages to everyone in the course. We host the core course text and image-based content in ELMS Learning Network, which is similar to an LMS, but with some custom in-house built tools. One such tool is the Studio, which allows students to more easily share project progress with each other. You will be guided to perform actions through a combination of the Canvas calendar, emails, and explicit assignment instructions. Contact your course instructor via Penn State E-Mail if you are ever confused. It is your responsibility as a student to know when assignments are due.',
          },
          {
            tag: "h3",
            properties: {},
            content: "Technical and material requirements",
          },
          {
            tag: "h4",
            properties: {},
            content: "Hardware",
          },
          {
            tag: "ol",
            properties: {},
            content:
              "\n    <li><strong>Computer:</strong>\n\n\n This fully online course will require access to a computer that meets the minimum requirements set by World Campus.</li>\n\n\n\n\n\n    <li><strong>Internet:</strong>\n\n\n You will need broadband Internet to view videos and other media content.</li>\n\n\n\n\n\n    <li><strong>Camera or cellphone camera:</strong>\n\n\n You will be asked to document various aspects of your work</li>\n\n\n\n\n\n    <li><strong>Printer/scanner:</strong>\n\n\n A printer will be helpful for printing out paper templates. A scanner is optional, but would be helpful.</li>\n\n\n\n\n\n",
          },
          {
            tag: "h4",
            properties: {},
            content: "Software",
          },
          {
            tag: "ol",
            properties: {},
            content:
              "\n    <li>Web browser: You will need to have the latest version of either Google Chrome, Safari, Firefox, or Microsoft Edge.</li>\n\n\n\n\n\n    <li>Accounts: In addition to general University account access, you will be required to create an account with InvisionApp.com</li>\n\n\n\n\n\n    <li>Software installs: You will need to download and install an open-source desktop application called Twine from Twinery.org. It is possible to use a web version of this software if you cannot or wish not to install it on your computer.</li>\n\n\n\n\n\n",
          },
          {
            tag: "h4",
            properties: {},
            content: "Materials",
          },
          {
            tag: "ol",
            properties: {},
            content:
              '\n    <li>Journal\n\n<ul>\n<li>Any journal is fine. I recommend the Moleskine Cahier Journal, Large, Squared, Kraft Brown, Soft Cover (5 x 8.25) <a href="https://www.amazon.com/Moleskine-Cahier-Journal-Large-Squared/dp/8883704991">Amazon purchase link</a>\n\n\n</li>\n\n\n\n</ul>\n\n\n</li>\n\n\n\n\n\n    <li>Pens, pencils, markers\n\n<ul>\n<li>Any that you already own are fine, you do not need to purchase special ones for this course. However, the following recommendations are professional grade if you are so inclined to invest in quality drawing tools.\n\n<ul>\n<li>Pencil: Palomino Blackwing 602</li>\n\n\n\n<li>Pen: Copic Multiliner Marker 0.5 - Black</li>\n\n\n\n<li>Marker: Copic N2</li>\n\n\n\n</ul>\n\n\n</li>\n\n\n\n</ul>\n\n\n</li>\n\n\n\n\n\n    <li>Scissors</li>\n\n\n\n\n\n    <li>Post-it Notes</li>\n\n\n\n\n\n    <li>Poster board (or large open wall space) for the post-its</li>\n\n\n\n\n\n',
          },
          {
            tag: "h4",
            properties: {},
            content: "Book",
          },
          {
            tag: "p",
            properties: {},
            content:
              "We will be reading     <em>Design and Truth</em>\n\n\n\n\n by Robert Grudin. You will need to purchase a copy of this book.",
          },
          {
            tag: "h4",
            properties: {},
            content: "Misc",
          },
          {
            tag: "p",
            properties: {},
            content:
              'FYI, students get     <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201133690">free Amazon Prime</a>\n\n\n\n\n shipping.',
          },
          {
            tag: "license-element",
            properties: {
              style: "width: 100%;",
              title: "DMD 100",
              creator: "Michael Collins",
              source: "https://github.com/dmd-program/",
              licenseName: "Creative Commons: Attribution",
              licenseLink: "https://creativecommons.org/licenses/by/4.0/",
              license: "by",
              moreLabel: "by checking out the OER schema project",
              moreLink: "http://oerschema.org/",
              hasMore: true,
              resource: "#ee77aae6-561a-fbf8-d738",
              prefix:
                "oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org ",
            },
            content: "",
          },
        ],
      },
      {
        details: {
          title: "Example Assignment",
          image: "",
          author: "ELMS:LN",
          description: "An example assignment with OER Schema.",
          status: "available",
          rating: "0",
          tags: ["example"],
        },
        stax: [
          {
            tag: "h2",
            properties: {},
            content: "\n\n",
          },
          {
            tag: "h3",
            properties: {
              class: " ",
            },
            content: "Description",
          },
          {
            tag: "p",
            properties: {},
            content: "\n\n",
          },
          {
            tag: "h3",
            properties: {},
            content: "Learning Objectives",
          },
          {
            tag: "ol",
            properties: {},
            content:
              '  <li><oer-schema resource="#76d6ed4d-57f1-5c2f-fdf9" prefix="oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org " text="Gain understanding of critical writing discourse." oer-property="name" typeof="oer:LearningObjective" related-resource="#550ea966-578a-cf6e-388c">\n    \n    <link property="oer:forComponent" class="style-scope oer-schema" content="#550ea966-578a-cf6e-388c">\n    <span property="oer:name" class="style-scope oer-schema">\n      \n      Gain understanding of critical writing discourse.\n    </span>\n  </oer-schema>\n\n</li>\n\n\n  <li><oer-schema resource="#d038ac12-7a86-d867-55eb" prefix="oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org " text="Apply relevant course topics and issues in a writing context." oer-property="name" typeof="oer:LearningObjective" related-resource="#550ea966-578a-cf6e-388c">\n    \n    <link property="oer:forComponent" class="style-scope oer-schema" content="#550ea966-578a-cf6e-388c">\n    <span property="oer:name" class="style-scope oer-schema">\n      \n      Apply relevant course topics and issues in a writing context.\n    </span>\n  </oer-schema>\n\n</li>\n\n\n',
          },
          {
            tag: "h3",
            properties: {},
            content: "Learning Resources",
          },
          {
            tag: "p",
            properties: {},
            content:
              '  <i><oer-schema resource="#2e347347-c973-000c-004f" prefix="oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org " text="Writing Essays for Dummies. Mary Page; Carrie Winstanley. Wiley. January, 2012" oer-property="name" typeof="oer:SupportingMaterial">\n    \n    <link property="oer:forComponent" class="style-scope oer-schema">\n    <span property="oer:name" class="style-scope oer-schema">\n      \n      Writing Essays for Dummies. Mary Page; Carrie Winstanley. Wiley. January, 2012\n    </span>\n  </oer-schema>\n\n</i>\n\n\n:   <a href="http://google.com" title="Download link">Download&nbsp;Link</a>\n\n\n',
          },
          {
            tag: "h3",
            properties: {
              class: " ",
            },
            content: "Instructions",
          },
          {
            tag: "ol",
            properties: {},
            content:
              '  <li><oer-schema resource="#56d8be38-4088-995a-4d2c" prefix="oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org " text="Read the course texts and choose two critical issues to discuss." oer-property="name" typeof="oer:Task" related-resource="#550ea966-578a-cf6e-388c">\n    \n    <link property="oer:forComponent" class="style-scope oer-schema" content="#550ea966-578a-cf6e-388c">\n    <span property="oer:name" class="style-scope oer-schema">\n      \n      Read the course texts and choose two critical issues to discuss.\n    </span>\n  </oer-schema>\n\n</li>\n\n\n  <li><oer-schema resource="#7587e535-b185-d8bf-939d" prefix="oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org " text="&nbsp;Write a 400 word paper discussing these critical issues." oer-property="name" typeof="oer:Task" related-resource="#550ea966-578a-cf6e-388c">\n    \n    <link property="oer:forComponent" class="style-scope oer-schema" content="#550ea966-578a-cf6e-388c">\n    <span property="oer:name" class="style-scope oer-schema">\n      \n      &nbsp;Write a 400 word paper discussing these critical issues.\n    </span>\n  </oer-schema>\n\n</li>\n\n\n  <li><oer-schema resource="#3564f93f-b211-3d8b-6aeb" prefix="oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org " text="Proof read your writing." oer-property="name" typeof="oer:Task" related-resource="#550ea966-578a-cf6e-388c">\n    \n    <link property="oer:forComponent" class="style-scope oer-schema" content="#550ea966-578a-cf6e-388c">\n    <span property="oer:name" class="style-scope oer-schema">\n      \n      Proof read your writing.\n    </span>\n  </oer-schema>\n\n</li>\n\n\n  <li><oer-schema resource="#0dbd4872-90ff-681d-c572" prefix="oer:http://oerschema.org/ schema:http://schema.org/ dc:http://purl.org/dc/terms/ foaf:http://xmlns.com/foaf/0.1/ cc:http://creativecommons.org/ns# bib:http://bib.schema.org " text="Submit the digital file to the dropbox." oer-property="name" typeof="oer:Task" related-resource="#550ea966-578a-cf6e-388c">\n    \n    <link property="oer:forComponent" class="style-scope oer-schema" content="#550ea966-578a-cf6e-388c">\n    <span property="oer:name" class="style-scope oer-schema">\n      \n      Submit the digital file to the dropbox.\n    </span>\n  </oer-schema>\n\n</li>\n\n\n',
          },
        ],
      },
    ],
    blox: [
      {
        details: {
          title: "50% columns",
          author: "ELMS:LN",
          icon: "hax:6/6",
          status: "available",
          layout: "1-1",
        },
        blox: [
          {
            tag: "h2",
            properties: {
              slot: "col-1",
            },
            content: "Heading",
          },
          {
            tag: "p",
            properties: {
              slot: "col-1",
            },
            content: "A paragraph of text would go here to describe the work.",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-2",
              type: "image",
            },
            content: "",
          },
        ],
      },
      {
        details: {
          title: "66 / 33 columns",
          author: "ELMS:LN",
          icon: "hax:8/4",
          status: "available",
          layout: "8/4",
        },
        blox: [
          {
            tag: "place-holder",
            properties: {
              slot: "col-1",
              type: "text",
            },
            content: "",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-2",
              type: "image",
            },
            content: "",
          },
        ],
      },
      {
        details: {
          title: "33% columns",
          author: "ELMS:LN",
          icon: "hax:4/4/4",
          status: "available",
          layout: "4/4/4",
        },
        blox: [
          {
            tag: "place-holder",
            properties: {
              slot: "col-1",
              type: "image",
            },
            content: "",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-2",
              type: "image",
            },
            content: "",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-3",
              type: "image",
            },
            content: "",
          },
        ],
      },
      {
        details: {
          title: "33 / 66 columns",
          author: "ELMS:LN",
          icon: "hax:4/8",
          status: "available",
          layout: "4/8",
        },
        blox: [
          {
            tag: "place-holder",
            properties: {
              slot: "col-2",
              type: "text",
            },
            content: "",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-1",
              type: "image",
            },
            content: "",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-1",
              type: "image",
            },
            content: "",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-1",
              type: "image",
            },
            content: "",
          },
        ],
      },
      {
        details: {
          title: "25% columns",
          author: "ELMS:LN",
          icon: "hax:3/3/3/3",
          status: "available",
          layout: "3/3/3/3",
        },
        blox: [
          {
            tag: "place-holder",
            properties: {
              slot: "col-1",
              type: "image",
            },
            content: "",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-2",
              type: "image",
            },
            content: "",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-3",
              type: "image",
            },
            content: "",
          },
          {
            tag: "place-holder",
            properties: {
              slot: "col-4",
              type: "image",
            },
            content: "",
          },
        ],
      },
    ],
    autoloader: [
      "lrn-aside",
      "grid-plate",
      "tab-list",
      "magazine-cover",
      "video-player",
      "image-compare-slider",
      "simple-concept-network",
      "license-element",
      "self-check",
      "multiple-choice",
      "oer-schema",
      "hero-banner",
      "task-list",
      "lrn-table",
      "media-image",
      "lrndesign-blockquote",
      "meme-maker",
      "a11y-gif-player",
      "paper-audio-player",
      "wikipedia-query",
      "lrn-vocab",
      "lrn-math",
      "person-testimonial",
      "citation-element",
      "code-editor",
      "place-holder",
      "stop-note",
      "q-r",
      "wave-player",
    ],
  };
});
