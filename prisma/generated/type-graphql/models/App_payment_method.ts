import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App } from "../models/App";
import { Media } from "../models/Media";
import { Payment_method } from "../models/Payment_method";

@TypeGraphQL.ObjectType("App_payment_method", {})
export class App_payment_method {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  app_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  payment_method_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  app_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pay_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  finalize_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  validate_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  capture_url?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refund_url?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  original_media_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  recurring_url?: string | null;

  app?: App | null;

  media?: Media | null;

  payment_method?: Payment_method;
}
