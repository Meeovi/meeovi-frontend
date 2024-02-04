import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateWithoutSalutationInput } from "../inputs/Customer_addressCreateWithoutSalutationInput";
import { Customer_addressUpdateWithoutSalutationInput } from "../inputs/Customer_addressUpdateWithoutSalutationInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpsertWithWhereUniqueWithoutSalutationInput", {})
export class Customer_addressUpsertWithWhereUniqueWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressUpdateWithoutSalutationInput, {
    nullable: false
  })
  update!: Customer_addressUpdateWithoutSalutationInput;

  @TypeGraphQL.Field(_type => Customer_addressCreateWithoutSalutationInput, {
    nullable: false
  })
  create!: Customer_addressCreateWithoutSalutationInput;
}
