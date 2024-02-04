import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutOrder_addressInput } from "../inputs/CountryCreateWithoutOrder_addressInput";
import { CountryUpdateWithoutOrder_addressInput } from "../inputs/CountryUpdateWithoutOrder_addressInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutOrder_addressInput", {})
export class CountryUpsertWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutOrder_addressInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutOrder_addressInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutOrder_addressInput, {
    nullable: false
  })
  create!: CountryCreateWithoutOrder_addressInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
