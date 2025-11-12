#!/usr/bin/env node

/**
 * Script to update package info in iconsets.config.json for all @svgr-iconkit/ packages
 * 
 * Usage: npm run update-iconset-info
 * or: node scripts/update-iconset-package-info.js
 */

const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(__dirname, '..', 'iconsets.config.json');
const NODE_MODULES_DIR = path.join(__dirname, '..', 'node_modules');

/**
 * Get version from @svgr-iconkit package's package.json
 */
function getVersionFromIconkitPackage(iconsetPackageName, originalPackageName) {
  const iconkitPackagePath = path.join(NODE_MODULES_DIR, iconsetPackageName, 'package.json');
  
  if (!fs.existsSync(iconkitPackagePath)) {
    return null;
  }
  
  try {
    const iconkitPackageJson = JSON.parse(fs.readFileSync(iconkitPackagePath, 'utf8'));
    
    // Check dependencies first, then devDependencies
    const version = iconkitPackageJson.dependencies?.[originalPackageName] || 
                    iconkitPackageJson.devDependencies?.[originalPackageName];
    
    if (version) {
      // Remove version prefixes like ^, ~, >=, etc.
      return version.replace(/^[\^~>=<]+/, '');
    }
  } catch (error) {
    console.error(`  ⚠️  Error reading ${iconkitPackagePath}: ${error.message}`);
  }
  
  return null;
}


/**
 * Main function
 */
async function main() {
  console.log('📦 Updating package info for @svgr-iconkit/ packages...\n');

  // Read config file
  let config;
  try {
    const configContent = fs.readFileSync(CONFIG_FILE, 'utf8');
    config = JSON.parse(configContent);
  } catch (error) {
    console.error(`❌ Error reading ${CONFIG_FILE}:`, error.message);
    process.exit(1);
  }

  if (!Array.isArray(config)) {
    console.error(`❌ Config file must be an array`);
    process.exit(1);
  }

  let updatedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  // Process each iconset
  for (let i = 0; i < config.length; i++) {
    const iconset = config[i];
    const iconkitPackageName = `@svgr-iconkit/${iconset.packageName}`;

    console.log(`[${i + 1}/${config.length}] Processing ${iconkitPackageName}...`);

    if (!iconset.originalAuthor) {
      console.warn(`  ⚠️  No originalAuthor section found, skipping`);
      skippedCount++;
      continue;
    }

    // Only update if originalAuthor.package exists
    if (!iconset.originalAuthor.package) {
      console.log(`  ℹ️  No originalAuthor.package specified, skipping`);
      skippedCount++;
      continue;
    }

    try {
      const oldVersion = iconset.originalAuthor.version;
      const originalPackageName = iconset.originalAuthor.package;
      
      // Get version from @svgr-iconkit package's package.json in node_modules
      const localVersion = getVersionFromIconkitPackage(iconkitPackageName, originalPackageName);
      
      if (localVersion) {
        iconset.originalAuthor.version = localVersion;
        const newVersion = iconset.originalAuthor.version;
        
        if (oldVersion !== newVersion) {
          console.log(`  ✅ Updated: ${oldVersion} → ${newVersion} (from ${iconkitPackageName}/package.json)`);
          updatedCount++;
        } else {
          console.log(`  ℹ️  Already up to date: ${newVersion}`);
        }
      } else {
        console.warn(`  ⚠️  Package ${originalPackageName} not found in ${iconkitPackageName} dependencies/devDependencies, skipping`);
        skippedCount++;
      }
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}`);
      errorCount++;
    }
  }

  // Write updated config back to file
  try {
    fs.writeFileSync(
      CONFIG_FILE,
      JSON.stringify(config, null, 2) + '\n',
      'utf8'
    );
    console.log(`\n✨ Config file updated successfully!`);
  } catch (error) {
    console.error(`\n❌ Error writing config file:`, error.message);
    process.exit(1);
  }

  // Summary
  console.log(`\n📊 Summary:`);
  console.log(`   Updated: ${updatedCount}`);
  console.log(`   Skipped: ${skippedCount}`);
  console.log(`   Errors:  ${errorCount}`);
  console.log(`   Total:   ${config.length}`);
}

// Run the script
main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

