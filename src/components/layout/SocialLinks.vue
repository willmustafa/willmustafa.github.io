<template>
  <div class="social-links">
    <ul>
      <li>
        <a href="https://github.com/willmustafa">
          <GithubIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/willianmustafa/">
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/back.tofront_/">
          <InstagramIcon />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import InstagramIcon from "../../assets/icons/InstagramIcon.vue";
import GithubIcon from "../../assets/icons/GithubIcon.vue";
import LinkedinIcon from "../../assets/icons/LinkedinIcon.vue";
export default {
  name: "SocialLinks",
  components: { InstagramIcon, GithubIcon, LinkedinIcon },
};
</script>

<style scoped>
.social-links {
  position: fixed;
  left: 25px;
  top: 0;
  z-index: 100;
  opacity: 1;
  fill: var(--color-text);
  height: 100vh;
  display: flex;
  align-items: center;
}

.social-links ul {
  list-style: none;
  padding: 0;
  width: 20px;
}

.social-links ul::before,
.social-links ul::after {
  content: "";
  display: block;
  height: 70px;
  width: 1px;
  background: linear-gradient(var(--color-text), var(--color-background));
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
}

.social-links ul::after {
  background: linear-gradient(var(--color-background), var(--color-text));
}

.social-links li {
  width: auto !important;
  height: auto !important;
  margin: 0 0 20px;
  display: block;
  position: relative;
}

.social-links li:hover {
  fill: var(--neon-blue);
}

.social-links li a {
  width: 20px;
  height: 20px;
}
</style>
