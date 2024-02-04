import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateWithoutSalutationInput } from "../inputs/Order_addressCreateWithoutSalutationInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateOrConnectWithoutSalutationInput", {})
export class Order_addressCreateOrConnectWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressCreateWithoutSalutationInput, {
    nullable: false
  })
  create!: Order_addressCreateWithoutSalutationInput;
}
