import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionWhereInput } from "../inputs/Event_actionWhereInput";

@TypeGraphQL.InputType("Event_actionRelationFilter", {})
export class Event_actionRelationFilter {
  @TypeGraphQL.Field(_type => Event_actionWhereInput, {
    nullable: true
  })
  is?: Event_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionWhereInput, {
    nullable: true
  })
  isNot?: Event_actionWhereInput | undefined;
}
