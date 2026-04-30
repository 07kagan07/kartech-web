export type Product = {
  id: string
  name: string
  description: string
  image_url: string
  category: string
  is_active: boolean
}

function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let current = ""
  let inQuotes = false
  let row: string[] = []

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const next = text[i + 1]

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === "," && !inQuotes) {
      row.push(current.trim())
      current = ""
    } else if ((char === "\n" || (char === "\r" && next === "\n")) && !inQuotes) {
      if (char === "\r") i++
      row.push(current.trim())
      rows.push(row)
      row = []
      current = ""
    } else {
      current += char
    }
  }

  if (current || row.length) {
    row.push(current.trim())
    rows.push(row)
  }

  return rows
}

function normalizeDriveUrl(url: string): string {
  if (!url) return url
  // https://drive.google.com/file/d/FILE_ID/view?... → direct image URL
  const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)/)
  if (match) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`
  }
  return url
}

export async function fetchProducts(): Promise<Product[]> {
  const sheetId = process.env.GOOGLE_SHEET_ID

  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID tanımlanmamış")
  }

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`
  const res = await fetch(url, { next: { revalidate: 60 } })

  if (!res.ok) {
    throw new Error(`Google Sheets CSV hatası: ${res.status}`)
  }

  const text = await res.text()
  const rows = parseCSV(text)

  // İlk satır başlık, atla
  return rows.slice(1).reduce<Product[]>((acc, row) => {
    const isActive = row[5]?.toLowerCase()
    if (isActive !== "true" && isActive !== "1" && isActive !== "evet") {
      return acc
    }
    acc.push({
      id: row[0] ?? "",
      name: row[1] ?? "",
      description: row[2] ?? "",
      image_url: normalizeDriveUrl(row[3] ?? ""),
      category: row[4] ?? "",
      is_active: true,
    })
    return acc
  }, [])
}
