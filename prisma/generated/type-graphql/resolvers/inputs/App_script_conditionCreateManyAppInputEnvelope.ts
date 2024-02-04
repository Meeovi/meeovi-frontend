import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCreateManyAppInput } from "../inputs/App_script_conditionCreateManyAppInput";

@TypeGraphQL.InputType("App_script_conditionCreateManyAppInputEnvelope", {})
export class App_script_conditionCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_script_conditionCreateManyAppInput], {
    nullable: false
  })
  data!: App_script_conditionCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
