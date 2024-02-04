import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateWithoutSalutationInput } from "../inputs/Order_customerCreateWithoutSalutationInput";
import { Order_customerUpdateWithoutSalutationInput } from "../inputs/Order_customerUpdateWithoutSalutationInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerUpsertWithWhereUniqueWithoutSalutationInput", {})
export class Order_customerUpsertWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Order_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Order_customerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_customerUpdateWithoutSalutationInput, {
    nullable: false
  })
  update!: Order_customerUpdateWithoutSalutationInput;

  @TypeGraphQL.Field(_type => Order_customerCreateWithoutSalutationInput, {
    nullable: false
  })
  create!: Order_customerCreateWithoutSalutationInput;
}
