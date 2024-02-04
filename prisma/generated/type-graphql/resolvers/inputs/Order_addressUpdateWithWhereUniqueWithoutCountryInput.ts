import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressUpdateWithoutCountryInput } from "../inputs/Order_addressUpdateWithoutCountryInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpdateWithWhereUniqueWithoutCountryInput", {})
export class Order_addressUpdateWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressUpdateWithoutCountryInput, {
    nullable: false
  })
  data!: Order_addressUpdateWithoutCountryInput;
}
