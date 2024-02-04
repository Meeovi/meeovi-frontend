import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutOrder_addressInput } from "../inputs/CountryCreateOrConnectWithoutOrder_addressInput";
import { CountryCreateWithoutOrder_addressInput } from "../inputs/CountryCreateWithoutOrder_addressInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateNestedOneWithoutOrder_addressInput", {})
export class CountryCreateNestedOneWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutOrder_addressInput, {
    nullable: true
  })
  create?: CountryCreateWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutOrder_addressInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;
}
