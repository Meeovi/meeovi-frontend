import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutOrder_addressInput } from "../inputs/CountryCreateWithoutOrder_addressInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateOrConnectWithoutOrder_addressInput", {})
export class CountryCreateOrConnectWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutOrder_addressInput, {
    nullable: false
  })
  create!: CountryCreateWithoutOrder_addressInput;
}
