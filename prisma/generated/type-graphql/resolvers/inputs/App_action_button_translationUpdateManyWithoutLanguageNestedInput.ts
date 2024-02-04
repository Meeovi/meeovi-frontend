import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationCreateManyLanguageInputEnvelope } from "../inputs/App_action_button_translationCreateManyLanguageInputEnvelope";
import { App_action_button_translationCreateOrConnectWithoutLanguageInput } from "../inputs/App_action_button_translationCreateOrConnectWithoutLanguageInput";
import { App_action_button_translationCreateWithoutLanguageInput } from "../inputs/App_action_button_translationCreateWithoutLanguageInput";
import { App_action_button_translationScalarWhereInput } from "../inputs/App_action_button_translationScalarWhereInput";
import { App_action_button_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/App_action_button_translationUpdateManyWithWhereWithoutLanguageInput";
import { App_action_button_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/App_action_button_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { App_action_button_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/App_action_button_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { App_action_button_translationWhereUniqueInput } from "../inputs/App_action_button_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_action_button_translationUpdateManyWithoutLanguageNestedInput", {})
export class App_action_button_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [App_action_button_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: App_action_button_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: App_action_button_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: App_action_button_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: App_action_button_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationWhereUniqueInput], {
    nullable: true
  })
  set?: App_action_button_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_action_button_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: App_action_button_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_action_button_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: App_action_button_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: App_action_button_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_action_button_translationScalarWhereInput[] | undefined;
}
