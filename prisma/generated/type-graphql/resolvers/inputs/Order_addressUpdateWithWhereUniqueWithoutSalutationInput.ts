import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressUpdateWithoutSalutationInput } from "../inputs/Order_addressUpdateWithoutSalutationInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpdateWithWhereUniqueWithoutSalutationInput", {})
export class Order_addressUpdateWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressUpdateWithoutSalutationInput, {
    nullable: false
  })
  data!: Order_addressUpdateWithoutSalutationInput;
}
