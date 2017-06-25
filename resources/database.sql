create table consumer_curvey_log (
  id bigint primary key auto_increment,
  store_id bigint not null,
  gender tinyint,
  work_type int,
  times int not null default 1,
  scene int,
  satisfaction int,
  request text,
  note text,
  answer_time datetime not null,
  created_time timestamp not null default current_timestamp,
  updated_time timestamp not null default current_timestamp on update current_timestamp
);

create table store (
  id bigint primary key auto_increment,
  key varchar(128) not null,
  name varchar(1024) not null,
  company_name varchar(1024),
  store_type int,
  created_time timestamp not null default current_timestamp,
  updated_time timestamp not null default current_timestamp on update current_timestamp
);

create table soup (
  id bigint primary key auto_increment,
  name varchar(1024) not null,
  description text,
  effect text,
  created_time timestamp not null default current_timestamp,
  updated_time timestamp not null default current_timestamp on update current_timestamp
);

create table puree (
  id bigint primary key auto_increment,
  name varchar(1024) not null,
  description text,
  effect text,
  created_time timestamp not null default current_timestamp,
  updated_time timestamp not null default current_timestamp on update current_timestamp
);

create table survey (
  id bigint primary key auto_increment,
  code nvarchar(30) not null,
  column_code nvarchar(30) not null,
  user_only int not null default 0,
  title text not null,
  description text not null,
  type int not null,
  list text,
  created_time timestamp not null default current_timestamp,
  updated_time timestamp not null default current_timestamp on update current_timestamp
);
alter table survey ADD INDEX index_name(code);

create table survey_log (
  id bigint primary key auto_increment,
  code nvarchar(30) not null,
  
  gender nvarchar(50),
  age nvarchar(50),
  work nvarchar(50),
  count nvarchar(50),
  scene nvarchar(50),
  satisfaction int,
  request text,

  created_time timestamp not null default current_timestamp,
  updated_time timestamp not null default current_timestamp on update current_timestamp
);

-- initial datas

insert into survey (code, column_code, user_only, title, description, type, list) values ('consumer', 'count', 0, '回数', 'VegePlanのスープを購入したのは何度目ですか？', 1, '初めて,2回目,3回目,4回目以降');
insert into survey (code, column_code, user_only, title, description, type, list) values ('consumer', 'gender', 0, '性別', 'あなたの性別を入力して下さい', 1, '男性,女性');
insert into survey (code, column_code, user_only, title, description, type, list) values ('consumer', 'age', 0, '年齢', 'あなたの年齢を入力して下さい', 1, '20代,30代,40代,50代');
insert into survey (code, column_code, user_only, title, description, type, list) values ('consumer', 'work', 0 , '職種', 'あなたの職種を入力して下さい', 1, '経営,管理職,営業系,技術・制作系,バックオフィス,スタッフ');
insert into survey (code, column_code, user_only, title, description, type, list) values ('consumer', 'scene', 1, 'シーン', 'このスープはいつ飲みたいですか？', 1, '朝食,昼食,おやつ・間食,夕食,夜食');
insert into survey (code, column_code, user_only, title, description, type, list) values ('consumer', 'satisfaction', 1, '満足度', 'このスープの満足度を教えてください', 3, NULL);
insert into survey (code, column_code, user_only, title, description, type, list) values ('consumer', 'request', 0, '要望', 'その他なにか要望があれば教えてください', 2, NULL);


