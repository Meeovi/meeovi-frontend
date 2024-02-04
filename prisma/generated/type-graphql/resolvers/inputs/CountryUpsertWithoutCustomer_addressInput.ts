import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCustomer_addressInput } from "../inputs/CountryCreateWithoutCustomer_addressInput";
import { CountryUpdateWithoutCustomer_addressInput } from "../inputs/CountryUpdateWithoutCustomer_addressInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutCustomer_addressInput", {})
export class CountryUpsertWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutCustomer_addressInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutCustomer_addressInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCustomer_addressInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCustomer_addressInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
