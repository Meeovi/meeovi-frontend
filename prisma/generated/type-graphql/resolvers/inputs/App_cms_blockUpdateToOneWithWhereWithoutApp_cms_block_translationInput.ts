import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockUpdateWithoutApp_cms_block_translationInput } from "../inputs/App_cms_blockUpdateWithoutApp_cms_block_translationInput";
import { App_cms_blockWhereInput } from "../inputs/App_cms_blockWhereInput";

@TypeGraphQL.InputType("App_cms_blockUpdateToOneWithWhereWithoutApp_cms_block_translationInput", {})
export class App_cms_blockUpdateToOneWithWhereWithoutApp_cms_block_translationInput {
  @TypeGraphQL.Field(_type => App_cms_blockWhereInput, {
    nullable: true
  })
  where?: App_cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockUpdateWithoutApp_cms_block_translationInput, {
    nullable: false
  })
  data!: App_cms_blockUpdateWithoutApp_cms_block_translationInput;
}
