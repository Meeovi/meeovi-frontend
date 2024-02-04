import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventCreateManyAppInput } from "../inputs/App_flow_eventCreateManyAppInput";

@TypeGraphQL.InputType("App_flow_eventCreateManyAppInputEnvelope", {})
export class App_flow_eventCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_flow_eventCreateManyAppInput], {
    nullable: false
  })
  data!: App_flow_eventCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
