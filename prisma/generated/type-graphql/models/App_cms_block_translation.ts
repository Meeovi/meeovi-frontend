import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_cms_block } from "../models/App_cms_block";
import { Language } from "../models/Language";

@TypeGraphQL.ObjectType("App_cms_block_translation", {})
export class App_cms_block_translation {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  app_cms_block_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  app_cms_block?: App_cms_block;

  language?: Language;
}
