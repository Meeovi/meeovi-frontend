import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionCreateManyAppInput } from "../inputs/App_flow_actionCreateManyAppInput";

@TypeGraphQL.InputType("App_flow_actionCreateManyAppInputEnvelope", {})
export class App_flow_actionCreateManyAppInputEnvelope {
  @TypeGraphQL.Field(_type => [App_flow_actionCreateManyAppInput], {
    nullable: false
  })
  data!: App_flow_actionCreateManyAppInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
