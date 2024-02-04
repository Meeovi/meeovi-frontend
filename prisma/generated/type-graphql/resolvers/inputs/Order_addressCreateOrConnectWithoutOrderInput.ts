import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateWithoutOrderInput } from "../inputs/Order_addressCreateWithoutOrderInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateOrConnectWithoutOrderInput", {})
export class Order_addressCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressCreateWithoutOrderInput, {
    nullable: false
  })
  create!: Order_addressCreateWithoutOrderInput;
}
