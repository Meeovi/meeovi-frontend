import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressWhereInput } from "../inputs/Order_addressWhereInput";

@TypeGraphQL.InputType("Order_addressListRelationFilter", {})
export class Order_addressListRelationFilter {
  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  every?: Order_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  some?: Order_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  none?: Order_addressWhereInput | undefined;
}
