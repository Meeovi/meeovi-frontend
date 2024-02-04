import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCreateManyAppInputEnvelope } from "../inputs/App_script_conditionCreateManyAppInputEnvelope";
import { App_script_conditionCreateOrConnectWithoutAppInput } from "../inputs/App_script_conditionCreateOrConnectWithoutAppInput";
import { App_script_conditionCreateWithoutAppInput } from "../inputs/App_script_conditionCreateWithoutAppInput";
import { App_script_conditionWhereUniqueInput } from "../inputs/App_script_conditionWhereUniqueInput";

@TypeGraphQL.InputType("App_script_conditionCreateNestedManyWithoutAppInput", {})
export class App_script_conditionCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_script_conditionCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_script_conditionCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_script_conditionCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_script_conditionCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionWhereUniqueInput], {
    nullable: true
  })
  connect?: App_script_conditionWhereUniqueInput[] | undefined;
}
