import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleWhereInput } from "../inputs/Integration_roleWhereInput";

@TypeGraphQL.InputType("Integration_roleListRelationFilter", {})
export class Integration_roleListRelationFilter {
  @TypeGraphQL.Field(_type => Integration_roleWhereInput, {
    nullable: true
  })
  every?: Integration_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Integration_roleWhereInput, {
    nullable: true
  })
  some?: Integration_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Integration_roleWhereInput, {
    nullable: true
  })
  none?: Integration_roleWhereInput | undefined;
}
