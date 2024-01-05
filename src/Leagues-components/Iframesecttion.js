import Cookies from 'js-cookie';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Iframesecttion() {
    const lang = Cookies.get('language')
  return (
    <div>
        <section className='ifr-section'>
        <Container>
            {
                lang ==="en"? <Row>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='ifm'>
                    <iframe name="f2eac2475b66d3" width="600px" height="500px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v12.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df26492c2dd29974%26domain%3Dwww.letstalkftball.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.letstalkftball.com%252Fff348c35a769dc%26relation%3Dparent.parent&amp;container_width=540&amp;height=500&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FLetstalkftball-111774200955979&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=true&amp;small_header=true&amp;width=600"  class=""></iframe>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='ifm'>
                    <iframe id="twitter-widget-0"  frameborder="0" width="600px" height="500px" allowtransparency="true" allowfullscreen="true" class=""  title="Twitter Timeline" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/LetstalkftballA?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;origin=https%3A%2F%2Fwww.letstalkftball.com%2Fen%2Fpremier-league%2F%3Fseason%3D17&amp;sessionId=afa95c5deef4f4aab2806c89000637e36de4f640&amp;showHeader=true&amp;showReplies=false&amp;siteScreenName=https%3A%2F%2Fwww.letstalkftball.com%2F&amp;transparent=false&amp;widgetsVersion=01917f4d1d4cb%3A1696883169554"></iframe>
                    </div>
                </div>
            </Row>
            :
             <Row>
             <div className='col-lg-6 col-md-12 col-sm-12'>
                 <div className='ifm'>
                 <iframe id="twitter-widget-0" scrolling="no" frameborder="0" width="600px" height="500px" allowtransparency="true" allowfullscreen="true" class=""  title="Twitter Timeline" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/LetstalkftballA?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=ar&amp;origin=https%3A%2F%2Fwww.letstalkftball.com%2Fpremier-league%2F&amp;sessionId=70478390db9f4b6355720d302d826813fee890ca&amp;showHeader=true&amp;showReplies=false&amp;siteScreenName=https%3A%2F%2Fwww.letstalkftball.com%2F&amp;transparent=false&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716"></iframe>
                
                 </div>
             </div>
             <div className='col-lg-6 col-md-12 col-sm-12'>
                 <div className='ifm'>
                 
                 <iframe name="f2eac2475b66d3" width="600px" height="500px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v12.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df26492c2dd29974%26domain%3Dwww.letstalkftball.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.letstalkftball.com%252Fff348c35a769dc%26relation%3Dparent.parent&amp;container_width=540&amp;height=500&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FLetstalkftball-111774200955979&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=true&amp;small_header=true&amp;width=600"  class=""></iframe>
                 </div>
             </div>
         </Row>

            }
           
            
        </Container>
        </section>
    </div>
  )
}
