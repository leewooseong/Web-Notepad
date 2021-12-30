# Web-Notepad
노드 스터디 과제1. 웹에서 동작하는 메모장 만들기

# 1. 작품의 목적

## 1.1 기획 의도

웹에서 동작하는 메모장 만들어 편하게 편집 및 저장을 할 수 있도록 관리한다.
(추후 기존의 웹 메모장의 기능에 추가 기능을 달아서 보완할 것..)

## 1.2 주 목적

웹에서 

현재 여행지 사이트를 살펴보면 대부분은 가장 인기있는 관광지들을 위주로 소개해주고 있었고, 단지 리뷰나 평가가 적다는 이유로 양질의 관광지가 소외받는 경향을 발견하였다. 

즉, '가장 많이 찾는 관광지'만이 아닌 **'다시 가보고 싶은 관광지', '관광객은 적지만 내실있는 관광지'**를 지도에 표시하는 방법이나 웹페이지 등으로 위의 문제점을 해결하고자 한다. 

무엇보다 현재 코로나 사태의 영향으로 **관광객들이 비교적 밀집도가 낮은 관광지를 선호하는 경향을 보이는 점을 고려**하여 **관광객 분산을 통한 감염확산 억제 등의 효과**를 기대할 수 있다는 것을 주 목적으로 두었다. 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d9dbb4b9-8b43-4fd1-9ce9-f3a669b4bed7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d9dbb4b9-8b43-4fd1-9ce9-f3a669b4bed7/Untitled.png)

![(출처: 경향신문, 미디어 제주)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/39888496-c7f9-4f97-854a-6016b430e60b/Untitled.png)

(출처: 경향신문, 미디어 제주)

# 2. 작품 요약

## 2.1 내용 및 주요 기능

데이터 상의 각 관광지들을 지도에 마커 등으로 시각화하여 나타내고 각 위치마다 방문자 수, 재방문율, 관광지를 소개하는 홈페이지, 블로그 등의 링크를 나타내는 웹페이지를 구축하여 관광지를 쉽게 비교할 수 있도록 한다. 

또, 소위 **다크투어리즘**이라 일컬어지는 재해장소, 전쟁 철거지 등 인류의 아픈 역사를 가지고 있는 장소를 따로 공간을 마련하여 홍보하는 것을 통해 그저 보기좋은 관광지만을 소개하는 것이 아닌 교양인으로 성장하는 발판을 마련해주고자 한다. 

즉, 누구나 알고 있는 관광지 보다는 쉽게 접해보진 못했지만 양질의 관광지를 위주로 소개해주어 관광객들을 특정 관광지에 몰리게 하지 않고 제주도 전역으로 분산시키는 효과를 얻으며 결과적으로 제주 관광사업의 발전, 경제 성장 등을 꾀할 수 있다.

## 2.2 기대효과

현재 코로나 사태로 관광 사업이 위축되고 관광객들이 주로 비교적 밀집도가 낮은 관광지를 찾는 경향을 보이고 있는데 이 때 이 프로젝트를 효과적으로 활용할 수 있다.  

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a364c1e5-2963-4502-a672-430e45ff92a7/_2020-10-31__3.59.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a364c1e5-2963-4502-a672-430e45ff92a7/_2020-10-31__3.59.38.png)

![출처 : 동아일보](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d1719a7-3596-42b3-a10c-3e1aae7d5292/_2020-10-31__3.59.51.png)

출처 : 동아일보

                               

거기다가 만약 위 프로젝트에서 저조한 성적을 보인 관광지의 사업자 입장에서는 기존 관광지의 문제점을 수정, 보완하여 발전시킬 수 있는 **동기부여의 효과**를 줄 수 있고 이로 말미암아 건전한 관광사업 경쟁을 도모할 수 있다.

또, 매년 정부 차원의 통계 조사를 통해 제주를 찾는 관광객의 방문지와 그 수를 이 프로젝트를 기반으로 한 웹사이트 등에 지속적으로 제공하여 융통성 있는 관광객 분포를 기대할 수 있다. 

# 3. 작품 제작 과정

## 3.1 제작 기간 및 역할분담

### 3.1.1 제작 기간

