import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Acl_user_role } from "../models/Acl_user_role";
import { Customer } from "../models/Customer";
import { Import_export_log } from "../models/Import_export_log";
import { Locale } from "../models/Locale";
import { Media } from "../models/Media";
import { Notification } from "../models/Notification";
import { Order } from "../models/Order";
import { State_machine_history } from "../models/State_machine_history";
import { User_access_key } from "../models/User_access_key";
import { User_config } from "../models/User_config";
import { User_recovery } from "../models/User_recovery";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {})
export class User {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  admin?: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  avatar_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  locale_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  store_token?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_updated_password_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  time_zone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  acl_user_role?: Acl_user_role[];

  customer_customer_created_by_idTouser?: Customer[];

  customer_customer_updated_by_idTouser?: Customer[];

  import_export_log?: Import_export_log[];

  media_media_user_idTouser?: Media[];

  notification?: Notification[];

  order_order_created_by_idTouser?: Order[];

  order_order_updated_by_idTouser?: Order[];

  state_machine_history?: State_machine_history[];

  media_user_avatar_idTomedia?: Media | null;

  locale?: Locale;

  user_access_key?: User_access_key[];

  user_config?: User_config[];

  user_recovery?: User_recovery | null;

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
