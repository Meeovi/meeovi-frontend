import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageWhereInput } from "../inputs/Landing_pageWhereInput";

@TypeGraphQL.InputType("Landing_pageRelationFilter", {})
export class Landing_pageRelationFilter {
  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  is?: Landing_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  isNot?: Landing_pageWhereInput | undefined;
}
