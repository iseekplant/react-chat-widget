import { ElementType } from 'react';
import { LinkParams, FullscreenPreviewState } from '../types';
import { UnknownAction } from 'redux';

export const TOGGLE_CHAT = 'BEHAVIOR/TOGGLE_CHAT';
export const TOGGLE_INPUT_DISABLED = 'BEHAVIOR/TOGGLE_INPUT_DISABLED';
export const TOGGLE_MESSAGE_LOADER = 'BEHAVIOR/TOGGLE_MSG_LOADER';
export const SET_BADGE_COUNT = 'BEHAVIOR/SET_BADGE_COUNT';
export const ADD_NEW_USER_MESSAGE = 'MESSAGES/ADD_NEW_USER_MESSAGE';
export const ADD_NEW_RESPONSE_MESSAGE = 'MESSAGES/ADD_NEW_RESPONSE_MESSAGE';
export const ADD_NEW_LINK_SNIPPET = 'MESSAGES/ADD_NEW_LINK_SNIPPET';
export const ADD_COMPONENT_MESSAGE = 'MESSAGES/ADD_COMPONENT_MESSAGE';
export const DROP_MESSAGES = 'MESSAGES/DROP_MESSAGES';
export const HIDE_AVATAR = 'MESSAGES/HIDE_AVATAR';
export const DELETE_MESSAGES = 'MESSAGES/DELETE_MESSAGES';
export const MARK_ALL_READ = 'MESSAGES/MARK_ALL_READ';
export const SET_QUICK_BUTTONS = 'SET_QUICK_BUTTONS';
export const OPEN_FULLSCREEN_PREVIEW = 'FULLSCREEN/OPEN_PREVIEW';
export const CLOSE_FULLSCREEN_PREVIEW = 'FULLSCREEN/CLOSE_PREVIEW';

export interface ToggleChat extends UnknownAction {}

export interface ToggleInputDisabled extends UnknownAction {}

export interface AddUserMessage extends UnknownAction {
  text: string;
  id?: string;
}

export interface AddResponseMessage extends UnknownAction {
  text: string;
  id?: string;
}

export interface ToggleMsgLoader extends UnknownAction {}

export interface AddLinkSnippet extends UnknownAction {
  link: LinkParams;
  id?: string;
}

export interface RenderCustomComponent extends UnknownAction {
  component: ElementType;
  props: any;
  showAvatar: boolean;
  id?: string;
}

export interface DropMessages extends UnknownAction {}

export interface HideAvatar extends UnknownAction {
  index: number;
}

export interface DeleteMessages extends UnknownAction {
  id?: string;
}

export interface SetQuickButtons extends UnknownAction {
  buttons: Array<{ label: string, value: string | number }>;
}

export interface SetBadgeCount extends UnknownAction {
  count: number;
}

export interface MarkAllMessagesRead extends UnknownAction {}

export type BehaviorActions = ToggleChat | ToggleInputDisabled | ToggleMsgLoader;

export type MessagesActions = AddUserMessage | AddResponseMessage | AddLinkSnippet | RenderCustomComponent
                              | DropMessages | HideAvatar | DeleteMessages | MarkAllMessagesRead | SetBadgeCount;

export type QuickButtonsActions = SetQuickButtons;

export interface openFullscreenPreview extends UnknownAction {
  payload: FullscreenPreviewState
}

export interface closeFullscreenPreview extends UnknownAction {}

export type FullscreenPreviewActions = openFullscreenPreview | closeFullscreenPreview;