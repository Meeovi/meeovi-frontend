import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryUpdateInput } from "../../../inputs/CountryUpdateInput";
import { CountryWhereUniqueInput } from "../../../inputs/CountryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCountryArgs {
  @TypeGraphQL.Field(_type => CountryUpdateInput, {
    nullable: false
  })
  data!: CountryUpdateInput;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;
}
