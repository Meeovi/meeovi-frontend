import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationCreateManyApp_cms_blockInputEnvelope } from "../inputs/App_cms_block_translationCreateManyApp_cms_blockInputEnvelope";
import { App_cms_block_translationCreateOrConnectWithoutApp_cms_blockInput } from "../inputs/App_cms_block_translationCreateOrConnectWithoutApp_cms_blockInput";
import { App_cms_block_translationCreateWithoutApp_cms_blockInput } from "../inputs/App_cms_block_translationCreateWithoutApp_cms_blockInput";
import { App_cms_block_translationWhereUniqueInput } from "../inputs/App_cms_block_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_cms_block_translationCreateNestedManyWithoutApp_cms_blockInput", {})
export class App_cms_block_translationCreateNestedManyWithoutApp_cms_blockInput {
  @TypeGraphQL.Field(_type => [App_cms_block_translationCreateWithoutApp_cms_blockInput], {
    nullable: true
  })
  create?: App_cms_block_translationCreateWithoutApp_cms_blockInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationCreateOrConnectWithoutApp_cms_blockInput], {
    nullable: true
  })
  connectOrCreate?: App_cms_block_translationCreateOrConnectWithoutApp_cms_blockInput[] | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationCreateManyApp_cms_blockInputEnvelope, {
    nullable: true
  })
  createMany?: App_cms_block_translationCreateManyApp_cms_blockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_cms_block_translationWhereUniqueInput[] | undefined;
}
