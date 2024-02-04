import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationCreateManyApp_script_conditionInputEnvelope } from "../inputs/App_script_condition_translationCreateManyApp_script_conditionInputEnvelope";
import { App_script_condition_translationCreateOrConnectWithoutApp_script_conditionInput } from "../inputs/App_script_condition_translationCreateOrConnectWithoutApp_script_conditionInput";
import { App_script_condition_translationCreateWithoutApp_script_conditionInput } from "../inputs/App_script_condition_translationCreateWithoutApp_script_conditionInput";
import { App_script_condition_translationScalarWhereInput } from "../inputs/App_script_condition_translationScalarWhereInput";
import { App_script_condition_translationUpdateManyWithWhereWithoutApp_script_conditionInput } from "../inputs/App_script_condition_translationUpdateManyWithWhereWithoutApp_script_conditionInput";
import { App_script_condition_translationUpdateWithWhereUniqueWithoutApp_script_conditionInput } from "../inputs/App_script_condition_translationUpdateWithWhereUniqueWithoutApp_script_conditionInput";
import { App_script_condition_translationUpsertWithWhereUniqueWithoutApp_script_conditionInput } from "../inputs/App_script_condition_translationUpsertWithWhereUniqueWithoutApp_script_conditionInput";
import { App_script_condition_translationWhereUniqueInput } from "../inputs/App_script_condition_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_script_condition_translationUpdateManyWithoutApp_script_conditionNestedInput", {})
export class App_script_condition_translationUpdateManyWithoutApp_script_conditionNestedInput {
  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateWithoutApp_script_conditionInput], {
    nullable: true
  })
  create?: App_script_condition_translationCreateWithoutApp_script_conditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateOrConnectWithoutApp_script_conditionInput], {
    nullable: true
  })
  connectOrCreate?: App_script_condition_translationCreateOrConnectWithoutApp_script_conditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationUpsertWithWhereUniqueWithoutApp_script_conditionInput], {
    nullable: true
  })
  upsert?: App_script_condition_translationUpsertWithWhereUniqueWithoutApp_script_conditionInput[] | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationCreateManyApp_script_conditionInputEnvelope, {
    nullable: true
  })
  createMany?: App_script_condition_translationCreateManyApp_script_conditionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [App_script_condition_translationUpdateWithWhereUniqueWithoutApp_script_conditionInput], {
    nullable: true
  })
  update?: App_script_condition_translationUpdateWithWhereUniqueWithoutApp_script_conditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationUpdateManyWithWhereWithoutApp_script_conditionInput], {
    nullable: true
  })
  updateMany?: App_script_condition_translationUpdateManyWithWhereWithoutApp_script_conditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_script_condition_translationScalarWhereInput[] | undefined;
}
