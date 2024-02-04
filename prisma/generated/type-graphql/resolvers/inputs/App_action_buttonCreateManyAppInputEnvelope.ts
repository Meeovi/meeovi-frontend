import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonCreateManyAppInput } from "../inputs/App_action_buttonCreateManyAppInput";

@TypeGraphQL.InputType("App_action_buttonCreateManyAppInputEnvelope", {})
export class App_action_buttonCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_action_buttonCreateManyAppInput], {
    nullable: false
  })
  data!: App_action_buttonCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
