import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationCreateManyLanguageInputEnvelope } from "../inputs/App_flow_action_translationCreateManyLanguageInputEnvelope";
import { App_flow_action_translationCreateOrConnectWithoutLanguageInput } from "../inputs/App_flow_action_translationCreateOrConnectWithoutLanguageInput";
import { App_flow_action_translationCreateWithoutLanguageInput } from "../inputs/App_flow_action_translationCreateWithoutLanguageInput";
import { App_flow_action_translationScalarWhereInput } from "../inputs/App_flow_action_translationScalarWhereInput";
import { App_flow_action_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/App_flow_action_translationUpdateManyWithWhereWithoutLanguageInput";
import { App_flow_action_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/App_flow_action_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { App_flow_action_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/App_flow_action_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { App_flow_action_translationWhereUniqueInput } from "../inputs/App_flow_action_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_action_translationUpdateManyWithoutLanguageNestedInput", {})
export class App_flow_action_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: App_flow_action_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: App_flow_action_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: App_flow_action_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: App_flow_action_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  set?: App_flow_action_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_flow_action_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: App_flow_action_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_flow_action_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: App_flow_action_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: App_flow_action_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_flow_action_translationScalarWhereInput[] | undefined;
}
