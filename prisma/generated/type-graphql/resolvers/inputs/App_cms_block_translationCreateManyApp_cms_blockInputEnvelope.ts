import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationCreateManyApp_cms_blockInput } from "../inputs/App_cms_block_translationCreateManyApp_cms_blockInput";

@TypeGraphQL.InputType("App_cms_block_translationCreateManyApp_cms_blockInputEnvelope", {})
export class App_cms_block_translationCreateManyApp_cms_blockInputEnvelope {
  @TypeGraphQL.Field(_type => [App_cms_block_translationCreateManyApp_cms_blockInput], {
    nullable: false
  })
  data!: App_cms_block_translationCreateManyApp_cms_blockInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
