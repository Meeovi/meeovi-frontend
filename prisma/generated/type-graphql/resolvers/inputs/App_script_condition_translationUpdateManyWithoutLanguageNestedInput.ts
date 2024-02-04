import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationCreateManyLanguageInputEnvelope } from "../inputs/App_script_condition_translationCreateManyLanguageInputEnvelope";
import { App_script_condition_translationCreateOrConnectWithoutLanguageInput } from "../inputs/App_script_condition_translationCreateOrConnectWithoutLanguageInput";
import { App_script_condition_translationCreateWithoutLanguageInput } from "../inputs/App_script_condition_translationCreateWithoutLanguageInput";
import { App_script_condition_translationScalarWhereInput } from "../inputs/App_script_condition_translationScalarWhereInput";
import { App_script_condition_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/App_script_condition_translationUpdateManyWithWhereWithoutLanguageInput";
import { App_script_condition_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/App_script_condition_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { App_script_condition_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/App_script_condition_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { App_script_condition_translationWhereUniqueInput } from "../inputs/App_script_condition_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_script_condition_translationUpdateManyWithoutLanguageNestedInput", {})
export class App_script_condition_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: App_script_condition_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: App_script_condition_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: App_script_condition_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: App_script_condition_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationWhereUniqueInput], {
    nullable: true
  })
  set?: App_script_condition_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_script_condition_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: App_script_condition_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_script_condition_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: App_script_condition_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: App_script_condition_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_script_condition_translationScalarWhereInput[] | undefined;
}
