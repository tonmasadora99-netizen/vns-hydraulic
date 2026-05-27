# 🌐 ขั้นตอนการเชื่อมโดเมน vnshydraulic.com กับ Netlify

## สิ่งที่ต้องมีก่อน
- ✅ โดเมน `vnshydraulic.com` ที่ซื้อจาก Cloudflare แล้ว
- ✅ เว็บ Deploy บน Netlify แล้ว (สถานะ Published)

---

## ขั้นตอนที่ 1 — เพิ่มโดเมนใน Netlify

1. เข้า [netlify.com](https://netlify.com) → เลือก Project `vns-hydraulic`
2. ไปที่ **Site configuration** → **Domain management**
3. กด **Add a domain**
4. พิมพ์ `vnshydraulic.com` → กด **Verify**
5. กด **Add domain**

> หลังจากนี้ Netlify จะแสดง DNS Records ที่ต้องนำไปตั้งที่ Cloudflare

---

## ขั้นตอนที่ 2 — จด DNS Records จาก Netlify

Netlify จะให้ค่าประมาณนี้ (ค่าจริงดูจากหน้า Netlify):

```
Type    Name    Value
────────────────────────────────────────────
A       @       75.2.60.5
CNAME   www     [your-site-name].netlify.app
```

---

## ขั้นตอนที่ 3 — ตั้งค่า DNS ที่ Cloudflare

1. เข้า [cloudflare.com](https://cloudflare.com) → เลือกโดเมน `vnshydraulic.com`
2. ไปที่ **DNS** → **Records**
3. เพิ่ม Record แรก (A Record):
   - **Type**: A
   - **Name**: `@`
   - **IPv4 address**: `75.2.60.5`
   - **Proxy status**: 🔘 DNS only (เมฆเทา) ← สำคัญมาก!
   - กด **Save**

4. เพิ่ม Record สอง (CNAME):
   - **Type**: CNAME
   - **Name**: `www`
   - **Target**: `[your-site-name].netlify.app`
   - **Proxy status**: 🔘 DNS only (เมฆเทา)
   - กด **Save**

> ⚠️ ต้องตั้งเป็น **DNS only (เมฆเทา)** ก่อนเสมอ เพื่อให้ Netlify ออก SSL ได้

---

## ขั้นตอนที่ 4 — รอ SSL จาก Netlify

1. กลับไปที่ Netlify → **Domain management**
2. รอ Netlify ออก SSL Certificate ให้อัตโนมัติ
3. ใช้เวลาประมาณ **5-30 นาที**
4. สถานะจะเปลี่ยนจาก ⏳ Awaiting → ✅ Secured

---

## ขั้นตอนที่ 5 — เปิด Cloudflare Proxy (ขั้นตอนสุดท้าย)

หลังจาก SSL สำเร็จแล้ว:

1. กลับไปที่ Cloudflare → **DNS** → **Records**
2. คลิกแก้ไข A Record และ CNAME Record
3. เปลี่ยน Proxy status จาก **เมฆเทา** → **เมฆส้ม** 🟠
4. กด **Save**

> ✅ ตอนนี้เว็บได้รับการป้องกันจาก Cloudflare CDN + DDoS Protection แล้ว

---

## ขั้นตอนที่ 6 — ทดสอบ

เปิดเบราว์เซอร์แล้วลองเข้า:

```
https://vnshydraulic.com       ✅ ต้องเปิดได้
https://www.vnshydraulic.com   ✅ ต้องเปิดได้
```

---

## ✅ สรุปขั้นตอนทั้งหมด

```
1. เพิ่มโดเมนใน Netlify
      ↓
2. Copy DNS Records จาก Netlify
      ↓
3. ตั้งค่า DNS ที่ Cloudflare (เมฆเทา)
      ↓
4. รอ SSL ~5-30 นาที
      ↓
5. เปิด Cloudflare Proxy (เมฆส้ม)
      ↓
6. ทดสอบเปิดเว็บ 🎉
```

---

## 🛟 ถ้าเกิดปัญหา

| ปัญหา | วิธีแก้ |
|---|---|
| เว็บยังไม่ขึ้นหลัง 30 นาที | รอต่อได้ถึง 24 ชั่วโมง (DNS Propagation) |
| SSL ไม่ออก | ตรวจสอบว่า Proxy เป็นเมฆเทาแล้ว |
| เข้า www ไม่ได้ | ตรวจสอบ CNAME Record อีกครั้ง |
| ERR_TOO_MANY_REDIRECTS | ใน Cloudflare → SSL/TLS → ตั้งเป็น Full |
