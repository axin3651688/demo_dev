<template>
    <div>
        <PCElement class="pc"/>
        <PhoneElement class="mobile"/>
    </div>
</template>

<script>
import PCElement from "./main/pc-app"
import PhoneElement from "./main/phone-app"

export default {
    components:{
        "PCElement": PCElement,
        "PhoneElement": PhoneElement
    }
}
</script>

<style>
  @media (max-width: 1080px) {
    .pc{display: none !important;}
    .mobile{display: block !important;}
  }
  @media (min-width: 1081px) {
    .pc{display: block !important;}
    .mobile{display: none !important;}  
  }
</style>