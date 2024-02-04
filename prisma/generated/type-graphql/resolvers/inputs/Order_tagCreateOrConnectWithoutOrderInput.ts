import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCreateWithoutOrderInput } from "../inputs/Order_tagCreateWithoutOrderInput";
import { Order_tagWhereUniqueInput } from "../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.InputType("Order_tagCreateOrConnectWithoutOrderInput", {})
export class Order_tagCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Order_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_tagCreateWithoutOrderInput, {
    nullable: false
  })
  create!: Order_tagCreateWithoutOrderInput;
}
