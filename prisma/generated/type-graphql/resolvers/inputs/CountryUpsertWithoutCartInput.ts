import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCartInput } from "../inputs/CountryCreateWithoutCartInput";
import { CountryUpdateWithoutCartInput } from "../inputs/CountryUpdateWithoutCartInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutCartInput", {})
export class CountryUpsertWithoutCartInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutCartInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutCartInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCartInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCartInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
