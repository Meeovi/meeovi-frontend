import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_recoveryInput } from "../inputs/CustomerCreateWithoutCustomer_recoveryInput";
import { CustomerUpdateWithoutCustomer_recoveryInput } from "../inputs/CustomerUpdateWithoutCustomer_recoveryInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutCustomer_recoveryInput", {})
export class CustomerUpsertWithoutCustomer_recoveryInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_recoveryInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutCustomer_recoveryInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_recoveryInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_recoveryInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
