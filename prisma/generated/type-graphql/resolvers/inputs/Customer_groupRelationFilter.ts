import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupWhereInput } from "../inputs/Customer_groupWhereInput";

@TypeGraphQL.InputType("Customer_groupRelationFilter", {})
export class Customer_groupRelationFilter {
  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  is?: Customer_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  isNot?: Customer_groupWhereInput | undefined;
}
