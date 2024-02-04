import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressUpdateWithoutOrderInput } from "../inputs/Order_addressUpdateWithoutOrderInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpdateWithWhereUniqueWithoutOrderInput", {})
export class Order_addressUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: Order_addressUpdateWithoutOrderInput;
}
