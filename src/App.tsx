import { useEffect, useRef, useState } from 'react'
import { categories, experienceChapters, journal, products, site } from './data/site'

type IconName = 'arrow' | 'search' | 'close' | 'bag' | 'plus' | 'minus'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  if (name === 'search') return <svg {...common}><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>
  if (name === 'close') return <svg {...common}><path d="M5 5l14 14M19 5 5 19"/></svg>
  if (name === 'bag') return <svg {...common}><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>
  if (name === 'plus') return <svg {...common}><path d="M5 12h14M12 5v14"/></svg>
  if (name === 'minus') return <svg {...common}><path d="M5 12h14"/></svg>
  return <svg {...common}><path d="M4 12h15M14 6l6 6-6 6"/></svg>
}

function Header({ cartCount, openDrawer }: { cartCount: number; openDrawer: (drawer: 'search' | 'cart') => void }) {
  const [solid, setSolid] = useState(false)
  const [activeMega, setActiveMega] = useState<'catalog' | 'story' | null>(null)
  const megaOpen = activeMega !== null

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.65)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navHref = (item: string) => {
    if (item === '试香' || item === '试香套装') return '#experience-preview'
    if (item === '香水') return '#product-midnight-studio'
    if (item === '香薰') return '#product-everyday-moment'
    if (item === '护肤') return '#product-body-oil'
    if (item === '气味档案') return '#journal'
    if (item === '品牌故事') return '#atelier'
    return '#products'
  }

  return (
    <header className={`site-header ${solid ? 'is-solid' : ''}`} onMouseLeave={() => setActiveMega(null)}>
      <div className="utility-row">
        <div className="utility-group">
          {site.utility.map((item) => <a href="#footer" key={item}>{item}</a>)}
        </div>
        <a href="#top" className="wordmark" aria-label={`${site.brand} ${site.brandZh} 首页`}>
          <span>{site.brand}</span>
          <small>{site.brandZh}</small>
        </a>
        <div className="utility-group utility-right">
          {site.actions.map((item) => <button key={item} type="button">{item}</button>)}
          <button type="button" onClick={() => openDrawer('cart')}>购物袋 ({cartCount})</button>
        </div>
      </div>
      <div className="primary-row">
        <nav aria-label="主导航">
          {site.nav.map((item, index) => (
            <a
              key={item}
              href={navHref(item)}
              onMouseEnter={() => index > 0 && setActiveMega(item === '品牌故事' ? 'story' : 'catalog')}
              onFocus={() => index > 0 && setActiveMega(item === '品牌故事' ? 'story' : 'catalog')}
              aria-expanded={index > 0 ? megaOpen : undefined}
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="search-trigger" type="button" onClick={() => openDrawer('search')}>
          <Icon name="search" size={18}/><span>搜索</span>
        </button>
      </div>
      <div className={`mega-menu ${megaOpen ? 'is-open' : ''} ${activeMega === 'story' ? 'mega-menu--story' : ''}`} aria-hidden={!megaOpen}>
        {activeMega === 'story' ? (
          <>
            <div className="mega-story-intro">
              <h2>一天有 24 小时属于世界，<br/>第 25 小时属于自己。</h2>
              <p>我们以气味封存时间，让那些值得纪念的片刻，在再次闻到时被重新打开。</p>
            </div>
            <div className="mega-story-links" aria-label="品牌故事导航">
              <a className="mega-story-link" href="#brand-manifesto"><span>品牌原点</span><small>Origin</small></a>
              <a className="mega-story-link" href="#atelier"><span>时间档案</span><small>Time Archive</small></a>
              <a className="mega-story-link" href="#journal"><span>气味档案</span><small>Scent Journal</small></a>
            </div>
            <a className="mega-image mega-story-image" href="#atelier">
              <img src="/assets/images/editorial/manifesto-archive-drawer-4k.webp" alt="打开的时间档案抽屉、手工卡片与矿石标本" />
              <span>走进第二十五小时 <Icon name="arrow" size={17}/></span>
            </a>
          </>
        ) : (
          <>
            <div>
              <p className="mega-title">按香调探索</p>
              <a href="#families">木质</a><a href="#families">花香</a><a href="#families">清新</a><a href="#families">树脂</a>
            </div>
            <div>
              <p className="mega-title">系列</p>
              <a href="#products">全部香氛</a><a href="#products">日常香气</a><a href="#products">夜间香气</a><a href="#experience-preview">试香体验</a>
            </div>
            <div>
              <p className="mega-title">协助选择</p>
              <a href="#finder">找到你的第25小时</a><a href="#atelier">时间档案馆</a><a href="#journal">气味档案</a>
            </div>
            <a className="mega-image" href="#finder">
              <img src="/assets/images/editorial/mega-nav.jpg" alt="香氛瓶与植物材料的静物" />
              <span>找到更接近你的气味 <Icon name="arrow" size={17}/></span>
            </a>
          </>
        )}
      </div>
    </header>
  )
}

function Drawer({ type, close, cartCount }: { type: 'search' | 'cart' | null; close: () => void; cartCount: number }) {
  useEffect(() => {
    if (!type) return
    const handler = (event: KeyboardEvent) => event.key === 'Escape' && close()
    document.body.classList.add('drawer-open')
    window.addEventListener('keydown', handler)
    return () => {
      document.body.classList.remove('drawer-open')
      window.removeEventListener('keydown', handler)
    }
  }, [type, close])

  return (
    <div className={`drawer-shell ${type ? 'is-open' : ''}`} aria-hidden={!type}>
      <button className="drawer-scrim" aria-label="关闭侧栏" onClick={close}/>
      <aside className="drawer" aria-label={type === 'search' ? '搜索' : '购物袋'}>
        <button className="drawer-close" onClick={close} aria-label="关闭"><Icon name="close"/></button>
        {type === 'search' ? (
          <div className="drawer-content">
            <h2>搜索香氛与文章</h2>
            <label className="search-field"><span>输入关键词</span><input autoFocus placeholder="例如：木质、无花果、叠香"/><Icon name="search"/></label>
            <p className="drawer-note">可搜索的真实商品内容将在接入你的目录后显示。</p>
          </div>
        ) : (
          <div className="drawer-content">
            <h2>购物袋</h2>
            {cartCount === 0 ? <p className="empty-message">你的购物袋目前为空。</p> : <p className="empty-message">已加入 {cartCount} 件演示商品。接入真实商品后可在这里编辑数量与结算。</p>}
            <button className="solid-button" disabled={cartCount === 0}>前往结算</button>
          </div>
        )}
      </aside>
    </div>
  )
}

function Hero() {
  const [index, setIndex] = useState(0)
  const current = site.hero[index]
  return (
    <section className={`hero ${current.textTone === 'dark' ? 'is-light' : ''}`} id="top" aria-roledescription="轮播">
      {site.hero.map((slide, slideIndex) => (
        <img key={slide.title} src={slide.image} alt="" className={slideIndex === index ? 'is-active' : ''}/>
      ))}
      <div className="hero-shade"/>
      <button className="hero-arrow previous" onClick={() => setIndex((index - 1 + site.hero.length) % site.hero.length)} aria-label="上一张"><Icon name="arrow"/></button>
      <div className="hero-copy" key={current.title}>
        <p>{current.description}</p>
        <h1>{current.title}</h1>
        <a href={current.href} className="outline-button"><span>{current.cta}</span><Icon name="arrow"/></a>
      </div>
      <button className="hero-arrow next" onClick={() => setIndex((index + 1) % site.hero.length)} aria-label="下一张"><Icon name="arrow"/></button>
      <div className="hero-progress" aria-label={`第 ${index + 1} 张，共 ${site.hero.length} 张`}>
        {site.hero.map((slide, slideIndex) => <button key={slide.title} onClick={() => setIndex(slideIndex)} className={slideIndex === index ? 'is-active' : ''} aria-label={`转到第 ${slideIndex + 1} 张`}/>) }
      </div>
    </section>
  )
}

function ProductRail({ addToCart }: { addToCart: () => void }) {
  const railRef = useRef<HTMLDivElement>(null)
  const move = (direction: number) => railRef.current?.scrollBy({ left: direction * railRef.current.clientWidth * 0.76, behavior: 'smooth' })
  return (
    <section className="product-section" id="products">
      <div className="section-heading product-heading">
        <div><h2>正在收藏的时刻</h2><p>每一件香气以 TIME NO. 编号归档，记录一段时间、一个地点，以及当时留下的气味。将鼠标移至商品图，查看正面与包装细节。</p></div>
        <div className="rail-actions"><button onClick={() => move(-1)} aria-label="向前浏览"><Icon name="arrow"/></button><button onClick={() => move(1)} aria-label="向后浏览"><Icon name="arrow"/></button></div>
      </div>
      <div className="product-rail" ref={railRef}>
        {products.map((product) => (
          <article className="product-card" id={product.id} key={product.id}>
            <div className={`product-media ${product.hoverImage ? 'has-hover-image' : ''} ${product.mediaClass ?? ''}`}>
              <img className="product-image product-image-primary" src={product.image} alt={`${product.name} 商品场景图`}/>
              {product.hoverImage && <img className="product-image product-image-hover" src={product.hoverImage} alt="" aria-hidden="true"/>}
            </div>
            <div className="product-info"><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.note}</p><div className="product-meta"><span>{product.size}</span><span>{product.price}</span></div></div>
            <button className="add-button" onClick={addToCart}><span>加入购物袋</span><Icon name="plus" size={18}/></button>
          </article>
        ))}
      </div>
    </section>
  )
}

function EditorialSplit() {
  return (
    <section className="editorial-split" id="brand-manifesto">
      <div className="editorial-media"><img src="/assets/images/editorial/manifesto-light-archive-box-4k.png" alt="浅色档案盒中的手工卡片、信封、照片与日期印章"/></div>
      <div className="editorial-copy"><h2 className="manifesto-title"><span>一天有 24</span><span>小时属于世界，</span><span>第 25 小时属于自己。</span></h2><p>气味是时间的标本，香氛是记忆的容器。我们以香气封存那些值得纪念的时刻，让它们在再次闻到时被重新打开。</p><a href="#products" className="text-link">进入第25小时 <Icon name="arrow" size={18}/></a></div>
    </section>
  )
}

function CategoryRail() {
  return (
    <section className="family-section" id="families">
      <div className="section-heading"><h2>按产品探索</h2></div>
      <div className="family-grid">
        {categories.map((category) => <a href={category.anchor} className="family-card" key={category.name}><div><img src={category.image} alt={`${category.name}商品摄影`}/></div><span>{category.name}<Icon name="arrow" size={17}/></span></a>)}
      </div>
    </section>
  )
}

function ScentFinder() {
  const [choices, setChoices] = useState<string[]>([])
  const [step, setStep] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const questions = [
    ['破晓之前', '日光正盛', '深夜独处'],
    ['室内书房', '雨后林地', '海边暮色'],
    ['贴近肌肤', '充满空间', '缓慢延续'],
  ]
  const prompts = ['你想留住一天中的哪个时刻？', '那段时间发生在哪里？', '你希望气味如何停留？']
  const totalSteps = questions.length
  const result = choices[0] === '深夜独处' || choices[1] === '室内书房'
    ? products[0]
    : products[1]

  useEffect(() => {
    if (hasInteracted) stageRef.current?.focus({ preventScroll: true })
  }, [step, hasInteracted])

  const pick = (value: string) => {
    setChoices((current) => {
      const next = [...current]
      next[step] = value
      return next
    })
    setHasInteracted(true)
    setStep((current) => Math.min(current + 1, totalSteps))
  }

  const goBack = () => {
    setHasInteracted(true)
    setStep((current) => Math.max(0, current - 1))
  }

  const restart = () => {
    setChoices([])
    setHasInteracted(true)
    setStep(0)
  }

  return (
    <div className="finder" id="finder">
      <div className="finder-header">
        <h2>找到属于你的第25小时</h2>
        <div className="finder-progress" aria-label={step < totalSteps ? `第 ${step + 1} 步，共 ${totalSteps} 步` : '选择完成'}>
          <span>{step < totalSteps ? `${step + 1} / ${totalSteps}` : '完成'}</span>
          <div aria-hidden="true"><i style={{ width: `${Math.min(step + 1, totalSteps) / totalSteps * 100}%` }}/></div>
        </div>
      </div>

      <div className="finder-stage" ref={stageRef} tabIndex={-1} aria-live="polite">
        {step < totalSteps ? (
          <fieldset className="finder-step" key={step}>
            <legend>{prompts[step]}</legend>
            {questions[step].map((option) => (
              <button type="button" key={option} onClick={() => pick(option)} className={choices[step] === option ? 'is-selected' : ''}>
                <span>{option}</span><span className="radio-mark"/>
              </button>
            ))}
          </fieldset>
        ) : (
          <div className="finder-result" key="result">
            <p>根据当前选择</p>
            <h3>{result.name}</h3>
            <span>{choices.join(' · ')}</span>
            <a href={`#${result.id}`} className="text-link">查看这款香水 <Icon name="arrow" size={18}/></a>
          </div>
        )}
      </div>

      <div className="finder-controls">
        <button type="button" onClick={goBack} disabled={step === 0}>返回上一步</button>
        {step < totalSteps ? <span>选择后进入下一步</span> : <button type="button" onClick={restart}>重新选择</button>}
      </div>
    </div>
  )
}

function ExperiencePreview() {
  const [expanded, setExpanded] = useState(false)

  const closeAndReturn = () => {
    setExpanded(false)
    window.requestAnimationFrame(() => document.querySelector('#experience-preview')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  return (
    <section className={`experience-preview-section ${expanded ? 'is-open' : ''}`} id="experience-preview">
      <article className="experience-preview">
        <div className="experience-preview-copy">
          <h2>每一次停留，<br/>都值得被收藏。</h2>
          <p>从找到气味，到把一段时间带回日常。试香不是一次匆忙的选择，而是一场逐渐靠近自己的过程。</p>
          <div className="experience-preview-steps">
            <div><span>01</span><strong>找到气味</strong><small>从时间、地点与感受开始</small></div>
            <div><span>02</span><strong>体验试香</strong><small>让气味在纸上与肌肤上展开</small></div>
            <div><span>03</span><strong>收藏时间</strong><small>选择属于自己的 TIME NO.</small></div>
          </div>
          <button type="button" className="outline-button" aria-expanded={expanded} aria-controls="complete-experience" onClick={() => setExpanded((current) => !current)}>
            <span>{expanded ? '收起试香体验' : '展开完整试香体验'}</span><Icon name={expanded ? 'minus' : 'arrow'}/>
          </button>
        </div>
        <div className="experience-preview-media"><img src="/assets/images/editorial/experience-film-archive-4k.webp" alt="胶卷、旧照片与日期印章组成的时间档案静物"/></div>
      </article>
      <div className="experience-expand-shell" id="complete-experience" aria-hidden={!expanded}>
        <div className="experience-expand-inner"><ExperienceJourney onClose={closeAndReturn}/></div>
      </div>
    </section>
  )
}

function StoryStack() {
  return (
    <section className="stack-section">
      <article className="stack-panel place-panel">
        <img src="/assets/images/editorial/seaside-window-time-archive.png" alt="旧窗前的手札、枯草与海边日落"/>
        <div className="panel-copy"><h2>每一段气味，都有发生的地点</h2><p>时间、空间与感受共同构成一份气味记录，等待在未来的某一刻再次被打开。</p><a href="#atelier" className="outline-button"><span>进入时间档案</span><Icon name="arrow"/></a></div>
      </article>
      <article className="stack-panel finder-panel"><div className="finder-image"><img src="/assets/images/editorial/finder-archive-memory-4k.webp" alt="褪色照片、档案信封与日期印章"/></div><ScentFinder/></article>
      <ExperiencePreview/>
    </section>
  )
}

function ExperienceJourney({ onClose }: { onClose: () => void }) {
  const steps = experienceChapters.flatMap((chapter) => chapter.steps)

  return (
    <div className="experience-expanded">
      <section className="experience-flow" id="sample">
        <header className="experience-flow-header">
          <div><p>Every Moment Deserves To Be Archived.</p><h2>七个步骤，<br/>收藏一段时间。</h2></div>
          <p>从发现气味到再次打开记忆。我们不急着替你定义一种香气，而是先从你想留住的时刻开始。</p>
        </header>
        <div className="experience-flow-steps">
          {steps.map((step) => (
            <article className="experience-flow-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}<small>{step.titleEn}</small></h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
        <div className="experience-flow-footer">
          <span>Collect Time. Collect Yourself.　收藏时间，收藏自己。</span>
          <button type="button" className="text-link" onClick={onClose}>收起试香体验 <Icon name="minus" size={16}/></button>
        </div>
      </section>
    </div>
  )
}

function Journal() {
  const journalImages = [
    { src: '/assets/images/editorial/journal-midnight-archive-4k.png', alt: '打开的旧书、黄铜沙漏、放大镜与干燥花' },
    { src: '/assets/images/editorial/seaside-sunset-window-journal-4k.webp', alt: '旧窗前的档案书页与海边日落' },
    { src: '/assets/images/editorial/perfumer-table-journal-4k.webp', alt: '精油玻璃瓶、试香纸、滴管与沙漏组成的调香静物' },
  ]

  return (
    <section className="journal" id="journal">
      <div className="section-heading product-heading"><div><h2>气味档案</h2><p>关于时间、地点、气味和记忆的记录。</p></div></div>
      <div className="journal-grid">{journal.map((article, index) => <a href="#journal" key={article.title} className={`journal-card card-${index + 1}`}><img src={journalImages[index].src} alt={journalImages[index].alt}/><div className="journal-card-copy"><p>{article.type}</p><h3>{article.title}</h3><span>{article.time}</span></div></a>)}</div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="footer">
      <div className="service-rail"><div>安全支付</div><div>随单试香</div><div>礼物包装</div></div>
      <div className="footer-grid">
        <div><h2>订阅品牌通讯</h2><label><span>电子邮箱</span><input type="email" placeholder="name@example.com"/></label><button className="footer-submit">订阅 <Icon name="arrow"/></button></div>
        <div><h3>订单与支持</h3><a href="#footer">联系我们</a><a href="#footer">配送与退换</a><a href="#footer">订单查询</a><a href="#footer">常见问题</a></div>
        <div><h3>关于</h3><a href="#atelier">品牌故事</a><a href="#atelier">时间档案馆</a><a href="#journal">气味档案</a><a href="#footer">隐私与条款</a></div>
        <div><h3>连接</h3><a href="#footer">Instagram</a><a href="#footer">小红书</a><a href="#footer">微信</a><a href="#footer">地区与语言</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 {site.brand} · {site.brandZh}</span><a href="#top">回到顶部</a></div>
    </footer>
  )
}

export default function App() {
  const [noticeVisible, setNoticeVisible] = useState(true)
  const [drawer, setDrawer] = useState<'search' | 'cart' | null>(null)
  const [cartCount, setCartCount] = useState(0)
  const addToCart = () => { setCartCount((count) => count + 1); setDrawer('cart') }

  return (
    <>
      {noticeVisible && <div className="announcement"><span>{site.notice}</span><button onClick={() => setNoticeVisible(false)} aria-label="关闭通知"><Icon name="close" size={17}/></button></div>}
      <Header cartCount={cartCount} openDrawer={setDrawer}/>
      <Drawer type={drawer} close={() => setDrawer(null)} cartCount={cartCount}/>
      <main>
        <Hero/>
        <EditorialSplit/>
        <ProductRail addToCart={addToCart}/>
        <CategoryRail/>
        <StoryStack/>
        <section className="atelier-section" id="atelier"><img src="/assets/images/editorial/time-archive-film-still-life-4k.webp" alt="胶卷、旧照片、日期印章与空白档案卡"/><div><h2>时间档案馆 <span lang="en">Time Archive</span></h2><p>我们不只记录气味，也记录它发生的时间、地点与当时的感受。每一个 TIME NO. 都是一段可以被再次打开的私人档案。</p><a className="text-link" href="#journal">阅读气味档案 <Icon name="arrow" size={18}/></a></div></section>
        <Journal/>
        <section className="quote-section"><blockquote><span>“气味不会带你回到过去，</span><span>却能让过去回到你的眼前。”</span></blockquote><p>THE 25TH HOUR</p></section>
      </main>
      <Footer/>
    </>
  )
}
