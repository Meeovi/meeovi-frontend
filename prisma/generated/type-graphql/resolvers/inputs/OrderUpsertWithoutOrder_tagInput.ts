import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_tagInput } from "../inputs/OrderCreateWithoutOrder_tagInput";
import { OrderUpdateWithoutOrder_tagInput } from "../inputs/OrderUpdateWithoutOrder_tagInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpsertWithoutOrder_tagInput", {})
export class OrderUpsertWithoutOrder_tagInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_tagInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutOrder_tagInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_tagInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_tagInput;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}
