import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceWhereInput } from "../inputs/Flow_sequenceWhereInput";

@TypeGraphQL.InputType("Flow_sequenceListRelationFilter", {})
export class Flow_sequenceListRelationFilter {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  every?: Flow_sequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  some?: Flow_sequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  none?: Flow_sequenceWhereInput | undefined;
}
