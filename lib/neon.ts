import { neon } from '@neondatabase/serverless';

// Neon database connection
const DATABASE_URL = 'postgresql://neondb_owner:npg_adL9B0uIREhP@ep-dry-sound-a15m8a9a-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';
const sql = neon(DATABASE_URL);

// Initialize database schema
export async function initializeDatabase() {
  try {
    // Create sales_data table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS sales_data (
        id SERIAL PRIMARY KEY,
        data JSONB NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Save sales data to Neon
export async function saveSalesData(data: any) {
  try {
    // Check if data exists
    const existing = await sql`SELECT id FROM sales_data LIMIT 1`;
    
    if (existing.length > 0) {
      // Update existing data
      await sql`
        UPDATE sales_data 
        SET data = ${JSON.stringify(data)}, 
            updated_at = CURRENT_TIMESTAMP 
        WHERE id = ${existing[0].id}
      `;
    } else {
      // Insert new data
      await sql`
        INSERT INTO sales_data (data) 
        VALUES (${JSON.stringify(data)})
      `;
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error saving to database:', error);
    return { success: false, error };
  }
}

// Load sales data from Neon
export async function loadSalesData() {
  try {
    const result = await sql`
      SELECT data FROM sales_data 
      ORDER BY updated_at DESC 
      LIMIT 1
    `;
    
    if (result.length > 0) {
      return result[0].data;
    }
    
    return null;
  } catch (error) {
    console.error('Error loading from database:', error);
    return null;
  }
}

// Clear all sales data from Neon database
export async function clearSalesData() {
  try {
    await sql`DELETE FROM sales_data`;
    console.log('Database cleared successfully');
    return { success: true };
  } catch (error) {
    console.error('Error clearing database:', error);
    return { success: false, error };
  }
}
