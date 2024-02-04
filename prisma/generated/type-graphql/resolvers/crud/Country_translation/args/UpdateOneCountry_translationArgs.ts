import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_translationUpdateInput } from "../../../inputs/Country_translationUpdateInput";
import { Country_translationWhereUniqueInput } from "../../../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCountry_translationArgs {
  @TypeGraphQL.Field(_type => Country_translationUpdateInput, {
    nullable: false
  })
  data!: Country_translationUpdateInput;

  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_translationWhereUniqueInput;
}
