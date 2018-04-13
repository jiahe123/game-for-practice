### unity学习笔记

### 脚本

* ```
  js调用js 直接脚本名.变量名
  C#调用C#声明static public 变量名，然后脚本名.变量名调用 
  js调用C# var c = gameObject.GetComponent("脚本名");
     脚本名.变量名调用
  C#调用js 脚本名c = (脚本名)gameObject.GetComponent<脚本名>();
     脚本名.变量名调用
  ```

* namespace就像系统里的文件夹一样。同一个文件不能重复存在，但是如果建两个文件夹，分别放入其中，就可以重复了。

* NullReferenceException: Object reference not set to an instance of an object错误，文件存错工程了，或者实例已经被销毁后使用

* 触发器和碰撞器：碰撞体是物理组件的一类，它要与刚体一起添加到游戏对象上才能触发碰撞。如果两个刚体相互撞在一起，除非两个对象有碰撞体时物理引擎才会计算碰撞，在物理模拟中，没有碰撞体的刚体会彼此相互穿过。 在Collider面板勾选IS Trigger将其设为触发器。当检测穿过物体可以选择触发器。

    

  *人物跳跃*

  ```c#
  void Updata()

  {

     if(Input.GetKeyDown(KeyCode.Space)) 

     {

        rigidbody.AddForce(JumpSpeed * Vector3.up);

     }

  }
  //
  private void Jump()
      {
              RaycastHit hit;
              if (Physics.Raycast(transform.position, Vector3.down, out hit))
              {

                  playerRigidbody.AddForce(Vector3.up * 800);
              }
      }

  ```

  不跳原因，力度太小或者锁了y轴

## 导出

* ​