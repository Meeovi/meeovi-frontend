import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageWhereInput } from "../inputs/Landing_pageWhereInput";

@TypeGraphQL.InputType("Landing_pageListRelationFilter", {})
export class Landing_pageListRelationFilter {
  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  every?: Landing_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  some?: Landing_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  none?: Landing_pageWhereInput | undefined;
}
