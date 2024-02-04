import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryUpdateWithoutCustomer_addressInput } from "../inputs/CountryUpdateWithoutCustomer_addressInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpdateToOneWithWhereWithoutCustomer_addressInput", {})
export class CountryUpdateToOneWithWhereWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutCustomer_addressInput, {
    nullable: false
  })
  data!: CountryUpdateWithoutCustomer_addressInput;
}
