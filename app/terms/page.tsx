import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, AlertTriangle, FileText, Scale, UserX } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "الشروط والأحكام | Terms & Conditions",
  description: "شروط الخدمة وقواعد الاستخدام والأمان",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowRight className="w-4 h-4" />
            العودة للصفحة الرئيسية
          </Button>
        </Link>

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
            <ShieldCheck className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl font-bold mb-4">الشروط والأحكام</h1>
          <p className="text-muted-foreground text-lg">
            آخر تحديث: {new Date().toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <Card className="p-8 mb-8">
          <div className="prose prose-lg max-w-none" dir="rtl">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                الموافقة على الشروط
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                باستخدام هذه الخدمة، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه
                الشروط، فيجب عليك عدم استخدام خدماتنا.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary" />
                حقوق الملكية الفكرية
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                جميع المحتويات والمواد المتاحة على هذه المنصة، بما في ذلك النصوص والرسومات والشعارات والأيقونات والصور
                والمقاطع الصوتية ومقاطع الفيديو والبرامج، هي ملكية خاصة بنا أو مرخصة لنا وتخضع لحقوق الطبع والنشر
                وقوانين الملكية الفكرية.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>لا يجوز نسخ أو توزيع أو نقل أي محتوى دون إذن كتابي مسبق</li>
                <li>يمكنك استخدام المحتوى للاستخدام الشخصي غير التجاري فقط</li>
                <li>يجب الإشارة إلى مصدر المحتوى عند الاقتباس</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">قواعد الاستخدام</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                يجب عليك استخدام خدماتنا بشكل قانوني ومسؤول. يُحظر عليك:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>استخدام الخدمة لأي غرض غير قانوني أو محظور</li>
                <li>نشر محتوى مسيء أو تشهيري أو مضلل</li>
                <li>انتحال شخصية أي فرد أو كيان</li>
                <li>محاولة الوصول غير المصرح به إلى أنظمتنا</li>
                <li>نشر أي فيروسات أو برامج ضارة</li>
                <li>إرسال رسائل غير مرغوب فيها (Spam)</li>
                <li>جمع معلومات المستخدمين دون موافقة</li>
                <li>التلاعب بأنظمة التقييم أو التعليقات</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary" />
                قواعد الأمان
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">أمان الحساب</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                    <li>أنت مسؤول عن الحفاظ على سرية كلمة المرور الخاصة بك</li>
                    <li>استخدم كلمات مرور قوية ومعقدة</li>
                    <li>قم بتفعيل المصادقة الثنائية (2FA) عند توفرها</li>
                    <li>لا تشارك معلومات تسجيل الدخول مع أي شخص</li>
                    <li>أخبرنا فورًا عن أي استخدام غير مصرح به لحسابك</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">أمان البيانات</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                    <li>نستخدم تشفير SSL/TLS لحماية بياناتك</li>
                    <li>يتم تخزين كلمات المرور بشكل مشفر</li>
                    <li>نجري عمليات تدقيق أمنية منتظمة</li>
                    <li>نحد من الوصول إلى البيانات الشخصية للموظفين المصرح لهم فقط</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                إخلاء المسؤولية
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                تُقدم الخدمة "كما هي" و"حسب التوفر" دون أي ضمانات من أي نوع:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>لا نضمن أن الخدمة ستكون متاحة دائمًا أو خالية من الأخطاء</li>
                <li>لا نتحمل مسؤولية أي خسائر أو أضرار ناتجة عن استخدام الخدمة</li>
                <li>المحتوى المقدم لأغراض إعلامية فقط ولا يشكل نصيحة مهنية</li>
                <li>قد نوقف أو نعدل الخدمة دون إشعار مسبق</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">الروابط الخارجية</h2>
              <p className="text-muted-foreground leading-relaxed">
                قد تحتوي خدمتنا على روابط لمواقع ويب أو خدمات تابعة لجهات خارجية. نحن لسنا مسؤولين عن محتوى أو ممارسات
                الخصوصية أو أمان هذه المواقع الخارجية. يُنصح بمراجعة شروط وسياسات أي موقع تزوره.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <UserX className="w-6 h-6 text-destructive" />
                إنهاء الخدمة
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                يحق لنا إنهاء أو تعليق وصولك إلى الخدمة فورًا، دون إشعار مسبق، في حالة:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>انتهاك أي من هذه الشروط</li>
                <li>نشاط احتيالي أو مشبوه</li>
                <li>طلبك لحذف الحساب</li>
                <li>أي سبب آخر نراه ضروريًا</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">الامتثال لسياسات إعلانات Google</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">نلتزم بسياسات إعلانات Google. محتوانا:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>لا يتضمن محتوى محظورًا أو مقيدًا</li>
                <li>يحترم حقوق الملكية الفكرية</li>
                <li>لا يحتوي على ممارسات خادعة أو مضللة</li>
                <li>يوفر تجربة مستخدم آمنة وشفافة</li>
                <li>يتضمن سياسات واضحة للخصوصية وجمع البيانات</li>
                <li>يلتزم بمعايير الجودة والشفافية</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">القانون الساري</h2>
              <p className="text-muted-foreground leading-relaxed">
                تخضع هذه الشروط والأحكام وتفسر وفقًا للقوانين المعمول بها في المملكة العربية السعودية، وأنت توافق بشكل لا
                رجعة فيه على الاختصاص القضائي الحصري للمحاكم في المملكة.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">التعديلات</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التغييرات على هذه الصفحة، واستمرارك في استخدام
                الخدمة بعد التغييرات يعني موافقتك على الشروط المعدلة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-semibold">البريد الإلكتروني: legal@example.com</p>
                <p className="font-semibold">الهاتف: 966-XX-XXX-XXXX+</p>
                <p className="font-semibold">العنوان: الرياض، المملكة العربية السعودية</p>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}
