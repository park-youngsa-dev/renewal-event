import {
  BookOpen,
  Building2,
  ContactRound,
  MessagesSquare,
  UserPlus,
} from "lucide-react";

export const feedbackFormUrl = "https://naver.me/xeFfjjzF";

export const testScopes = [
  {
    title: "회원가입 / 탈퇴",
    description: "회원가입 절차, 정보 입력, 탈퇴 기능 정상 작동 여부",
    icon: UserPlus,
  },
  {
    title: "회원유형 변경",
    description: "교수/강사, 교사 회원유형 변경 신청 기능 검증",
    icon: ContactRound,
  },
  {
    title: "회사 정보",
    description: "회사 소개, 연혁 등 기본 정보 오탈자 및 정확성",
    icon: Building2,
  },
  {
    title: "도서 & 견본신청",
    description: "테스트용 일부 도서 정보만 등록되어 있습니다",
    note: "도서 이미지 없음",
    icon: BookOpen,
  },
  {
    title: "게시판 기능",
    description:
      "1:1 문의 게시판, 도서자료실, 강의자료실 등록 및 다운로드 테스트",
    icon: MessagesSquare,
    fullWidth: true,
  },
];

export const feedbackCheckpoints = [
  { title: "오탈자", description: "텍스트 오타 및 어색한 표현" },
  { title: "링크 먹통", description: "클릭해도 반응이 없는 링크" },
  { title: "링크 오류", description: "잘못된 페이지로 연결" },
  { title: "회원 오류", description: "회원가입 / 인증 메일 미수신" },
  {
    title: "게시판 오류",
    description: "1:1 게시판 글 등록 불가, 파일 첨부 오류 등",
    fullWidth: true,
  },
];
