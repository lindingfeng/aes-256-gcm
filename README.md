<!-- Title -->
<h1 align="center">
  aes-encryption
</h1>

<!-- Description -->
<h4 align="center">
  Encrypting and decrypting strings with <code>aes-256-gcm</code>.
</h4>

<!-- Badges -->
<p align="center">
  <a href="https://www.npmjs.com/package/@devoxa/aes-encryption">
    <img
      src="https://img.shields.io/npm/v/@devoxa/aes-encryption?style=flat-square"
      alt="Package Version"
    />
  </a>

  <a href="https://github.com/devoxa/aes-encryption/actions?query=branch%3Amaster+workflow%3A%22Continuous+Integration%22">
    <img
      src="https://img.shields.io/github/workflow/status/devoxa/aes-encryption/Continuous%20Integration?style=flat-square"
      alt="Build Status"
    />
  </a>

  <a href="https://codecov.io/github/devoxa/aes-encryption">
    <img
      src="https://img.shields.io/codecov/c/github/devoxa/aes-encryption/master?style=flat-square"
      alt="Code Coverage"
    />
  </a>
</p>

<!-- Quicklinks -->
<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
</p>

<br>

## Installation

```bash
yarn add @lindingfeng/aes-256-gcm
```

## Usage

```ts
import { encrypt, decrypt } from '@lindingfeng/aes-256-gcm'

// The 32 character encryption key
const key = 'ZtdDl3Ex7ycFfgdbAC3uTLNk8eLVDcEd'

const encrypted = encrypt(key, 'My secret text')
// -> 'j2G63AgcRSkiFeE4jonB8I/GZYp6Uc40ItdwSappAWi75ItbDzzoOzo7EuaMaA=='

const decrypted = decrypt(key, encrypted)
// -> 'My secret text'
```

## License

MIT
