const assert = require('chai').assert;;
const dm5 = require('../dist');

describe('#fetchComicsInfo()', function() {
  it('should should fetch comicID by chpaterID', function(done) {
    dm5.fetchComicsInfo('manhua-dongjingshishi').then(info => {
      for (var key of ['chapters', 'comicName', 'coverImage', 'latestChapter']) {
        assert.property(info, key);
      }

      assert.isArray(info.chapters)
      assert.isString(info.comicName)
      assert.isString(info.coverImage)
      assert.isString(info.latestChapter)

      if (info.chapters.length > 0) {
        var chapter = info.chapters[0];

        assert.property(chapter, 'title')
        assert.property(chapter, 'link')
        assert.property(chapter, 'cid')
      }

      done();
    });
  });
});

describe('#search()', function() {
  it('should return result object', function(done) {
    dm5.search('東京').then(result => {
      assert.property(result, 'comics')
      assert.isArray(result.comics)

      if (result.comics.length > 0) {
        const comic = result.comics[0];

        assert.isString(comic.coverImage)
        assert.isString(comic.comicName)
        assert.isString(comic.comicID)
        assert.isString(comic.latestChapter)
      }

      assert.property(result, 'currentPage')
      assert.isNumber(result.currentPage)

      assert.property(result, 'totalPage')
      assert.isNumber(result.totalPage)

      done();
    })
  });
});

describe('Test #fetchComicIDbyChapterID', function () {
  it('pending')
})

describe('Test #quickSearch', function () {
  it('pending')
})

describe('Test #getChapterImages', function () {
  it('pending')
})

