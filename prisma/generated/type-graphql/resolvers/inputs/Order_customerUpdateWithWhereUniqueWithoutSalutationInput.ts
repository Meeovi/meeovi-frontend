import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerUpdateWithoutSalutationInput } from "../inputs/Order_customerUpdateWithoutSalutationInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerUpdateWithWhereUniqueWithoutSalutationInput", {})
export class Order_customerUpdateWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Order_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Order_customerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_customerUpdateWithoutSalutationInput, {
    nullable: false
  })
  data!: Order_customerUpdateWithoutSalutationInput;
}
