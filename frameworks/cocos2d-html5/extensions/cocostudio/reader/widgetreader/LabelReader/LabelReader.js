/****************************************************************************
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

ccs.LabelReader = {

    getInstance: function(){
        return ccs.LabelReader;
    },

    setPropsFromJsonDictionary: function(widget, options){

        ccs.WidgetReader.setPropsFromJsonDictionary.call(this, widget, options);
    
    
        var jsonPath = ccs.uiReader.getFilePath();
    
        var label = widget;
        var touchScaleChangeAble = options["touchScaleEnable"];
        label.setTouchScaleChangeEnabled(touchScaleChangeAble);
        var text = options["text"];
        label.setString(text);
        var fs = options["fontSize"];
        if (fs)
        {
            label.setFontSize(options["fontSize"]);
        }
        var fn = options["fontName"];
        if (fn)
        {
            label.setFontName(options["fontName"]);
        }
        var aw = options["areaWidth"];
        var ah = options["areaHeight"];
        if (aw && ah)
        {
            var size = cc.size(options["areaWidth"], options["areaHeight"]);
            label.setTextAreaSize(size);
        }
        var ha = options["hAlignment"];
        if (ha)
        {
            label.setTextHorizontalAlignment(options["hAlignment"]);
        }
        var va = options["vAlignment"];
        if (va)
        {
            label.setTextVerticalAlignment(options["vAlignment"]);
        }
    
    
        ccs.WidgetReader.setColorPropsFromJsonDictionary.call(this, widget, options);
    }
};