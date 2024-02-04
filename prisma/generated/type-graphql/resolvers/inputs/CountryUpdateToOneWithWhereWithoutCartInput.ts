import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryUpdateWithoutCartInput } from "../inputs/CountryUpdateWithoutCartInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpdateToOneWithWhereWithoutCartInput", {})
export class CountryUpdateToOneWithWhereWithoutCartInput {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutCartInput, {
    nullable: false
  })
  data!: CountryUpdateWithoutCartInput;
}
