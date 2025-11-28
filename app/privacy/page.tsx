import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Lock, Eye, Database, UserCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "سياسة الخصوصية | Privacy Policy",
  description: "سياسة الخصوصية وحماية البيانات الشخصية",
}

export default function PrivacyPage() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">سياسة الخصوصية</h1>
          <p className="text-muted-foreground text-lg">
            آخر تحديث: {new Date().toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <Card className="p-8 mb-8">
          <div className="prose prose-lg max-w-none" dir="rtl">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                مقدمة
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية
                معلوماتك الشخصية عند استخدام خدماتنا.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                المعلومات التي نجمعها
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">معلومات الحساب</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                    <li>الاسم الكامل</li>
                    <li>عنوان البريد الإلكتروني</li>
                    <li>رقم الهاتف (اختياري)</li>
                    <li>الصورة الشخصية (اختياري)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">معلومات الاستخدام</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                    <li>عنوان IP</li>
                    <li>نوع المتصفح والجهاز</li>
                    <li>الصفحات المزارة وتوقيت الزيارة</li>
                    <li>سلوك التصفح والتفاعل مع المحتوى</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">ملفات تعريف الارتباط (Cookies)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتخصيص المحتوى. يمكنك التحكم في إعدادات ملفات تعريف
                    الارتباط من خلال متصفحك.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary" />
                كيف نستخدم معلوماتك
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>تقديم وتحسين خدماتنا</li>
                <li>التواصل معك بشأن حسابك وخدماتنا</li>
                <li>إرسال تحديثات وعروض تسويقية (مع موافقتك)</li>
                <li>تحليل استخدام الموقع لتحسين الأداء</li>
                <li>الامتثال للمتطلبات القانونية</li>
                <li>حماية حقوقنا والحفاظ على أمن المنصة</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                حماية البيانات
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                نطبق تدابير أمنية تقنية وتنظيمية لحماية بياناتك الشخصية من الوصول غير المصرح به أو الكشف أو التغيير أو
                التدمير:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>تشفير SSL/TLS لجميع عمليات نقل البيانات</li>
                <li>تشفير البيانات الحساسة في قاعدة البيانات</li>
                <li>المصادقة الثنائية (2FA) المتاحة</li>
                <li>مراقبة أمنية مستمرة</li>
                <li>نسخ احتياطية منتظمة للبيانات</li>
                <li>تدريب الموظفين على أمن البيانات</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">مشاركة البيانات</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>مع مقدمي الخدمات الذين يساعدوننا في تشغيل منصتنا</li>
                <li>عند الضرورة للامتثال للقانون أو الإجراءات القانونية</li>
                <li>لحماية حقوقنا وسلامة مستخدمينا</li>
                <li>بموافقتك الصريحة</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">حقوقك</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">لديك الحق في:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>الوصول إلى بياناتك الشخصية</li>
                <li>تصحيح البيانات غير الدقيقة</li>
                <li>طلب حذف بياناتك</li>
                <li>الاعتراض على معالجة بياناتك</li>
                <li>طلب نقل بياناتك</li>
                <li>سحب الموافقة في أي وقت</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">الأطفال</h2>
              <p className="text-muted-foreground leading-relaxed">
                خدماتنا ليست موجهة للأطفال دون سن 13 عامًا. لا نجمع معلومات شخصية عن قصد من الأطفال. إذا علمت أن طفلك قدم
                معلومات شخصية، يرجى الاتصال بنا.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">التغييرات على هذه السياسة</h2>
              <p className="text-muted-foreground leading-relaxed">
                قد نحدث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة
                وتحديث تاريخ "آخر تحديث".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-semibold">البريد الإلكتروني: privacy@example.com</p>
                <p className="font-semibold">الهاتف: 966-XX-XXX-XXXX+</p>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}
