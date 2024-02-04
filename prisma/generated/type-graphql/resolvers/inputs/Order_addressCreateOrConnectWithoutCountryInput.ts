import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateWithoutCountryInput } from "../inputs/Order_addressCreateWithoutCountryInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateOrConnectWithoutCountryInput", {})
export class Order_addressCreateOrConnectWithoutCountryInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressCreateWithoutCountryInput, {
    nullable: false
  })
  create!: Order_addressCreateWithoutCountryInput;
}
