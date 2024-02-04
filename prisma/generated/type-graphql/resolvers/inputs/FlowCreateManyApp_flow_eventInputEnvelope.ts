import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyApp_flow_eventInput } from "../inputs/FlowCreateManyApp_flow_eventInput";

@TypeGraphQL.InputType("FlowCreateManyApp_flow_eventInputEnvelope", {})
export class FlowCreateManyApp_flow_eventInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowCreateManyApp_flow_eventInput], {
    nullable: false
  })
  data!: FlowCreateManyApp_flow_eventInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
