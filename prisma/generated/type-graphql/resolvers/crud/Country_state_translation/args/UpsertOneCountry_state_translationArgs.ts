import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_state_translationCreateInput } from "../../../inputs/Country_state_translationCreateInput";
import { Country_state_translationUpdateInput } from "../../../inputs/Country_state_translationUpdateInput";
import { Country_state_translationWhereUniqueInput } from "../../../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCountry_state_translationArgs {
  @TypeGraphQL.Field(_type => Country_state_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_state_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_state_translationCreateInput, {
    nullable: false
  })
  create!: Country_state_translationCreateInput;

  @TypeGraphQL.Field(_type => Country_state_translationUpdateInput, {
    nullable: false
  })
  update!: Country_state_translationUpdateInput;
}
