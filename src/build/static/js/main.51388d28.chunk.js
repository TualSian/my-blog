(this["webpackJsonpmy-blog"] = this["webpackJsonpmy-blog"] || []).push([
  [0],
  {
    24: function (e, t, n) {
      e.exports = n(38);
    },
    30: function (e, t, n) {},
    37: function (e, t, n) {},
    38: function (e, t, n) {
      "use strict";
      n.r(t);
      n(25);
      var a = n(0),
        u = n.n(a),
        i = n(17),
        l = n.n(i),
        s = (n(30), n(18)),
        r = n(19),
        c = n(23),
        o = n(22),
        m = n(7),
        d = n(1),
        p = function () {
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement("h1", null, "Hello, welcome to my blog!"),
            u.a.createElement(
              "p",
              null,
              "Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod."
            ),
            u.a.createElement(
              "p",
              null,
              "Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"
            ),
            u.a.createElement(
              "p",
              null,
              "Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"
            )
          );
        },
        v = function () {
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement("h1", null, "About Me"),
            u.a.createElement(
              "p",
              null,
              "Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod."
            ),
            u.a.createElement(
              "p",
              null,
              "Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"
            ),
            u.a.createElement(
              "p",
              null,
              "Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"
            )
          );
        },
        g = function (e) {
          var t = e.articles;
          return u.a.createElement(
            u.a.Fragment,
            null,
            t.map(function (e, t) {
              return u.a.createElement(
                m.b,
                {
                  className: "article-list-item",
                  key: t,
                  to: "/article/".concat(e.name),
                },
                u.a.createElement("h3", null, e.title),
                u.a.createElement(
                  "p",
                  null,
                  e.content[0].substring(0, 150),
                  "..."
                )
              );
            })
          );
        },
        f = [
          {
            name: "learn-react",
            title: "The Fastest Way to Learn React",
            content: [
              "Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.",
              "Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.",
              "Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.",
            ],
          },
          {
            name: "learn-node",
            title: "How to Build a Node Server in 10 Minutes",
            content: [
              "In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.",
              "Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.",
              "Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.",
            ],
          },
          {
            name: "my-thoughts-on-resumes",
            title: "My Thoughts on Resumes",
            content: [
              "Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.",
              "Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.",
              "Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.",
            ],
          },
        ],
        b = function () {
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement("h1", null, "Articles"),
            u.a.createElement(g, { articles: f })
          );
        },
        h = n(6),
        E = n.n(h),
        q = n(10),
        N = n(12),
        y = function (e) {
          var t = e.comments;
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement("h3", null, "Comments:"),
            t.map(function (e, t) {
              return u.a.createElement(
                "div",
                { className: "comment", key: t },
                u.a.createElement("h4", null, e.username),
                u.a.createElement("p", null, e.text)
              );
            })
          );
        },
        A = function (e) {
          var t = e.articleName,
            n = e.upvotes,
            a = e.setArticleInfo,
            i = (function () {
              var e = Object(q.a)(
                E.a.mark(function e() {
                  var n, u;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/api/articles/".concat(t, "/upvote"), {
                              method: "post",
                            })
                          );
                        case 2:
                          return (n = e.sent), (e.next = 5), n.json();
                        case 5:
                          (u = e.sent), a(u);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return u.a.createElement(
            "div",
            { id: "upvotes-section" },
            u.a.createElement(
              "button",
              {
                onClick: function () {
                  return i();
                },
              },
              "Add Upvote"
            ),
            u.a.createElement(
              "p",
              null,
              "This post has been upvoted ",
              n,
              " times"
            )
          );
        },
        w = function (e) {
          var t = e.articleName,
            n = e.setArticleInfo,
            i = Object(a.useState)(""),
            l = Object(N.a)(i, 2),
            s = l[0],
            r = l[1],
            c = Object(a.useState)(""),
            o = Object(N.a)(c, 2),
            m = o[0],
            d = o[1],
            p = (function () {
              var e = Object(q.a)(
                E.a.mark(function e() {
                  var a, u;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/api/articles/".concat(t, "/add-comment"), {
                              method: "post",
                              body: JSON.stringify({ username: s, text: m }),
                              headers: { "Content-Type": "application/json" },
                            })
                          );
                        case 2:
                          return (a = e.sent), (e.next = 5), a.json();
                        case 5:
                          (u = e.sent), n(u), d(""), r("");
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return u.a.createElement(
            "div",
            { id: "add-comment-form" },
            u.a.createElement("h3", null, "Add a Comment"),
            u.a.createElement(
              "label",
              null,
              "Name:",
              u.a.createElement("input", {
                type: "text",
                value: s,
                onChange: function (e) {
                  return r(e.target.value);
                },
              })
            ),
            u.a.createElement(
              "label",
              null,
              "Comment:",
              u.a.createElement("textarea", {
                rows: "4",
                cols: "50",
                value: m,
                onChange: function (e) {
                  return d(e.target.value);
                },
              })
            ),
            u.a.createElement(
              "button",
              {
                onClick: function () {
                  return p();
                },
              },
              "Add Comment"
            )
          );
        },
        M = function () {
          return u.a.createElement("h1", null, "404: Page Not Found");
        },
        x = function (e) {
          var t = e.match.params.name,
            n = f.find(function (e) {
              return e.name === t;
            }),
            i = Object(a.useState)({ upvotes: 0, comments: [] }),
            l = Object(N.a)(i, 2),
            s = l[0],
            r = l[1];
          if (
            (Object(a.useEffect)(
              function () {
                (function () {
                  var e = Object(q.a)(
                    E.a.mark(function e() {
                      var n, a;
                      return E.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), fetch("/api/articles/".concat(t))
                              );
                            case 2:
                              return (n = e.sent), (e.next = 5), n.json();
                            case 5:
                              (a = e.sent), r(a);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              },
              [t]
            ),
            !n)
          )
            return u.a.createElement(M, null);
          var c = f.filter(function (e) {
            return e.name !== t;
          });
          return u.a.createElement(
            u.a.Fragment,
            null,
            u.a.createElement("h1", null, n.title),
            u.a.createElement(A, {
              articleName: t,
              upvotes: s.upvotes,
              setArticleInfo: r,
            }),
            n.content.map(function (e, t) {
              return u.a.createElement("p", { key: t }, e);
            }),
            u.a.createElement(y, { comments: s.comments }),
            u.a.createElement(w, { articleName: t, setArticleInfo: r }),
            u.a.createElement("h3", null, "Other Articles:"),
            u.a.createElement(g, { articles: c })
          );
        },
        S = function () {
          return u.a.createElement(
            "nav",
            null,
            u.a.createElement(
              "ul",
              null,
              u.a.createElement(
                "li",
                null,
                u.a.createElement(m.b, { to: "/" }, "Home")
              ),
              u.a.createElement(
                "li",
                null,
                u.a.createElement(m.b, { to: "/about" }, "About")
              ),
              u.a.createElement(
                "li",
                null,
                u.a.createElement(m.b, { to: "/articles-list" }, "Articles")
              )
            )
          );
        },
        j = (n(37), n(21)),
        k = (function (e) {
          Object(c.a)(n, e);
          var t = Object(o.a)(n);
          function n() {
            return Object(s.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(r.a)(n, [
              {
                key: "render",
                value: function () {
                  return u.a.createElement(
                    m.a,
                    null,
                    u.a.createElement(
                      "div",
                      { className: "App" },
                      u.a.createElement(S, null),
                      u.a.createElement(
                        "div",
                        { id: "page-body" },
                        u.a.createElement(
                          j.Switch,
                          null,
                          u.a.createElement(d.Route, {
                            path: "/",
                            component: p,
                            exact: !0,
                          }),
                          u.a.createElement(d.Route, {
                            path: "/about",
                            component: v,
                            exact: !0,
                          }),
                          u.a.createElement(d.Route, {
                            path: "/articles-list",
                            component: b,
                            exact: !0,
                          }),
                          u.a.createElement(d.Route, {
                            path: "/article/:name",
                            component: x,
                            exact: !0,
                          }),
                          u.a.createElement(d.Route, { component: M })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(a.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(
        u.a.createElement(u.a.StrictMode, null, u.a.createElement(k, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[24, 1, 2]],
]);
//# sourceMappingURL=main.51388d28.chunk.js.map
