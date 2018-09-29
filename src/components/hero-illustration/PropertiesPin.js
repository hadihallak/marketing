import React from 'react';
import {
  Flexbox,
  Box,
  Heading,
  GhostButton,
  Input,
  AspectRatio,
  Text,
  Tooltip,
  ToggleButton
} from 'radix-ds';

function PropertiesFill() {
  return (
    <Box
      padding_2
      bt
      bcgray300
    >
      <Heading
        size1
        color_gray600
        mb_2
      >
        Pin
      </Heading>
      <Flexbox mt_2>
      <Tooltip data-tooltip="Static" data-position="bottom">
        <ToggleButton group="position" size2 left defaultChecked>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 7.5V5.5H7.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 19.5H5.5V17.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.5 17.5V19.5H17.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 5.5H14.5" strokeLinecap="round"/>
            <path d="M10.5 19.5H14.5" strokeLinecap="round"/>
            <path d="M5.5 14.5V10.5" strokeLinecap="round"/>
            <path d="M19.5 14.5V10.5" strokeLinecap="round"/>
            <path d="M17.5 5.5H19.5V7.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ToggleButton>
      </Tooltip>
      <Tooltip data-tooltip="Relative" data-position="bottom">
        <ToggleButton group="position" size2 middle>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M8.5 13.5H5C4.72386 13.5 4.5 13.2761 4.5 13V5C4.5 4.72386 4.72386 4.5 5 4.5H13C13.2761 4.5 13.5 4.72386 13.5 5V8.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="11.5" y="11.5" width="9" height="9" rx="0.5" fill="#B2DBFF"/>
          </svg>
        </ToggleButton>
      </Tooltip>
      <Tooltip data-tooltip="Absolute" data-position="bottom">
        <ToggleButton group="position" size2 middle>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M8 14L5.5 15.5L12.5 19.5L19.5 15.5L17 14" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.5 13.5L19.5 9.5L12.5 5.5L5.5 9.5L12.5 13.5Z" fill="#B3DCFF" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ToggleButton>
      </Tooltip>
      <Tooltip data-tooltip="Fixed" data-position="bottom">
        <ToggleButton group="position" size2 middle>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M10.5 9V5C10.5 4.72386 10.7239 4.5 11 4.5H14C14.2761 4.5 14.5 4.72386 14.5 5V9C16.5 9.8 17.3333 12.3333 17.5 13.5H7.5C7.5 11.1 9.5 9.5 10.5 9Z" fill="#B2DCFF" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.5 17.5L12.5 20.5L13.5 17.5V13.5H11.5V17.5Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ToggleButton>
      </Tooltip>
      <Tooltip data-tooltip="Sticky" data-position="bottom">
        <ToggleButton group="position" size2 right>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M19.5 16.5L12.5 20.5L5.5 16.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.5 12.5L19.5 8.5L12.5 4.5L5.5 8.5L12.5 12.5Z" fill="#B3DCFF" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.5 12.5L8 14" strokeLinecap="round"/>
          <path d="M10.2572 14.5713C10.0205 14.4292 9.71333 14.506 9.57125 14.7428C9.42918 14.9795 9.50596 15.2867 9.74275 15.4287L10.2572 14.5713ZM12.5 16.5L12.2428 16.9287C12.4011 17.0238 12.5989 17.0238 12.7572 16.9287L12.5 16.5ZM15.2572 15.4287C15.494 15.2867 15.5708 14.9795 15.4287 14.7428C15.2867 14.506 14.9795 14.4292 14.7428 14.5713L15.2572 15.4287ZM9.74275 15.4287L12.2428 16.9287L12.7572 16.0713L10.2572 14.5713L9.74275 15.4287ZM12.7572 16.9287L15.2572 15.4287L14.7428 14.5713L12.2428 16.0713L12.7572 16.9287Z"/>
          <path d="M19.5 12.5L17 14" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ToggleButton>
      </Tooltip>
    </Flexbox>

    <Flexbox mt_2 ai_center>
      <Box fg_1 fb_0 pr_2>
        <Box position_relative>
          <Input defaultValue="0" />
          <Flexbox height_100 ai_center elative style={{position: 'absolute',right: '0',top: '0'}}>
            <Text size1 gray600 style={{fontSize: '11px',fontFamily: 'menlo'}}>px</Text>
          </Flexbox>
        </Box>
      </Box>
      <Box fg_1 fb_0 pr_2>
        <Box position_relative>
          <Input defaultValue="0" />
          <Flexbox height_100 ai_center elative style={{position: 'absolute',right: '0',top: '0'}}>
            <Text size1 gray600 style={{fontSize: '11px',fontFamily: 'menlo'}}>px</Text>
          </Flexbox>
        </Box>
        <Flexbox p3>
          <AspectRatio style={{width: '100%'}}>
            <Flexbox fd_column height_100 jc_spacebetween style={{border: '1px dashed lightgray'}}>
              <Flexbox jc_spacebetween style={{marginTop: '-6px'}}>
                <Box fs_0 style={{width: '11px',height: '11px',border: '1px solid hsl(208,100%,50%)',backgroundColor: 'white',marginLeft: '-6px', cursor: 'pointer'}}></Box>
                <Box fs_0 style={{width: '11px',height: '11px',border: '1px solid hsl(208,100%,50%)',backgroundColor: 'white',marginRight: '-6px', cursor: 'pointer'}}></Box>
              </Flexbox>
              <Flexbox jc_spacebetween style={{marginBottom: '-6px'}}>
                <Box fs_0 style={{width: '11px',height: '11px',border: '1px solid hsl(208,100%,50%)',backgroundColor: 'white',marginLeft: '-6px', cursor: 'pointer'}}></Box>
                <Box fs_0 style={{width: '11px',height: '11px',border: '1px solid hsl(208,100%,50%)',backgroundColor: 'white',marginRight: '-6px', cursor: 'pointer'}}></Box>
              </Flexbox>
            </Flexbox>
          </AspectRatio>
        </Flexbox>
        <Box position_relative>
          <Input defaultValue="0" />
          <Flexbox height_100 ai_center elative style={{position: 'absolute',right: '0',top: '0'}}>
            <Text size1 gray600 style={{fontSize: '11px',fontFamily: 'menlo'}}>px</Text>
          </Flexbox>
        </Box>
      </Box>
      <Box fg_1 fb_0>
        <Box position_relative>
          <Input defaultValue="0" />
          <Flexbox height_100 ai_center elative style={{position: 'absolute',right: '0',top: '0'}}>
            <Text size1 gray600 style={{fontSize: '11px',fontFamily: 'menlo'}}>px</Text>
          </Flexbox>
        </Box>
      </Box>
    </Flexbox>


    {/*
    <Flexbox mt_2 ai_center>
      <Box fg_1 fb_0 pr1>
        <Flexbox>
          <Box mr_1>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="hsl(208,16%,76%)">
              <path d="M15.5 11.5L12.5 7.5L9.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 7.5V16.5" strokeLinecap="round"/>
              <path d="M4.5 4.5H20.5" strokeLinecap="round"/>
            </svg>
          </Box>
          <Box position_relative>
            <Input defaultValue="0" />
            <Flexbox height_100 ai_center elative style={{position: 'absolute',right: '0',top: '0'}}>
              <Text size1 gray600 style={{fontSize: '11px',fontFamily: 'menlo'}}>px</Text>
            </Flexbox>
          </Box>
        </Flexbox>
        <Flexbox mt_2>
          <Box mr_1>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="hsl(208,16%,76%)">
              <path d="M13.5 9.5L17.5 12.5L13.5 15.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 12.5H17.5" strokeLinecap="round"/>
              <path d="M20.5 4.5V20.5" strokeLinecap="round"/>
            </svg>
          </Box>
          <Box position_relative>
            <Input defaultValue="0" />
            <Flexbox height_100 ai_center elative style={{position: 'absolute',right: '0',top: '0'}}>
              <Text size1 gray600 style={{fontSize: '11px',fontFamily: 'menlo'}}>px</Text>
            </Flexbox>
          </Box>
        </Flexbox>
        <Flexbox mt_2>
          <Box mr_1>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="hsl(208,16%,76%)">
              <path d="M15.5 13.5L12.5 17.5L9.5 13.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 7.5V17.5" strokeLinecap="round"/>
              <path d="M4.5 20.5H20.5" strokeLinecap="round"/>
            </svg>
          </Box>
          <Box position_relative>
            <Input defaultValue="0" />
            <Flexbox height_100 ai_center elative style={{position: 'absolute',right: '0',top: '0'}}>
              <Text size1 gray600 style={{fontSize: '11px',fontFamily: 'menlo'}}>px</Text>
            </Flexbox>
          </Box>
        </Flexbox>
        <Flexbox mt_2>
          <Box mr_1>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="hsl(208,16%,76%)">
              <path d="M11.5 9.5L7.5 12.5L11.5 15.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 12.5H17.5" strokeLinecap="round"/>
              <path d="M4.5 4.5V20.5" strokeLinecap="round"/>
            </svg>
          </Box>
          <Box position_relative>
            <Input defaultValue="0" />
            <Flexbox height_100 ai_center elative style={{position: 'absolute',right: '0',top: '0'}}>
              <Text size1 gray600 style={{fontSize: '11px',fontFamily: 'menlo'}}>px</Text>
            </Flexbox>
          </Box>
        </Flexbox>
      </Box>
    </Flexbox>
    */}

    <Flexbox mt_2 ai_center style={{marginRight: '-5px'}}>
      <Box pr_2>
        <Text size1 nowrap gray600>Stacking order</Text>
      </Box>
      <Flexbox
        ai_center
        fg_1
        fb_0
      >
        <GhostButton size1 style={{color: 'hsl(208,100%,50%)'}}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
          >
            <path d="M2.5 7.5H12.5" strokeLinecap="round"/>
          </svg>
        </GhostButton>
        <Box>
          <Input defaultValue="0" style={{textAlign: 'center'}} />
        </Box>
        <GhostButton size1 style={{color: 'hsl(208,100%,50%)'}}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
          >
            <path d="M2.5 7.5H12.5" strokeLinecap="round"/>
            <path d="M7.5 12.5V2.5" strokeLinecap="round"/>
          </svg>
        </GhostButton>
      </Flexbox>
    </Flexbox>
    </Box>
  );
}

export default PropertiesFill;
