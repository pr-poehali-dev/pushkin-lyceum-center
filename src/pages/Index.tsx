import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 paper-texture">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2 bg-accent/20 text-accent-foreground border-accent/30">
            Литературное наследие
          </Badge>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 text-balance text-primary">
            Александр Пушкин
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            «Солнце русской поэзии» — исследуем жизнь и творчество великого поэта, атмосферу Царскосельского лицея и искусство центона
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Icon name="BookOpen" size={32} className="text-secondary" />
            <h2 className="text-5xl font-bold text-primary">О Пушкине</h2>
          </div>
          
          <Card className="p-8 sm:p-12 backdrop-blur-sm bg-card/80 border-2 vintage-border animate-scale-in shadow-2xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-card-foreground">
                Александр Сергеевич Пушкин (1799–1837) — величайший русский поэт, драматург и прозаик, основоположник современного русского литературного языка. Его творчество объединяет романтизм и реализм, глубокую философию и народную мудрость.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground mt-4">
                Пушкин создал бессмертные произведения: роман в стихах «Евгений Онегин», поэму «Руслан и Людмила», трагедию «Борис Годунов», прозаические шедевры «Капитанская дочка» и «Повести Белкина». Его лирика охватывает все грани человеческих чувств — от любви до философских размышлений о смысле жизни.
              </p>
              <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-accent">
                <p className="italic text-xl text-card-foreground font-semibold">
                  «Я памятник себе воздвиг нерукотворный,<br />
                  К нему не зарастёт народная тропа...»
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 paper-texture">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Icon name="GraduationCap" size={32} className="text-secondary" />
            <h2 className="text-5xl font-bold text-primary">Царскосельский лицей</h2>
          </div>
          
          <Card className="p-8 sm:p-12 backdrop-blur-sm bg-card/80 border-2 vintage-border animate-scale-in shadow-2xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-card-foreground">
                Царскосельский лицей был создан как привилегированное учебное заведение для подготовки будущей элиты Российской империи. Повседневная жизнь воспитанников, включая Александра Пушкина, подчинялась строгому распорядку: подъём в шесть утра, чередование занятий, прогулок, молитв и отдыха.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground mt-4">
                Однако за внешней дисциплиной скрывалась насыщенная интеллектуальная и творческая атмосфера. Лицеисты изучали широкий спектр наук — от юриспруденции и философии до военного дела и искусств, занимались литературным творчеством, издавали рукописные журналы и вели оживлённые дискуссии.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground mt-4">
                Именно здесь Пушкин и его товарищи — И. Пущин, А. Дельвиг, В. Кюхельбекер — сформировались как личности и где зародилась их знаменитая «лицейская дружба».
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-muted/50 rounded-lg text-center border border-border/50">
                  <Icon name="Users" size={28} className="mx-auto mb-3 text-secondary" />
                  <h3 className="text-2xl font-bold mb-2 text-primary">30 учеников</h3>
                  <p className="text-muted-foreground">в первом наборе 1811 года</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg text-center border border-border/50">
                  <Icon name="Calendar" size={28} className="mx-auto mb-3 text-secondary" />
                  <h3 className="text-2xl font-bold mb-2 text-primary">6 лет обучения</h3>
                  <p className="text-muted-foreground">с 1811 по 1817 год</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg text-center border border-border/50">
                  <Icon name="Award" size={28} className="mx-auto mb-3 text-secondary" />
                  <h3 className="text-2xl font-bold mb-2 text-primary">Элитное образование</h3>
                  <p className="text-muted-foreground">для будущей интеллигенции</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Icon name="Sparkles" size={32} className="text-secondary" />
            <h2 className="text-5xl font-bold text-primary">Центон — литературная игра</h2>
          </div>
          
          <Card className="p-8 sm:p-12 backdrop-blur-sm bg-card/80 border-2 vintage-border animate-scale-in shadow-2xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-card-foreground">
                Творческая среда Лицея стала плодотворной почвой для первых поэтических опытов. Ученики не только изучали теорию словесности, но и активно практиковались в сочинении, часто в форме литературной игры.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground mt-4">
                Одной из таких изысканных игр является <strong>центон</strong> — стихотворение, целиком составленное из строк других произведений. Название происходит от латинского <em>cento</em> («лоскутное одеяло»), что отражает его суть: фрагменты разных текстов соединяются в новое, часто остроумное или пародийное целое.
              </p>
              
              <div className="mt-8 p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg border-2 border-secondary/30">
                <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  <Icon name="Lightbulb" size={24} className="text-accent" />
                  Как создаётся центон?
                </h3>
                <ol className="space-y-3 text-lg text-card-foreground">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">1</span>
                    <span>Выбираются строки из разных стихотворений одного или нескольких авторов</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">2</span>
                    <span>Строки комбинируются так, чтобы получился связный текст с новым смыслом</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">3</span>
                    <span>Результат может быть серьёзным, комическим или пародийным</span>
                  </li>
                </ol>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-accent">
                <h4 className="text-xl font-bold mb-3 text-primary">Пример центона из строк Пушкина:</h4>
                <p className="italic text-lg text-card-foreground leading-relaxed">
                  «Мороз и солнце; день чудесный!<br />
                  Я помню чудное мгновенье...<br />
                  Унылая пора! Очей очарованье!<br />
                  К нему не зарастёт народная тропа.»
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  * Каждая строка — из разных произведений, но вместе они создают новое поэтическое высказывание
                </p>
              </div>

              <p className="text-lg leading-relaxed text-card-foreground mt-6">
                Таким образом, центон демонстрирует не только эрудицию автора, но и гибкость поэтической традиции, позволяя увидеть знакомые строки в неожиданном свете.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">
            «Чувства добрые я лирой пробуждал...»
          </p>
          <p className="text-sm opacity-80">
            © 2024 Литературное наследие А.С. Пушкина
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;