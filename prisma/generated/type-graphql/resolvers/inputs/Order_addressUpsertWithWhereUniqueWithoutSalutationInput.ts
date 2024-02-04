import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateWithoutSalutationInput } from "../inputs/Order_addressCreateWithoutSalutationInput";
import { Order_addressUpdateWithoutSalutationInput } from "../inputs/Order_addressUpdateWithoutSalutationInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpsertWithWhereUniqueWithoutSalutationInput", {})
export class Order_addressUpsertWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressUpdateWithoutSalutationInput, {
    nullable: false
  })
  update!: Order_addressUpdateWithoutSalutationInput;

  @TypeGraphQL.Field(_type => Order_addressCreateWithoutSalutationInput, {
    nullable: false
  })
  create!: Order_addressCreateWithoutSalutationInput;
}