아이디어 구상 및 데이터 확보: 약 하루 정도 소요

전처리: 약 3일 정도 소요

시각화: 약 2일 정도 소요

웹페이지 제작: 약 2일 정도 소요

작품 설명서 작성: 약 2일 정도 소요

### 3.1.2 역할분담

김범주: 아이디어 제공 및 문서 작성

배준범: 주요 데이터 전처리 및 시각화

홍혁재: 웹페이지 제작

강민호: 데이터 조사 및 확보 

먼저, excel을 이용하여 과도하게 복잡한 데이터 형태를 간략화하고 필요한 부분만 남겼다. 재방문율의 데이터가 순위가 나뉘어 있었기 때문에 1순위를 기준으로 비교를 진행하였다.

## 3.2 데이터 전처리

```python
vit=pd.read_excel('/content/내국인_제주여행_방문지_20201028200517.xlsx') #vit은 visit을 줄여서 명명

#백분율로 되어있는 데이터를 수로 고치는 과정
vit1=pd.DataFrame(vit.iloc[0, 0:16])
list1=[5558]
for i in list(vit1.iloc[0, 1:]):
  list1.append(int(5558*(i/100)))#같은 방법으로 list2, 3, 4, 5 또한 만듦
vit.loc[0]=listfinal #list1, 2, 3, 4, 5의 합
vit.drop(['응답자수1','응답자수2','응답자수3','응답자수4','응답자수5'],axis=1,inplace=True)

#방문자 수 대비 재방문자 수의 비율을 구함
vit['재방문비율(%)']=None
vitnum=list(vit['방문수'])
ratio=[]
for i in range(0, 56):
  ratio.append(round(revitnum[i]/vitnum[i], 3))
for i in range(0, 56):
  ratio[i]=round(ratio[i]*100, 1)
vit['재방문비율(%)']=ratio
```

전처리 후 방문자 수와 재방문 비율을 기준으로 관광지를 4개의 분류로 나눴다.

```python
vit.describe() #방문자 수는 평균인 607.8(명) 기준, 재방문 비율은 중앙값인 5.1(%) 기준
vit['상태']=None
vit.loc[(vit['방문수'] > 607.8)&(vit['재방문비율(%)'] > 5.1), '상태']='A'
vit.loc[(vit['방문수'] <= 607.8)&(vit['재방문비율(%)'] > 5.1), '상태']='B'
vit.loc[(vit['방문수'] > 607.8)&(vit['재방문비율(%)'] <= 5.1), '상태']='C'
vit.loc[(vit['방문수'] <= 607.8)&(vit['재방문비율(%)'] <= 5.1), '상태']='D'
```

이를 통해 방문율은 낮지만 재방문율은 높은 곳들을 찾을 수 있었고 이러한 곳이 바로 잘 알려지지는 않았지만 관광객들의 만족도는 높은 양질의 관광지라는 가정을 내리게 되었다.

- 위 데이터에서는 '서귀포 자연 휴양림', '절물 자연 휴양림', '도립 미술관', '제주 돌문화 공원' 등을 찾을 수 있었다.

## 3.3 데이터 시각화

```python
pip install folium
import folium as fol

#관광지별 좌표를 확보
location=pd.read_excel('/content/제주관광지좌표.xlsx') #공공데이터포털의 제주도장소(POI)데이터, 구글 지도를 활용
location.iloc[1,0].split(', ')
loca=[]
for i in range(1, 112, 2):
  loca.append(location.iloc[i,0].split(', '))
for i in range(0, 56):
  loca[i][0]=float(loca[i][0])
  loca[i][1]=float(loca[i][1])
vit['좌표']=None
vit['좌표']=loca

#지도에 시각화
pip install git+https://github.com/python-visualization/branca.git@master
m = fol.Map(location=[33.3666, 126.5333], zoom_start=11)
for i in range(0, 56):
  if vit['상태'].iloc[i]=='A':
     fol.Marker(location=vit['좌표'].iloc[i], 
               tooltip=(vit['방문지'].iloc[i]+'\n방문객 수: '+str(vit['방문수'].iloc[i])+'명\n재방문률: '+str(vit['재방문비율(%)'].iloc[i])+'%'),
               icon=fol.Icon(color='blue')).add_to(m) #B, C, D에 대하여도 같은 방법으로 적용
m.save('map.html')
```

