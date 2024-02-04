import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationCreateManyApp_script_conditionInput } from "../inputs/App_script_condition_translationCreateManyApp_script_conditionInput";

@TypeGraphQL.InputType("App_script_condition_translationCreateManyApp_script_conditionInputEnvelope", {})
export class App_script_condition_translationCreateManyApp_script_conditionInputEnvelope {
  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateManyApp_script_conditionInput], {
    nullable: false
  })
  data!: App_script_condition_translationCreateManyApp_script_conditionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
