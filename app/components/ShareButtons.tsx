"use client";

import {
  EmailIcon,
  EmailShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

export default function ShareButtons() {
  let url = "";
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  return (
    <div className="flex flex-row-reverse">
      <div className="flex gap-2">
        <EmailShareButton url={url}>
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <TwitterShareButton url={url}>
          <XIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
}