## 3.4 웹페이지 구축

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fdd8564e-d5e9-4932-ba13-448b2c09ff64/_2020-10-31__3.40.48.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fdd8564e-d5e9-4932-ba13-448b2c09ff64/_2020-10-31__3.40.48.png)

위 자료를 보면 충분히 훌륭한 관광지들이 제주도 전역에 고르게 분포한 것을 알 수 있는데,  본 프로젝트로 매년 제주를 찾는 많은 관광객들을 어느정도 고르게 분산시켜 인파 몰림을 방지하고 제주 각 지역의 관광, 경제 사업 등을 균등하게 발전시킬 수 있는 효과를 얻을 수 있다.

위 자료를 보면 충분히 훌륭한 관광지들이 제주도 전역에 고르게 분포한 것을 알 수 있는데,  매년 제주를 찾는 많은 관광객들을 어느정도 고르게 분산시켜 인파 몰림을 방지하고 제주 각 지역의 관광, 경제 사업 등을 균등하게 발전시킬 수 있는 효과를 가질 수 있다.

# 4. 작품에 사용된 도구

## 4.1 도구

Excel, Google Colab, Sublime Text

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1bd3c7cd-80df-49d0-bb57-2972b8d9c9e0/download.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1bd3c7cd-80df-49d0-bb57-2972b8d9c9e0/download.jpg)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8317e1a4-bcbb-4312-a629-f93a78698158/download.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8317e1a4-bcbb-4312-a629-f93a78698158/download.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9af104d-4e17-46c8-9cc7-5c4291011ea5/Sublime_Text.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9af104d-4e17-46c8-9cc7-5c4291011ea5/Sublime_Text.png)

## 4.2 언어 및 라이브러리

Python, HTML, CSS, JS, Folium

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1892ae05-150d-43b8-9b93-ee3a4ee17fe6/download.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1892ae05-150d-43b8-9b93-ee3a4ee17fe6/download.jpg)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79ff43f8-610e-4527-aa1d-509965466c55/HTML5_Logo_512.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79ff43f8-610e-4527-aa1d-509965466c55/HTML5_Logo_512.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a494b7b5-c221-446c-8c85-994b663b9da3/CSS3_logo_and_wordmark.svg.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a494b7b5-c221-446c-8c85-994b663b9da3/CSS3_logo_and_wordmark.svg.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ec816ed-4ee7-4a98-8b32-a73f84b2cbc5/javascript-logo-E967E87D74-seeklogo.com.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ec816ed-4ee7-4a98-8b32-a73f84b2cbc5/javascript-logo-E967E87D74-seeklogo.com.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88625c84-7ac6-4eb2-b13c-877b240e24fc/folium.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/88625c84-7ac6-4eb2-b13c-877b240e24fc/folium.png)

## 4.3 데이터

kosis국가통계포털, 공공 데이터 포털

제주 내국인 관광객 방문지-

14~16년도-[https://kosis.kr/statHtml/statHtml.do?orgId=218&tblId=DT_21807N_A017&conn_path=I2](https://kosis.kr/statHtml/statHtml.do?orgId=218&tblId=DT_21807N_A017&conn_path=I2)

제주 내국인 관광객 재방문지-

14~16년도-[https://kosis.kr/statHtml/statHtml.do?orgId=218&tblId=DT_21807N_A023&conn_path=I2](https://kosis.kr/statHtml/statHtml.do?orgId=218&tblId=DT_21807N_A023&conn_path=I2)

구글 지도-[https://www.google.co.kr/maps/](https://www.google.co.kr/maps/)

Visit Jeju-[https://www.visitjeju.net/kr/#](https://www.visitjeju.net/kr/#)

# 5. 제작결과

## 5.1 시연영상

## 5.2 웹페이지

[제주 관광지도.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/900781df-227a-448e-ad0b-c1c09d94ac22/_.zip)

# 6. 피드백

1. 다크투어리즘
2. 지도만 만드는 것이 큰 홍보가 될까? SNS 활용 방안, 자동 게시물 올리기
