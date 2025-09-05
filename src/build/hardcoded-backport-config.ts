export interface BackportConfig {
  // The newer build ID where the backports are sourced from
  sourceBuildId: string
  replaceFiles: string[]
  newFiles: string[]
  firmware?: FirmwareBackportInfo
}

export interface FirmwareBackportInfo {
  "version-bootloader": string
  "version-baseband": string
  "bootloader-name": string
  "modem-name": string
}

const ANDROID_16_QPR1_DEFAULT_BUILD_ID = "BP3A.250905.014"

// Find differences with e.g.
//  diff -rq $DEVICE-$CURRENT_BUILD_ID/ $DEVICE-$BACKPORT_SOURCE_BUILD_ID/ | grep -i ril
export const deviceBackportConfig: Record<string, BackportConfig> = {
  "tegu": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
      // "vendor/lib64/hardware.google.ril_ext-V1-ndk.so",
      // "vendor/lib64/libgooglerilaudio.so",
      // "vendor/lib64/libgooglerilmemmonitor.so",
      // "vendor/lib64/libgril_oem-google.so",
      // "vendor/lib64/libreference-ril.so",
      // "vendor/lib64/libril-aidl.so",
      // "vendor/lib64/libril.so",
      // "vendor/lib64/libril_gfeature.so",
      // "vendor/lib64/libril_sitril.so",
      // "vendor/lib64/librilutils.so",
      // "vendor/lib64/libsitril-audio.so",
      // "vendor/lib64/libsitril-client.so",
      // "vendor/lib64/libsitril-gps.so",
      // "vendor/lib64/libsitril-ims.so",
      // "vendor/lib64/libsitril.so",
      // "vendor/bin/hw/rild_exynos",
      // "system_ext/framework/google-ril.jar",
      // "system_ext/framework/oemrilhook.jar",
      // "system_ext/app/OemRilHookService/OemRilHookService.apk",
      // "system_ext/priv-app/OemRilService/OemRilService.apk",
      // "system_ext/priv-app/RilConfigService/RilConfigService.apk",
      // "system_ext/priv-app/grilservice/grilservice.apk",
      // "system_ext/priv-app/ril-extension/ril-extension.apk",
      // TPU firmware
      "vendor/firmware/google/edgetpu-rio.fw",
      // Bluetooth firmware
      "vendor/firmware/brcm/BCM.hcd",
      "vendor/firmware/brcm/BTFW_B.hcd",
      // WiFi firmware
      "vendor/firmware/fw_bcmdhd.bin",
      "vendor/firmware/fw_bcmdhd.bin_4383_a3",
      "vendor/firmware/fw_bcmdhd.map",
      "vendor/firmware/fw_bcmdhd.map_4383_a3",
      "vendor/firmware/bcmdhd.cal_4383_a3",
      // AOC firmware
      "vendor/firmware/aoc.bin",
      // GXP components
      // "vendor/bin/hw/android.hardware.gxp.logging@service-gxp-logging",
      "vendor/firmware/google/gxp-callisto.fw",
      "vendor/firmware/gxp_callisto_fw_core0",
      "vendor/firmware/gxp_callisto_fw_core1",
      "vendor/firmware/gxp_callisto_fw_core2",
      // "vendor/lib64/fake_gxp_telemetry_reader.so",
      // "vendor/lib64/gxp_metrics_logger.so",
      // "vendor/lib64/gxp_telemetry_reader.so",
      // "vendor/lib64/libgxp.so",
      // "vendor_dlkm/lib/modules/gxp.ko",
      // Mali
      "vendor/firmware/mali_csffw-r54p0.bin",
      // qm35
      "vendor/firmware/qm35_fw_pkg.bin",
      "vendor/firmware/qm35_fw_pkg_prod.bin",
      // st54l
      "vendor/firmware/st54l_conf.bin",
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "tegu-16.3-13642544",
      "version-baseband": "g5300t-250605-250630-B-13713258",
      "bootloader-name": "bootloader-tegu-tegu-16.3-13642544.img",
      "modem-name": "radio-tegu-g5300t-250605-250630-b-13713258.img",
    },
  },
  "comet": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "ripcurrentpro-16.3-13642544",
      "version-baseband": "g5400c-250605-250730-B-13854248",
      "bootloader-name": "bootloader-comet-ripcurrentpro-16.3-13642544.img",
      "modem-name": "radio-comet-g5400c-250605-250730-b-13854248.img",
    },
  },
  "komodo": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "ripcurrentpro-16.3-13642544",
      "version-baseband": "g5400c-250605-250730-B-13854248",
      "bootloader-name": "bootloader-komodo-ripcurrentpro-16.3-13642544.img",
      "modem-name": "radio-komodo-g5400c-250605-250730-b-13854248.img",
    },
  },
  "caiman": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "ripcurrentpro-16.3-13642544",
      "version-baseband": "g5400c-250605-250730-B-13854248",
      "bootloader-name": "bootloader-caiman-ripcurrentpro-16.3-13642544.img",
      "modem-name": "radio-caiman-g5400c-250605-250730-b-13854248.img",
    },
  },
  "tokay": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "ripcurrentpro-16.3-13642544",
      "version-baseband": "g5400c-250605-250730-B-13854248",
      "bootloader-name": "bootloader-tokay-ripcurrentpro-16.3-13642544.img",
      "modem-name": "radio-tokay-g5400c-250605-250730-b-13854248.img",
    },
  },
  "akita": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "akita-16.3-13642541",
      "version-baseband": "g5300o-250605-250630-B-13713258",
      "bootloader-name": "bootloader-akita-akita-16.3-13642541.img",
      "modem-name": "radio-akita-g5300o-250605-250630-b-13713258.img",
    },
  },
  "husky": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "ripcurrent-16.3-13642541",
      "version-baseband": "g5300i-250605-250630-B-13713258",
      "bootloader-name": "bootloader-husky-ripcurrent-16.3-13642541.img",
      "modem-name": "radio-husky-g5300i-250605-250630-b-13713258.img",
    },
  },
  "shiba": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "ripcurrent-16.3-13642541",
      "version-baseband": "g5300i-250605-250630-B-13713258",
      "bootloader-name": "bootloader-shiba-ripcurrent-16.3-13642541.img",
      "modem-name": "radio-shiba-g5300i-250605-250630-b-13713258.img",
    },
  },
  "felix": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "felix-16.3-13642542",
      "version-baseband": "g5300q-250605-250630-B-13713258",
      "bootloader-name": "bootloader-felix-felix-16.3-13642542.img",
      "modem-name": "radio-felix-g5300q-250605-250630-b-13713258.img",
    },
  },
  "tangorpro": {
    sourceBuildId: `${ANDROID_16_QPR1_DEFAULT_BUILD_ID}.A1`,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "tangorpro-16.3-13642542",
      "version-baseband": "",
      "bootloader-name": "bootloader-tangorpro-tangorpro-16.3-13642542.img",
      "modem-name": "",
    },
  },
  "lynx": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "lynx-16.3-13642542",
      "version-baseband": "g5300q-250605-250630-B-13713258",
      "bootloader-name": "bootloader-lynx-lynx-16.3-13642542.img",
      "modem-name": "radio-lynx-g5300q-250605-250630-b-13713258.img",
    },
  },
  "cheetah": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "cloudripper-16.3-13642542",
      "version-baseband": "g5300q-250605-250630-B-13713258",
      "bootloader-name": "bootloader-cheetah-cloudripper-16.3-13642542.img",
      "modem-name": "radio-cheetah-g5300q-250605-250630-b-13713258.img",
    },
  },
  "panther": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "cloudripper-16.3-13642542",
      "version-baseband": "g5300q-250605-250630-B-13713258",
      "bootloader-name": "bootloader-panther-cloudripper-16.3-13642542.img",
      "modem-name": "radio-panther-g5300q-250605-250630-b-13713258.img",
    },
  },
  "bluejay": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "bluejay-16.3-13642543",
      "version-baseband": "g5123b-145971-250708-B-13746081",
      "bootloader-name": "bootloader-bluejay-bluejay-16.3-13642543.img",
      "modem-name": "radio-bluejay-g5123b-145971-250708-b-13746081.img",
    },
  },
  "raven": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "slider-16.3-13642543",
      "version-baseband": "g5123b-145971-250708-B-13746081",
      "bootloader-name": "bootloader-raven-slider-16.3-13642543.img",
      "modem-name": "radio-raven-g5123b-145971-250708-b-13746081.img",
    },
  },
  "oriole": {
    sourceBuildId: ANDROID_16_QPR1_DEFAULT_BUILD_ID,
    replaceFiles: [
    ],
    newFiles: [
    ],
    firmware: {
      "version-bootloader": "slider-16.3-13642543",
      "version-baseband": "g5123b-145971-250708-B-13746081",
      "bootloader-name": "bootloader-oriole-slider-16.3-13642543.img",
      "modem-name": "radio-oriole-g5123b-145971-250708-b-13746081.img",
    },
  },
}
