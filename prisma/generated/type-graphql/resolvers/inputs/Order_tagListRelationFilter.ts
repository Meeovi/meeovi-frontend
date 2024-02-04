import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagWhereInput } from "../inputs/Order_tagWhereInput";

@TypeGraphQL.InputType("Order_tagListRelationFilter", {})
export class Order_tagListRelationFilter {
  @TypeGraphQL.Field(_type => Order_tagWhereInput, {
    nullable: true
  })
  every?: Order_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_tagWhereInput, {
    nullable: true
  })
  some?: Order_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_tagWhereInput, {
    nullable: true
  })
  none?: Order_tagWhereInput | undefined;
}
