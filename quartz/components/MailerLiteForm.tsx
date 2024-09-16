import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function MailerLiteForm({ displayClass }: QuartzComponentProps) {
  return (
    <div id="signup-form">
      <div
        id="mlb2-14168194"
        class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-14168194"
      >
        <div class="ml-form-align-center ">
          <div class="ml-form-embedWrapper embedForm">
            <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div class="ml-form-embedContent" style=" ">
                {/* <h4>Going Love First</h4> */}
              </div>
              <form
                class="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/916554/forms/119082577332012669/subscribe"
                data-code=""
                method="post"
                target="_blank"
              >
                <div class="ml-form-formContent">
                  <div class="ml-form-fieldRow ml-last-item">
                    <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input
                        aria-label="email"
                        aria-required="true"
                        type="email"
                        class="form-control"
                        data-inputmask=""
                        name="fields[email]"
                        placeholder="Email"
                        autocomplete="email"
                      />
                    </div>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />

                <div class="ml-form-embedSubmit">
                  <button type="submit" class="primary">
                    Subscribe
                  </button>
                  <button disabled={true} style={{ display: "none" }} type="button" class="loading">
                    <div class="ml-form-embedSubmitLoad"></div>
                    <span class="sr-only">Loading...</span>
                  </button>
                </div>

                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>
            <div class="ml-form-successBody row-success" style="display: none">
              <div class="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <script>
function ml_webform_success_14168194() {
var $ = ml_jQuery || jQuery;
$('.ml-subscribe-form-14168194 .row-success').show();
$('.ml-subscribe-form-14168194 .row-form').hide();
}
</script> */}

      <script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127"
        type="text/javascript"
      ></script>
      <script>
        fetch("https://assets.mailerlite.com/jsonp/916554/forms/119082577332012669/takel")
      </script>
    </div>
  )
}

export default (() => MailerLiteForm) satisfies QuartzComponentConstructor
