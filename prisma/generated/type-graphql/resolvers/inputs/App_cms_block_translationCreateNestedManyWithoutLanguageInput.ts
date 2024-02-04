import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationCreateManyLanguageInputEnvelope } from "../inputs/App_cms_block_translationCreateManyLanguageInputEnvelope";
import { App_cms_block_translationCreateOrConnectWithoutLanguageInput } from "../inputs/App_cms_block_translationCreateOrConnectWithoutLanguageInput";
import { App_cms_block_translationCreateWithoutLanguageInput } from "../inputs/App_cms_block_translationCreateWithoutLanguageInput";
import { App_cms_block_translationWhereUniqueInput } from "../inputs/App_cms_block_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_cms_block_translationCreateNestedManyWithoutLanguageInput", {})
export class App_cms_block_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [App_cms_block_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: App_cms_block_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: App_cms_block_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: App_cms_block_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_cms_block_translationWhereUniqueInput[] | undefined;
}
