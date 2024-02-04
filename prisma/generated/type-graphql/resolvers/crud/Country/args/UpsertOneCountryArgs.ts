import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryCreateInput } from "../../../inputs/CountryCreateInput";
import { CountryUpdateInput } from "../../../inputs/CountryUpdateInput";
import { CountryWhereUniqueInput } from "../../../inputs/CountryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCountryArgs {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateInput, {
    nullable: false
  })
  create!: CountryCreateInput;

  @TypeGraphQL.Field(_type => CountryUpdateInput, {
    nullable: false
  })
  update!: CountryUpdateInput;
}
