import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressUpdateWithoutSalutationInput } from "../inputs/Customer_addressUpdateWithoutSalutationInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpdateWithWhereUniqueWithoutSalutationInput", {})
export class Customer_addressUpdateWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressUpdateWithoutSalutationInput, {
    nullable: false
  })
  data!: Customer_addressUpdateWithoutSalutationInput;
}
