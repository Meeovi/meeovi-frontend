import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationCreateNestedManyWithoutApp_cms_blockInput } from "../inputs/App_cms_block_translationCreateNestedManyWithoutApp_cms_blockInput";

@TypeGraphQL.InputType("App_cms_blockCreateWithoutAppInput", {})
export class App_cms_blockCreateWithoutAppInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  block!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  template!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  styles!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationCreateNestedManyWithoutApp_cms_blockInput, {
    nullable: true
  })
  app_cms_block_translation?: App_cms_block_translationCreateNestedManyWithoutApp_cms_blockInput | undefined;
}
