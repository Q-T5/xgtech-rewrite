<!-- 
    This is a correctional component. Its duty is to fix the issue caused by the navbar being fixed to
    the top of the screen, which in turn causes the rest of the content to start behind the navbar.
    The 'mt-12' class fixes this issue by providing a margin that ensures the content  starts from
    below the navbar.
    This component is optionally called by anyone who wants this margin
 -->

<template>
  <div class="mt-16">
    <slot></slot>
  </div>
</template>
