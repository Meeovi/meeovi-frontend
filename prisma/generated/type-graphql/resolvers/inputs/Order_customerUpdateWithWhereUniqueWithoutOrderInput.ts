import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerUpdateWithoutOrderInput } from "../inputs/Order_customerUpdateWithoutOrderInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerUpdateWithWhereUniqueWithoutOrderInput", {})
export class Order_customerUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Order_customerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_customerUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: Order_customerUpdateWithoutOrderInput;
}
