import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCustomer_addressInput } from "../inputs/CountryCreateOrConnectWithoutCustomer_addressInput";
import { CountryCreateWithoutCustomer_addressInput } from "../inputs/CountryCreateWithoutCustomer_addressInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateNestedOneWithoutCustomer_addressInput", {})
export class CountryCreateNestedOneWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCustomer_addressInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCustomer_addressInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCustomer_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;
}
