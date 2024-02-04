import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateWithoutCountryInput } from "../inputs/Customer_addressCreateWithoutCountryInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressCreateOrConnectWithoutCountryInput", {})
export class Customer_addressCreateOrConnectWithoutCountryInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressCreateWithoutCountryInput, {
    nullable: false
  })
  create!: Customer_addressCreateWithoutCountryInput;
}
