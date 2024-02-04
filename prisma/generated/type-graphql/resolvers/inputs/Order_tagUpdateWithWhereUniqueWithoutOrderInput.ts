import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagUpdateWithoutOrderInput } from "../inputs/Order_tagUpdateWithoutOrderInput";
import { Order_tagWhereUniqueInput } from "../inputs/Order_tagWhereUniqueInput";

@TypeGraphQL.InputType("Order_tagUpdateWithWhereUniqueWithoutOrderInput", {})
export class Order_tagUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Order_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_tagUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: Order_tagUpdateWithoutOrderInput;
}
