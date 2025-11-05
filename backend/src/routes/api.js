import express from 'express';
import pool from '../db/connect.js';
import { testConnection } from '../db/connect.js';

const router = express.Router();

router.get('/health', async (req, res) => {
  const result = await testConnection();
  res.status(result.success ? 200 : 500).json(result);
});

// POST - Create new contact
router.post('/contacts', async (req, res) => {
  try {
    console.log('Received contact creation request:', req.body);
    const { firstName, lastName, email, phone, additionalInfo } = req.body;
    const errors = [];
    
    // form input validation
    if (!firstName || firstName.trim().length < 2) {
      errors.push({ field: 'firstName', message: 'First name must be at least 2 characters' });
    }
    if (!lastName || lastName.trim().length < 2) {
      errors.push({ field: 'lastName', message: 'Last name must be at least 2 characters' });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({ field: 'email', message: 'Valid email is required' });
    }
    if (!phone || !/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(phone)) {
      errors.push({ field: 'phone', message: 'Valid phone number is required' });
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }
    
    const duplicateCheck = await pool.query(
      'SELECT id FROM contacts WHERE email = $1 OR phone = $2',
      [email, phone]
    );

    if (duplicateCheck.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'A contact with this email or phone already exists'
      });
    }

    // Insert contact
    const result = await pool.query(
      `INSERT INTO contacts (first_name, last_name, email, phone, additional_info, verified, created_at)
        VALUES ($1, $2, $3, $4, $5, false, NOW())
        RETURNING id, first_name as "firstName", last_name as "lastName", email, phone, 
                  additional_info as "additionalInfo", verified, created_at as "createdAt"`,
      [firstName.trim(), lastName.trim(), email.trim(), phone.trim(), additionalInfo?.trim() || null]
    );

    res.status(201).json({
      success: true,
      message: 'Contact created successfully',
      data: result.rows[0]
    });
  } catch (error) {
      console.error('Error creating contact:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to create contact'
      });
  }
});

router.get('/contacts', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, first_name as "firstName", last_name as "lastName", email, phone,
              additional_info as "additionalInfo", verified, created_at as "createdAt"
        FROM contacts
        ORDER BY created_at DESC`
    );
    res.json({
      success: true,
      data: result.rows
    });
  } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch contacts'
    });
  }
});

router.put('/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { verified } = req.body;
    const result = await pool.query(
      `UPDATE contacts
        SET verified = $1
        WHERE id = $2
        RETURNING id, first_name as "firstName", last_name as "lastName", email, phone,
                  additional_info as "additionalInfo", verified, created_at as "createdAt"`,
      [verified, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: result.rows[0]
    });
  } catch (error) {
      console.error('Error updating contact:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update contact'
      });
  }
});



router.put('/contacts/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phone, additionalInfo, verified } = req.body;

    const fName = firstName == null ? null : firstName.trim();
    const lName = lastName == null ? null : lastName.trim();
    const em = email == null ? null : email.trim();
    const ph = phone == null ? null : phone.trim();
    const addInfo = additionalInfo == null ? null : additionalInfo.trim();
    const ver = typeof verified === 'boolean' ? verified : (verified == null ? null : !!verified);

    const result = await pool.query(
      `UPDATE contacts
         SET first_name     = COALESCE($1, first_name),
             last_name      = COALESCE($2, last_name),
             email          = COALESCE($3, email),
             phone          = COALESCE($4, phone),
             additional_info= COALESCE($5, additional_info),
             verified       = COALESCE($6, verified)
       WHERE id = $7
       RETURNING id, first_name as "firstName", last_name as "lastName", email, phone,
                 additional_info as "additionalInfo", verified, created_at as "createdAt"`,
      [fName, lName, em, ph, addInfo, ver, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact'
    });
  }
});




router.delete('/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
        'DELETE FROM contacts WHERE id = $1 RETURNING id',
        [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete contact'
    });
  }
});

export default router;