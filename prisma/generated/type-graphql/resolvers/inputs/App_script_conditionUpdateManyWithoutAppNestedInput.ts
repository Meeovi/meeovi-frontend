import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCreateManyAppInputEnvelope } from "../inputs/App_script_conditionCreateManyAppInputEnvelope";
import { App_script_conditionCreateOrConnectWithoutAppInput } from "../inputs/App_script_conditionCreateOrConnectWithoutAppInput";
import { App_script_conditionCreateWithoutAppInput } from "../inputs/App_script_conditionCreateWithoutAppInput";
import { App_script_conditionScalarWhereInput } from "../inputs/App_script_conditionScalarWhereInput";
import { App_script_conditionUpdateManyWithWhereWithoutAppInput } from "../inputs/App_script_conditionUpdateManyWithWhereWithoutAppInput";
import { App_script_conditionUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_script_conditionUpdateWithWhereUniqueWithoutAppInput";
import { App_script_conditionUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_script_conditionUpsertWithWhereUniqueWithoutAppInput";
import { App_script_conditionWhereUniqueInput } from "../inputs/App_script_conditionWhereUniqueInput";

@TypeGraphQL.InputType("App_script_conditionUpdateManyWithoutAppNestedInput", {})
export class App_script_conditionUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_script_conditionCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_script_conditionCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_script_conditionCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_script_conditionUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_script_conditionCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionWhereUniqueInput], {
    nullable: true
  })
  set?: App_script_conditionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_script_conditionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionWhereUniqueInput], {
    nullable: true
  })
  delete?: App_script_conditionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionWhereUniqueInput], {
    nullable: true
  })
  connect?: App_script_conditionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_script_conditionUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_script_conditionUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_script_conditionScalarWhereInput[] | undefined;
}
