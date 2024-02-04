import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateWithoutSalutationInput } from "../inputs/Customer_addressCreateWithoutSalutationInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressCreateOrConnectWithoutSalutationInput", {})
export class Customer_addressCreateOrConnectWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressCreateWithoutSalutationInput, {
    nullable: false
  })
  create!: Customer_addressCreateWithoutSalutationInput;
}
