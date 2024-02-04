import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCreateWithoutAppInput } from "../inputs/App_script_conditionCreateWithoutAppInput";
import { App_script_conditionUpdateWithoutAppInput } from "../inputs/App_script_conditionUpdateWithoutAppInput";
import { App_script_conditionWhereUniqueInput } from "../inputs/App_script_conditionWhereUniqueInput";

@TypeGraphQL.InputType("App_script_conditionUpsertWithWhereUniqueWithoutAppInput", {})
export class App_script_conditionUpsertWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_script_conditionWhereUniqueInput, {
    nullable: false
  })
  where!: App_script_conditionWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_script_conditionUpdateWithoutAppInput, {
    nullable: false
  })
  update!: App_script_conditionUpdateWithoutAppInput;

  @TypeGraphQL.Field(_type => App_script_conditionCreateWithoutAppInput, {
    nullable: false
  })
  create!: App_script_conditionCreateWithoutAppInput;
}
