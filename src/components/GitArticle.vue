<template>
  <article class="git-article">
      <section class="get-started">
        <h1># Get Started</h1>
        <p>
          First off, you want to enable <span class="bold">git commands</span> for your project, you'll need to open your projet folder in the command line and run <code>git init</code>.<br/>
          At this point you should be able to run <code>git status</code>. It will tell you if you have changes that are yet to be <span class="bold">added</span> or <span class="bold">comitted</span>.<br/>
        </p>
        <p class="callout">
          <span class="bold">Note :</span> If you’re working on your own and don't really want to track preciselly the state of your project, I recommand to skip to the part where I talk about the commands you'll need.
        </p>
          <p>
            Now you might want to use a <span class="bold">git client</span> such as <span class="bold">GitHub</span> in order to have a clearer view of your project compared to what you would get with going full command line. <br/>
            To do so you'll need to link your local directory to a remote repository.
            It's pretty straight forward, first,  log in to the <span class="bold">git client</span> of your choice and simply create a new repository there.
            You will find yourself with multiple commands you'll have to run in order to link your project, some of which you've already ran. <br/><br/>
        
            Platform like github also allow you to work from existing base, it's called cloning. You can clone a project with the command <code>git clone</code>.
            When <span class="bold">cloned</span>, a project is <span class="bold">automatically initialized</span>, this means you don't need to run <code>git init</code>. <br/><br/>
            If you chose to start your project from scratch, you might have came across the <code>git add</code>, <code>git commit</code> and <code>git push</code> commands. It's time for us to talk about these, because you're about to use them very often from now on.
          </p>
      </section>
      <hr>
      <section>
        <h1># Git Add</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aut saepe illo ipsam? Culpa reprehenderit nemo, sed natus nesciunt fugit dolore quisquam facere deserunt eligendi quasi veniam voluptate officia, omnis excepturi consectetur molestias? Facilis consequatur iste rem eius. Enim magni quo ut iusto nostrum soluta tempore dicta cum, consequuntur sit.</p>
      </section>
  </article>
</template>

<script>
export default {
    name : "GitArticle",

}
</script>

<style scoped>
.git-article{
    padding: 20px;
    max-width: 600px;
}
.git-article p{
  word-break: keep-all;
  text-align: justify;
}
.bold{
  font-weight: 600;
}
.callout{
  border: 1px solid #F7F7F7;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 12px;
  padding: 5px 15px;
}
code{
  background-color: lightgrey;
  padding: 3px 6px;
  border-radius: 4px;
  font-style: italic;
}
</style>