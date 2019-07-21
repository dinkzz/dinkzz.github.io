
					var msg  = document.title ="SINGULARITY.ID";
					var speed = 300;
					var endChar = " ";
					var pos = 0;
					
					function moveTitle()
					{
						 var ml = msg.length;
							
						title = msg.substr(pos,ml) + endChar + msg.substr(0,pos);
					  document.title = title;
						
					  pos++;
					  if (pos > ml) pos=0;
					  window.setTimeout("moveTitle()",speed);
					}
				
					moveTitle();