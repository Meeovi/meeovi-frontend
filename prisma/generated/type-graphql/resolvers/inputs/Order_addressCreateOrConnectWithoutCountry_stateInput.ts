import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateWithoutCountry_stateInput } from "../inputs/Order_addressCreateWithoutCountry_stateInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateOrConnectWithoutCountry_stateInput", {})
export class Order_addressCreateOrConnectWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressCreateWithoutCountry_stateInput, {
    nullable: false
  })
  create!: Order_addressCreateWithoutCountry_stateInput;
}
