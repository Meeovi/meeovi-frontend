import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationCreateManyLanguageInputEnvelope } from "../inputs/App_cms_block_translationCreateManyLanguageInputEnvelope";
import { App_cms_block_translationCreateOrConnectWithoutLanguageInput } from "../inputs/App_cms_block_translationCreateOrConnectWithoutLanguageInput";
import { App_cms_block_translationCreateWithoutLanguageInput } from "../inputs/App_cms_block_translationCreateWithoutLanguageInput";
import { App_cms_block_translationScalarWhereInput } from "../inputs/App_cms_block_translationScalarWhereInput";
import { App_cms_block_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/App_cms_block_translationUpdateManyWithWhereWithoutLanguageInput";
import { App_cms_block_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/App_cms_block_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { App_cms_block_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/App_cms_block_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { App_cms_block_translationWhereUniqueInput } from "../inputs/App_cms_block_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_cms_block_translationUpdateManyWithoutLanguageNestedInput", {})
export class App_cms_block_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [App_cms_block_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: App_cms_block_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: App_cms_block_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: App_cms_block_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: App_cms_block_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationWhereUniqueInput], {
    nullable: true
  })
  set?: App_cms_block_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_cms_block_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: App_cms_block_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_cms_block_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: App_cms_block_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: App_cms_block_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_cms_block_translationScalarWhereInput[] | undefined;
}
