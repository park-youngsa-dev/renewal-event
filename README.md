# 박영사 홈페이지 리뉴얼 이벤트

제공된 HTML의 디자인과 콘텐츠를 React 기반 Next.js App Router로 옮긴 프로젝트입니다.

## 실행

Node.js 20.9 이상이 필요합니다.

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## 구성

- `app/page.tsx`: 이벤트 페이지 조합, 기본적으로 서버 컴포넌트 사용
- `components/`: 헤더, 이벤트 배너, 일정, 범위, 제보, 푸터
- `components/event-motion.tsx`: Motion 애니메이션, 동작 줄이기 설정 지원
- `components/ui/button.tsx`: shadcn/ui 방식의 공용 버튼
- `lib/event-content.ts`: 테스트 항목과 네이버 폼 URL

원본의 Tailwind 색상, 최대 너비 672px, 640px 반응형 분기와 문구를 유지했습니다. 다중 열은 Flexbox로 구현하고 Font Awesome은 Lucide 아이콘으로 교체했습니다. 원본에 지정된 Pretendard 폰트 파일은 첨부되어 있지 않아 운영체제의 한국어 폰트로 대체 표시됩니다.

헤더의 빛 효과, 상태 표시점, 커피 아이콘에만 클라이언트 컴포넌트를 사용합니다. 별도의 공유 상태, API, 데이터베이스, 환경변수는 필요하지 않습니다. 테스트 일정과 '진행 중' 표시는 원본에 맞춘 고정 안내입니다.

## 확인 항목

- 1440px 화면: 가운데 672px 페이지와 2열 테스트 카드가 표시되는지 확인
- 390px 및 320px 화면: 카드가 1열로 전환되고 가로 스크롤이 없는지 확인
- Tab 키로 제보 링크에 접근하고 Enter로 네이버 폼이 새 탭에 열리는지 확인
- 운영체제의 동작 줄이기 설정을 켜면 반복 애니메이션이 멈추는지 확인

네이버 폼은 원본 URL `https://naver.me/xeFfjjzF`로 연결됩니다. 응답 수집과 이미지 첨부는 해당 네이버 폼에서 처리합니다.
