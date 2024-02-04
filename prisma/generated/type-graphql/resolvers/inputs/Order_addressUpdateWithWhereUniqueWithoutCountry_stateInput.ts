import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressUpdateWithoutCountry_stateInput } from "../inputs/Order_addressUpdateWithoutCountry_stateInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressUpdateWithWhereUniqueWithoutCountry_stateInput", {})
export class Order_addressUpdateWithWhereUniqueWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressUpdateWithoutCountry_stateInput, {
    nullable: false
  })
  data!: Order_addressUpdateWithoutCountry_stateInput;
}
