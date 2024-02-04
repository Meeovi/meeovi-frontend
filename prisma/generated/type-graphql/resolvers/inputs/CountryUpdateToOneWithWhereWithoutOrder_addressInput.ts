import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryUpdateWithoutOrder_addressInput } from "../inputs/CountryUpdateWithoutOrder_addressInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpdateToOneWithWhereWithoutOrder_addressInput", {})
export class CountryUpdateToOneWithWhereWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutOrder_addressInput, {
    nullable: false
  })
  data!: CountryUpdateWithoutOrder_addressInput;
}
