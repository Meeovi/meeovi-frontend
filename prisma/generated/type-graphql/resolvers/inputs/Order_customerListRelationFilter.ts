import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerWhereInput } from "../inputs/Order_customerWhereInput";

@TypeGraphQL.InputType("Order_customerListRelationFilter", {})
export class Order_customerListRelationFilter {
  @TypeGraphQL.Field(_type => Order_customerWhereInput, {
    nullable: true
  })
  every?: Order_customerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_customerWhereInput, {
    nullable: true
  })
  some?: Order_customerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_customerWhereInput, {
    nullable: true
  })
  none?: Order_customerWhereInput | undefined;
}
